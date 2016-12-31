jQuery(document).ready(function () {
    var count = 0; // To Count Blank Fields
    var current = 1;
    var widget = $(".progress-step");
    widget.not(':eq(0)').hide();
    setProgress(current);
    var form = $('#physiotherapistForm');

    $(".next_btn").click(function () { // Function Runs On NEXT Button Click
        var getlat = $('#lat').val();
        var parentId = $(this).closest('fieldset').prop('id');

        form.validate({
            rules: {
                medicalconcern: "required",
                autocomplete: "required",
                date: "required",
                time: "required"
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
                }
            }
        });

        if ((form.valid() === true) && (current < widget.length)) {
            widget.not(':eq(' + (current++) + ')').hide();
            setProgress(current);

            //Service available for this location
            $(this).parent().next().fadeIn('slow');
            $(this).parent().css({
                'display': 'none'
            });
        }
        if (parentId === 'stepfour') {
            if (getlat.length > 0 && $('#country').val() == "India") {
                var term = $('input[name="visits"]:checked').val();
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
                    eventCategory: 'Physiotherapist - ' + term,
                    eventAction: 'book_success',
                    eventLabel: 'Physiotherapist'
                });

                form.submit();
                $('#loading').show();
            } else {
                $('#stepfour #locationerrormsg').show().html("Service not available in your city");
                //$('#disablelaterror').show().delay(2000).fadeOut();
            }
        }

        if (parentId === 'steplast') {
            $('#steplast').show();
            $('#physiotherapistForm').submit();
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
            stepname = "book_location";
        }

        // }

        var term = $('input[name="visits"]:checked').val();
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
            eventCategory: 'Physiotherapist - ' + term,
            eventAction: 'Next - ' + stepname,
            eventLabel: 'Physiotherapist'
        });
    });

    // ratecard click function
    $('#physiorates').click(function () {

        if ($("#locality").val() == "") {
            $("#ratecard").empty();
            $("#ratecard").append("Please select your locality first to view rates");
        }
        else {
            var metros = ["Mumbai", "Kolkata", "New Delhi", "Pune", "Bengaluru", "Chennai", "Hyderabad", "Ahmedabad"];
            var isMetrocity = "false";
            if (metros.indexOf($("#locality").val()) >= 0) {
                isMetrocity = "true";
            }
            generateTable(isMetrocity);
        }

        var term = $('input[name="visits"]:checked').val();

        if (($('#physiorates').hasClass("collapsed")) == true) {
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
            eventCategory: 'Physiotherapist - ' + term,
            eventAction: ratecardClicked,
            eventLabel: 'Physiotherapist'
        });

    });

    function generateTable(isMetro) {
        $("#ratecard").empty();
        $('#loading').show();

        url = '/physiotherapist/getPhysioRates';
        data = {isMetroCity: isMetro};

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
                        "<td>" + result[i].title + "</td><td> ₹ " + result[i].amount + "</td></tr>");
                    $("#ratecard").append(content);
                });
            },
            error: function (response) {
                console.log(response);
            }
        });
    }

    $(".pre_btn").click(function () { // Function Runs On PREVIOUS Button Click
        if (current > 1) {
            current = current - 2;
            if (current < widget.length) {
                widget.not(':eq(' + (current++) + ')').hide();
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
        // else
        if (parentId == "stepthree") {
            stepback = "medical_concern";
        }
        else if (parentId == "stepfour") {
            stepback = "book_time";
        }

        alert(parentId);
        alert(stepback);
        // }

        var term = $('input[name="visits"]:checked').val();
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
            eventCategory: 'Physiotherapist - ' + term,
            eventAction: 'Back - ' + stepback,
            eventLabel: 'Physiotherapist'
        });

        //clear the location
        $(this).parent().prev().fadeIn('slow');
        $(this).parent().css({
            'display': 'none'
        });
    });

    // Change progress bar action
    function setProgress(currstep) {
        var percent = parseFloat(100 / widget.length) * currstep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%").html(percent + "%");
    }

});
/*****************End next previous************/
