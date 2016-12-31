$(document).ready(function () {
    var restrictAjaxcall = false;
    var muserId;
    var requestId;
    var uniqueId;
    var obj;
    var mychatText;
    var inc = 0;
    var senderCont = 0;
    var recieverCont = 0;
    var incrementSenRec = 0;
    var listCreated = false;
    var pubnub;
    var latandlng;
    var lat;
    var lng;
    /** dashboard chat variables **/
    var userRequestId;
    var dashchatText;
    var dashChannelId;
    var currentUserid;
    var Keyvalue = null;

    $('#askdocchat').prop('disabled', true);

    $('#chattext').keyup(function () {
        $('#askdocchat').prop('disabled', this.value == "" ? true : false);
    });

    // TO get user lat and lng
    // $.getJSON('http://ipinfo.io', function (data) {
    //     latandlng = data.loc;
    //     var substring = latandlng.split(',', 2);
    //     lat = substring[0];
    //     lng = substring[1];
    // });


    $("#askaDocChat").submit(function (e) {
        e.preventDefault();
        mychatText = $('#chattext').val();
        // if ((lat == "" || lat == null) && (lng == "" || lng == null)) {
        //     var lat = "19.1828";
        //     var lng = "74.8402";
        // }
        url = '/askdoc';
        data = {chatText: mychatText, userlat: '19.1828', userlng: '74.8402'};

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $('#chattext').val('');
        if (!restrictAjaxcall) {
            $.ajax({
                url: url,
                method: 'POST',
                datatype: 'JSON',
                data: data,
                success: function (response) {
                    //*** restrictAjaxcall true ***/
                    restrictAjaxcall = true;
                    var getResponse = response.result;
                    //alert(getResponse);
                    $('#showdocresponse').show().delay(1000).fadeOut();
                    window.location = "http://murgency.com/request";
                    muserId = response.userid;
                    requestId = getResponse.substr(getResponse.indexOf("-") + 1);
                    RequestSuccess();
                },
                error: function (data) {
                  // console.log(data);
				   $('#showdocresponse').show().delay(8000).fadeOut();
				   window.location = "http://dev.murgency.com/request";
                }
            });
        } else {
            incrementSenRec++;
            RequestSuccess();
        }
    });

    function RequestSuccess() {
        senderCont++;
        obj = {
            "description": "",
            "id": uniqueId,
            "message": mychatText,
            "sender": muserId,
            "senderimage": "",
            "sendername": "Sender",
            "type": "text"
        };
        if (recieverCont == 0 && inc > 0) {
            $("#chatHistory").append("<ul id='list' data-role='listview' data-inset='true'></ul>");
            $("#chatHistory").trigger("create");
            var listItem = "<li class='usermessage'><span class='username'>You:</span>" + mychatText + "</li>";
            $("#list").append(listItem);
            recieverCont++;
        } else {
            $("#chatHistory").append("<ul id='list' data-role='listview' data-inset='true'></ul>");
            $("#chatHistory").trigger("create");
            var listItem = "<li class='usermessage'><span class='username'>You:</span>" + mychatText + "</li>";
            $("#list").append(listItem);
            recieverCont = 0;
        }
        SendMessage(requestId, muserId);
    }

    /********** get user chat history *******/
    $('.open-acc-chat').click(function (e) {
        $('.loading-image').show();
        $('.showUserChatHistory').html(" ");
        e.preventDefault();
        userRequestId = $(this).attr("data-channelid");
        currentUserid = $(this).attr("data-userid");
        Keyvalue = $(this).attr("data-key");
        getUserHistory(userRequestId, currentUserid);
    });


    function settingPubNub(userId) {
        pubnub = PUBNUB({
            publish_key: 'pub-c-0703e803-9a7b-413e-a50e-c450bbf6a0ad',
            subscribe_key: 'sub-c-5cf64d80-f257-11e3-928e-02ee2ddab7fe',
            uuid: userId,
        });
        return pubnub;
    }

    function SendMessage(requestId, userId) {
        if (inc == 0) {
            pubnub = settingPubNub(userId);
        }
        pubnub.subscribe({
            channel: requestId,
            message: function (details) {
                uniqueId = inc;
                console.log(details);
                inc++;
                recieverCont++;
                console.log(incrementSenRec);
                if (details.sendername != 'Sender' && details.message != '') {
                    if (senderCont > 0) {
                        $("#chatHistory").append("<ul id='list' data-role='listview' data-inset='true'></ul>");
                        $("#chatHistory").trigger("create");
                        var listItem = "<li class='docmessage'><span class='username'>Dr:</span>" + details.message + "</li>";
                        $("#list").append(listItem);
                        senderCont++;
                    } else {
                        $("#chatHistory").append("<ul id='list' data-role='listview' data-inset='true'></ul>");
                        $("#chatHistory").trigger("create");
                        var listItem = "<li class='docmessage'><span class='username'>Dr:</span>" + details.message + "</li>";
                        $("#list").append(listItem);
                        senderCont = 0;
                    }
                    incrementSenRec++;
                }
            },
            connect: sendRecieveMess(requestId)
        });
    };

    function sendRecieveMess(requestId) {
        pubnub.publish({
            channel: requestId,
            message: obj,
            callback: function (m) {
            }
        })
    }

    //Get User history Message in dashboard
    function getUserHistory(userRequestId, currentUserid) {
        var userId = currentUserid;
        var getVal;
        pubnub = settingPubNub(userId);
        pubnub.history({
            channel: userRequestId,
            callback: function (data) {
                if (typeof data[0] != "undefined" && data[0] != null && data[0].length > 0) {
                    $.each(data[0], function (key, value) {
                        console.log(value.sendername, value.message);
                        if (value.message != "") {
                            $('.loading-image').hide();
                            $("#showUserChatHistory").append("<ul id='chatlist' data-role='listview' data-inset='true'></ul>");
                            $("#chatlist").trigger("create");
                            if (value.sendername == 'Sender') {
                                var chatlistItem = "<li class='usermessage'><span class='username'>You:</span>" + value.message + "</li>";
                                $(".showUserChatHistory").append(chatlistItem);
                            }
                            else {
                                var chatlistItem = "<li class='docmessage'><span class='username'>Dr:</span>" + value.message + "</li>";
                                $(".showUserChatHistory").append(chatlistItem);
                            }
                        }
                    });
                } else {
                    $('.loading-image').show().delay(8000).hide();
                    $('.show-emptychatmsg').show();
                }
            },
            count: 100, // 100 is the default
            reverse: false // false is the default
        });
    }


    /** Chat from dashboard **/
    $(".dashboard-chatForm").submit(function (e) {
        e.preventDefault();
        $('.show-emptychatmsg').hide();
        var formId = '#' + $(this).attr('id');
        dashchatText = $('.dashboard-chattext', formId).val();
        var dashchannelID = $('.dashboard-channelid', formId).val();
        var dashboarduserId = $('.dashboard-userid', formId).val();
        DashboardRequestSuccess(dashchatText, dashchannelID, dashboarduserId);
        $('.dashboard-chattext', formId).val('');
    });

    function DashboardRequestSuccess(dashchatText, dashchannelID, dashboarduserId) {
        senderCont++;
        obj = {
            "description": "",
            "id": uniqueId,
            "message": dashchatText,
            "sender": dashboarduserId,
            "senderimage": "",
            "sendername": "Sender",
            "type": "text"
        };
        if (recieverCont == 0 && inc > 0) {
            $("#showUserChatHistory").append("<ul id='chatlist' data-role='listview' data-inset='true'></ul>");
            $("#chatlist").trigger("create");
            var listItem = "<li class='usermessage'><span class='username'>You:</span>" + dashchatText + "</li>";
            $(".showUserChatHistory").append(listItem);
            recieverCont++;
        } else {
            $("#showUserChatHistory").append("<ul id='chatlist' data-role='listview' data-inset='true'></ul>");
            $("#chatlist").trigger("create");
            var listItem = "<li class='usermessage'><span class='username'>You:</span>" + dashchatText + "</li>";
            $(".showUserChatHistory").append(listItem);
            recieverCont = 0;
        }
        dashSendMessage(dashchannelID, dashboarduserId);
    }

    function dashSendMessage(dashchannelID, dashboarduserId) {
        if (inc == 0) {
            pubnub = settingPubNub(dashboarduserId);
        }
        pubnub.subscribe({
            channel: dashchannelID,
            message: function (details) {
                uniqueId = inc;
                //console.log(details);
                inc++;
                recieverCont++;
                //console.log(incrementSenRec);
                if (details.sendername != 'Sender' && details.message != '') {
                    if (senderCont > 0) {
                        $("#showUserChatHistory").append("<ul id='list' data-role='listview' data-inset='true'></ul>");
                        $("#chatHistory").trigger("create");
                        var listItem = "<li class='docmessage'><span class='username'>Dr:</span>" + details.message + "</li>";
                        $(".showUserChatHistory").append(listItem);
                        senderCont++;
                    } else {
                        $("#showUserChatHistory").append("<ul id='list' data-role='listview' data-inset='true'></ul>");
                        $("#chatHistory").trigger("create");
                        var listItem = "<li class='docmessage'><span class='username'>Dr:</span>" + details.message + "</li>";
                        $(".showUserChatHistory").append(listItem);
                        senderCont = 0;
                    }
                    incrementSenRec++;
                }
            },
            connect: dashboardsendRecieveMess(dashchannelID)
        });
    };

    function dashboardsendRecieveMess(dashchannelID) {
        pubnub.publish({
            channel: dashchannelID,
            message: obj,
            callback: function (m) {
            }
        })
    }


});
