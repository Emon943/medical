jQuery(document).ready(function () {
    var count = 0; // To Count Blank Fields
    var current = 1;
    var widget = $(".progress-step");
    widget.not(':eq(0)').hide();
    setProgress(current);
    var form = $('#ambulanceForm');

    $(".next_btn").click(function () { // Function Runs On NEXT Button Click
        //$('#steplast').show();
        //Validate the form
        var parentId = $(this).closest('fieldset').prop('id');
        form.validate({
            rules: {
                medicalconcern: "required",
                autocomplete: "required",
                date: "required",
                time: "required",
                ride_details: "required"
            },
            messages: {
                medicalconcern: {
                    required: ""
                },
                autocomplete: {
                    required: ""
                },
                date: {
                    required: "",
                },
                time: {
                    required: "",
                },
                ride_details: {
                    required: ""
                }
            }
        });

        if ((form.valid() === true) && (current < widget.length)) {
            widget.not(':eq(' + (current++) + ')').hide();
            setProgress(current);

            var pickCity = $('#country').val();
            var dropCity = $('#locality2').val();
            if ((pickCity !== null || pickCity !== "" ) && (parentId === 'stepfive')) {
                checkCity('pickup', pickCity, parentId);
            }
            /*else if((dropCity !== null || dropCity !== "" ) && (parentId === 'steplast') ){
             checkCity('droploc', dropCity, parentId);
             }*/
            else {
                //Service available for this location
                $(this).parent().next().fadeIn('slow');
                $(this).parent().css({
                    'display': 'none'
                });
            }
        }
        //else{
        if (parentId === 'steplast') {
            $('#steplast').show();
            $('#ambulanceForm').submit();
            $('#loading-final').show();
        }
        var stepname = "";
        if (parentId == "first") {
            stepname = "what_to_expect";
        }
        else if (parentId == "steptwo") {
            stepname = "medical_concern";
        }
        else if (parentId == "stepthree") {
            stepname = "book_time";
        }
        else if (parentId == "stepfour") {
            stepname = "pickup_location";
        }
        else if (parentId == "stepfive") {
            stepname = "drop_location";
        }
        // else if (parentId == "steplast") {
        //     stepname = "";
        // }
        // }
        var ambutyp = $('input[name=ambulance_type]:checked').val();
        var ridedetails = $('input[name=ride_details]:checked').val();
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
            eventCategory: 'Ambulance - ' + ambutyp + ' - ' + ridedetails,
            eventAction: 'Next - ' + stepname,
            eventLabel: 'Ambulance'
        });

    });

    $(".pre_btn").click(function () { // Function Runs On PREVIOUS Button Click

        if (current > 1) {
            current = current - 2;
            if (current < widget.length) {
                widget.not(':eq(' + (current++) + ')').hide();
                setProgress(current);
            }
        }
        var parentId = $(this).closest('fieldset').prop('id');

        $(this).parent().prev().fadeIn('slow');
        $(this).parent().css({
            'display': 'none'
        });
        var stepback = "";
        if (parentId == "steptwo") {
            $('input[name="ambulance_type"]').prop('checked', false);
            stepback = "ambulance_type";
        }
        else if (parentId == "stepthree") {
            stepback = "what_to_expect";
        }
        else if (parentId == "stepfour") {
            stepback = "medical_concern";
        }
        else if (parentId == "stepfive") {
            stepback = "book_time";
        }
        else if (parentId == "steplast") {
            stepback = "pickup_location";
        }

        var ambutyp = $('input[name=ambulance_type]:checked').val();
        var ridedetails = $('input[name=ride_details]:checked').val();

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
            eventCategory: 'Ambulance - ' + ambutyp + ' - ' + ridedetails,
            eventAction: 'Back - ' + stepback,
            eventLabel: 'Ambulance'
        })
    });

    // Change progress bar action
    function setProgress(currstep) {
        var percent = parseFloat(100 / widget.length) * currstep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%").html(percent + "%");
    }


    /********* End Ajax call *********/

    function checkCity(whichTab, cityString, id) {
        if (id === 'stepfive') {
            $('#stepfive').show();
        } else {
            $('#steplast').show();
        }

        var ambutyp = $('input[name=ambulance_type]:checked').val();
        var ridedetails = $('input[name=ride_details]:checked').val();

        /**ajax**/
        url = '/getlocationdetails';
        data = {
            city: cityString,
            servicet: "ambulance"
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
                if (response.status === 0) {
                    $('#locationerrormsg').hide();
                    $('#locationerrordropmsg').hide();
                    if (id === 'stepfive') {
                        $('#stepfive').hide();
                        $('#steplast').show();
                    }
                    else if (id === 'steplast') {
                        $('#ambulanceForm').submit();
                        $('#loading-final').show();

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
                            eventCategory: 'Ambulance - ' + ambutyp + ' - ' + ridedetails,
                            eventAction: 'book_success',
                            eventLabel: 'Ambulance'
                        });
                    }
                } else {
                    if (id === 'stepfive') {
                        $('#locationerrormsg').show().html(response.message);
                        $('#stepfive').show();
                        current = current - 1;
                        if (current < widget.length) {
                            setProgress(current);
                        }
                    } else if (id === 'steplast') {
                        $('#locationerrordropmsg').show();
                        current = current - 1;
                        if (current < widget.length) {
                            setProgress(current);
                        }
                    }
                }
            },
            error: function (response) {
            }
        });
    }

});
/*****************End next previous************/

/*****************Radio button selection**********/
jQuery(document).ready(function () {
    $('input[name=ride_details]').click(function () {
        var id = $(this).closest('fieldset').prop('id');
        if (this.value === 'ridenow') {
            $('.ambulance_others').hide();
            $("#" + id).hide();
            $('#stepfive').show();
        } else {
            $('.ambulance_others').show();
        }
        var ambutyp = $('input[name=ambulance_type]:checked').val();
        var ridedetails = $('input[name=ride_details]:checked').val();

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
            eventCategory: 'Ambulance - ' + ambutyp + ' - ' + ridedetails,
            eventAction: 'Next - book_time',
            eventLabel: 'Ambulance'
        })
    });
});

// ratecard click function
$('#ambulancerates').click(function () {
    if ($('#locality').val() == "" || $("#country").val() !== "India") {
        $('#ratecard').empty();
        $('#ratecard').append("Please select your locality first to view rates");
    }
    else {
        var metros = ["Mumbai", "Kolkata", "New Delhi", "Pune", "Bengaluru", "Chennai", "Hyderabad", "Ahmedabad"];
        var isMetrocity = "false";
        if (metros.indexOf($("#locality").val()) >= 0) {
            isMetrocity = "true";
        }
        generateTable(($('input[name=ambulance_type]:checked').val()), isMetrocity);
    }
    var ambutyp = $('input[name=ambulance_type]:checked').val();
    var ridedetails = $('input[name=ride_details]:checked').val();

    if (($('#ambulancerates').hasClass("collapsed")) == true) {
        var ratecardClicked = "price_collapse";
    } else {
        var ratecardClicked = "price_expand";
    }

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
        eventCategory: 'Ambulance - ' + ambutyp + ' - ' + ridedetails,
        eventAction: ratecardClicked,
        eventLabel: 'Ambulance'
    })
});
/****** Call Ratecard ajax function ********/

function generateTable(type, isMetro) {
    $("#ratecard").empty();
    var ambType = type;
    $('#loading').show();
    url = '/ambulance/getambulancetype';
    data = {ambulanceType: ambType, isMetroCity: isMetro};

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        complete: function () {
            $('#loading').hide();
        }
    });

    $.ajax({
        url: url,
        data: data,
        type: 'POST',

        success: function (response) {

            var result = $.parseJSON(response);
            $.each(result, function (i, item) {
                var content = $('<tr>').html(
                    "<td>" + result[i].kms + "</td><td> ₹ " + result[i].als + "</td></tr>");
                $("#ratecard").append(content);
            });
        },
        error: function (response) {
            console.log(response);
        }
    });
}

/**-----------**/
// $("#ambulance_panel").hide();
// $("#autocomplete").blur(function(){
// var locality = document.getElementById("autocomplete").value;
// var pickLocality = $('#locality').val();
// if(pickLocality != ''){
// //$(".box").not(".red").hide();
// $("#ambulance_panel").show();
// }
// else{
// //alert("Error...");
// $("#ambulance_panel").hide();
// }
// });
/*************** show div *********/
/******** Hide and show div based on the input values *******/
$(document).ready(function () {

    var hideAll = function () {
        $('.optiondiv').hide();
    }
    $('input[type=radio][name=ambulance_type]').change(function () {
        hideAll();
        var category = $(this).val();
        var id = $('fieldset').attr('id');
        if (id === 'first') {
            // generateTable(category);
            $('.' + category).show();
            $('#first').hide();
            $('#steptwo').show();

            var ambutyp = $('input[name=ambulance_type]:checked').val();
            var ridedetails = $('input[name=ride_details]:checked').val();
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
                eventCategory: 'Ambulance - ' + ambutyp + ' - ' + ridedetails,
                eventAction: 'Next - ambulance_type',
                eventLabel: 'Ambulance'
            });
        }

    });
});