$(document).ready(function () {
	$("#container").slideDown(1000);
	$("#a1").hide()
	$("#a2").hide()
	$("#a3").hide()
	$("#a4").hide()
	$("#a5").hide()
	$("#q1").click(function(){$("#a1").slideToggle()})
	$("#q2").click(function(){$("#a2").slideToggle()})
	$("#q3").click(function(){$("#a3").slideToggle()})
	$("#q4").click(function(){$("#a4").slideToggle()})
	$("#q5").click(function(){$("#a5").slideToggle()})
})