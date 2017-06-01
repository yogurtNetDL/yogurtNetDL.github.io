$(document).ready(function () {
	$("#container").slideDown(1000);
	var current_page = 1;
	$("#prev_step").hide()
	$("#prev_step").click(function(){
		if(current_page>1){
			gotopage(current_page,current_page-1)
		}
	})
	$("#next_step").click(function(){
		if(current_page<4){
			gotopage(current_page,current_page+1)
		}
	})
	function gotopage(page_id,next_id){
		if(next_id==4){
			$("#next_step").hide()
		}else{
			$("#next_step").show()
		}
		if(next_id==1){
			$("#prev_step").hide()
		}else{
			$("#prev_step").show()
		}
		$("#h_"+page_id.toString()).slideToggle();
		$("#h_"+next_id.toString()).slideToggle();
		$('#container').animate({
	        scrollTop: $("#howtouse_box").offset().top + $("#container").scrollTop() - 30
	    }, 400);
		current_page = next_id;
	}
})