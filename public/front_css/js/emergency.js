jQuery(document).ready(function () {
  var count = 0; // To Count Blank Fields
  var current = 1;
  var widget   = $(".progress-step");
  widget.not(':eq(0)').hide();
  setProgress(current);
  var city= null;
  $(".next_btn").click(function () { // Function Runs On NEXT Button Click
    var parentId = $(this).closest('.progress-step').prop('id');

    var stepname = "";
    if (parentId == "first") {
      stepname = "what_to_expect";
    }
    else if (parentId == "steptwo") {
      stepname = "book_location";
    }

    // }

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
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-65215147-1', 'auto');
    ga('send', {
      hitType: 'event',
      // eventCategory: 'Ambulance - ' + ambutyp + ' - ' + ridedetails,
      eventCategory: 'Emergency',
      eventAction: 'Next - ' + stepname,
      eventLabel: 'Emergency'
    });

    var form = $('#emergencyForm');

    form.validate({
      rules: {
        autocomplete: "required",
      },
      messages: {
        autocomplete: {
          required: "",
        }
      }
    });

    if((form.valid() === true) && (current < widget.length)){
      // alert(parentId);
      widget.not(':eq('+(current++)+')').hide();
      setProgress(current);

      //Service available for this location
      $(this).parent().next().fadeIn('slow');
      $(this).parent().css({
        'display': 'none'
      });
    }

     city = $('#locality').val();
     geo = $('#lat').val();

    if(city !== null && city !== ""){
      $('#disablelaterror').hide();

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
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

      ga('create', 'UA-65215147-1', 'auto');
      ga('send', {
        hitType: 'event',
        eventCategory: 'Emergency',
        eventAction: 'book_success',
        eventLabel: 'Emergency'
      });

      /*ajax*/
      url = '/getlocationdetails';
      data = { city: city, servicet: "emergency"};

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
          if(response.status === 0){
            $('#locationerrormsg').hide();
            $('#emergencyForm').submit();
            $('#loading').show();
          }
          else{
            $("#notifyemergencyService").modal('show');
            $('#locationerrormsg').show();
            $('#disablelaterror').hide();
            $('#locationerrormsg').html(response.message);
          }
        },
        error: function(response){
        }
      });
    }
    else if((city === null || city === "") && parentId === 'steptwo'){
      $('#disablelaterror').show().delay(2000).fadeOut();
    } else{
      $('#disablelaterror').hide();
    }
  });

  $(".pre_btn").click(function () { // Function Runs On PREVIOUS Button Click
    if(current > 1){
      current = current - 2;
      if(current < widget.length){
        widget.not(':eq('+(current++)+')').hide();
        setProgress(current);
      }
    }

    var parentId = $(this).closest('fieldset').prop('id');

    var stepback = "";
    // if (parentId == "first") {
    //     stepback = "";
    // }
    if (parentId == "steptwo") {
      stepback = "what_to_expect";
    }
    // // else
    // if (parentId == "stepthree") {
    //   stepback = "";
    // }
    // else if (parentId == "stepfour") {
    //   stepback = "medical_concern";
    // }

    // }

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
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-65215147-1', 'auto');
    ga('send', {
      hitType: 'event',
      // eventCategory: 'Ambulance - ' + ambutyp + ' - ' + ridedetails,
      eventCategory: 'Emergency',
      eventAction: 'Back - ' + stepback,
      eventLabel: 'Emergency'
    });

    $(this).parent().prev().fadeIn('slow');
    $(this).parent().css({
      'display': 'none'
    });
  });

  // Change progress bar action
  function setProgress(currstep){
    var percent = parseFloat(100 / widget.length) * currstep;
    percent = percent.toFixed();
    $(".progress-bar").css("width",percent+"%").html(percent+"%");
  }


  //Request notify emergency form
  $('#notifysubmit').click(function(){
    var form = $('#requestnotifyemergencyForm');
    var url = '/notifyemergency';
    form.validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        phone:{
          required: true,
          maxlength: 10,
          digits: true
        }
      },
      messages: {
        name:{
          required: ""
        },
        email: {
          required: "",
        },
        phone:{
          required: "",
          maxlength: "Phone number should not more than 10 digits",
          digits: "Phone number should be numeric"
        }
      }
    });

    if(form.valid() === true){
      var email = $('#email').val();
      var name = $('#name').val();
      var phone = '0091'+$('#phone').val();
      data = {Name:name, emailid: email, mobilenumber: phone, city: city};

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
            $('#notifyemergencyService').modal('hide');
            window.location="http://dev.murgency.com/home";
          }
          else{

          }
        },
        error: function(response){
        }
      });
    }
  });

});