$(function(){
    
    // 비주얼 스와이프
    let videoBulArray = ["01", "02", "03"];
    let videovisual = new Swiper(".visualSwiper", {
        effect : "fade",
        centeredSlides: true,
        speed: 1000,
        loop: false,
        autoplay: {
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<button type="button" class="' + className + '">' + videoBulArray[index] + '<span class="bar"></span></button>';
            },		
        },
        on: {
            slideChangeTransitionStart: function(){
                let num = this.activeIndex + 1;
                $(".visualControl button").removeClass("on");
                $(".visualControl button:nth-child(" + num + ")").addClass("on");
            },
        },
    });
    let firstSet = function(){
        $(".visualControl button").eq(0).addClass("on");
    };
    setTimeout(firstSet, 100);


    $(".thumbBtnGroup li").click(function(){
		const index = $(this).index();
		if($(this).hasClass("on") == false){
			$(this).addClass("on").siblings().removeClass("on");
			$(".thumbWrap").hide();
			$(".thumbListGroup li").stop().fadeOut();
			$(".thumbListGroup li").eq(index).children(".thumbWrap").show();
			$(".thumbListGroup li").eq(index).stop().fadeIn();
			$(".thumbListGroup li .aos-init").removeClass("aos-animate");
			$(`[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos]`).css("transition-duration","0s");
			setTimeout(() => {
				$(`[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos]`).css("transition-duration","1s");
				$(".thumbListGroup li .aos-init").addClass("aos-animate");
			} , 100);
		}		
	});
    
});