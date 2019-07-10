;
! function() {
    $.ajax({
        url: "http://127.0.0.1:8080/HUAWEI/php/sy.php",
        dataType: "json",
    }).done(function(data) {
        var $html = ' <ul class="grid-list clearfix ">';
        // console.log(data);
        $.each(data, function(i, elm) {
            // console.log(elm.pic)
            var arr = elm.pic.split(',');
            // console.log(arr);
            $html += `
                <li class="grid-items" style="width:227px">
                    <a class="thumb" href="details.html?sid=${elm.id}" target="_blank">
                        <div class="grid-info">
                            <p class="grid-img">
                                  <img alt="荣耀Play 全网通 6GB+128GB 极光蓝 GT游戏加速 AI芯片 全面屏游戏手机 双卡双待" src="${arr[0]}">
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
    });
}();;
! function() {
    $.ajax({
        url: "http://127.0.0.1:8080/HUAWEI/php/sy1.php",
        dataType: "json",
    }).done(function(data) {
        var $html = '<ul class="grid-list clearfix ">';
        // console.log(data);
        $.each(data, function(i, elm) {
            // console.log(elm.pic)
            $html += `
                <li class="grid-items">
                <a class="thumb" href="details.html?sid=${elm.id}" target="_blank">
                    <div class="grid-info">
                        <p class="grid-img">
                            <img alt="【新品】荣耀MagicBook 2019 锐龙版 14英寸轻薄笔记本电脑 Ryzen 5 3500U 8GB 256GB（冰河银）" src="${elm.pic}">
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
    });
}();
! function($) {

    const $close = $('.button-top-banner-close')
        // console.log($close)
    $close.on('click', function() {
        $(this).parent().empty()
    })
}(jQuery);
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
    }, 4000);
    $stop.hover(function() {
        clearInterval(timer)
    }, function() {
        timer = setInterval(function() {
            $right.click();
        }, 4000);
    })
}();
! function() {
    const $tab = $('.category-list li');
    const $content = $('.category-panels')
    $tab.hover(function() {
        $content.eq($(this).index()).addClass('active')
        $content.eq($(this).index()).parent().css('box-shadow', 0)
        $content.eq($(this).index()).css('background', 'white'),
            $content.eq($(this).index()).css('background', 'white')
    }, function() {
        $content.eq($(this).index()).removeClass('active')
    })

}();
! function($) {
    const $lb = $('#goodsRecommend-recommend');
    const $ul = $('#goodsRecommend-recommend ul');
    console.log($ul)
    const $pdiv = $('#goodsRecommend-recommend ul .cl');
    console.log($pdiv)
    const $picli = $('#goodsRecommend-recommend ul div li');
    const $first = $pdiv.first().clone();
    const $last = $pdiv.last().clone();
    $ul.append($first)
    $ul.prepend($last)
    const $rightbtn = $('.btn-next');
    const $leftbtn = $('.btn-prev');
    var $len = $pdiv.width()
    $len = $picli.width() * 5 //五张图的宽
    console.log($len) //1210
    var $num = 1

    $rightbtn.on('click', function() {
        $num++
        let $width = $len * $num
        var $liwidth = $picli.length * $picli.width()
        console.log($width)
        if ($width > 7260) {
            console.log(987)

            $width = 0;
            $num = 1;
            $ul.css('left', 1210)
        }
        $ul.animate({
            'left': -$width + 'px'
        }, 200)
    })



    $leftbtn.on('click', function() {
        $num++
        alert(987)
        let $width = $len * $num
        var $liwidth = $picli.length * $picli.width()
        console.log($width)
        if ($width < 0) {
            console.log(987)

            $width = $len;
            $num = 0;
            $ul.css('left', -1210)
        }
        $ul.animate({
            'left': $width + 'px'
        }, 200)
    })


}(jQuery)