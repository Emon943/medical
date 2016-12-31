/*****************Radio button selection For Service page Last screen (Duration)**********/
jQuery(document).ready(function () {
  $('input[name=visits]').change(function () {
    if (this.value === 'SingleVisit') {
      $('#other_details').hide();
    } else {
      $('#other_details').show();
    }
  });
});

/***************** Tooltip  ********************************/
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); 
});

/***************** Menu auto close  ********************************/
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});
/*********************** Verify OTP ********************/
$(document).ready(function(){
  $("#verifyotp").click(function(e){
    e.preventDefault();
    var myotp = $("#otp").val();
    url = '/register/verifyotp';
    data = { Code: myotp };

    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });

    $.ajax({
      url: url,
      data: data,
      type: 'POST',
      datatype: 'JSON',
      success: function (response) {
        if(response.status === true){
          $('#showmessage').show();
          $('#showmessage').removeClass('alert-danger');
          $('#showmessage').addClass('alert-success');
          $('#errormessage').html(response.message);
          $("#showmessage").fadeTo(2000, 500).slideUp(500, function(){
            $("#showmessage").slideUp(500);
          });
          $(".proceedotp").prop('disabled', false);
          $("#verifyotp, #sendOtp").prop('disabled', true);
        } else{
          $('#errormessage').html(response.message);
          $("#showmessage").fadeTo(2000, 500).slideUp(500, function(){
            $("#showmessage").slideUp(500);
          });
        }
      },
      error: function(response){
        console.log(response);
      }
    });
  });
});


/***********Google Map autosuggest***************/
var placeSearch, autocomplete, autocomplete2;
var componentForm = {
  locality: 'long_name',
  administrative_area_level_1: 'long_name',
  country: 'long_name',
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */
    (document.getElementById('autocomplete')), {
      types: ['geocode']
    });

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', function() {
    fillInAddress(autocomplete, "");
  });

  autocomplete2 = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */
    (document.getElementById('autocomplete2')), {
      types: ['geocode']
    });
  autocomplete2.addListener('place_changed', function() {
    fillIndropAddress(autocomplete2, "2");
  });

}

//Pickup location
function fillInAddress(autocomplete, unique) {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  var lat = place.geometry.location.lat(),
      lng = place.geometry.location.lng();

  document.getElementById('lat').value  = lat;
  document.getElementById('lng').value  = lng;

  document.getElementById('showmap').style.display = 'block';

  var map = new google.maps.Map(document.getElementById('showmap'), {
    zoom: 15,
    center: {
      lat: lat,
      lng: lng
    }
  });

  var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: {
      lat: lat,
      lng: lng
    }
  });
  marker.addListener('click', toggleBounce);


  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
  //end map generate

  for (var component in componentForm) {
    if (!!document.getElementById(component + unique)) {
      document.getElementById(component + unique).value = '';
      document.getElementById(component + unique).disabled = false;
    }
  }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType] && document.getElementById(addressType + unique)) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType + unique).value = val;
    }
  }
}

//Drop location autocomplete
function fillIndropAddress(autocomplete2, unique) {
  // Get the place details from the autocomplete object.
  var place = autocomplete2.getPlace();

  var lat = place.geometry.location.lat(),
      lng = place.geometry.location.lng();

  document.getElementById('lat2').value  = lat;
  document.getElementById('lng2').value  = lng;

  document.getElementById('showdropmap').style.display = 'block';

  var map = new google.maps.Map(document.getElementById('showdropmap'), {
    zoom: 15,
    center: {
      lat: lat,
      lng: lng
    }
  });

  var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: {
      lat: lat,
      lng: lng
    }
  });
  marker.addListener('click', toggleBounce);


  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
  //end map generate

  for (var component in componentForm) {
    if (!!document.getElementById(component + unique)) {
      document.getElementById(component + unique).value = '';
      document.getElementById(component + unique).disabled = false;
    }
  }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType] && document.getElementById(addressType + unique)) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType + unique).value = val;
    }
  }
}



/**************** email verify **************/
$(document).ready(function(){
  $("#email").blur(function(e){
    //Remove provious error message
    e.preventDefault();
    var getemail = $('#email').val();
    url = '/register/verifyemail';
    data = { emailid: getemail };

    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });

    $.ajax({
      url: url,
      data: data,
      type: 'POST',
      datatype: 'JSON',
      success: function (response) {
        if(response.status === true){
          $('#showmessage').show();
          $('#errormessage').html(response.message);
          $("#showmessage").fadeTo(2000, 500).slideUp(500, function(){
            $("#showmessage").slideUp(500);
          });
        }
      },
      error: function(response){
        console.log(response);
      }
    });
  });
});


/**************** show type address ***************/
$(document).ready(function () {
  $('#showtypeadd').click(function () {
    $('#typeaddress_show').slideToggle();
  });
});

/************ show drop location ambulance page ***********/
$(document).ready(function () {
  $('#showdroptypeadd').click(function () {
    $('#droptypeaddress_show').slideToggle();
  });
});


/******************** owl slider ********************/
$(document).ready(function() {

  $("#owl-demo").owlCarousel({

    navigation : true, // Show next and prev buttons
    slideSpeed : 2000,
    paginationSpeed : 2000,
    singleItem:true,
    autoPlay: false,
    responsive: true,
    pagination: false
  });

});

/******************* Validate login form ********/
$(document).ready(function(){
  $('#homeloginForm').submit(function(e){
    e.preventDefault();

    var form = $('#homeloginForm');

    form.validate({
      rules: {
        username: {
          required: true,
          email: true
        },
        password: "required",
      },
      messages: {
        username: {
          required: "",
          email: ""
        },
        password: {
          required: ""
        }
      }
    });

    if(form.valid() === true){
      var username = $('#username').val();
      var password = $('#password').val();
      /**ajax**/
      url = '/headerlogin';
      data = { usname: username, pass:password};

      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      });

      $.ajax({
        url: url,
        data: data,
        type: 'POST',
        datatype: 'JSON',
        success: function (response) {
          if(response.status === true){
            window.location = '/home';
          } else{
            $('#headlogin-error').html(response.message);
          }
        },
        error: function(response){
          $('#headlogin-error').html(response.message);
        }
      });
    } else{
      $('#headlogin-error').html(response.message);
    }
  });
});


/*********** Request call back validation ***********/
$(document).ready(function(){
  $('#requestcallbackForms').submit(function(e){
    e.preventDefault();
    var form = $('#requestcallbackForms');

    form.validate({
      rules: {
        firstName: {
          required: true,
        },
        lastName: {
          required: true,
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          digits: true,
          maxlength: 10
        }
      },
      messages: {
        firstName: {
          required: ""
        },
        lastName: {
          required: ""
        },
        email: {
          required: "",
          email: "Please enter valid email"
        },
        phone: {
          required: "",
          digits: "Please enter only digits",
          maxlength: "Phone number should be 10 digits only"
        }
      }
    });

    if(form.valid() === true){
      $('#loading').show();
      var fname = $('#firstName').val();
      var lname = $('#lastName').val();
      var email = $('#email').val();
      var phone = "0091" + $('#phone').val();

      url = '/requestcallback';
      data = { fname: fname, lname: lname, email: email, mobile: phone };

      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      });

      $.ajax({
        url: url,
        data: data,
        type: 'POST',
        datatype: 'JSON',
        complete: function(){
          $('#loading').hide();
        },
        success: function (response) {
          if(response.status === true){
            $("#showrequestsuccess").show();
            $('#requestcallbackForms')[0].reset();
            setTimeout(function(){
              $('#requestCallback').modal('hide');
            }, 10000);
          }
        },
        error: function(response){
          console.log(response);
        }
      });

    } else{

    }

  });
});


/****************** Home page partner slider logo ************/
$(document).ready(function() {
  $("#partner-Logo").owlCarousel({
    autoPlay: false, //Set AutoPlay to 3 seconds
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    itemsMobile:	[400,3],
    itemsTablet: [768,3],
    pagination: false,
    navigation: true,
    responsive: true
  });
});

/********* Common call for date picker and time picker ************/
$(document).ready(function () {
  var nowDate = new Date();
  var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);

  $('#date').datepicker({
    autoclose: true,
    format: "mm/dd/yyyy",
    startDate: today,
    disableTouchKeyboard: true
  }).on("changeDate", function(e) {
    var userSelectedDate = $('#date').val();
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
    today = mm+'/'+dd+'/'+yyyy;
    if(userSelectedDate !== today){
      $('#showtimemsg').hide();
      $('.datepicker_next_btn').prop('disabled', false);
    } else {
      $('#showtimemsg').show();
      $('.datepicker_next_btn').prop('disabled', true);
    }
  });
});


$(document).ready(function () {

  function checkDateTime(){
    var date = new Date();
    var hours = date.getHours()+1;
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    nextTime = hours + ':' + minutes + ampm;
    return nextTime;
  }

  $('#time').timepicker({
    showInputs: false,
    explicitMode: false
  }).on('changeTime.timepicker', function(e) {
    $('#time-aftericon').css('display', 'none');
    $('#time').css('color', '#000');
    Date.prototype.addHours = function(h) {
      this.setTime(this.getTime() + (h*60*60*1000));
      return this;
    }
    var getuserSelectedHr = e.time.hours;
    var getuserSelectedMins = e.time.minutes;
    var showAlert = false;
    var userSelectedDate = $('#date').val();
    var userSelectedTime = e.time.meridian;
    var date = new Date();
    var dd = date.getDate();
    if(dd <= 9){
      dd = '0'+dd;
    }
    var mm = date.getMonth()+1; //January is 0!
    if(mm <= 9){
      mm = '0'+mm;
    }
    var yyyy = date.getFullYear();
    var hours = date.getHours();
    var hoursplus = new Date().addHours(1).getHours();
    var mins = date.getMinutes();
    var curTime = hours+':'+mins;
    if (mins < 10) mins = "0" + mins;
    if (hoursplus < 10) hoursplus = "0" + hoursplus;
    var curTimePlus = hoursplus+':'+mins;
    var getTwelvehour = ((date.getHours()+ 11) % 12 + 1);
    if (mm < 10) mm = "0" + mm;
    today = mm+'/'+dd+'/'+yyyy;
    //Change user selected hr into 24 hr time
    var userchoosedHour =  convertTime24hr(getuserSelectedHr, getuserSelectedMins, userSelectedTime);
    if(userSelectedDate === today){
      if(curTimePlus >= userchoosedHour){
        showAlert = true;
      }
    }
    if(showAlert === true){
      $('#showtimemsg').show();
      $('.datepicker_next_btn').prop('disabled', true);
    } else {
      $('#showtimemsg').hide();
      $('.datepicker_next_btn').prop('disabled', false);
    }

  });

  function convertTime24hr(uhr, umins, uam){
    var vtime = uhr + ":"+ umins + " " + uam;
    var thours = Number(vtime.match(/^(\d+)/)[1]);
    var tminutes = Number(vtime.match(/:(\d+)/)[1]);
    var AMPM = vtime.match(/\s(.*)$/)[1];
    if (AMPM == "PM" && thours < 12) thours = thours + 12;
    if (AMPM == "AM" && thours == 12) thours = thours - 12;
    var sHours = thours;
    var sMinutes = tminutes;
    if (thours < 10) sHours = "0" + sHours;
    return sHours+':'+sMinutes;
  }

});

/************* Star rating *************/
$(document).ready(function(){
  $('.request-star').on('rating.change', function(event, value, caption) {
    var starValue = value;
    var requestId = $(this).data('reqid');
    var id = $(this).data('key');

    url = '/request/starrating';
    data = { starrating: starValue, reqId: requestId };

    $('#loading').show();

    console.log(starValue);
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });

    $.ajax({
      url: url,
      data: data,
      type: 'POST',
      datatype: 'JSON',
      success: function (response) {
        if(response.status == true){
          $('#submitRating-'+id).modal('hide');
          $('#loading').hide();
          $('.request-star').attr('readonly', 'readonly');
          location.reload();
        }
      },
      error: function(response){
        console.log(response);
      }
    });
  });
});

/*** Mobile country prefix *******/
$.ajax({
  url:"http://ipinfo.io",
  type:"get",
  dataType: "jsonp",
  cache:false,
  success:function (response) {
    if(response.country){
      countryName = response.country;
      $("#mobileprefix").intlTelInput({
        formatOnInit: true,
        preferredCountries: [countryName.toLowerCase()],
        autoHideDialCode: false,
        nationalMode: false,
        initialCountry: countryName.toLowerCase()
      });
    } else {
      $("#mobileprefix").intlTelInput({
        formatOnInit: true,
        preferredCountries: ["in"],
        autoHideDialCode: false,
        nationalMode: false,
        initialCountry: "in"
      });
    }

  },
  error:function () {
    $("#mobileprefix").intlTelInput({
      formatOnInit: true,
      preferredCountries: ["in"],
      autoHideDialCode: false,
      nationalMode: false,
      initialCountry: "in"
    });
  }
});
/*********** Get applink back validation ***********/
$(document).ready(function(){
  $('#getapplinkForm').submit(function(e){
    e.preventDefault();
    var form = $('#getapplinkForm');

    form.validate({
      rules: {
        mobilenum: {
          required: true,
          digits: true,
          // minlength: 10,
          // maxlength: 10
        }
      },
      messages: {
        mobilenum: {
          required: "Please enter mobile number",
          digits: "Please enter only digits",
          minlength: "Phone number must be 10 digits",
          maxlength: "Phone number should be 10 digits only"
        }
      }
    });

    if(form.valid() === true){
      var mobileNumber = $("#mobilenum").val();
      var code = $("#mobileprefix").val().replace(/ /g, '');
      var fullNumber = code.replace("+", '00') + mobileNumber;
      url = '/getapplink';
      data = {  mobile: fullNumber };

      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      });

      $.ajax({
        url: url,
        data: data,
        type: 'POST',
        datatype: 'JSON',
        success: function (response) {
          if(response.status === true){
            $("#showappsuccess").html(response.message).delay(5000).fadeOut();
            $('#mobilenum').val('');
          }
        },
        error: function(response){
          console.log(response);
        }
      });

    } else{

    }

  });
});

//Home page search dropdown button actions
$(document).ready(function(){
  $('#searchservicebtn').click(function(){
    var url = document.getElementById('searchbannerlist').value;
    if(url != 'none') {
      window.location = url;
    }
  });
});

$(document).ready(function(){
  $(function() {
   // $('#time').val(' ');
    $('#time').css('color', '#efefef');
    $('#time').after('<span class="time-aftericon">Start Time</span>');
  });
  //$('#time').css('visibility', 'hidden');
  $("#time").focus(function(){
    $(".time-aftericon").css("visibility", "hidden");
  });
});

