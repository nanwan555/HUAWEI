//使用说明：
//导入:require(['../plugins/xiaoguo(插件路径)'], function() {
//     $('banner图的选择器').lunbo({
//         此处配置参数
//     })
// });
define(['../thirdplugins/jquery.min'], function() {
    $.fn.extend({
        lunbo: function(option, banner) {
            class Lunbo {
                constructor(option, banner) {
                    this.banner = $(banner);
                    this.option = option;
                    this.setting = {
                        btns: 'ol li', //按钮的选择器
                        pics: 'ul li', //图片的选择器
                        activeClass: 'active', //按钮激活的类名
                        showClass: 'showpic', //图片激活的类名,如果通过改变样式改变图片则可不填
                        invoke: 0, //初始显示图片和按钮的索引,任意非负数
                        etype: 'click', //切换方式,默认click,可设置mouseover
                        effect: 'opacity', //图片切换的形式--默认透明度切换，其他字符串均为display切换
                        leftBtn: '.left', //左箭头的选择器
                        rightBtn: '.right', //右箭头选择器
                        showArrow: true, //是否显示箭头,可以为字符串的'true'与'false'
                        autoplay: 3000 //正数开启自动播放，并且为自动播放时间间隔(毫秒),true也可以开启，间隔固定3000
                    };
                    this.init();
                    this.switch();
                    this.autoplay();
                }

                init() {
                    $.extend(true, this.setting, this.option); //配置参数覆盖默认参数,true为深拷贝
                    this.picList = $(this.setting.pics);
                    this.btnList = $(this.setting.btns);
                    this.leftBtn = $(this.setting.leftBtn);
                    this.rightBtn = $(this.setting.rightBtn);
                    this.autoTimer = null; //自动播放定时器
                    if ($.isNumeric(this.setting.invoke)) { //判断invoke是不是数字
                        this.num = parseInt(this.setting.invoke % this.btnList.size()); //当前显示的索引
                    } else { //不是数字则设置无效，索引从0开始
                        this.num = 0;
                    }
                    if (this.setting.showArrow === true || this.setting.showArrow === 'true') {
                        this.showArrow();
                    }
                }

                switch () {
                    let _this = this;
                    if (this.setting.etype === 'mouseover') { //判断切换的形式
                        let timer = null; 
                        $(this.btnList).hover(function() {
                            timer = setInterval(() => {
                                _this.num = $(this).index();
                                _this.picSwitch();
                            }, 300);//给滑过添加定时器
                        }, function() {
                            clearInterval(timer);
                        });
                    } else {
                        $(this.btnList).on('click', function() {
                            _this.num = $(this).index();
                            _this.picSwitch();
                        });
                    }

                }

                picSwitch(){//图片切换
                    this.btnList.eq(this.num).addClass(this.setting.activeClass).siblings().removeClass(this.setting.activeClass);
                    if (this.setting.effect === 'opacity') { //图片透明度切换
                        if (this.setting.showClass) { //通过类名改变图片显示
                            $(this.picList).css({ 'transition': 'all .5s' })
                            $(this.picList).eq(this.num).addClass(this.setting.showClass).siblings().removeClass(this.setting.showClass);
                        } else { //通过css改变图片显示
                            $(this.picList).css({ 'transition': 'all .5s' })
                            $(this.picList).eq(this.num).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
                        }
                    } else {
                        if (this.setting.showClass) { //通过类名改变图片显示
                            $(this.picList).eq(this.num).addClass(this.setting.showClass).siblings().removeClass(this.setting.showClass);
                        } else { //通过css改变图片显示
                            $(this.picList).eq(this.num).show().siblings().hide();
                        }
                    }
                }

                showArrow() {//显示左右箭头
                    this.banner.hover(() =>{
                        this.leftBtn.show();
                        this.rightBtn.show();
                        clearInterval(this.autoTimer);
                    }, ()=> {
                        this.leftBtn.hide();
                        this.rightBtn.hide();
                        this.autoplay();
                    });
                    //给右箭头添加点击事件
                    this.rightBtn.on('click',()=>{
                        this.num++;
                        if(this.num > this.btnList.length-1){
                            this.num=0;
                        }
                        this.picSwitch();
                    });
                    //给左箭头添加点击事件
                    this.leftBtn.on('click',()=>{
                        this.num--;
                        if(this.num <0){
                            this.num=this.btnList.length-1;
                        }
                        this.picSwitch();
                    });
                }

                autoplay() {//自动播放
                    if($.type(this.setting.autoplay)==='number'&&this.setting.autoplay>0){
                        this.autoTimer = setInterval(()=> {
                            this.rightBtn.click();
                        },this.setting.autoplay);
                    }else if(this.setting.autoplay===true||this.setting.autoplay==='true'){
                        this.autoTimer = setInterval(()=> {
                            this.rightBtn.click();
                        },3000);
                    }
                }

            }

            $(this).each(function() {
                new Lunbo(option, this);
            });
        }
    })
});