;
//手机板块
! function() {
    $.ajax({
        url: "http://127.0.0.1:8080/HUAWEI/php/sy.php",
        dataType: "json",
    }).done(function(data) {
        var $html = ' <ul class="grid-list clearfix ">';
        $.each(data, function(i, elm) {
            var arr = elm.pic.split(',');
            $html += `
                <li class="grid-items" style="width:227px">
                    <a class="thumb" href="details.html?sid=${elm.id}" target="_blank">
                        <div class="grid-info">
                            <p class="grid-img">
                                  <img alt="荣耀Play 全网通 6GB+128GB 极光蓝 GT游戏加速 AI芯片 全面屏游戏手机 双卡双待" class="lazy" data-original="${arr[0]}">
                            </p>
                        </div>
                        <div class="grid-title">${elm.title}</div>
                        <p class="grid-desc">${elm.desc}&nbsp;</p>
                        <p class="grid-price">¥${elm.price}</p>
                        <p class="grid-tips">
                        <em class="thumb"><span class="color01" style="background-color:#FF6A6E">爆款</span></em>
                          </p>
                        </a>
                </li>
			`;
        });
        $html += '</ul>';
        // $('.goodslist').html($html);
        $('#list').html($html)
        $(function() { //和拼接的元素放在一起。
            $("img.lazy").lazyload({
                effect: "fadeIn" //图片显示方式
            });
        });
    });
}();
//电脑板块
! function() {
    $.ajax({
        url: "http://127.0.0.1:8080/HUAWEI/php/sy1.php",
        dataType: "json",
    }).done(function(data) {
        var $html = '<ul class="grid-list clearfix ">';
        $.each(data, function(i, elm) {
            $html += `
                <li class="grid-items">
                <a class="thumb" href="details.html?sid=${elm.id}" target="_blank">
                    <div class="grid-info">
                        <p class="grid-img">
                            <img call="lazy" src="${elm.pic}">
                        </p>
                    </div>
                    <div class="grid-title">${elm.title}</div>
                    <p class="grid-desc">${elm.desc}&nbsp;</p>
                    <p class="grid-price">¥${elm.price}</p>
                    <p class="grid-tips">
                        <em class="thumb"><span class="color01" style="background-color:#FF6A6E">爆款</span></em>
                    </p>
                </a>
            </li>
			`;
        });
        $html += '</ul>';
        $('#dn').html($html)
        $(function() { //和拼接的元素放在一起。
            $("img.lazy").lazyload({
                effect: "fadeIn" //图片显示方式
            });
        });
    });
}();
//顶部图片关闭
! function($) {
    const $close = $('.button-top-banner-close')
        // console.log($close)
    $close.on('click', function() {
        $(this).parent().empty()
    })
}(jQuery);
// 楼梯效果
! function() {
    const $cebiannav = $('.loutinav');
    const $last = $('.last')
        // 1.显示侧边导航
    const $bankuai = $('.cebiannav')
    const $louti = $('.loutinav li')
    $(window).on('scroll', function() {
            let $scrolltop = $(window).scrollTop();
            // console.log($scrolltop)
            if ($scrolltop >= 750) {
                $cebiannav.show()
            } else {
                $cebiannav.hide()
            }

            $bankuai.each(function(i, elm) {
                // console.log(elm, $bankuai.eq(i).offset().top)
                // console.log($bankuai.eq(i).offset().top);
                let $bankuaitop = $bankuai.eq(i).offset().top + $(elm).height() / 3
                if ($bankuaitop > $scrolltop) {
                    $louti.not('.last').removeClass('active');
                    $louti.not('.last').eq(i).addClass('active');
                    return false
                }

            })

        })
        // 点击没有个侧边导航
    $louti.not('.last').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            let $bankuaitop1 = $bankuai.eq($(this).index()).offset().top;
            $('html,body').animate({
                scrollTop: $bankuaitop1
            });
        })
        // 返回顶部导航
    $last.on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        });
    })
}();
//幻灯片
! function() {
    const $stop = $('#index_slider')
    const $pics = $('#index_slider ul li');
    const $btns = $('.ec-slider-nav-1 span');
    const $left = $('.button-slider-prev');
    const $right = $('.button-slider-next');
    let $num = 0;
    let timer = null;
    $btns.on('mouseover', function() {
        $num = $(this).index()
        $(this).addClass('current').siblings().removeClass('current')
        $pics.eq($(this).index()).addClass('showpic').css('transition', 'all 0.5s').siblings().removeClass('showpic')
    })

    $right.on('click', function() {
        // console.log($right)
        $num++;
        if ($num >= $btns.length) {
            $num = 0;
            $btns.eq($num).addClass('current').siblings().removeClass('current');
            $pics.eq($num).addClass('showpic').css('transition', 'all 0.5s').siblings().removeClass('showpic');
            // console.log($btns.length)
        } else {
            $btns.eq($num).addClass('current').siblings().removeClass('current');
            $pics.eq($num).addClass('showpic').css('transition', 'all 0.5s').siblings().removeClass('showpic');
        }
    })
    $left.on('click', function() {
        $num--;
        if ($num < 0) {
            $num = $btns.length - 1
            $btns.eq($num).addClass('current').siblings().removeClass('current');
            $pics.eq($num).addClass('showpic').css('transition', 'all 0.5s').siblings().removeClass('showpic');
        } else {
            $btns.eq($num).addClass('current').siblings().removeClass('current');
            $pics.eq($num).addClass('showpic').css('transition', 'all 0.5s').siblings().removeClass('showpic');
        }
    })
    timer = setInterval(function() {
        $right.click();
    }, 2000);
    $stop.hover(function() {
        clearInterval(timer)
    }, function() {
        timer = setInterval(function() {
            $right.click();
        }, 2000);
    })
}();
// 侧遍切换
! function() {
    const $tab = $('.category-list li');
    const $content = $('.category-panels')
    $tab.hover(function() {
        $content.eq($(this).index()).addClass('active')
        $(this).parent().css('box-shadow', 0)
        $(this).css('background', 'white')
        console.log($(this))
    }, function() {
        $content.eq($(this).index()).removeClass('active')
        $(this).css('background', 'rgba(255, 255, 255, 0.95)')
    })
}();
// 小轮播
! function($) {
    const $ul = $('#goodsRecommend-recommend ul');
    const $picli = $('#goodsRecommend-recommend ul li');
    const $rightbtn = $('.btn-next');
    const $leftbtn = $('.btn-prev');
    var $num = 5 //有5张图片
    $rightbtn.on('click', function() {
        if ($picli.length > $num && $num < $picli.length) {
            $num++
            $ul.animate({
                left: -($num - 5) * $picli.eq(0).innerWidth()
            })
        }
    })
    $leftbtn.on('click', function() {
        if ($num > 5) {
            $num--
            $ul.animate({
                left: -($num - 5) * $picli.eq(0).innerWidth()
            })
        }
    })

}(jQuery);