@extends('admin.layouts.default_layout')
<!--- Required Css Section-->
@section('stylesheet')
@stop
@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <h2>
                    Options List
                </h2>
            </div>
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    @include('includes.flashMessage')
                    <div class="card">
                        <div class="header">
                            <h2>
                                OPTIONS
                            </h2>
                            <a href="{{url('admin/PdfDownload')}}"><button class="btn btn-info"><i class="fa fa-download"></i> Pdf</button></a>
                            <a class="btn btn-primary add-right-button" href="{{route('admin.option.add')}}" type="submit">ADD NEW</a>
                        </div>

                         <div class="header">
                            <form action="{{url('admin/options')}}" method="post">
                                @csrf
                                <div class="row clearfix">
                                    <div class="col-lg-4 col-md-4 col-sm-2 col-xs-4">
                                        <div class="form-group">
                                             <div class="form-line" >
                                                <input type="text" class="form-control" placeholder="Option#" name="search" value="{{Session::get('search_keyword')}}" />
                                            </div>
                                        </div>
                                    </div>
                                    <?php $status = array(
                                            '1' => 'Ascending',
                                            '2' => 'Descending',
                                            '3' => 'Price Low',
                                            '4' => 'Price High'
                                        );
                                    ?>

                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <select class="form-control" name="status">
                                                     <option value="" <?php echo (Session::get('status') == '' ? 'selected' : '')?>>Filter</option>
                                                    <?php foreach($status as $key => $value){
                                                            print '<option value="'.$key.'" '.($key == Session::get('status') ? ' selected="selected"' : '').'>'.$value.'</option>';
                                                    }?>
                                                   
                                                </select> 
                                            </div>
                                        </div>  
                                    </div>
                                   

                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                                        <button class="btn btn-success" type="submit">Search</button>

                                        <a href="{{url('admin/users')}}" class="btn btn-danger" style="">Reset</a>
                                    </div>
                                </div>
                            </form>
                           
                        </div>
                       
                        <div class="body">
                            <div class="table-responsive">
                                <table id="campaign-users" class="table table-bordered table-striped table-hover dataTable js-exportable">
                                    <thead>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>Option</th>
                                            <th>Type</th>
                                            <th>Name</th>
                                            <th>Cost/Price</th>
                                            <th>Option Hours</th>
                                            <th>Weight</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        <?php 
                                        foreach($option as $key=>$value):?>
                                            <tr>
                                                <td>{{ $option->firstItem() + $key }}</td>
                                                <td>{{$value->option}}</td>
                                                <td>{{$value->type}}</td>
                                                <td>{{$value->name}}</td>
                                                <td>{{$value->price}}</td>
                                                <td>{{$value->hours}}</td>
                                                <td>{{$value->weight}}</td>
                                                
                                                <td>
                                                    <a href="{{ url('admin/option/edit/'.base64_encode($value->id)) }}" class="btn btn-info btn-xs" ><i class="fa fa-pencil"></i> Edit</a>
                                                    <a href="{{ url('admin/option/view/'.base64_encode($value->id)) }}" class="btn btn-primary btn-xs" ><i class="fa fa-eye"></i> View</a>
                                                    <a href="{{ url('admin/option/delete/'.base64_encode($value->id)) }}" class="btn btn-danger btn-xs" onclick="return confirm('Are you sure You want to delete {{$value->option}} ?')"><i class="fa fa-trash" ></i> Delete</a>                                         
                                                </td>
                                               
                                            </tr>                      
                                        <?php  endforeach; ?>
                                        
                                    </tbody>
                                </table>
                                {{$option->render()}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop
@section('script')   
@stop