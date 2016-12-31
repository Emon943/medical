
<?php
/*
  header("Cache-Control: no-cache, must-revalidate");
  header("Pragma: no-cache"); 
  header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); 
  header("Cache-Control: max-age=2592000");
  */
?>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Admin Panel</title>
    <link rel="stylesheet" type="text/css" href="{{asset('public/admin-css/css/reset.css')}}" media="screen" />
    <link rel="stylesheet" type="text/css" href="{{asset('public/admin-css/css/text.css')}}" media="screen" />
    <link rel="stylesheet" type="text/css" href="{{asset('public/admin-css/css/grid.css')}}" media="screen" />
    <link rel="stylesheet" type="text/css" href="{{asset('public/admin-css/css/layout.css')}}" media="screen" />
    <link rel="stylesheet" type="text/css" href="{{asset('public/admin-css/css/nav.css')}}" media="screen" />
    <link href="{{asset('public/admin-css/css/table/demo_page.css')}}" rel="stylesheet" type="text/css" />
    <!-- BEGIN: load jquery -->
    <script src="{{asset('public/admin-css/js/jquery-1.6.4.min.js')}}" type="text/javascript"></script>
    <script type="text/javascript" src="{asset('public/admin-css/js/jquery-ui/jquery.ui.core.min.js')}}"></script>
    <script src="{{asset('public/admin-css/js/jquery-ui/jquery.ui.widget.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('public/admin-css/js/jquery-ui/jquery.ui.accordion.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('public/admin-css/js/jquery-ui/jquery.effects.core.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('public/admin-css/js/jquery-ui/jquery.effects.slide.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('public/admin-css/js/jquery-ui/jquery.ui.mouse.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('public/admin-css/js/jquery-ui/jquery.ui.sortable.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('public/admin-css/js/table/jquery.dataTables.min.js')}}" type="text/javascript"></script>
    <!-- END: load jquery -->
    <script type="text/javascript" src="{{asset('public/admin-css/js/table/table.js')}}"></script>
    <script src="{{asset('public/admin-css/js/setup.js')}}" type="text/javascript"></script>
	 <script type="text/javascript">
        $(document).ready(function () {
            setupLeftMenu();
		    setSidebarHeight();
        });
		
		function preventBack(){
			window.history.forward();
			setTimeout("preventBack()",0);
			window.onunload=function(){null};
		}
    </script>

</head>
<body>
    <div class="container_12">
        <div class="grid_12 header-repeat">
            <div id="branding">
                <div class="floatleft logo">
                    <img src="img/livelogo.png" alt="Logo" />
				</div>
				<div class="floatleft middle">
					<h1>Medical Care Live Project</h1>
					<p>www.clinicalls.com</p>
				</div>
                <div class="floatright">
                    <div class="floatleft">
                        <img src="img/img-profile.jpg" alt="Profile Pic" /></div>
                    <div class="floatleft marginleft10">
                        <ul class="inline-ul floatleft">
                            <li>{{Session::get('name')}}</li>
                            <li><a href="{{URL::to('/logout')}}">Logout</a></li>
                        </ul>
                    </div>
                </div>
                <div class="clear">
                </div>
            </div>
        </div>
        <div class="clear">
        </div>
        <div class="grid_12">
            <ul class="nav main">
                <li class="ic-dashboard"><a href="{{URL::to('/dashboard')}}"><span>Dashboard</span></a> </li>
                <li class="ic-form-style"><a href="#"><span>User Profile</span></a></li>
				<li class="ic-typography"><a href="{{URL::to('/change_password')}}"><span>Change Password</span></a></li>
				<li class="ic-grid-tables"><a href="{{URL::to('/inbox')}}"><span>Inbox</span></a></li>
                <li class="ic-charts"><a href=""><span>Visit Website</span></a></li>
            </ul>
        </div>
        <div class="clear">
        </div>
   
<div class="grid_2">
    <div class="box sidemenu">
        <div class="block" id="section-menu">
            <ul class="section menu">
               <li><a class="menuitem">Site Option</a>
                    <ul class="submenu">
                        <li><a href="{{URL::to('/#')}}">Title & Slogan</a></li>
                        <li><a href="{{URL::to('/social_media')}}">Social Media</a></li>
                        <li><a href="{{URL::to('/copyright')}}">Copyright</a></li>
                        
                    </ul>
                </li>
				
                 <li><a class="menuitem">Update Pages</a>
                    <ul class="submenu">
                        <li><a href="#<!--{{URL::to('/about_us')}}-->">About Us</a></li>
                        <li><a href="#<!--{{URL::to('/contact_us')}}"-->>Contact Us</a></li>
                    </ul>
                </li>
				<li><a class="menuitem">Emergency</a>
                    <ul class="submenu">
                        <li><a href="{{URL::to('/add-charge')}}">Add Charge</a> </li>
                        <li><a href="{{URL::to('/charge-list')}}">Emergency List</a> </li>
                    </ul>
                </li>
                <li><a class="menuitem">Book An Ambulance</a>
                    <ul class="submenu">
                        <li><a href="{{URL::to('/cat_add')}}">Add Ambulance Category</a> </li>
                        <li><a href="{{URL::to('/cat_list')}}">Booking List</a> </li>
                    </ul>
                </li>
                <li><a class="menuitem">Physiotherapist</a>
                    <ul class="submenu">
                        <li><a href="{{URL::to('/product_add')}}">Add Product</a> </li>
                        <li><a href="{{URL::to('/product_list')}}">Product List</a> </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
        	@yield('content')
		
		
 <div class="clear">
        </div>
    </div>
    <div class="clear">
    </div>
    <div id="site_info">
        <p>
         &copy; Copyright <a href="http://trainingwithliveproject.com">Clinicalls with live project</a>. All Rights Reserved By RAMS ITECH.
        </p>
    </div>
</body>
</html>

