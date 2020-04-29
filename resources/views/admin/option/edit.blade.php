@extends('admin.layouts.default_layout')
<!--- Required Css Section-->
@section('stylesheet')
@stop
@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="breadcomb-ctn">
                    <p><a href="{{ route('admin.dashboard')}}" style="color:#555;"><i class="fa fa-home"></i></a> / <a href="{{ route('admin.options')}}" style="color:#555;">Options</a> / <a href="javascript:;" class="active" style="color:#555;">Edit</a></p>
                </div>
            </div>
            @include('includes.flashMessage')
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2>
                                Edit Option
                            </h2>
                        </div>
                        <div class="body">
                            <form action="{{url('admin/option/edit/'.base64_encode($option->id))}}" id="edit_user" method="POST" enctype="multipart/form-data" class="form">
                                {{ csrf_field() }}
                                
                                <label for="email_address">Option</label>
                                <div class="form-group">
                                    <div class="form-line">
                                        <input type="text" id="option" name="option" class="form-control" value="{{ $option->option }}" required="required">
                                    </div>
                                </div>
                                <label for="email_address">Type</label>
                                <div class="form-group">
                                    <div class="form-line">
                                        <input type="text" id="type" name="type" class="form-control" value="{{ $option->type }}" required="required">
                                    </div>
                                </div>

                                <label for="email_address">Name</label>
                                <div class="form-group">
                                    <div class="form-line">
                                        <input type="text" id="name" name="name" class="form-control" value="{{ $option->name }}" required="required">
                                    </div>
                                </div>
                               
                                <label>Price</label>
                                <div class="form-group">
                                    <div class="form-line">
                                        <input type="text" id="price" name="price" class="form-control" onkeypress="evt = (event) ? event : window.event; var charCode = (evt.which) ? evt.which : evt.keyCode;if (charCode > 31 && (charCode < 48 || charCode > 57)) {return false;}return true;" value="{{ $option->price }}">
                                    </div>
                                </div>
                                
                                 <label for="email_address">Hours</label>
                                <div class="form-group">
                                    <div class="form-line">
                                        <input type="text" id="hours" name="hours" class="form-control" value="{{ $option->hours }}">
                                    </div>
                                </div>
                                 <label for="email_address">Weight</label>
                                <div class="form-group">
                                    <div class="form-line">
                                        <input type="text" id="weight" name="weight" class="form-control" value="{{ $option->weight }}">
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary" >UPDATE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop
<!--- Required Js Section-->
@section('script')
@stop