function firstAnimation(_s){
    var ww = $(window).innerWidth();
    //PC====▼
    if(ww > 768){
        if(_s){
            $("html,body").animate({scrollTop:0},1, function(){
                $("#cMark").addClass("active");
                $("#cMark.active").on('webkittransitionend transitionend',function(){
                    $("#topLoading, #topWrap").addClass("active"); //黒アニメーション
                    $("#topLoading.active").on('webkitAnimationEnd AnimationEnd',function(){
                        $("#topLoading").remove();
                        $("#blueBg").addClass("active"); //青アニメーション
                        $("#blueBg.active").on('webkitAnimationEnd AnimationEnd',function(){
                            $("#blueBg").remove();
                            setTimeout(function(){
                                $("#vsArea").removeClass("active");
                                $("#topChara").addClass("active");
                                setTimeout(function(){
                                    $(".vsSmoke").addClass("active");
                                    setTimeout(function(){
                                        $(".ani, body#index").addClass("active");
                                        setTimeout(function(){
                                            $(".movPlay").click();
                                        },1800);
                                        mvSwiper();
                                    },1);
                                },1);
                            },1);
                        });
                    });
                });
            });
        } else {
            $("#blueBg").remove();
            $("#vsArea").removeClass("active");
            $("#topChara, .vsSmoke, .ani, body#index").addClass("active");
            $("html,body").animate({scrollTop:0},1, function(){
                $("#cMark").addClass("active");
                $("#cMark.active").on('webkittransitionend transitionend',function(){
                    $("#topLoading, #topWrap").addClass("active"); //黒アニメーション
                    $("#topLoading.active").on('webkitAnimationEnd AnimationEnd',function(){
                        $("#topLoading").remove();
                        mvSwiper()
                    });
                });
            });
        }
    //SP====▼
    } else {
        if(_s){
            $("#cMark").addClass("active");
            $("#cMark.active").on('webkittransitionend transitionend',function(){
                $("#topLoading, #topWrap").addClass("active"); //黒アニメーション
                $("#topLoading.active").on('webkitAnimationEnd AnimationEnd',function(){
                    $("#blueBg").addClass("active"); //青アニメーション
                    $("#blueBg.active").on('webkitAnimationEnd AnimationEnd',function(){
                        $("#blueBg, #topLoading").remove();
                        $("body#index main, .aniS").addClass("active");
                        $(".movPlay").click();
                        // $(".contentWrap__img").delay(700).animate({scrollLeft:ww+'px'},1800,'easeInOutCubic',function(){
                        //     $(".contentWrap__img").delay(700).animate({scrollLeft:ww/2},1500,'easeInOutCubic');
                        // });
                        mvSwiper()
                    });
                });
            });
        } else {
            $(".contentWrap__img").delay(300).animate({scrollLeft:ww/2},5,'easeInOutCubic')
            $("#blueBg").remove();
            $("body#index main, .aniS").addClass("active");
            $("#cMark").addClass("active");
            $("#cMark.active").on('webkittransitionend transitionend',function(){
                $("#topLoading, #topWrap").addClass("active"); //黒アニメーション
                $("#topLoading.active").on('webkitAnimationEnd AnimationEnd',function(){
                    $("#topLoading").remove();
                    mvSwiper()
                });
            });
        }
    }
}
function resizeHandler(){
    var wh = $(window).innerHeight(); 
    //$("body#index #inWrap").css({"height":wh + "px"});

    var vh = $("#vsArea").innerHeight();
    var vht = vh * 0.38;
    // $("#vsArea").css({"top":-(vht) + "px"});
    $("#vsArea").css({"top":"0px"});
}
function scrollHandler(){
//     var scT = $(window).scrollTop();
//     var scL = $(window).scrollLeft();
//     var stp = $("#inWrap").outerHeight();
//     var wh = window.innerHeight;
//     var ww = window.innerWidth;
//     if(scT > stp - wh){
//         $("body#index #headIn,body#index main").css({"top":(stp - wh)-scT});
//     }else{
//         $("body#index #headIn,body#index main").css({"top":0});
//     }
//     if(ww < 1200){
//         $("body#index #headIn,body#index main").css({"left":-(scL)+'px'});
//     }else{
//         $("body#index #headIn,body#index main").css({"left":0});
//     }
}
$(function(){
    //USER AGENT
    $("meta[name=viewport]").remove();
    var agent = window.navigator.userAgent.toLowerCase();
    if ((agent.indexOf('ipad') > -1 || agent.indexOf('macintosh') > -1 && 'ontouchend' in document) && window.orientation != 0){
        $("head").append('<meta name="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=no">');
    }else{
        $("head").append('<meta name="viewport" content="width=768">');
    }
    if ((navigator.userAgent.indexOf('iPhone') > 0) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        $("head").append('<meta name="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=no">');
    }

    //PC/SP CHANGE
    var ww = $(window).innerWidth();
    //PC▼
    if(ww > 768){
        // var scene = document.getElementById('scene');
        // var parallax = new Parallax(scene);
    //SP▼
    } else {
        $(".bnrs").appendTo('#fbn');
    }
    $(window).on("load resize scroll", function(){
        if(ww > 768){ /*resizeHandler();*/scrollHandler(); }
    });
    
    //ANIMATION TRIGGER
    $(window).on("load", function(){
        var hs = location.hash;
        if(hs){
            firstAnimation(false);
        }else{
            firstAnimation(true);
        }
    });

    //MOVIE-THUMB
    var ytid = $(".movPlay").attr("data-ytid");
    $(".movPlay").css({"background-image":"url(https://i.ytimg.com/vi/"+ytid+"/hqdefault.jpg)"});
});
var mvSwp;
function mvSwiper(){
    mvSwp = new Swiper('.contentWrap__imgSwiper', {
        loop:true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction:false,
        },
    });
}
function mv(_mvnum) {
    mvSwp.slideToLoop(_mvnum);
}