"use strict";var _createClass=function(){function n(t,i){for(var s=0;s<i.length;s++){var n=i[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,i,s){return i&&n(t.prototype,i),s&&n(t,s),t}}();function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}define(["../thirdplugins/jquery.min"],function(){$.fn.extend({lunbo:function(t,i){var s=(_createClass(n,[{key:"init",value:function(){$.extend(!0,this.setting,this.option),this.picList=$(this.setting.pics),this.btnList=$(this.setting.btns),this.leftBtn=$(this.setting.leftBtn),this.rightBtn=$(this.setting.rightBtn),this.autoTimer=null,$.isNumeric(this.setting.invoke)?this.num=parseInt(this.setting.invoke%this.btnList.size()):this.num=0,!0!==this.setting.showArrow&&"true"!==this.setting.showArrow||this.showArrow()}},{key:"switch",value:function(){var i=this;if("mouseover"===this.setting.etype){var s=null;$(this.btnList).hover(function(){var t=this;s=setInterval(function(){i.num=$(t).index(),i.picSwitch()},300)},function(){clearInterval(s)})}else $(this.btnList).on("click",function(){i.num=$(this).index(),i.picSwitch()})}},{key:"picSwitch",value:function(){this.btnList.eq(this.num).addClass(this.setting.activeClass).siblings().removeClass(this.setting.activeClass),"opacity"===this.setting.effect?this.setting.showClass?($(this.picList).css({transition:"all .5s"}),$(this.picList).eq(this.num).addClass(this.setting.showClass).siblings().removeClass(this.setting.showClass)):($(this.picList).css({transition:"all .5s"}),$(this.picList).eq(this.num).css({opacity:"1"}).siblings().css({opacity:"0"})):this.setting.showClass?$(this.picList).eq(this.num).addClass(this.setting.showClass).siblings().removeClass(this.setting.showClass):$(this.picList).eq(this.num).show().siblings().hide()}},{key:"showArrow",value:function(){var t=this;this.banner.hover(function(){t.leftBtn.show(),t.rightBtn.show(),clearInterval(t.autoTimer)},function(){t.leftBtn.hide(),t.rightBtn.hide(),t.autoplay()}),this.rightBtn.on("click",function(){t.num++,t.num>t.btnList.length-1&&(t.num=0),t.picSwitch()}),this.leftBtn.on("click",function(){t.num--,t.num<0&&(t.num=t.btnList.length-1),t.picSwitch()})}},{key:"autoplay",value:function(){var t=this;"number"===$.type(this.setting.autoplay)&&0<this.setting.autoplay?this.autoTimer=setInterval(function(){t.rightBtn.click()},this.setting.autoplay):!0!==this.setting.autoplay&&"true"!==this.setting.autoplay||(this.autoTimer=setInterval(function(){t.rightBtn.click()},3e3))}}]),n);function n(t,i){_classCallCheck(this,n),this.banner=$(i),this.option=t,this.setting={btns:"ol li",pics:"ul li",activeClass:"active",showClass:"showpic",invoke:0,etype:"click",effect:"opacity",leftBtn:".left",rightBtn:".right",showArrow:!0,autoplay:3e3},this.init(),this.switch(),this.autoplay()}$(this).each(function(){new s(t,this)})}})});