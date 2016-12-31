<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Session;
session_start();
use Illuminate\Support\Facades\Redirect;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$admin_id=Session::get('id');
		if($admin_id!=null){
		return Redirect::to('/dashboard')->send();
		}	
       return view('admin.admin-login');
    }
	
	 public function admin_login_check(Request $request)
    {
	 $admin_email_address=$request->admin_email_address;
	 $admin_password=md5($request->admin_password);
	
	 $result = DB::table('admin_user')
	->where('email', $admin_email_address)
	->where('password', $admin_password)
	->first();
	
	if($result){
		Session::put('name',$result->name);
		Session::put('id',$result->id);
		//Session::put('admin_label',$result->admin_level);
		return Redirect::to('dashboard');
	}
	else{
		Session::put('exception','Email or Password Invalid');
		return Redirect::to('admin-login');
	}

 }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
