
$(document).ready(function(){

$("#user-name").focus(function(){
		$(this).css({"background-color":"#33ff66"
	});

$("#user-name").blur(function(){
		$(this).css({"background-color":"inherit"});
	});

//"#user-name" can be subbed for input to have them all do the same thing

$("?").click(function(){
	if($(this).is(":checked"))
		{
			$("#smiley").text("B-)");
		}else{
			$("#smiley").text("B-(");
		}
		
		});
	
	$("#user-country").change(function()
	{
		alert($(this).val());
	});

$("#form-submit").click(function(e){

		e.preventDefault();

		$("#name-result").text($("#user-name").val())
		$("#email-result").text($("#user-email").val(
			if($("user-happy").is(":checked"))
			{
				$(happy-result.text("are");
			}
			else
			{
			$("#happy-result").text$("aren't");
		}

		var countryVal = $("#user-country").val();
		var countryName = $("#user-country option[value='" + countryVal + "']").text()
		$("#country-result".text(countryName);
	});

});