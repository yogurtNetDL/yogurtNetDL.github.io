$(document).ready(function () {
	$("#container").slideDown(1000);
	var current_page = 1;
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
		$("#h_"+page_id.toString()).slideToggle();
		$("#h_"+next_id.toString()).slideToggle();
		current_page = next_id;
	}
})