; !function ($) {//表单验证
    const $username = $("#name");
    const $password = $("#password");
    const $confirmPassword = $("#confirmPassword");
    const $mobile = $("#mobile");
    const $regBtn = $('.reg-btn')
    const $registerForm = $('#registerForm')
    const $pwdSafe = $("#pwd-safe")
    const $first = $pwdSafe.find('.pw-none').find('.pw-letter').children().first()
    const $second = $pwdSafe.find('.pw-none').find('.pw-letter').children().first().next()
    const $third = $pwdSafe.find('.pw-none').find('.pw-letter').children().last()

    //用户名
    let $usernameflag = true
    $username.on('focus', function () {
        if ($username.val() == '') {
            $(this).next().children().show()
            $(this).next().children().css('color', '#ccc')
            $(this).next().children().html('4-20个字符，支持汉字、字母、数字及“_”组合')
            $usernameflag = false
        }
    })
    $username.on('blur', function () {
        if ($username.val() != '') {
            let $reg = /^[\u4e00-\u9fa5]+|\w+$/
            if ($reg.test($username.val())) {
                let len = $username.val().replace(/[\u4e00-\u9fa5]/g, "aa").length
                if (len >= 4 && len <= 20) {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost/Gomeproject/php/registor.php',
                        data: {
                            user: $username.val()
                        }
                    }).done(function (data) {
                        if (data) {
                            $username.next().children().show()
                            $username.next().children().css('color', 'red')
                            $username.next().children().html('该用户已存在')
                            $usernameflag = false
                        } else {
                            $username.next().children().show()
                            $username.next().children().css('color', 'green')
                            $username.next().children().html('√')
                            $usernameflag = true
                        }
                    })
                } else {
                    $(this).next().children().show()
                    $(this).next().children().css('color', 'red')
                    $(this).next().children().html('你输入的用户名长度有误 4-20个字符')
                    $usernameflag = false
                }
            } else {
                $(this).next().children().show()
                $(this).next().children().css('color', 'red')
                $(this).next().children().html('你输入的用户名有误 4-20个字符，支持汉字、字母、数字及“_”组合')
                $usernameflag = false
            }
        } else {
            $(this).next().children().show()
            $(this).next().children().css('color', 'red')
            $(this).next().children().html('请输入用户名')
            $usernameflag = false
        }
    })

    //密码
    let $passwordflag = true
    $password.on('focus', function () {
        if ($password.val() == '') {
            $(this).next().children().show()
            $(this).next().children().css({ color: '#ccc', border: 0 })
            $(this).next().children().html('6-20个字符,建议由字母数字与符号两种以上组成')
            $passwordflag = false
        }
    })
    $password.on('blur', function () {
        if ($password.val() == '') {
            $(this).next().children().show()
            $(this).next().children().css('color', 'red')
            $(this).next().children().html('请输入密码')
            $passwordflag = false
        }
        if ($passwordflag) {
            $(this).next().children().show()
            $(this).next().children().css("color", 'green')
            $(this).next().children().html('√')
            $passwordflag = true
        }
    })
    $password.on('input', function () {
        if ($password.val().length >= 6) {
            $(this).next().children().hide()
            $(this).next().children().html('')
            $pwdSafe.show()
            let $count = 0;
            let $num = /\d+/;
            let $upper = /[A-Z]+/;
            let $lower = /[a-z]+/;
            let $other = /\W|'_'+/;
            if ($num.test($password.val())) {//检测数字
                $count++
            }
            if ($upper.test($password.val())) {//检测大写字母
                $count++
            }
            if ($lower.test($password.val())) {//检测小写字母
                $count++
            }
            if ($other.test($password.val())) {//检测特殊符号
                $count++
            }
            switch ($count) {
                case 1:
                    $first.css('background', 'red')
                    $second.removeAttr('style')
                    $(this).next().children().show()
                    $(this).next().children().css('color', 'red')
                    $(this).next().children().html('密码过于简单')
                    $confirmPassword.Attr('disabled', 'disabled')
                    $passwordflag = false
                    break;
                case 2:
                case 3:
                    $second.css('background', 'yellow')
                    $third.removeAttr('style')
                    $confirmPassword.removeAttr('disabled')
                    $passwordflag = true
                    break;
                case 4:
                    $third.css('background', 'green')
                    $confirmPassword.removeAttr('disabled')
                    $passwordflag = true
                    break
            }
        } else {
            $pwdSafe.hide()
            $(this).next().children().show()
            $(this).next().children().css('color', 'red')
            $(this).next().children().html('密码长度有误 长度为6-20')
            $passwordflag = false
        }

    })

    //确认密码
    let $repasswordflag = true
    $confirmPassword.on('focus', function () {
        if ($confirmPassword.val() == '') {
            $(this).next().children().show()
            $(this).next().children().css({ color: '#ccc', border: 0 })
            $(this).next().children().html('请再次输入密码')
            $repasswordflag = false
        }
    })
    $confirmPassword.on('blur', function () {
        // if ($confirmPassword.val() != '') {
        //因为是确认密码 为空的时候也提示密码不一致
        if ($confirmPassword.val() == $password.val()) {
            $(this).next().children().show()
            $(this).next().children().css('color', 'green')
            $(this).next().children().html('√')
            $repasswordflag = true
        } else {
            $(this).next().children().show()
            $(this).next().children().css("color", 'red')
            $(this).next().children().html('两次密码不一致')
            $repasswordflag = false
        }
        // }
        // else {
        //         $(this).next().children().show()
        //         $(this).next().children().css('color', 'red')
        //         $(this).next().children().html('请输入密码')
        //         $repasswordflag = false
        //     }
        // }
    })

    //手机号码
    let $mobileflag = true
    $mobile.on('focus', function () {
        if ($mobile.val() == '') {
            $(this).next().show()
            $(this).next().css({ color: 'red', border: 0 })
            $(this).next().html('手机号不能为空')
            $mobileflag = false
        }
    })
    $mobile.on('blur', function () {
        if ($mobile.val() != '') {
            let $reg1 = /^1[3|5|8]\d{9}$/
            if ($reg1.test($mobile.val())) {
                $(this).next().show()
                $(this).next().css('color', 'green')
                $(this).next().html('√')
                $mobileflag = true

            } else {
                $(this).next().show()
                $(this).next().css('color', 'red')
                $(this).next().html('手机号码格式有误，请重新输入')
                $mobileflag = false
            }
        } else {
            $(this).next().show()
            $(this).next().css('color', 'red')
            $(this).next().html('手机号不能为空')
            $mobileflag = false
        }
    })


    //点击提交按钮 提交数据
    $regBtn.on('click', function () {

        if ($username.val() == '') {
            $username.next().children().show()
            $username.next().children().css('color', 'red')
            $username.next().children().html('4-20个字符，支持汉字、字母、数字及“_”组合')
            $usernameflag = false
        }
        if ($password.val() == '') {
            $password.next().children().show()
            $password.next().children().css({ color: 'red', border: 0 })
            $password.next().children().html('6-20个字符,建议由字母数字与符号两种以上组成')
            $passwordflag = false
        }
        if ($confirmPassword.val() == '') {
            $confirmPassword.next().children().show()
            $confirmPassword.next().children().css({ color: 'red', border: 0 })
            $confirmPassword.next().children().html('请再次输入密码')
            $repasswordflag = false
        }
        if ($mobile.val() == '') {
            $mobile.next().show()
            $mobile.next().css({ color: 'red', border: 0 })
            $mobile.next().html('手机号不能为空')
            $mobileflag = false
        }

        if (!$usernameflag || !$passwordflag || !$repasswordflag || !$mobileflag) {
            return false
        }


    })



    // form的submit事件     
    // 也可以提交
    // $registerForm.submit(function () {
    //     if ($username.val() == '') {
    //         $username.next().children().show()
    //         $username.next().children().css('color', 'red')
    //         $username.next().children().html('4-20个字符，支持汉字、字母、数字及“_”组合')
    //         $usernameflag = false
    //     }
    //     if ($password.val() == '') {
    //         $password.next().children().show()
    //         $password.next().children().css({ color: 'red', border: 0 })
    //         $password.next().children().html('6-20个字符,建议由字母数字与符号两种以上组成')
    //         $passwordflag = false
    //     }
    //     if ($confirmPassword.val() == '') {
    //         $confirmPassword.next().children().show()
    //         $confirmPassword.next().children().css({ color: 'red', border: 0 })
    //         $confirmPassword.next().children().html('请再次输入密码')
    //         $repasswordflag = false
    //     }
    //     if ($mobile.val() == '') {
    //         $mobile.next().show()
    //         $mobile.next().css({ color: 'red', border: 0 })
    //         $mobile.next().html('手机号不能为空')
    //         $mobileflag = false
    //     }

    //     if (!$usernameflag || !$passwordflag || !$repasswordflag || !$mobileflag) {
    //         return false
    //     }
    // })




}(jQuery)