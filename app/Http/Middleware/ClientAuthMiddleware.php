<?php

namespace App\Http\Middleware;
use Auth;
use Closure;

class ClientAuthMiddleware{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next){ 
        if (Auth::check() && Auth::user()->role_id == 3 ){  
            return $next($request);
        }else {
            Auth::logout(); 
            return back()->with('error',"You are not authorised user");
        }
    }
}
