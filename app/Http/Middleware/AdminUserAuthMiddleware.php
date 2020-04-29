<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class AdminUserAuthMiddleware {
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next){ 

        if (Auth::check() && Auth::user()->role_id == 1 ){  
            return $next($request);
        }
        else {
            Auth::logout(); 
            return redirect('/');
           // return back()->with('error',"You are not authorized user");
        }
    }
}
