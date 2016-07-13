


/* JS COMMENTS N MULTIPLE LINES*/

/* JS telling jQuery when its time to run a script 
(so it doesn’t start immediately and take a while to run through the file)*/

<script>


$(document).ready(function(){
	$("p").mouseenter(function(){
		$("p").css("background-color", "yellow");

	});

</script>




$("#background").mouseleave(function({
    $(this).css("border", "none");});


 $("#background").mouseenter(function(){
    $(this).css("border", "solid 2px #990033");});
/* above says: when the mouse enters the background space, show a pink border*/
 $("#background").mouseleave(function(){
    $(this).css("border", "none");});

$(document ).ready(function(){
    $("#content").fadeOut();

$( "p" ).text( "The DOM is now loaded and can be manipulated." );
  }