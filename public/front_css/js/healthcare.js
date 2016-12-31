jQuery(document).ready(function () {
    var count = 0; // To Count Blank Fields
    var current = 1;
    var widget = $(".progress-step");
    widget.not(':eq(0)').hide();
    setProgress(current);
    var v = jQuery("#healthcareForm").validate();
    var form = $('#healthcareForm');

    // if (document.location.search.indexOf("proceed=1") >= 0) {
    //     $('.progress-step').hide();
    //     $('#stepfive').show();
    // }

    $("#nextstep1").click(function () {
        if (v.form()) {
            $(".progress-step").hide("fast");
            $("#steptwo").show("slow");
        }
    });
    $("#stepdownload").click(function () {
        // if (v.form()) {
        //     $(".progress-step").hide("fast");
        //     $("#stepthree").show("slow");
        // }
    });

    // $(".btn-request").click(function () {
    //     $(".progress-step").hide("fast");
    //     $("#stepthree").show("slow");
    // });
    //


    $(".btn-book").click(function () {

        if (this.id == "book_basic") {
            $('#packagetype').val("Basic");
            $('#packageamt').val("299");
        }
        else {
            $('#packagetype').val("Plus");
            $('#packageamt').val("999");
        }
        $(".progress-step").hide("fast");
        $("#stepfour").show("slow");
    });

    $('.btn-request').click(function () {

        if (this.id == "request_basic") {
            $('#packagetype').val("Basic");
            // $packageAmt.val("299");
        }
        else {
            $('#packagetype').val("Plus");
            // $packageAmt.val("999");
        }
        $(".progress-step").hide("fast");
        $("#stepthree").show("slow");
    });

    $('#nextstep2').click(function () {
        var getlat = $('#lat').val();
        if (getlat.length > 0 && $('#country').val() == "India") {
            form.submit();
            $('#loading').show();
        } else {
            $('#stepfour #locationerrormsg').show().html("Service not available in your country");
            //$('#disablelaterror').show().delay(2000).fadeOut();
        }
        // var type = $('#packagetype').val();
        // var amount = $('#packageamt').val()*100;
        //
        // window.location = "http://dev.murgency.com/healthcarebookform?type="+type+"&amount="+amount;
    });


    $('#dwnBrochure').click(function (e) {

        var text_name = $('#txt_name').val();
        var countryCode = $('#countryCode option:selected').text();
        var text_number = $('#txt_number').val();
        var text_email = $('#txt_email').val();
        var package = $('#packagetype').val();
        var type = "agingParents";
        var url = '/saveRequestInfo';

        var data = {
            name: text_name,
            email: text_email,
            countryCode: countryCode,
            phone: text_number,
            package: package,
            type: type
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
                if (response.status === true) {
                    window.location = "http://dev.murgency.com/thankyou";
                }
                else {
                    alert('failure');
                }
            },
            error: function (response) {
            }
        });
        e.preventDefault();
    });

    /* Back Button*/
    $("#prevbtn1").click(function () {
        $(".progress-step").hide("fast");
        $("#stepfirst").show("slow");
    });
    $("#prevbtn2").click(function () {
        $(".progress-step").hide("fast");
        $("#steptwo").show("slow");
    });
    $("#prevbtn3").click(function () {
        $(".progress-step").hide("fast");
        $("#steptwo").show("slow");
    });

    // Change progress bar action
    function setProgress(currstep) {
        var percent = parseFloat(100 / widget.length) * currstep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%").html(percent + "%");
    }
});

function markActiveLink(el) {
    alert($(el).attr("id"));
}
/*****************End next previous************/