;
! function() {

    var $itemlist = $('.order-list-detail')

    function goodslist(sid, num) {
        $.ajax({
            url: "http://127.0.0.1:8080/HUAWEI/php/cart.php",
            dataType: "json",
        }).done(function(data) {
            $.each(data, function(index, value) {
                // console.log(value)
                var arr = value.pic.split(',');
                if (sid === value.id) {
                    var str = '';
                    str = `
                    <div class="order-main clearfix " style="position: relative;">
                    <div class="cart-checkbox" style="float: left;">
                        <input type="checkbox" checked="" name="" id="" value="">
                    </div>
                    <a style="cursor:default" ahref="/product/10086779543890.html#2601010116501" class="p-img" target="_blank">
                        <img alt="荣耀20 PRO DXO全球第二高分 4800万全焦段AI四摄 双光学防抖 麒麟980全网通版8GB+128GB 幻夜星河" src="${arr[0]}">
                    </a>
                    <ul class="">
                        <li>
                            <a style="cursor:default" ahref="/product/10086779543890.html#2601010116501" class="p-name" target="_blank" seed="item-name">${value.detail}</a>
                            <input type="hidden" class="skuCodeQuanClass" value="1" id="2601010116501">
                        </li>
                        <li>
                            <div class="quantity-form">
                                <a class="quantity-down" href="javascript:void(0)">-</a>
                                <input type="text" value="${num}">
                                <a class="quantity-add" href="javascript:void(0)">+</a>
                            </div>
                        </li>
                        <li class="p-price">
                            ¥&nbsp;${value.price}
                        </li>
                    </ul>
                    <div id="dlete" >
                        <a href="javascript:;" del="${sid}" id="ele">删除</a>
                    </div>
                   </div>
                `
                    $itemlist.prepend(str)
                    var $del = $('#dlete')
                    $del.on('click', 'a', function() {
                        $(this).parent().parent().remove()
                        var $ele = $(this).attr('del')
                            // console.log($ele)
                        $(this).parent().remove()
                            // console.log(getcookie('cookiesid'), getcookie('cookiesum'))
                        var $ele = $(this).attr('del')
                        console.log($ele)
                        if (getcookie('cookiesid') && getcookie('cookienum')) {
                            let arrsid = getcookie('cookiesid').split(',')
                            let arrnum = getcookie('cookienum').split(',')
                            let index = arrsid.indexOf($ele)
                                // console.log(index)
                                // console.log(arrsid)
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
}()