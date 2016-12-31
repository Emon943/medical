<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/


Route::get('/','WelcomeController@index');
Route::get('/login','WelcomeController@login');  





//admin Rout start
Route::get('/admin-login','AdminController@index');
Route::post('/admin_login_check','AdminController@admin_login_check');
Route::get('/dashboard','SuperAdminController@index');
Route::get('/logout','SuperAdminController@logout');
Route::get('/add-charge','SuperAdminController@add_charge');
Route::get('/charge-list','SuperAdminController@charge_list');
