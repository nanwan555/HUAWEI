;
! function($) {
    const $username = $('#username');
    const $password = $('#password');
    const $email = $('#email');
    const $submit = $('#submit');
    var flag = true
    $username.on('blur', function() {
        if ($username.val() != '') {
            var $reg = /^[\u4e00-\u9fa5]+|\w+$/;
            if ($reg.test($username.val())) {
                $.ajax({
                    type: "POST",
                    url: "http://127.0.0.1:8080/HUAWEI/php/registor.php",
                    data: {
                        username: $username.val(),
                    }
                }).then(function(response) {
                    if (!response) {
                        $username.next().html('用户名可以注册')
                        $username.next().css('color', 'green')
                        flag = true
                    } else {
                        $username.next().html('用户名已存在')
                        $username.next().css('color', 'red')
                    }
                })
            } else {
                $username.next().html('请输入正确的用户名')
                $username.next().css('color', 'red')
                flag = false
            }
        }
    });
    $password.on('blur', function() {
        if ($password.val() != '') {
            var $reg = /^[A-Za-z]+|[0-9]+$/;
            if ($reg.test($password.val())) {

            } else {
                $password.next().html("密码有误")
                $password.next().css('color', 'red')
                flag = false
            }
        }
    })
    $submit.on('click', function() {
        if (!flag) {
            $username.focus()
            return false
        }
    })

}(jQuery);
// ! function() {
//     const $email = $('#email')
//     const $emailpd = $('#emailpd')
//     var $reg = /^\w{6,}@[A-z0-9]{2,}\.[A-z]{2,}$/g;
//     $email.on('keyup', function() {
//         // var reg = /^(\w)+\@(\w)+\.(\w)+$/
//         // var $reg = /^\w{3}$/;
//         if ($reg.test($(this).val())) {
//             console.log($(this).val());
//         } else {
//             $emailpd.html('请输入正确的邮箱格式')
//         }
//     })
// }()s