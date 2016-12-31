<!DOCTYPE html>
<head>
<meta charset="utf-8">
<title>Login</title>
    <link rel="stylesheet" type="text/css" href="{{asset('public/admin-css/css/stylelogin.css')}}" media="screen" />
</head>
<body>
<div class="container">
<section id="content">
<h3 style="color:red">
 <?php
  $exception=Session::get('exception');
   if($exception){
	echo $exception;
	Session::put('exception',null);
   }
?>
</h3>

<h3 style="color:green">
 <?php
  $message=Session::get('message');
   if($message){
	echo $message;
	Session::put('message',null);
   }
?>
</h3>
		{!! Form::open(['url' => '/admin_login_check']) !!}
			<h1>Admin Login</h1>
			<div>
				<input type="text" placeholder="Email_address" required="" name="admin_email_address"/>
			</div>
			<div>
				<input type="password" placeholder="Password" required="" name="admin_password"/>
			</div>
			<div>
				<input type="submit" value="Log in" />
			</div>
		{!! Form::close() !!}<!-- form -->
		<div class="button">
			<a href="#">Medical Care Live Project</a>
		</div><!-- button -->
	</section><!-- content -->
</div><!-- container -->

</body>
</html>
