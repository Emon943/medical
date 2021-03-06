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

	
	<!--Include Mobile Menu template-->
	<!-- Modified navbar: Animating from right to left (off canvas) -->
<nav id="navbar3" class="navbar navbar-default visible-xs" role="navigation">
	<div class="container">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-3">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		</div>
		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-3">
			<button class="btn4 btn-link" data-toggle="collapse" data-target="#bs-example-navbar-collapse-3">
				<img src="{{asset('public/front_css/images/close.png')}}">
			</button>
			
			
			<ul class="nav navbar-nav navbar-right murgency-navbar">
				<li class="nav-emer">
					<a href="emergency.html">Emergency</a>
				</li>
				<li class="nav-amb">
					<a href="home-request/ambulance.html">Ambulance</a>
				</li>
				<li class="dropdown nav-home">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Medical Care At Home
						<span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="home-request/physiotherapist.html">Physiotherapist at Home</a></li>
						<li><a href="home-request/nurse.html">Nurse at Home</a></li>
						<li><a href="home-request/doctor.html">Doctor at Home</a></li>
						<li><a href="home-request/patient-attendant.html">Patient Attendant at Home</a></li>
                                                
                                                
					</ul>
				</li>
				<li class="nav-health">
					<a href="home-health-plans/senior.html">Health Packages</a>
				</li>
				<li class="nav-faq">
					<a href="#" data-toggle="modal" data-target="#askdoc" data-backdrop="static" data-keyboard="false">Ask a Doctor</a>
				</li>
				<li class="nav-call">
					<a href="tel:+918291791431"><i class="fa fa-mobile"></i> +91 - 8291791431</a>
				</li>
			</ul>
			
			
			
		</div><!-- /.navbar-collapse -->
	</div><!-- /.container-fluid -->
</nav>	<!--Include Header logo and menus template-->
	<!-- Navigation -->
<nav class="navbar business-header navbar-static-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="{{URL::to('/')}}"><img src="{{asset('public/front_css/images/logo.png')}}"/></a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <!-- Authentication Links -->
        <ul class="navbar-right call">
            <li class="btn-call back hidden-xs"><a href="#" data-toggle="modal" data-target="#requestCallback"
                                                   data-backdrop="static" data-keyboard="false">Request Info</a></li>
            <li class="btn-call"><a href="tel:+918291791431"><i class="fa fa-mobile"></i> +91 - 8291791431</a></li>
        </ul>
                    <ul class="navbar-right top-rightnav">
                <li class="log-reg"><a href="{{URL::to('/login')}}">Register</a></li>
                <li class="log-reg"><a href="{{URL::to('/login')}}">Login</a></li>
            </ul>
                <ul class="navbar-right top-nav-social">
            <li class="app-ics" style="background:#008FD5!important; border-radius:5px; padding:6px;"><a href="" data-toggle="modal" data-target="#askdoc" data-backdrop="static" data-keyboard="false" style="color:#fff!important; text-decoration:none!important;">Ask Doctor</a></li>
          
        </ul>
        <div class="collapse navbar-collapse navbar-right navbar-murgency no-transition"
             id="bs-example-navbar-collapse-1">
            <!--<button type="button" class="navbar-toggle close" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <i class="fa fa-close"></i>
            </button> -->
			
			<!--
            <ul class="nav navbar-nav navbar-right murgency-navbar">
                <li class="nav-emer">
                    <a href="emergency.html">Emergency</a>
                </li>
                <li class="nav-amb">
                    <a href="home-request/ambulance.html">Ambulance</a>
                </li>
                <li class="dropdown nav-home">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Medical Care At Home
                        <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="home-request/physiotherapist.html">Physiotherapist at Home</a></li>
                        <li><a href="home-request/nurse.html">Nurse at Home</a></li>
                        <li><a href="home-request/doctor.html">Doctor at Home</a></li>
                        <li><a href="home-request/patient-attendant.html">Patient Attendant at Home</a></li>
                    </ul>
                </li>
                <li class="nav-health">
                    <a href="home-health-plans/senior.html">Health Packages</a>
                </li>
                <li class="nav-faq">
                    <a href="#" data-toggle="modal" data-target="#askdoc" data-backdrop="static" data-keyboard="false">Ask
                        a Doctor</a>
                </li>
            </ul>
			-->
			
        </div>
        <!-- /.navbar-collapse -->
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
  <div class="container">
    <div id="Home-demo">
      <h2>Medical Care</h2>
    </div>
		<div class="row fixed-banner">
			<!--search-->
			<div class="col-lg-7 fix-ban-inner">
				<h1 class="tagline">
					Fast, Easy, and Reliable</h1>
				<!--<div id="searchservices">
					<div class="form-group h-search">
						<label for="lookingfor" class="control-label search-lab">I am looking for</label>
						<input id="servicesearch" class="form-control" placeholder="Services" name="servicesearch" type="text" value="">
						<select name="searchbannerlist" id="searchbannerlist" accesskey="target">
							<option value='none' selected>I am looking for</option>
							<option value="http://murgency.com/emergency">Emergency</option>
							<option value="http://murgency.com/home-request/ambulance">Ambulance</option>
							<option value="http://murgency.com/home-request/physiotherapist">Physiotherapist at Home</option>
							<option value="http://murgency.com/home-request/nurse">Nurse at Home</option>
							<option value="http://murgency.com/home-request/doctor">Doctor at Home</option>
							<option value="http://murgency.com/home-request/patient-attendant">Patient Attendant at Home</option>
						<select>
						<input class="btn search-servicebtn" id="searchservicebtn" type="submit" value="Submit">
						</form>
					</div>
					<h1 class="tagline-b">Popular Search: <a href="http://murgency.com/patient">Patient Attendant</a></h1>
				</div>-->
			</div>
		</div>
		<!--searchend-->
	</div>
</header>


<div id="carousel-example-generic" class="carousel slide " data-ride="carousel" >
  

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="{{asset('public/front_css/pic/medical-slide-1.jpg')}}" alt="...">
      <div class="carousel-caption">
        
      </div>
    </div>
	
	
    <div class="item">
      <img src="{{asset('public/front_css/pic/medical-slide-2.jpg')}}" alt="...">
      <div class="carousel-caption">
      
      </div>
    </div>
   
   	
    <div class="item">
      <img src="{{asset('public/front_css/pic/medical-slide-3.jpg')}}" alt="...">
      <div class="carousel-caption">
      
      </div>
    </div>
   
   
   
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


<div class="container">
  <!--ourservices-->
  <div class="row mservice-row hidden-xs">
	<div class="col-lg-12 text-center">
		<ul>
			<li>
				<div class="service-img h-serv-emer tan">
					<a href="emergency.html">Emergency</a>
				</div>
			</li>
			<li>
				<div class="service-img h-serv-ambu tan">
					<a href="home-request/ambulance.html">Book an Ambulance</a>
				</div>
			</li>
			<li>
				<div class="service-img h-serv-physio tan">
					<a href="home-request/physiotherapist.html">Physio at Home</a>
				</div>
			</li>
			<li>
				<div class="service-img h-serv-nurs tan">
					<a href="home-request/nurse.html">Nurse at Home</a>
				</div>
			</li>
			<li>
				<div class="service-img h-serv-doc tan">
					<a href="home-request/doctor.html">Doctor at Home</a>
				</div>
			</li>
			<li>
				<div class="service-img h-serv-pat tan">
					<a href="home-request/patient-attendant.html">Patient Attendant</a>
				</div>
			</li>
			<li>
				<div class="service-img h-serv-health tan">
					<a href="home-health-plans/senior.html">Health Packages</a>
				</div>
			</li>
		</ul>
	</div>
	</div>
	<div class="row mservice-row visible-xs">
		<div class="col-lg-2">
			  <div class="service-img h-serv-emer tan">
				<a href="emergency.html">Emergency</a>
			  </div>
		</div>
		<div class="col-lg-2">
		  <div class="service-img h-serv-ambu tan">
			<a href="home-request/ambulance.html">Book an Ambulance</a>
		  </div>
		</div>
		<div class="col-lg-2">
		  <div class="service-img h-serv-physio tan">
			<a href="home-request/physiotherapist.html">Physio at Home</a>
		  </div>
		</div>
		<div class="col-lg-2">
		  <div class="service-img h-serv-nurs tan">
			<a href="home-request/nurse.html">Nurse at Home</a>
		  </div>
		</div>
		<div class="col-lg-2">
		  <div class="service-img h-serv-doc tan">
			<a href="home-request/doctor.html">Doctor at Home</a>
		  </div>
		</div>
		<div class="col-lg-2">
		  <div class="service-img h-serv-pat tan">
			<a href="home-request/patient-attendant.html">Patient Attendant</a>
		  </div>
		</div>
		<div class="col-lg-2">
		  <div class="service-img h-serv-health tan">
			<a href="home-health-plans/senior.html">Health Packages</a>
		  </div>
		</div>
  </div>
  <!--endourservices-->
  <div class="row why-choose">
    <div class="col-lg-12">
      <div class="inline-line"><span>Our Promise</span></div>
    </div>
    <div class="col-lg-4 border-right">
      <div class="add-border">
	  <i class="fa fa-plane" style="font-size:50px; background: #008FD5; height:100px; width:100px; padding:6%; color:#fff; margin:20px; border-radius:50%;"></i>
        <div class="service-title">
          <h3>Fast</h3>
        </div>
        <p class="text">
          Whether it's a long-term requirement or an emergency, we will connect you to the right resources, instantly.
        </p>
      </div>
    </div>
    <div class="col-lg-4 border-right">
      <div class="add-border">
        <div class="service-title">
		<i class="fa fa-clock-o" style="font-size:50px; background: #008FD5; height:100px; width:100px; padding:6%; color:#fff; margin:20px; border-radius:50%;"></i>
          <h3>24/7 Support</h3>
        </div>
        <p class="text">
          Our team is available round the clock, to manage your healthcare requirements.
        </p>
      </div>
    </div>
    <div class="col-lg-4 border-right">
      <div class="add-border">
        <div class="service-title">
		<i class="fa fa-check-circle-o" style="font-size:50px; background: #008FD5; height:100px; width:100px; padding:6%; color:#fff; margin:20px; border-radius:50%;"></i>
          <h3>Reliable</h3>
        </div>
        <p class="text">
          Get reliable, verified, trusted medical professionals.
        </p>
      </div>
    </div>
  </div>
 
 
 
 
 
 <div class="row">

  <div class="col-lg-12">
      <div class="inline-line"><span>Our Partners</span></div>
    </div>

  <div class="col-lg-12">
    <div id="partner-Logo" class="owl-carousel owl-theme">
		<div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Fortis.png')}}" /></a><span class="logo-name">Fortis Healthcare Limited</span></div>
		<div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Max.png')}}" /></a><span class="logo-name">Max Smart Super Specialty Hospital</span></div>
		
		<div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Mayo.png')}}" /></a><span class="logo-name">Mayo Healthcare Super Speciality Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Amar.png')}}" /></a><span class="logo-name">Amar Super Speciality Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/AP.png')}}" /></a><span class="logo-name">AP Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Balaji-Medicenter.png')}}" /></a><span class="logo-name">Balaji Medicenter</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Bedi.png')}}" /></a><span class="logo-name">Bedi Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Behgal.png')}}" /></a><span class="logo-name">Behgal Institute of IT and Radiation Technology</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Chakravarty.png')}}" /></a><span class="logo-name">Chakravarty Nursing Home</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Chaudhary.png')}}" /></a><span class="logo-name">Chaudhary Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Cheema-Medical-Complex.png')}}" /></a><span class="logo-name">Cheema Medical Complex</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Chhabra.png')}}" /></a><span class="logo-name">Chhabra Hospital & Maternity Home</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Chopra.png')}}" /></a><span class="logo-name">Chopra Hospital & Diagnostic Centre</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Cosmo.png')}}" /></a><span class="logo-name">Cosmo Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Dhawan.png')}}" /></a><span class="logo-name">Dhawan Nursing Home</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Eden.png')}}" /></a><span class="logo-name">Eden Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/EMC.png')}}" /></a><span class="logo-name">EMC Super Specialty Hospital</span></div>
      
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/GRECIAN.png')}}" /></a><span class="logo-name">Grecian Super Speciality Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Healing-Touch.png')}}" /></a><span class="logo-name">Healing Touch Super Speciality hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/INDUS.png')}}" /></a><span class="logo-name">Indus Super Speciality Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/INSCOL.png')}}" /></a><span class="logo-name">Inscol Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/JP-Hospital.png')}}" /></a><span class="logo-name">JP Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/KAILON-HOSPITAL.png')}}" /></a><span class="logo-name">Kailon Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Kamboj-Hospital.png')}}" /></a><span class="logo-name">Kamboj Multi-speciality Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Kulwant-hospital.png')}}" /></a><span class="logo-name">Kulwant Heart and Vascular Centre</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Mangus.png')}}" /></a><span class="logo-name">Magnus Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/mann.png')}}" /></a><span class="logo-name">Mann Mediciti Super Speciality Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Max-City.png')}}" /></a><span class="logo-name">MAX City Hospital</span></div>
      
      
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Medic-Aid.png')}}" /></a><span class="logo-name">Medicaid Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Medistar.png')}}" /></a><span class="logo-name">Medistar Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Mehta.png')}}" /></a><span class="logo-name">Mehta hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Mukat.png')}}" /></a><span class="logo-name">Mukat Hospital + Heart Institute</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/NABH.png')}}" /></a><span class="logo-name">National Accreditation Board for Hospitals & Healthcare Providers</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/NBH.png')}}" /></a><span class="logo-name">New Bhandari Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/New-Ruby.png')}}" /></a><span class="logo-name">New Ruby Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/NK.png')}}" /></a><span class="logo-name">N K Aggarwal Joints & Spine Centre</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/ORTHOMAX-HOSPITAL.png')}}" /></a><span class="logo-name">Orthomax Bone & Joint Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/OXFORD.png')}}" /></a><span class="logo-name">Oxford Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Parkash.png')}}" /></a><span class="logo-name">Parkash Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Ranjit.png')}}" /></a><span class="logo-name">Ranjit Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Santokh.png')}}" /></a><span class="logo-name">Santokh Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Satyam.png')}}" /></a><span class="logo-name">Satyam Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/SGHS.png')}}" /></a><span class="logo-name">SGHS Hospitals</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/SK.png')}}" /></a><span class="logo-name">SK Hospital & Diagnostic Centre</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/sss.png')}}" /></a><span class="logo-name">Smt. Shanti Seth Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/SQUARE-HOSPITAL.png')}}" /></a><span class="logo-name">Square Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Surjit.png')}}" /></a><span class="logo-name">Surjit Hospital</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Wings-Hospital-Panchkula.png')}}" /></a><span class="logo-name">Wings Hospital Panchkula</span></div>
      <div class="item"><a href="#"><img src="{{asset('public/front_css/images/partners/Wings-Hospital-Rajpura.png')}}" /></a><span class="logo-name">Wings Hospital Rajpura</span></div>
    </div>
  </div>
</div>
 
 
 
 
</div>
<!--End Container -->
<!--Ask a doctor section -->






	
	<!--Include Footer widget sections and copyright template-->
	<!-- Footer -->
<footer>
 
    <!--footer-top-->
    <div class="container-fluid footer-bottomsection">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <ul class="footer-menus">
                        <h3>Medical Care at Home</h3>
                        <li><a href="home-request/nurse.html">Nurse at Home</a></li>
                        <li><a href="home-request/patient-attendant.html">Patient Attendant at Home</a></li>
                        <li><a href="home-request/doctor.html">Doctor at Home</a></li>
                        <li><a href="home-request/physiotherapist.html">Physiotherapist at Home</a></li>
                    </ul>
                </div>
                <div class="col-lg-2">
                    <ul class="footer-menus">
                        <h3>Emergency</h3>
                        <li><a href="home-request/ambulance.html">Book an Ambulance</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#askdoc" data-backdrop="static"
                               data-keyboard="false">Ask a Doctor</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <ul class="footer-menus">
                        <h3>Quick Links</h3>
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
    <a href="#" class="back-totop">↑</a>
</footer>


<!-- Request call back -->
<div id="requestCallback" class="modal fade" role="dialog">
    <div id="loading" style="display:none">
        <p><img src="{{asset('public/front_css/images/loading.gif')}}"/> Please Wait</p>
    </div>
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-body">
                <h3>Request Call Back</h3>
                <div id="showrequestsuccess" class="text-success" style="display:none">We have received your request and
                    we will contact you soon.
                </div>
                <form method="POST" action="http://murgency.com/requestcallback" accept-charset="UTF-8" class="form-horizandal" id="requestcallbackForms"><input name="_token" type="hidden" value="AcoYJ37hPODlbUUdndtjtLSh5H0aAGQrXvSFz9e7">
                <div class="form-group">
                    <label for="firstName" class="control-label">First Name</label>
                    <input class="form-control" placeholder="First Name" name="firstName" type="text" value="" id="firstName">
                </div>
                <div class="form-group">
                    <label for="lastName" class="control-label">Last Name</label>
                    <input class="form-control" placeholder="Last Name" name="lastName" type="text" value="" id="lastName">
                </div>
                <div class="form-group">
                    <label for="email" class="control-label">Email</label>
                    <input class="form-control" placeholder="Email Address" name="email" type="text" value="" id="email">
                </div>
                <div class="form-group">
                    <label for="phone" class="control-label">Phone</label>
                    <input class="form-control" placeholder="Phone Number" name="phone" type="text" value="" id="phone">
                </div>
                <input class="btn btn-success pull-right" type="submit" value="Submit!"><span class="text-right">Submit</span>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-murgency-close" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>


<!--Back to top -->
<script type="text/javascript">

    function validateNumber(){
        // Phone number verification
        var phone = document.forms["getapplink"]["mobilenum"].value;
        if (isNaN(phone)) {
            document.getElementById('mobilenumberspan').innerHTML = "Please Enter a 10 digit phone number";
            return false;
        } else {
            if (phone.length != 10) {
                document.getElementById('mobilenumberspan').innerHTML = "Please Enter a 10 digit phone number";
                return false;
            } else {
                document.getElementById('mobilenumberspan').innerHTML = "";
            }
        }
    }

    jQuery(document).ready(function () {
        var offset = 220;
        var duration = 500;
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.back-totop').fadeIn(duration);
            } else {
                jQuery('.back-totop').fadeOut(duration);
            }
        });

        jQuery('.back-totop').click(function (event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        })
    });
    if ($("#mobileprefix").val() == '' || $("#mobileprefix").val() == undefined) {
        $("#mobileprefix").intlTelInput({
            formatOnInit: true,
            preferredCountries: ["in"],
            autoHideDialCode: false,
            nationalMode: false,
            initialCountry: "in"
        });
    }
</script>
	<!--<div id="floating-askdoctor">
    <a href="#" data-toggle="modal" data-target="#askdoc" data-backdrop="static" data-keyboard="false" class="floating-chaticon">Ask Now</a>
  </div>-->

<!-- Ask doctor blade modal render -->
<div id="askdoc" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="box-shadow-ask">
                <div class="modal-header">
                    <ul class="nav nav-tabs">
                        <!--<li><a data-toggle="tab" href="#home">Help Center</a></li>-->
                        <li class="active"><a data-toggle="tab" href="#chathelp">Ask a Doc</a></li>
                    </ul>
                </div>
                <div class="modal-body">
                    <div class="tab-content">
                        <!--<div id="home" class="tab-pane fade">
                          <h3>Help Center</h3>
                          <p>Coming Soon...</p>
                        </div>-->
                        <div id="chathelp" class="tab-pane fade in active">
                                                            <div class="doc-guest">
                                    <h4>3 MUrgency Doctors Online Now</h4>
                                    <ul>
                                        <li><img src="{{asset('public/front_css/images/doc1.png')}}"></li>
                                        <li><img src="{{asset('public/front_css/images/doc2.png')}}"></li>
                                        <li><img src="{{asset('public/front_css/images/doc3.png')}}"></li>
                                    </ul>
                                    <p>We make it simple and seamless for you to chat with a doctor from wherever you
                                        are. Get a reply in 15 minutes 24/7</p>
                                </div>
                                <div class="doc-sign">
                                    <ul>
                                        <li><a href="login.html">Sign in</a></li>
                                        <li>Or</li>
                                        <li><a href="register.html">Sign Up</a></li>
                                    </ul>
                                    <span>Ask a Doc</span>
                                </div>
                                                    </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-murgency-close" data-dismiss="modal">Close</button>
            </div>
        </div>

        <script type="text/javascript">

            $('.btn-murgency-close').on('click', function () {
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
                    eventCategory: 'Ask a Doc - chat_close',
                    eventAction: 'chat_close',
                    eventLabel: 'Ask a Doc'
                });
            });

            $('#askdocchat').on('click', function () {
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
                    eventCategory: 'Ask a Doc - chat_sent',
                    eventAction: 'chat_sent',
                    eventLabel: 'Ask a Doc'
                });
            });

        </script>
    </div>
</div>
	
	
</body>


</html>
