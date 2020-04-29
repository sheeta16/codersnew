<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Routing\Middleware;

class PreventBackHistory
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $language = \Session::get('locale');
        if($language == ''){
            $language =  config('app.locale');
        }
        define('LANGUAGE', $language);

        /*return redirect('admin/login')->with('error','You have not admin access');
        return $next($request);
        return $response->header('Cache-Control','nocache, no-store, max-age=0, must-revalidate')
            ->header('Pragma','no-cache')
            ->header('Expires','Sun, 02 Jan 1990 00:00:00 GMT');*/
        $response = $next($request);
        $response->headers->set('Cache-Control','nocache, no-store, max-age=0, must-revalidate'); 
        $response->headers->set('Pragma','no-cache'); 
        $response->headers->set('Expires','Fri, 01 Jan 1990 00:00:00 GMT');
        return $response;
    }
}
