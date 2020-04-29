@if (isset($errors) && count($errors) > 0)
  @foreach ($errors->all() as $error)
  <div class="alert alert-danger">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
       
	    <ul>
	      @foreach ($errors->all() as $error)
	      <li>{{ $error }}</li>
	      @endforeach
	   </ul>
   </div> 
  @endforeach
@endif

@if (\Session::get('message'))
    <div class="alert alert-success">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>{{ \Session::get('message') }}</strong>
    </div>
   
@endif
@if (\Session::get('error'))
    <div class="alert alert-danger">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>{{ \Session::get('error') }}</strong>
    </div>
@endif
