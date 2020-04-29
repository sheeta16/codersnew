@if (isset($errors) && count($errors) > 0)
  <div class="alert alert-danger" onclick="this.classList.add('hidden')">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <ul>
          @foreach ($errors->all() as $error)
          <li>{{ $error }}</li>
          @endforeach
       </ul>
   </div>   
@endif

@if (\Session::get('message'))
    <div class="alert alert-success" onclick="this.classList.add('hidden')">
        <a href="#" class="close" data-dismiss="alert"  aria-label="close">&times;</a>
        <strong>{{ \Session::get('message') }}</strong>
    </div>
   
@endif
@if (\Session::get('error'))
    <div class="alert alert-danger" onclick="this.classList.add('hidden')">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>{{ \Session::get('error') }}</strong>
    </div>
@endif

@if(session()->has('warning'))
<div class="alert alert-warning" onclick="this.classList.add('hidden')">
   <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
   <strong>{{ \Session::get('warning') }}</strong>
</div>
@endif