; (function ($) {

    $.fn.lunbo = function (options) {
        //$(this):当前选中jquery元素对象。
        let settings = {
            btns: 'ol li',
            pics: 'ul li',
            activeclass: 'active',//当前点击元素的激活的类名
            showclass: 'showpic',//显示图片的类
            etype: 'click',//事件六类线
            effict: 'display',//切换的形式  display/opacity
            arrow: 'true',//是否带有箭头 true和false   'true'/'false'
            autoplay: true//是否轮播 true和false   'true'/'false'   自定义毫秒数>3000
        }
        $.extend(true, settings, options);//配置参数覆盖默认参数。
        $(this).each(function (index, element) {
            let $num = 0;
            let timer = null;
            //图片轮播的动作
            let $btns=$(element).find(settings.btns);
            if (settings.etype === 'click' || settings.etype !== 'mouseover') {
               $btns.on('click', function () {
                    $num = $(this).index();
                    tabswitch();
                });
            } else {
               $btns.on(settings.etype, function () {
                    $num = $(this).index();
                    tabswitch();
                });
            }
            //是否显示左右箭头
            if (settings.arrow) {
                $(this).hover(function () {
                    $(element).find('.left').show();
                    $(element).find('.right').show();
                }, function () {
                    $(element).find('.left').hide();
                    $(element).find('.right').hide();
                });
            }
            //是否自动播放
            if (settings.autoplay) {
                $(this).hover(function () {
                    clearInterval(timer);
                }, function () {
                    timer = setInterval(function () {
                        $(element).find('.right').click();
                    }, $.type(settings.autoplay) === 'number' ? settings.autoplay : 3000)
                });
            }
            //左右箭头的事件
            $(element).find('.right').on('click', function () {
                $num++;
                if ($num >$btns.length - 1) {
                    $num = 0;
                }
                tabswitch();
            });

            $(element).find('.left').on('click', function () {
                $num--;
                if ($num < 0) {
                    $num =$btns.length - 1;
                }
                tabswitch();
            });
            //三个条件：true/'true'/>=3000数字
            //是否自动轮播
            if (settings.autoplay === 'true' || settings.autoplay === true || ($.type(settings.autoplay) === 'number' && settings.autoplay >= 3000)) {

                timer = setInterval(function () {
                    $(element).find('.right').click();
                }, $.type(settings.autoplay) === 'number' ? settings.autoplay : 3000)

            }
            //tab切换过程
            function tabswitch() {
                //当前操作的按钮添加类
               $btns.eq($num).addClass(settings.activeclass).siblings().removeClass(settings.activeclass);
                //切换的方式：display/opacity
                if (settings.effict === 'display' || settings.effict !== 'opacity') {//display
                    $(element).find(settings.pics).eq($num).addClass(settings.showclass).siblings().removeClass(settings.showclass);
                } else {//opacity
                    $(element).find(settings.pics).css('transition', 'all 0.5s');
                    $(element).find(settings.pics).eq($num).addClass(settings.showclass).siblings().removeClass(settings.showclass);
                }
            }
        });
    }

})(jQuery);


