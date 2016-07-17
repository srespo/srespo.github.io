
$(document).ready(function(){
	$("#section-six").on("mouseenter", function(){
		var weeweeimage = $("#weeweeimage");
		weeweeimage.css('left', -300);
		weeweeimage.fadeIn();
		weeweeimage.animate({
			left: $(document).width() - 300
		}, 3500, function() {
			weeweeimage.fadeOut();
		});
	});
	
$("#panel3").on("mouseenter", function()
  {
    $("#fish").fadeIn()
  });

     // when the document is ready, I want this function to happen
$("#bobthebutton").click(function(){
	var randomRed = generateRandomColor();
	var randomGreen = generateRandomColor();
	var randomBlue = generateRandomColor();
	var randomColor = "rgb"(randomRed + "," + randomGreen + "," + randomBlue + ",");
	$("#section-seven").css("background-color", randomColor);
});

function generateRandomColor() {
	return Math.round(Math.random) * 255;
}

$('#myMove').click(myMove);

function myMove() {
  var elem = document.getElementById("weeweeimage");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      //elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

// $("#form-submit").click(function(){
//  if($("user-agree").is(":checked"))//

//three images, each one has a radio button below it.
// when left radio button is clicked, block gets larger until it fills screen
// when middle button is clicked, block gets wider until is fills the width of screen
//when right button is clicked, image shrinks

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
