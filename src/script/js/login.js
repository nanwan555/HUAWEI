;
! function($) {
    function addCookie(key, value, day) {
        var date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;
    }
    const $btn = $('.submit');
    const $username = $('.username').val();
    const $password = $('.password').val();
    $btn.on('click', function() {
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/HUAWEI/php/login.php',
            data: {
                name: $username,
                pass: $password
            },
            success: function(data) {
                if (!data) {
                    $username.next().html('用户名或者密码错误')
                    $password.val()
                } else {
                    addCookie('UserName', $username, 10);
                    location.href = 'http://127.0.0.1:8080/HUAWEI/src/';
                }
            }
        })
    });

}(jQuery);