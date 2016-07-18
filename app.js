
$(document).ready(function(){     // when the document is ready, I want this function to happen
	$("#section-five").on("mouseenter", function(){
		var weeweeimage = $("#weeweeimage");
		weeweeimage.css('left', -300);
		weeweeimage.fadeIn();
		weeweeimage.animate({
			left: $(document).width() - 300
		}, 3500, function() {
			weeweeimage.fadeOut();
		});
	});

$( "p" ).click(function() {
  $( this ).slideUp();
});


$("#sendname").click(function(){
	window.alert("firstname: " + $("#firstname").val() + "\n" + "lastname: " + $("#lastname").val());
});
	




//Check and un-check a specific radio button:

function myFunction() {
    var leftRadio = document.getElementById("leftRadio").checked;
    document.getElementById("hooray!").innerHTML = x;
}

function uncheck() {
    document.getElementById("red").checked = false;
}


$("#next-color").click(function(){
	var randomRed = generateRandomColor();
	var randomGreen = generateRandomColor();
	var randomBlue = generateRandomColor();
	var randomColor = "rgb"(randomRed + "," + randomGreen + "," + randomBlue + ",");
	$("#sectiontwo").css({"background-color":randomColor});
});

function generateRandomColor() {
	return Math.round(Math.random) * 255;
}

});
