<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Session;
use App\Users;
use App\Options;
use Hash;
use PDF;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
	public function __construct()
	{
	    //$this->middleware('auth');
	}

    public function index()
    {
        return view('admin/dashboard',array('meta_title' => 'Dashboard'));
    }

    /**
     * Show the logout request.
    **/
    public function logout(){
        if( Auth::check() ){
            Auth::logout();
            Session::flash('message', "Logout successfully");
            return redirect('/admin/login');
        }else{
            return redirect('/admin/login');
        }
    }

    /**
     * Show the admin profile form.
    **/
    public function profile(){
        return view('admin/profile', array('meta_title' => 'Admin Profile'));
    }

    public function options(Request $request)
    {
        Session::forget('search_keyword');
         if ($request->isMethod('post')) {
            // echo '<pre>';print_r($request->all());die;
            if(!empty($request->search)){
                Session::put('search_keyword', $request->search);
                $option  = Options::where('option','like','%'.$request->search.'%')->orderBy('id','DESC')->paginate(5);
            }
            else if($request->status != ''){
                Session::put('status', $request->status);
                if($request->status == 1)
                    $option  = Options::orderBy('id','ASC')->paginate(5);
                if($request->status == 2)
                    $option  = Options::orderBy('id','DESC')->paginate(5);
                if($request->status == 3)
                    $option  = Options::orderBy('price','ASC')->paginate(5);
                if($request->status == 4)
                    $option  = Options::orderBy('price','DESC')->paginate(5);
                else
                    $option  = Options::orderBy('id','DESC')->paginate(5);
            } 
            else{
               $option  = Options::orderBy('id','DESC')->paginate(5);
            }
        }
        else{
            $option  = Options::orderBy('id','DESC')->paginate(5);
        }
        
        return view('admin/option/list',array('meta_title' => 'Dashboard','option'=>$option));
    }  

    public function PdfDownload()
    {
        $option  = Options::orderBy('id','DESC')->get();
       // echo '<pre>';print_r($option);die;
        $pdf = PDF::loadView('admin/option/pdf', compact('option'));
        return $pdf->download('option.pdf');
    }

    public function addOption(Request $request){
        if ($request->isMethod('post')) {
           
            $input = $request->all();
            //dd($input);
            unset($input['_token']);
            $add = Options::create($input);
            if($add){
               
                Session::flash('message','You have successfully Added new record');
                return redirect('admin/options');
            }else{
                Session::flash('error','Internal server error. Please try again!');
                return back()->withInput();
            }
        }
        return view('admin.option.add', array('meta_title' => 'Add New'));
    }

    public function editOption($id='',Request $request)
    {
        $data = Options::find(base64_decode($id));
        
        if ($request->isMethod('post')) {
            if($data->email != $request->email){
                $this->validate($request, [
                    'email' => 'unique:users,email',
                ]);
            }
            $input = $request->all(); 
            unset($input['_token']);
           
            if($data){
               $data->fill($input)->save();
                Session::flash('message','Info updated Successfully.');   
                return redirect('admin/option/edit/'.$id);
            }else{
                Session::flash('error','Info not updated');
                return redirect('admin/option/edit/'.$id);
            }
            
        }
        return view('admin.option.edit',array('option' => $data, 'meta_title' => 'Edit'));
    }

    public function viewOption($id = ''){
        $option = Options::find(base64_decode($id));
        return view('admin.option.view',array('option' => $option, 'meta_title' => 'View'));
    }

    public function deleteOption($id=''){
       
        $record = Options::where(['id'=> base64_decode($id)])->delete();
        if($record){
            Session::flash('message','Record deleted successfully!');
        }else{
            Session::flash('error','Internal server error. Please try again!');
        }
        return back()->withInput();
    }
}
