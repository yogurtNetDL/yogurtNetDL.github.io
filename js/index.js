$(document).ready(function () {
	$("#container").slideDown(1000);
	$("#show_navigation").click(function(){
		$("#navigation").slideDown();
		$("#title_content").slideUp(400,function (){
				$('#container').animate({
		        scrollTop: $("#navigation").offset().top + $("#container").scrollTop() - 30
		    }, 1000);}
	    );
		
	})
})