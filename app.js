
$(document).ready(function(){     // when the document is ready, I want this function to happen
  $("#panel3").on("mouseenter", function() {
    $("#fish").fadeIn() 
  });

// $("#form-submit").click(function(){
//  if($("user-agree").is(":checked"))//

//three images, each one has a radio button below it.
// when left radio button is clicked, block gets larger until it fills screen
// when middle button is clicked, block gets wider until is fills the width of screen
//when right button is clicked, image shrinks 

//Check and un-check a specific radio button:
<script>
$("#leftradiobutton").che

function myFunction() {
    var  = document.getElementById("leftRadio").checked;
    document.getElementById("hooray!").innerHTML = x;
}

function uncheck() {
    document.getElementById("red").checked = false;
}
</script>


////
});
$("#next-color").click(function(){
	var randomRed = generateRandomColor();
	var randomGreen = generateRandomColor();
	var randomBlue = generateRandomColor();
	var randomColor = "rgb"("" + randomRed + "," + randomGreen + "," + randomBlue + ",");
	$("#rhyme").css({"background-color":randomColor});

function generateRandomColor(){
	return Math.round(Math.random() * 255)