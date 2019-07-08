;
! function($) {
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
        var arr = response.pic.split(',');
        // console.log(arr);
        var str = '';
        $.each(arr, function(index, value) {
            str += '<li><a href="javascript:;"><img src="' + value + '"></a></li>';
            $('#pro-gallerys').html(str);
        });
    })
}(jQuery);
! function() {
    // $('.xf').width($('#wrap').width() * $('.df').width() / $('.bpic').width());
    // $('.xf').height($('#wrap').height() * $('.df').height() / $('.bpic').height());
    // console.log($('.xf').width())
    var pid = $('#bpic').width() / $('#wrap').width();
    $('#wrap').hover(function() {
        $('.xf').css('visibility', 'visible')
        $('.df').css('visibility', 'visible')
            // console.log($(this))
        $(this).on('mousemove', function(ev) {
            var $left = ev.pageX - $('.left').offset().left - $('.xf').width() / 2;
            var $top = ev.pageY - $('.left').offset().top - $('.xf').height() / 2;
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

    })
}()