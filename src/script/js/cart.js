;
! function() {

    var $itemlist = $('.order-list-detail')

    function goodslist(sid, num) {
        $.ajax({
            url: "http://127.0.0.1:8080/HUAWEI/php/cart.php",
            dataType: "json",
        }).done(function(data) {
            $.each(data, function(index, value) {
                var arr = value.pic.split(',');
                if (sid === value.id) {
                    var str = '';
                    str = `
                    <div class="order-main clearfix " style="position: relative;">
                    <div class="cart-checkbox" style="float: left;" checked>
                        <input type="checkbox" name="" id="${sid}" value="">
                    </div>
                    <a style="cursor:default" ahref="/product/10086779543890.html#2601010116501" class="p-img" target="_blank">
                        <img alt="荣耀20 PRO DXO全球第二高分 4800万全焦段AI四摄 双光学防抖 麒麟980全网通版8GB+128GB 幻夜星河" src="${arr[0]}">
                    </a>
                    <ul class="">
                        <li>
                            <a style="cursor:default" ahref="/product/10086779543890.html#2601010116501" class="p-name" target="_blank" seed="item-name">${value.detail}</a>
                        </li> 
                        <li>
                        <input type="text"  min="1" max="99" id="put" value="" placeholder="输入想要数量" style="width:80px;">
                        </li>
                        <li class="p-price" style="color:red">
                            单价:￥${value.price}
                        </li>
                        <li class="everyprice">
                        总价￥：${value.price}
                        </li>
                    </ul>
                    <div id="zj">
                    <span>&nbsp;<b></b><span>
                    </div>
                    <div id="dlete" >
                        <a href="javascript:;" del="${sid}" id="ele">删除</a>
                    </div>
                   </div>
                `
                    $itemlist.prepend(str)
                        // 输入添加数量点击选项框计算
                    var $num = $('#put');
                    var $sum = $('.everyprice');
                    $num.on('keyup', function() {
                        var $num1 = this.value;
                        var $price = $(this).parent().siblings('.p-price').html().split('￥')[1];
                        var $sum1 = $num1 * $price;
                        $(this).parent().siblings('.everyprice').html("总价￥:" + $sum1)
                    });
                    var $inp = $('.cart-checkbox input');
                    var $zj = $('#order-price-VMALL-HUAWEIDEVICE');
                    $inp.on('click', function() {
                        var $isCheck = $(this).prop('checked');
                        var $sum2 = $(this).parent().siblings('ul').find('li').last().html().split(':')[1];
                        if ($isCheck) {
                            $zj.html(function(idex, oldvalue) {
                                return 1 * oldvalue + $sum2 * 1;
                            })
                        } else {
                            $zj.html(function(idex, oldvalue) {
                                return 1 * oldvalue - $sum2 * 1;
                            })
                        }
                    });
                    $('#payableTotal').html($zj)

                    // 全选按钮
                    const $chek = $('#chek');
                    // console.log($chek);
                    $chek.on('click', function() {
                        if ($chek.prop('checked')) {
                            $inp.prop('checked', true)
                        } else {
                            $inp.prop('checked', false)
                            $('#payableTotal').html(0)
                        }
                    })
                    $inp.on('click', function() {
                            if ($inp.size === $("input:checked").length) {
                                $chek.prop('checked', true)
                            } else {
                                $chek.prop('checked', false)
                            }
                        })
                        // 删除添加到购物车的的数据
                    var $del = $('#dlete')
                    $del.on('click', 'a', function() {
                        $(this).parent().parent().remove()
                        var $ele = $(this).attr('del')
                        $(this).parent().remove()
                        var $ele = $(this).attr('del')
                        console.log($ele)
                        if (getcookie('cookiesid') && getcookie('cookienum')) {
                            let arrsid = getcookie('cookiesid').split(',')
                            let arrnum = getcookie('cookienum').split(',')
                            let index = arrsid.indexOf($ele)
                            arrsid.splice(index, 1)
                            setcookie('cookiesid', arrsid, 20)
                            let index1 = arrnum.indexOf(value)
                            arrnum.splice('index', 1)
                            setcookie('cookienum', arrnum, 20)
                        }

                        function setcookie(key, value, day) {
                            let date = new Date();
                            date.setDate(date.getDate() + day);
                            document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;
                        }
                    })



                }
            });
        })

    }

    if (getcookie('cookiesid') && getcookie('cookienum')) {
        let arrsid = getcookie('cookiesid').split(',')
        let arrnum = getcookie('cookienum').split(',')
        for (let i = 0; i < arrsid.length; i++) {
            goodslist(arrsid[i], arrnum[i]);
        }
    }
}();
// 弹出支付环境
! function() {
    const $checkoutSubmit = $('#checkoutSubmit');
    $checkoutSubmit.on('click', function() {
        $(".bg-model").fadeTo(300, 1)
    })
    $(".bg-model-ok").click(function() {　　
        $(".bg-model").hide();　　 //显示窗体的滚动条
        　　
        $("body").css({
            "overflow": "visible"
        });
    }).hover(function() {　　
        $(this).css({
            "backgroundColor": "#8CC8C8"
        });
    }, function() {　　
        $(this).css({
            "backgroundColor": "#8CD4E6"
        });
    });

    const $tuichu = $('.tuichu')
    $tuichu.on('click', function() {
        $(".bg-model").css('display', 'none')
    })
}()