$(document).ready(function () {
	$("#container").slideDown(1000);
	var step1_hidden = 1;
	var step2_hidden = 1;
	$("#step1_box").click(function(){
		if (step1_hidden == 1){
			$("#step1_content").slideDown(400,function (){
				$('#container').animate({
			        scrollTop: $("#step1_box").offset().top + $("#container").scrollTop() - 30
			    }, 1000);}
		    );
		    step1_hidden = 0;
		}
	})
	$("#step2_box").click(function(){
		if (step2_hidden == 1){
			$("#step2_content").slideDown(400,function (){
				$('#container').animate({
			        scrollTop: $("#step2_box").offset().top + $("#container").scrollTop() - 30
			    }, 1000);}
		    );
		    step2_hidden = 0;
		}
	})
	var current_page = 1;
	$("#prev_step").click(function(){
		if(current_page>1){
			gotopage(current_page,current_page-1)
		}
	})
	$("#next_step").click(function(){
		if(current_page<3){
			gotopage(current_page,current_page+1)
		}
	})
	function gotopage(page_id,next_id){
		$("#step2_"+page_id.toString()).slideToggle();
		$("#step2_"+next_id.toString()).slideToggle();
		$('#container').animate({
	        scrollTop: $("#step2_box").offset().top + $("#container").scrollTop() - 30
	    }, 400);
		current_page = next_id;
	}
})