<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Redirect;
use Symfony\Component\HttpFoundation\Cookie;
use Illuminate\Http\Response;
use Carbon\Carbon;
use Mail;
use Auth;
use Session;
use DB;
use Hash;
use Helper;
use App\Users;

class AdminLoginController extends Controller
{
    use AuthenticatesUsers;

   /**
     * Where to redirect users after login.
     *
     * @var string
     */
    //protected $redirectTo = 'admin/dashboard';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Show the admin login form.
    **/
    public function showLoginForm()
    {
        $data['meta_title'] = 'Admin Login';
        return view('admin.login')->with($data);
    }

    /**
     * Show the admin login submit request.
    **/
    public function login(Request $request){   
        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);

        if($request->remember_me == 'on' ){
            setcookie('email', $request->email, time() + (86400 * 30), "/");
            setcookie('password', $request->password, time() + (86400 * 30), "/");
            setcookie('remember_me', $request->remember_me, time() + (86400 * 30), "/");
        }else{
            setcookie('email', '', time() + (86400 * 30), "/");
            setcookie('password', '', time() + (86400 * 30), "/");
            setcookie('remember_me', '', time() + (86400 * 30), "/");
        }
        
        $remember_me = $request->has('remember_me') ? true : false; 
        
        if (auth()->attempt(['email' => $request->email, 'password' => $request->password], $remember_me)) {   
         //dd(Auth::user());        
            if(Auth::user()->role_id ==  1){
                return redirect()->to('admin/dashboard');
            }else if(Auth::user()->role_id ==  2){
                
                    return redirect()->to('admin/dashboard');
                
            }else{
                Auth::logout(); 
                return back()->with('error',"You are not authorised user");
            }            
        }else{
            Session::flash('error', "Invalid email and password");      
            return back()->withInput();
        }
    }
}
