<?php

namespace App\Http\Middleware;
use Auth;
use Closure;

class IsLogin{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next){ 
        if (Auth::check() && Auth::user()->role_id == 3){ 
            return redirect('/dashboard');
        }else if (Auth::check() && Auth::user()->role_id == 2){ 
            return redirect('admin/dashboard');
        }else if(Auth::check() && Auth::user()->role_id == 1){
            return redirect('admin/dashboard');
        }else {
            Auth::logout();
            return $next($request);
        }
    }
}
