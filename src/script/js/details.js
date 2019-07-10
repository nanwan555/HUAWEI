;
! function($) {

    function setcookie(key, value, day) {
        let date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;
    }

    function getcookie(key) {
        let arr = decodeURI(document.cookie).split('; ');
        for (let i = 0; i < arr.length; i++) {
            let newarr = arr[i].split('=');
            if (newarr[0] === key) {
                return newarr[1];
            }
        }
    }

    function delcookie(key) {
        setcookie(key, '', -1);
    }
    var picid = location.search.substring(1).split('=')[1];

    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8080/HUAWEI/php/details.php',
        data: {
            sid: picid
        },
        datatype: 'json'
    }).done(function(data) {
        // console.log(typeof data)
        var response = JSON.parse(data)
        $('#pro-name').html(response.desc)
        $('#pro-price b').html(response.price)
            // console.log(response.id)
            // console.log($('#product-img img').attr('sid', response.id))
        var arr = response.pic.split(',');
        $('#product-img img').attr('src', arr[0])
        $('#product-img img').attr('sid', response.id)
        $('#bpic').html = $('#product-img img')
            // console.log(arr);
        var str = '';
        $.each(arr, function(index, value) {
            str += '<li><img src="' + value + '"></li>';
            $('#pro-gallerys').html(str);
        });
    })
}(jQuery);
// 放大镜
! function() {
    // $('.xf').width($('#wrap').width() * $('.df').width() / $('#bpic').width());
    // $('.xf').height($('#wrap').height() * $('.df').height() / $('#bpic').height());
    var pid = $('#bpic').width() / $('#wrap').width();
    // console.log(pid)
    $('#wrap').hover(function() {
        $('.xf').css('visibility', 'visible')
        $('.df').css('visibility', 'visible')
            // console.log($(this))
        $(this).on('mousemove', function(ev) {

            var $left = ev.pageX - $('.left').offset().left - $('.xf').width() / 2;
            var $top = ev.pageY - $('.left').offset().top - $('.xf').height();
            if ($left < 0) {
                $left = 0;
            } else if ($left >= $('#wrap').width() - $('.xf').width()) {
                $left = $('#wrap').width() - $('.xf').width();
            }
            if ($top < 0) {
                $top = 0;
            } else if ($top >= $('#wrap').height() - $('.xf').height()) {
                $top = $('#wrap').height() - $('.xf').height();
            }
            $('.xf').css('left', $left);
            $('.xf').css('top', $top);
            $('#bpic').css('left', -$left * pid);
            $('#bpic').css('top', -$top * pid);
        })
    }, function() {
        $('.xf').css('visibility', 'hidden')
        $('.xf').css('visibility', 'hidden')
    });
    $('#onclick ul').on('click', 'li', function() {
        // console.log($(this))
        var $photo = $(this).find('img').attr('src')
        console.log($photo)
        $('#smallpic').attr('src', $photo)
        $('#bpic').attr('src', $photo)
    });
    var $num = 5
    $('.product-gallery-forward ').on('click', function() {
        var $list = $('#onclick ul li')
            // console.log($list.length)
        if ($list.length > $num) {
            $num++
            $('#onclick ul').animate({
                left: -($num - 5) * $list.eq(0).innerWidth()
            })
        }
    });
    $('.product-gallery-back').on('click', function() {
        var $list = $('#onclick ul li')
        if ($num > 5) {
            $num--
            $('#onclick ul').animate({
                left: -($num - 5) * $list.eq(0).innerWidth()
            })
        }
    });
    var arrsid = [];
    var arrnum = [];
    let $sid = location.search.substring(1).split('=')[1];
    // console.log($sid)

    function cookiehave() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            arrsid = getcookie('cookiesid').split(',');
            arrnum = getcookie('cookienum').split(',');
        }
    }

    $('#btn').on('click', function() {
        cookiehave();
        // console.log($('.next').prev())
        let $picid = $(this).parents('.right').prev().find('#smallpic').attr('sid')
            // console.log($picid)
            // console.log($('#pro-quantity').val())
        if ($.inArray($picid, arrsid) != -1) {
            var num = parseInt(arrnum[$.inArray($picid, arrsid)]) + parseInt($('#pro-quantity').val());
            arrnum[$.inArray($picid, arrsid)] = num;
            addcookie('cookienum', arrnum.toString(), 20);
            console.log(getcookie('cookiesid'))
        } else {
            arrsid.push($picid);
            addcookie('cookiesid', arrsid.toString(), 20);
            arrnum.push($('#pro-quantity').val());
            addcookie('cookienum', arrnum.toString(), 20);
        }
        location.href = 'cart.html'
    })
}()
// 加减添加购物车
// ;
// ! function($) {
//     const $add = $('#pro-quantity-plus')
//     const $down = $('#pro-quantity-minus')
//     const $zhi = $('#pro-quantity')
//     $add.on('click', function() {
//         var $number = $zhi.attr('placeholder')
//         console.log($number.toNumber())
//         $number++
//         $zhi.html($number)
//         console.log($number)
//     })
// }(jQuery)