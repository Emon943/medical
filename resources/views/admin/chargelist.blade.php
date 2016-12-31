  @extends('admin_master')
  @section('content')
  <?php
   $result = DB::table('tbl_category')->get();
   ?>
        <div class="grid_10">
		<h3 style="color:green">
		<?php
		  $message=Session::get('message');
		   if($message){
		   echo $message;
		  Session::put('message',null);
		 }?>
       </h3>
            <div class="box round first grid">
                <h2>Category List</h2>
                <div class="block">        
                    <table class="data display datatable" id="example">
					<thead>
						<tr>
							<th>Serial No.</th>
							<th>Category Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
					@foreach($result as $res )
						<tr class="odd gradeX">
							<td>{{$res->id}}</td>
							<td>{{$res->category}}</td>
							<td><a href="{{URL::to('/edit_category/'.$res->id)}}">Edit</a> || <a href="{{URL::to('/delete_category/'.$res->id)}}" onclick="return confirm('Are you sure you want to delete this category?');">Delete</a></td>
						</tr>
					@endforeach
					</tbody>
				</table>
               </div>
            </div>
        </div>
<script type="text/javascript">
	$(document).ready(function () {
	    setupLeftMenu();

	    $('.datatable').dataTable();
	    setSidebarHeight();
	});
</script>
@endsection


