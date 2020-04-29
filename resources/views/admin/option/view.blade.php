@extends('admin.layouts.default_layout')
@section('stylesheet')
@stop
@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="breadcomb-ctn">
                    <p><a href="{{ route('admin.dashboard')}}" style="color:#555;"><i class="fa fa-home"></i></a> / <a href="{{ route('admin.options')}}" style="color:#555;">Clients</a> / <a href="javascript:;" class="active" style="color:#555;">View</a></p>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-xs-12 col-sm-12">
                    <div class="card profile-card user-profile-view">
                        <div class="profile-header">&nbsp;</div>
                        <div class="profile-body">
                            <div class="image-area">
                              
                               
                            </div>
                            <div class="content-area">
                                <h3>{{ucwords($option->name)}}</h3>
                                <p>Option</p>
                            </div>
                        </div>
                        <div class="profile-footer">
                            <ul>
                                <li>
                                    <span>option</span>
                                    <span>{{$option->option}}</span>
                                </li>
                                
                                <li>
                                    <span>type</span>
                                    <span>{{$option->type}}</span>
                                </li>
                               
                                <li>
                                    <span>name</span>
                                    <span>{{ucwords($option->name)}}</span>
                                </li>
                                <li>
                                    <span>price</span>
                                    <span>{{$option->price}}</span>
                                </li>
                                
                                <li>
                                    <span>hours</span>
                                    <span>{{$option->hours}}</span>
                                </li>
                                <li>
                                    <span>weight</span>
                                    <span>{{$option->weight}}</span>
                                </li>

                            </ul>
                           
                        </div>
                    </div>

                   
                </div>
                
            </div>
        </div>
    </section>
    
@stop
@section('script')
@stop