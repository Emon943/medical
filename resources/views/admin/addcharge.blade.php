 @extends('admin_master')
 @section('content')
 <div class="grid_10">
            <div class="box round first grid">
                <h2>Add New Category</h2>
				<h3 style="color:green">
				<?php
			   $message=Session::get('message');
			   if($message){
			   echo $message;
			   Session::put('message',null);
     }
	 ?>
				</h3>
               <div class="block copyblock"> 
                {!! Form::open(['url' => '/add_category']) !!}
                    <table class="form">					
                        <tr>
                            <td>
                                <input type="text" placeholder="Emergency Price - Day..."name="category" class="medium" />
                            </td>
                        </tr>
						<tr>
                            <td>
                                <input type="text" placeholder="Emergency Price - Night..."name="brand" class="medium" />
                            </td>
                        </tr>
						<tr> 
                            <td>
                                <input type="submit" name="submit" Value="Save" />
                            </td>
                        </tr>
                    </table>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
        
 @endsection

