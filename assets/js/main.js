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

                // 동영상 hold로 주석처리
                /* let thisActiveIndex = this.activeIndex;
                let currentVideo = $(".visualSwiper .swiper-slide").eq(thisActiveIndex).find("video");
                currentVideo.get(0).currentTime = 0;
                currentVideo.get(0).play(); */
            },
        },
    });
    let firstSet = function(){
        $(".visualControl button").eq(0).addClass("on");
    };
    setTimeout(firstSet, 100);
});