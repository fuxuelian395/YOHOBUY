$(function () {
    //客户端二维码隐藏
    $('.fork').click(function () {
        $(".code-img").hide();
        $(".code-title").hide();
        $(".fork").hide();
    })
    //锚点图片切换
    $(".thumb-pagniation ul li").hover(function () {
        var index = $(this).index();
        $(".thumb-pagniation ul li").eq(index).css("background", "rgba(0,0,0,0.2)")
            .siblings().css({
                "background": "black",
                "opacity": "0.8"
            });
        $(".slide-wrapper ul li").eq(index).show().siblings().hide();
    });

    // 轮播图按钮切换图片
    $(".slide-switch prev").click(function () {
        var index = $(this).index();
        $(".slide-wrapper ul li").eq(index-1).fadeIn(500);
    })

    //轮播图切换
    var index = 0;
    //定时器，每秒切换一次
    var timer = setInterval(autoplay, 1000);

    function autoplay() {
        index++;
        $(".slide-wrapper ul li").eq(index).fadeIn(500).siblings().fadeOut(500);
        if (index == $(".slide-wrapper ul li").length - 1) {
            index = -1;
        }
    }
    $(".slide-wrapper ul li").mouseover(function () {
        clearInterval(timer);
        index = $(this).index() - 1;
        autoplay();
    }).mouseout(function () {
        timer = setInterval(autoplay, 1000);
    })
    // 顶部二级菜单
    $(".wrap-left").hover(function () {
        $(".wrap-left").css("background-color", "#ccc");
        $(".yoho-group-list").show().css({
            "background": "#f4f4f4",
            "z-index": "999"
        });

    }, function () {
        $(".yoho-group-list").hide();
        $(".wrap-left").css("background-color", "#fff");
    })
    // 顶部客服中心

    $(".help").hover(function () {
        $(".help").css("background-color", "#ccc")
        $(".nav-drop-down").show();
    }, function () {
        $(".help").css("background-color", "#fff");
        $(".nav-drop-down").hide();
    })

    // 右边底部固定
    $(".qrcode-download-right").hover(function () {
        $(".download-app-box").show();
    }, function () {
        $(".download-app-box").hide();
    });

    // scorllTop到一定的高度，
    // 底部固定二维码和返回顶部图标才出现
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".right-floating-layer").show();
        }
        if ($(window).scrollTop() <= 100) {
            $(".right-floating-layer").hide();
        }
    })

    // 点击箭头,回到顶部
    $(".return-top").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    })
    // 切换主题颜色
    // 男生

$(".main-nav-list").children().eq(0).click(function () {
        $(this).addClass("show").siblings().attr("class", "");
        $(".nav-wrapper").css("background-color", "#3a3a3a");
    })
    $(".main-nav-list").children().eq(1).click(function () {
        $(this).addClass("show1").siblings().attr("class", "");
        $(".nav-wrapper").css({
            "background-color": "#ff88ae"
        });
    })
    $(".main-nav-list").children().eq(2).click(function () {
        $(this).addClass("show2").siblings().attr("class", "");
        $(".nav-wrapper").css({
            "background-color": "#7bd3f9"

        });
    })
    $(".main-nav-list").children().eq(3).click(function () {
        $(this).addClass("show3").siblings().attr("class", "");
        $(".nav-wrapper").css("background-color", "#5e4b3c");
    })


    // 小轮播图切换
    
   


})