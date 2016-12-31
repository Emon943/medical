<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Session;
session_start();
use Illuminate\Support\Facades\Redirect;

class SuperAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $admin_id= Session::get('id');
		 if($admin_id==null){
		 return Redirect::to('/admin-login')->send();
		}
       $index=view('admin.index');
        return view('admin_master')->with('content',$index);
    }
	
	
	 public function logout()
    {
     Session::put('name',null);
	 Session::put('id',null);
	 Session::put('message','You are successfully logout');
	 return Redirect::to('/admin-login');
    }
	
	public function add_charge(){
		$add_charge=view('admin.addcharge');
        return view('admin_master')->with('content',$add_charge);
	 }
	 
	 public function charge_list(){
		$charge_list = view('admin.test');
        return view('admin_master')->with('content',$charge_list);
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
