<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => ['cors','prevent-back-history']],function(){
	Route::get('/', function () {
	    return view('welcome');
	});

	//Admin Routes
	Route::group([ 'prefix' => 'admin', 'middleware' =>['isLogin']], function()
    {
		Route::get('/','Auth\AdminLoginController@showLoginForm')->name('admin.login');
		Route::get('/login','Auth\AdminLoginController@showLoginForm')->name('admin.login');
		Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
	});

	/*Admin Panel Urls with isAdmin Middleware */
	Route::group(['prefix' => 'admin', 'middleware' =>['isAdmin']], function(){
	   	Route::get('/dashboard', 'Admin\DashboardController@index')->name('admin.dashboard');
	   	Route::get('/logout', 'Admin\DashboardController@logout')->name('admin.logout');

	   

	   	//Admin Profile Update
	   	Route::get('/profile', 'Admin\DashboardController@profile')->name('admin.profile');
	   	Route::post('/updateprofile', 'Admin\DashboardController@updateprofile')->name('admin.updateprofile');

	   	Route::any('/options', 'Admin\DashboardController@options')->name('admin.options');
	   	Route::any('/option/add', 'Admin\DashboardController@addOption')->name('admin.option.add');
	    Route::any('/option/edit/{id}', 'Admin\DashboardController@editOption')->name('admin.option.edit');
	    Route::get('/option/view/{id}', 'Admin\DashboardController@viewOption');
	    Route::any('/option/delete/{id}', 'Admin\DashboardController@deleteOption')->name('admin.option.delete');
	    Route::any('/PdfDownload', 'Admin\DashboardController@PdfDownload')->name('admin.PdfDownload');
	});
});