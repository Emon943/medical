@extends('admin_master')
  @section('content')
 
        <div class="grid_10">
		<h3 style="color:green"></h3>
            <div class="box round first grid">
                <h2>Category List</h2>
                <div class="block">        
                    <table class="data display datatable" id="example">
					<thead>
						<tr>
							<th>Serial No.</th>
							<th>Day Price</th>
							<th>Night Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
					
						<tr class="odd gradeX">
							<td>#1</td>
							<td>uigfhfdu</td>
							<td>uigfhfdu</td>
							<td><a href="{{URL::to('/edit_category/')}}">Edit</a> || <a href="{{URL::to('/delete_category/')}}" onclick="return confirm('Are you sure you want to delete this category?');">Delete</a></td>
						</tr>
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


