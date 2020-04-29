@extends('admin.layouts.login_layout')
@section('stylesheet')
@stop
@section('content')
  <div class="login-box">
        <div class="logo">
          
            <small>Admin Login</small>
        </div>
        <div class="flash-message">
            @include('includes.messages')
        </div>

        <div class="card">
            <div class="body">
                <form action="{{ route('admin.login.submit') }}" id="sign_in" method="POST" class="form">
                  {{ csrf_field() }}
                    <!-- <div class="msg">Sign in to start your session</div> -->
                    <div class="input-group form-group">
                        <span class="input-group-addon">
                            <i class="material-icons">person</i>
                        </span>
                        <div class="form-line">
                            <input type="email" class="form-control" name="email" placeholder="Email" value="{{ old('email') }}" <?php if(isset($_COOKIE['email']) && !empty($_COOKIE['email']) ){echo "value=".$_COOKIE['email'];} ?>>
                        </div>
                    </div>
                    
                    <div class="input-group form-group">
                        <span class="input-group-addon">
                            <i class="material-icons">lock</i>
                        </span>
                        <div class="form-line">
                            <input type="password" class="form-control" name="password" placeholder="Password" <?php if(isset($_COOKIE['password']) && !empty($_COOKIE['password']) ){echo "value=".$_COOKIE['password'];} ?>>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-4">
                            <button class="btn btn-block bg-pink waves-effect" type="submit">SIGN IN</button>
                        </div>
                    </div>
                   
                </form>
            </div>
        </div>
    </div>
@stop
@section('script')
@stop