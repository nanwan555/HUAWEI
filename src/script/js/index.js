// ;!function($){
// 	//banner数据
// 	$.ajax({
// 		url:'php/banner.php',
// 		dataType:'json'
// 	}).done(function(bannerdata){
// 		$.each(bannerdata,function(index,value){
// 			var $bannerstr='<ul>';

// 		});
// 	});

// 	//lunbo数据
// 	$.ajax({
// 		url:'php/banner.php',
// 		dataType:'json'
// 	}).done(function(bannerdata){
// 		$.each(bannerdata,function(index,value){
// 			var $bannerstr='<ul>';

// 		});
// 	});
// 	//tab切换数据
// 	$.ajax({
// 		url:'php/banner.php',
// 		dataType:'json'
// 	}).done(function(bannerdata){
// 		$.each(bannerdata,function(index,value){
// 			var $bannerstr='<ul>';

// 		});
// 	});
// }(jQuery);

// !function(){
// 	//banner效果

// }(jQuery);

// !function(){
// 	//lunbo效果

// }(jQuery);

// !function(){
// 	//小效果

// }(jQuery);
;
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
            console.log(elm, $bankuai.eq(i).offset().top)
                // console.log($bankuai.eq(i).offset().top);

        })

    })

}()