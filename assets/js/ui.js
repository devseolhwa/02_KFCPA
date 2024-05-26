$(function(){

    AOS.init({
        once : true,
        throttleDelay : 99,
        duration: 1000
    });
    
    $(window).on("scroll", function(){
        const wh = $(window).scrollTop();
        if(wh <= 0){
            $("#header").removeClass("fix");
        } else {
            $("#header").addClass("fix");
        }
    });
   
    $("#header, #gnb").mouseover(function(){
        $("#header").addClass("on");
    }).mouseleave(function(){
        $("#header").removeClass("on");
    });

    // gnb
    $(document).on("mouseenter focus", "#gnb > ul > li > a", function () {
        $(this).parent("li").addClass("active").siblings("li").removeClass("active");
        $(this).next("ul").slideDown();
        return false;
    }).on("mouseleave", "#gnb > ul > li", function () {
        $(this).children("ul").slideUp();
        $(this).removeClass("active");
        return false;
    });

    // mobile menu
    $(document).off("click", ".btnSitemapOpen").on("click", ".btnSitemapOpen", function(e) {
        e.preventDefault();
        $(".sitemapWrap").fadeIn();
        $("body").addClass("scrollLock");
        $("body").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    });
    $(document).off("click", ".btnSitemapClose").on("click", ".btnSitemapClose", function(e) {
        e.preventDefault();
        $(".sitemapWrap").fadeOut();
        $("body").removeClass("scrollLock");
        $("body").off("scroll touchmove mousewheel");
    });

    $(document).off("click", ".sitemapBody > ul > li > a").on("click", ".sitemapBody > ul > li > a", function(e) {
        e.preventDefault();
        $(this).parent("li").toggleClass("on").siblings("li").removeClass("on");
        $(".sitemapBody > ul > li").each(function () {
            let onCheck = $(this).is(".on");
            if (onCheck) {
                $(this).children("ul").slideDown();
            } else {
                $(this).children("ul").slideUp();
            }
        });
    });

    // 상단으로
    let btnTop = document.querySelector("#btnTop"),
        headerH = 70;

    window.addEventListener("scroll", () => {
        if (window.scrollY > headerH) {
            btnTop.classList.add("show");
        } else {
            btnTop.classList.remove("show");
        }
    });
    $("#btnTop").on("click", function(){
		$("html, body").stop().animate({ scrollTop: 0 });
	});
});