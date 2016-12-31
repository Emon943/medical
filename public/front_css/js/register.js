/******************* Send OTP to mobile *********************/
$(document).ready(function () {
    var sendotp = false;
    var preventVerifyOtp = false;
    $('#nextstep').hide();
    $('#nextregister').hide();
    
    $(".next_btn").click(function () {
        var form = $('#registerForm');
        var parentId = $(this).closest('fieldset').prop('id');

        jQuery.validator.setDefaults({
            highlight: function (element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                } else {
                    $(element).closest('.form-group').removeClass('has-success has-feedback').addClass('has-error has-feedback');
                    $(element).closest('.form-group').find('i.fa').remove();
                    $(element).closest('.form-group').append('<i class="fa fa-exclamation fa-lg form-control-feedback"></i>');
                }
            },
            unhighlight: function (element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                } else {
                    $(element).closest('.form-group').removeClass('has-error has-feedback').addClass('has-success has-feedback');
                    $(element).closest('.form-group').find('i.fa').remove();
                    $(element).closest('.form-group').append('<i class="fa fa-check fa-lg form-control-feedback"></i>');
                }
            }
        });

        form.validate({
            onfocusout: function (element) {
                $(element).valid();
            },
            rules: {
                firstname: {
                    required: true,
                    maxlength: 15
                },
                lastname: {
                    required: true,
                    maxlength: 15
                },
                email: {
                    required: true,
                    email: true
                },
                mobile: {
                    required: true,
                    digits: true,
                    minlength: 10,
                    maxlength: 10
                },
                password: {
                    required: true,
                    minlength: 4
                },
                confirmpassword: {
                    required: true,
                    equalTo: "#password"
                },
                otp: {
                    required: true,
                }
            },
            messages: {
                firstname: {
                    required: "",
                    maxlength: "Firstname cannot be greater than 15 characters"
                },
                lastname: {
                    required: "",
                    maxlength: "Lastname cannot be greater than 15 characters"
                },
                email: {
                    required: "",
                    email: "Please enter valid Email"
                },
                mobile: {
                    required: "",
                    minlength: "Mobile number should be a 10 digits.",
                    maxlength: "Mobile number shouldnot be more than 10 digits.",
                    digits: "Please enter numeric characters only"
                },
                password: {
                    required: "",
                    minlength: "Password should be minimum 4 characters"
                },
                confirmpassword: {
                    required: "",
                    equalTo: "The confirm password must match with password"
                },
            }
        });

        /****** OTP verfication *********/
        if ((form.valid() === true) && (sendotp === true)) {
            var myotp = $("#otp").val();
            url = '/register/verifyotp';
            data = {
                Code: myotp
            };

            if (!preventVerifyOtp) {
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
                        if (response.status === true) {
                            preventVerifyOtp = true;
                            $('#showmessage').show();
                            $('#showmessage').removeClass('alert-danger');
                            $('#showmessage').addClass('alert-success');
                            $('#errormessage').html(response.message);
                            $("#showmessage").fadeTo(2000, 500).slideUp(500, function () {
                                $("#showmessage").slideUp(500);
                            });

                            $('#first').hide();
                            $('#steptwo').show();
                        } else {
                            $('#errormessage').html(response.message);
                            $("#showmessage").fadeTo(2000, 500).slideUp(500, function () {
                                $("#showmessage").slideUp(500);
                            });
                        }
                    },
                    error: function (response) {
                        console.log("error occured.")
                    }
                });
            }
            if (parentId === 'steptwo') {
                form.submit();
            }
        } else {
            $('#showsendotperror').show();
        }
    });

    $(".pre_btn").click(function () { // Function Runs On PREVIOUS Button Click
        $(this).parent().prev().fadeIn('slow');
        $(this).parent().css({
            'display': 'none'
        });
    });


    $('#sendOtp').click(function () {
        var form = $('#registerForm');

        form.validate({
            rules: {
                mobileprefix: "required",
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                    digits: true
                }
            },
            messages: {
                mobileprefix: {
                    required: "Please choose your country code"
                },
                mobile: {
                    minlength: "Mobile number should be a 10 digits.",
                    maxlength: "Mobile number shouldnot be more than 10 digits.",
                    required: "",
                    digits: "Please enter numeric characters only"
                }
            }
        });

        if (form.valid() === true) {
            var randomnum = Math.floor(100000 + Math.random() * 900000)
            randomnum = randomnum.toString().substring(0, 5);

            var fname = $('#firstname').val();
            var lname = $('#lastname').val();
            var email = $('#email').val();
            var mobileNumber = $("#mobile").val();
            var code = $("#mobileprefix").val().replace(/ /g, '');
            var fullNumber = code.replace("+", '00') + mobileNumber;

            url = '/register/sendotp';
            data = {
                Code: randomnum,
                MobNumber: fullNumber,
                firstname: fname,
                lastname: lname,
                emailid: email
            };

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
                    $('#showmessage').show();
                    sendotp = true;
                    if (response.status === true) {
                        $('#showmessage').removeClass('alert-danger');
                        $('#showmessage').addClass('alert-success');
                        $('#errormessage').html(response.message);
                        $("#showmessage").fadeTo(2000, 500).slideUp(500, function () {
                            $("#showmessage").slideUp(500);
                        });
                        $("#sendOtp").prop('disabled', true);
                        $("#verifyotp").prop('disabled', false);
                        $("#otp").prop('disabled', false);
                        $("#resendOtp").prop('disabled', false);
                        //enable to register
                        $('#reggonextstep').attr("disabled", false);
                        $('#nextstep').show();
                        $('#nextregister').show();
                        
                    } else {
                        //$('#showmessage').show();
                        $('#errormessage').html(response.message);
                        $("#showmessage").fadeTo(2000, 500).slideUp(500, function () {
                            $("#showmessage").slideUp(500);
                        });
                        $('#nextstep').hide();
                        $('#nextregister').hide();
                        
                    }
                },
                error: function (response) {
                    $('#errormessage').html(response.message);

                }
            });
        }

    });


    //Resend OTP
    $('#resendOtp').click(function () {
        var form = $('#registerForm');

        form.validate({
            rules: {
                mobileprefix: "required",
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                    digits: true
                }
            },
            messages: {
                mobileprefix: {
                    required: "Please choose your country code"
                },
                mobile: {
                    minlength: "Mobile number should be a 10 digits.",
                    maxlength: "Mobile number shouldnot be more than 10 digits.",
                    required: "",
                    digits: "Please enter numeric characters only"
                }
            }
        });

        if (form.valid() === true) {
            var randomnum = Math.floor(100000 + Math.random() * 900000)
            randomnum = randomnum.toString().substring(0, 5);

            var mobileNumber = $("#mobile").val();
            var code = $("#mobileprefix").val().replace(/ /g, '');
            var fullNumber = code.replace("+", '00') + mobileNumber;

            url = '/register/sendotp';
            data = {
                Code: randomnum,
                MobNumber: fullNumber
            };

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
                    $('#showmessage').show();
                    sendotp = true;
                    if (response.status === true) {
                        $('#showmessage').removeClass('alert-danger');
                        $('#showmessage').addClass('alert-success');
                        $('#errormessage').html(response.message);
                        $("#showmessage").fadeTo(2000, 500).slideUp(500, function () {
                            $("#showmessage").slideUp(500);
                        });
                        $("#sendOtp").prop('disabled', true);
                        $("#verifyotp").prop('disabled', false);
                        $("#otp").prop('disabled', false);
                        $("#resendOtp").prop('disabled', false);
                        //enable to register
                        $('#reggonextstep').attr("disabled", false);
                    } else {
                        $('#showmessage').show();
                        $('#errormessage').html(response.message);
                        $("#showmessage").fadeTo(2000, 500).slideUp(500, function () {
                            $("#showmessage").slideUp(500);
                        });

                    }
                },
                error: function (response) {
                    $('#errormessage').html(response.message);

                }
            });
        }

    });
});
