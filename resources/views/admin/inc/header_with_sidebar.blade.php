<section>
    <!-- Left Sidebar -->
    <aside id="leftsidebar" class="sidebar">
        <!-- User Info -->
        <div class="user-info">
            <div class="image">
                @if (empty(Auth::user()->profile_image))
                    <img src="{{ url('/') }}/images/default-image/user.png" id="preview" width="48" height="48" alt="User">
                @else
                    <img src="{{ url('/') }}/images/profile_image/{{Auth::user()->profile_image}}" id="preview" width="48" height="48" alt="User">
                @endif
                <!-- <img src="images/user.png" width="48" height="48" alt="User" /> -->
            </div>
            <div class="info-container">
                <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{Auth::user()->firstname}}</div>
                <div class="email">{{Auth::user()->email}}</div>
                <div class="btn-group user-helper-dropdown">
                    <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                    <ul class="dropdown-menu pull-right">
                        <li><a href="{{ route('admin.profile') }}"><i class="material-icons">person</i>Profile</a></li>
                       
                        <li><a href="{{ route('admin.logout') }}"><i class="material-icons">input</i>Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
      
        <!-- #User Info -->
        <!-- Menu -->
        <div class="menu">
            <ul class="list">
                
                <li class="{{ Route::current()->getName() == 'admin.dashboard' ? 'active' : '' }}" >
                    <a href="{{ route('admin.dashboard')}}">
                        <i class="material-icons">home</i>
                        <span>Home</span>
                    </a>
                </li>

                <li class="{{ Route::current()->getName() == 'admin.options' ? 'active' : '' }}" >
                    <a href="{{ route('admin.options')}}">
                        <i class="material-icons">menu</i>
                        <span>Options</span>
                    </a>
                </li>
               
              
               
            </ul>
        </div>
        <!-- #Menu -->
        <!-- Footer -->
        <div class="legal">
            <div class="copyright">
                &copy; {{date('Y')}}
            </div>
            <!-- <div class="version">
                <b>Version: </b> 1.0.5
            </div> -->
        </div>
        <!-- #Footer -->
    </aside>
    <!-- #END# Left Sidebar -->
   
</section>