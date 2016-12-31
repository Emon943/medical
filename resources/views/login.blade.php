<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Clinicalls</title>
	
	<meta name="description" content="Book Top Doctors, Nurses, Physiotherapists, Patient Attendants, Ambulance & 24/7 Emergency Assistance for in Home Service">
	<link rel="shortcut icon" href="{{asset('public/front_css/images/favicon.ico')}}">

<!-- Bootstrap Core CSS -->
<link href="{{URL::to('public/front_css/css/bootstrap.min.css')}}" rel="stylesheet">

<!-- Custom CSS -->

<link href="{{asset('public/front_css/css/bootstrap-datepicker.css')}}" rel="stylesheet">
<link href="{{asset('public/front_css/css/bootstrap-timepicker.min.css')}}" rel="stylesheet">
<!--<link href="css/clockpicker.css" rel="stylesheet">-->
<link rel="stylesheet" href="{{asset('public/front_css/css/owl.theme.css')}}">
<link rel="stylesheet" href="{{asset('public/front_css/css/owl.carousel.css')}}">
<link rel="stylesheet" href="{{asset('public/front_css/css/pubnub.css')}}">
<link rel="stylesheet" href="{{asset('public/front_css/css/intlTelInput.css')}}">
<link rel="stylesheet" href="{{asset('public/front_css/css/starrating.min.css')}}">
<link href="{{asset('public/front_css/css/navbar.css')}}" rel="stylesheet">
<link href="{{asset('public/front_css/css/styles.css')}}" rel="stylesheet">


<!--Google font-->
<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Open+Sans:300,400,600,700,800" rel="stylesheet">
<!--font awesome icons-->
<link rel="stylesheet" href="{{asset('public/front_css/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css')}}">
<!-- jQuery -->
<script src="{{asset('public/front_css/js/jquery.js')}}"></script>
<!-- Bootstrap Core JavaScript -->
<script src="{{asset('public/front_css/js/bootstrap.min.js')}}"></script>
<script src="{{asset('public/front_css/js/bootstrap-datepicker.js')}}"></script>
<script src="{{asset('public/front_css/js/bootstrap-timepicker.min.js')}}"></script>
<!--<script src="js/clockpicker.js"></script>-->
<script src="{{asset('public/front_css/js/common.js')}}"></script>
<script src="{{asset('public/front_css/js/jquery.validate.min.js')}}"></script>
<script src="{{asset('public/front_css/js/jquery-ui.min.js')}}"></script>
<!-- owl -->
<script src="{{asset('public/front_css/js/owl.carousel.min.js')}}"></script>
<script src="{{asset('public/front_css/js/intlTelInput.js')}}"></script>
<script src="{{asset('public/front_css/js/paging.js')}}"></script>
<script src="{{asset('public/front_css/js/pubnub-3.7.12.min.js')}}"></script>
<script type="text/javascript" src="{{asset('public/front_css/js/pubnub.js')}}"></script>
<script  src="{{asset('public/front_css/js/starrating.js')}}"></script>
<script  src="{{asset('public/front_css/js/requestTableSearch.js')}}"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBSyS0cNzpey25DMdxu-ZKcnEREVNn1mPE&amp;libraries=places&amp;callback=initAutocomplete"  defer></script>
<meta name="csrf-token" content="AcoYJ37hPODlbUUdndtjtLSh5H0aAGQrXvSFz9e7">
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
		
   

	
</head>
<body class="Home">

	
	

<nav class="navbar business-header navbar-static-top rams" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="{{URL::to('/')}}"><img src="{{asset('public/front_css/images/logo.png')}}"/></a>
        </div>
       
                    <ul class="navbar-right" style="padding:2%;">
					
					<form class="form-inline">
					  <div class="form-group">
						<input type="email" class="form-control" id="exampleInputName2" placeholder="Email">
						<p> &nbsp;</p>
					  </div>
					  
					  <div class="form-group">
						<input type="password" class="form-control" id="exampleInputEmail2" placeholder="Password"><br>
						<a href="">Forgotten account?</a>
					  </div>
					  
					  
					  <div class="form-group">
						<button type="submit" class="btn btn-info">Login</button>
						<p> &nbsp;</p>
					  </div>
					  
					  
					  
					  
					</form>
					
                
            </ul>
               

    </div>
    <!-- /.container -->
</nav>
<script>
    //bootstrap navbar collapse it automatically whenever another navbar is triggered
    $('.top-logged-in').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

    $('li.nav-faq a').on('click', function () {

        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                        (i[r].q = i[r].q || []).push(arguments)
                    }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '../www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-65215147-1', 'auto');
        ga('send', {
            hitType: 'event',
            eventCategory: 'Ask a Doc - chat_open',
            eventAction: 'chat_open',
            eventLabel: 'Ask a Doc'
        });
    });

</script>	
	<!--render main body content-->
    <!--Include search banner -->
<header class="search-header">
  <div class="container" style="margin-top:-25%;">
    <div class="row">
            <div class="col-md-6 col-md-offset-3 space-top-md">
                <ul class="reg-top">
                    <li><h3><i class="fa fa-user"></i> User Registration</h3></li>
                    <li> </li>
                    
                </ul>
                <div class="register-formpage">
                    <div class="alert alert-danger alert-dismissible" role="alert" id="showmessage"
                         style="display:none">
                        <span id="errormessage"></span>
                    </div>
                    <form method="POST" action="http://murgency.com/register" accept-charset="UTF-8" class="form-custom" id="registerForm"><input name="_token" type="hidden" value="AcoYJ37hPODlbUUdndtjtLSh5H0aAGQrXvSFz9e7">
                    <fieldset id="first">
                        <div class="form-group">
                            <label for="firstname" class="control-label">First Name</label>
                            <input class="form-control" placeholder="First Name" name="firstname" type="text" value="" id="firstname">
                                                    </div>
                        <div class="form-group">
                            <label for="lastname" class="control-label">Last Name</label>
                            <input class="form-control" placeholder="Last Name" name="lastname" type="text" value="" id="lastname">
                                                    </div>
													
													
						<div class="form-group">
                            <label for="firstname" class="control-label">Age</label>
                            <input class="form-control" placeholder="Enter Age" name="firstname" type="text" value="" id="firstname">
                                                    </div>
                        <div class="form-group">
                            <label for="lastname" class="control-label">Sex</label>
                            <select class="form-control" name="">
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
                                                    </div>
													
													
						<div class="form-group">
                            <label for="lastname" class="control-label">Location</label>
                            <input class="form-control" placeholder="Enter full Address" name="lastname" type="text" value="" id="lastname">
                                                    </div>

						

						<div class="form-group">
                            <label for="lastname" class="control-label">Nature of sickness</label>
                            <input class="form-control" placeholder="Type Nature of sickness" name="lastname" type="text" value="" id="lastname">
                                                    </div>
													
													
						<div class="form-group">
                            <label for="lastname" class="control-label">Helth Condition(if any)</label>
                            <input class="form-control" placeholder="Write helth condition" name="lastname" type="text" value="" id="lastname">
                                                    </div>
													
													
                        <div class="form-group">
                            <label for="Contactinfo" class="control-label">Email</label>
                            <input class="form-control" id="email" placeholder="Email Address" name="email" type="text" value="">
                                                    </div>
                       
                        
						<div class="form-group">
                            <label for="Contactinfo" class="control-label">Password</label>
                            <input class="form-control"  placeholder="Enter a Password" name="email" type="password" value="">
                                                    </div>
													
													<div class="form-group">
                            <label for="Contactinfo" class="control-label">Confirm Password</label>
                            <input class="form-control"  placeholder="Retype Password" name="email" type="password" value="">
                                                    </div>
													
                        
                        <div class="form-group" id="tcerror">
							<input type="checkbox" name="agree" value="agree" id="agree"  checked required> I accept
                            <a href="legal.html">Terms &amp Conditions</a>
                        </div>
                        <a class="btn btn-primary next_btn pull-right checkotpstatus"
                           id="nextstep">Next &raquo;</a><span class="text-right" id="nextregister">Submit</span>
                    </fieldset>
                    <fieldset id="steptwo">
                        <div class="form-group">
                            <label for="password" class="control-label">Password</label>
                            <input class="form-control proceedotp" placeholder="xxxxx" name="password" type="password" value="" id="password">
                                                    </div>
                        <div class="form-group">
                            <label for="cpassword" class="control-label">Confirm Password</label>
                            <input class="form-control proceedotp" placeholder="xxxxx" name="confirmpassword" type="password" value="">
                                                    </div>
                        <button class="btn btn-primary pre_btn" type="button">&laquo; Previous</button>
                        <a class="btn btn-primary next_btn pull-right" id="nextstep">Next &raquo;</a><span
                                class="text-right">Register</span>
                    </fieldset>
                    </form>
                </div>

            </div>
        </div>
	</div>
</header>


 
 
<footer>
 
    <!--footer-top-->
    <div class="container-fluid footer-bottomsection">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <ul class="footer-menus">
                        <h4>Medical Care at Home</h4>
                        <li><a href="home-request/nurse.html">Nurse at Home</a></li>
                        <li><a href="home-request/patient-attendant.html">Patient Attendant at Home</a></li>
                        <li><a href="home-request/doctor.html">Doctor at Home</a></li>
                        <li><a href="home-request/physiotherapist.html">Physiotherapist at Home</a></li>
                    </ul>
                </div>
                <div class="col-lg-2">
                    <ul class="footer-menus">
                        <h4>Emergency</h4>
                        <li><a href="home-request/ambulance.html">Book an Ambulance</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#askdoc" data-backdrop="static"
                               data-keyboard="false">Ask a Doctor</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <ul class="footer-menus">
                        <h4>Quick Links</h4>
                        <li><a href="blog/index.html">Blog</a></li>
                        <li><a href="media.html">Media</a></li>
                        <li><a href="awards.html">Awards</a></li>
                        <li><a href="legal.html">Legal</a></li>
                        <li><a href="faqs.html">FAQ</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 footer-contact">
                    <p class="foot-getapp">For Queries, Call</p>
                    <p class="foot-getapp"><a href="tel:+918291791431">+91 - 82917 91431</a></p>
                    <p class="foot-getapp">Or</p>
                    <div class="foot-req">
                        <button type="button" class="btn btn-murgencywhite-large" data-toggle="modal"
                                data-target="#requestCallback" data-backdrop="static" data-keyboard="false">Request A
                            Call Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--footer-menus-->
    </div>
    <!--footer- bottom-->
    <div class="container-fluid footer-lastsection">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1">
                    <p style="color:#fff;">Copyrights ©2016 <a href="">CLINICALLS</a> | Developed by <a href="http://www.ramsitech.com" target="_blank">RAMS ITECH</a></p>
                </div>
            </div>
        </div>
    </div>
    <a href="#" class="back-totop">?</a>
</footer>


 

 
 
</body>


</html>
