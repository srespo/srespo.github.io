//client side javascript file
$(document).ready(function() {
    var socket = io("http://localhost:3000"); //any time we reference this variable (socket) we are referencing this connection between zack and the pizza place
    $("#chat-start").click(function() {
        $.ajax({
            url: "http://localhost:3000/get_archive",
            success: function(data) {
                $("#chat-log ul li").remove();
                for (var i = 0; i < data.length; i++) {
                    var msg = data[i];
                    if (msg.username == $("#chat-name").val()) {
                        $("#chat-log ul").append('<li class="me-line"><b>' + msg.username + "</b>: " + msg.text + "</li>");
                    } else {
                        $("#chat-log ul").append('<li class="them-line"><b>' + msg.username + "</b>: " + msg.text + "</li>");
                    }
                }

            }

        });
    });
    $("#chat-form").submit(function() {
        var messageObject = {};
        messageObject.username = $("#chat-name").val();
        messageObject.text = $("#chat-input").val();

        socket.emit("chat message", messageObject);
        $("#chat-input").val(""); //set the value of the text box to "nothing" after message is submitted
        return false; //dont reload the page
    });

    socket.on("chat message", function(msg) {

        if (msg.username == $("#chat-name").val()) {
            $("#chat-content").append('<li class="me-line"><b>' + msg.username + '</b>: ' + msg.text + '</li>').ready(function() {
            	
            });
        } else {
            $("#chat-content").append("<li class='them-line'><b>" + msg.username + "</b>: " + msg.text + "</li>");
        }

        $("#chat-content img").last().ready().each(function() {
        	console.log(this);
        	$(this).ready(function() {
        		getChat();
        	});
        });

        function getChat() {
            console.log("getChat function called");
            var div = $("#chat-content");
            console.log(div.prop('scrollHeight'), div.height());
            div.scrollTop(div.prop('scrollHeight'));
        }

    });
})
