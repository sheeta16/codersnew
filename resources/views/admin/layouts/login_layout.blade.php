<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    @include('admin.inc.head')
    @yield('stylesheet')
</head> 

<body class="login-page">
   
@yield('content')



@include('admin.inc.footer')

@yield('script') 

</body>
</html>