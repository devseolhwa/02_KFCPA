$(function(){
    
    //lnb
	$("#subVisual .lnb li.location02").on("click", function(){
		$(this).toggleClass("active");
		$(this).find(".depth02").stop().slideToggle();
	});
});