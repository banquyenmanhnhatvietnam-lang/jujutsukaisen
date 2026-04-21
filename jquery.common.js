$(function(){ 
	//ANCHOR SMOOTH SCROLL
	$('.anchor').click(function() {
		var speed = 800;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'easeInOutQuint');
		return false;
	});

    //MOVIE EVENT
    $(".movPlay").on("click", function(){
        var ytID = $(this).data("ytid");
        var ytURL = 'https://www.youtube.com/embed/'+ytID+'?autoplay=1&rel=0';
        $("#movModal").fadeIn(500);
        setTimeout(function(){
            $("#movModalIn iframe").attr("src",ytURL);
        },100);
    }); 
    //MOVIE CLOSE
    $(".modalClose a").click(function(){
        $("#movModal").fadeOut(500);
        setTimeout(function(){
            $("#movModalIn iframe").attr('src','');
        },500);
    });

    //MENU TRIGGER
    $(".menu-trigger").on("click", function(){
        $(this).toggleClass("active");
        $("#triggerBox").toggleClass("active");
        if($(this).hasClass("active")){
            $(".menu-trigger small").text("CLOSE");
            $("#headIn").addClass("active on");
        }else{
            $(".menu-trigger small").text("MENU");
            $("#headIn nav ul li").removeClass("active");
            $("#headIn").removeClass("on");
            setTimeout(function(){
                $("#headIn").removeClass("active");
            },800);
        }
    });
    
	//Storyの画像切り替え
	$(".imgClick a").click(function(){
		 var imgsrc = $(this).children("img").attr("src");
		 $(this).parents("#imgBox").find(".detaiImg img").attr("src",imgsrc);
		 $(".imgClick li a").removeClass('active');
		 $(this).addClass('active');
	 });

	$(window).on("load resize",function(){
		var rNav_h = $("#rNav").outerHeight();
		var rNav_list_h = $("#rNav li").outerHeight();
		var rNav_num = $("#rNav li").length;
		//var rNav_ul_h = rNav_list_h*rNav_num;

		var hcalc = -(400 - rNav_h);
		var hcalc02 = (hcalc/rNav_num);

		if (rNav_h > 400) {
			$("#rNav li").css('margin', hcalc02+'px'+' '+0);
		}
	});
		if($(".imgClick")[0]){
		var imgs = $(".imgClick li").length;
		$("#detailLeft a").on('click',function(){
			var nn = parseInt($(".detaiImg").attr('data-n'));
			nn--;
			if(nn < 1){
				nn = imgs;
			}
			$(".detaiImg img").attr('src',$(".imgClick li:nth-of-type("+nn+") img").attr('src'));
			$(".detaiImg").attr('data-n',nn);
		});
		$("#detailRight a").on('click',function(){
			var nn = parseInt($(".detaiImg").attr('data-n'));
			nn++;
			if(nn > imgs){
				nn = 1;
			}
			$(".detaiImg img").attr('src',$(".imgClick li:nth-of-type("+nn+") img").attr('src'));
			$(".detaiImg").attr('data-n',nn);
		});
	}	
	
    // PC/SP SWITCH
    // var pcD = '_pc.';
    // var spD = '_sp.';
    // var bp = 768;
    // var ww = window.innerWidth;
    // var loadP = (bp < ww) ? pcD : spD, viewP;
    // $(window).on("resize", function(){
    //     ww = window.innerWidth;
    //     viewP = (bp < ww) ? pcD : spD;
    //     if (loadP != viewP) {
    //         setTimeout("window.location.reload()", 1);
    //     }
    // });
});