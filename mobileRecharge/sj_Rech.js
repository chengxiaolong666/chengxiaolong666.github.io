jsHeight.bodyheight();$(document).ready(function(){_shade_layer.show("努力加载中,请稍候...");setTimeout(function(){var a=getStringValue("strMobile");$("#strPhoneNumber").val(a);checkPayBut()},300)});function checkPayBut(){var a=$("#strPhoneNumber").val();if(checkSubmitMobilFW(a)){checkOperator(a)}else{$("#pay_btn").removeClass();$("#pay_btn").addClass("inc_submit");$("#pay_btn").unbind("click");_shade_layer.hide()}}function getMobieRechargeProductInfo(b,a){var c=new CDO();c.setStringValue("strServiceName","MobileRechargeQueryService");c.setStringValue("strTransName","getMobieRechargeProductInfo");if(a!=null&&a.length>0&&a!=undefined){if(a=="中国移动"){c.setStringValue("strPhoneType","10")}else{if(a=="中国电信"){c.setStringValue("strPhoneType","30")}else{if(a=="中国联通"){c.setStringValue("strPhoneType","20")}else{info("手机号无效");_shade_layer.hide()}}}raiseTrans(c,"callBackForRechargeProductLsit")}else{info("手机号无效");_shade_layer.hide()}}function callBackForRechargeProductLsit(c,j,m){if(m==undefined||m==null){info("请求服务器失败!");return false}if(m.nCode==0){if(j.exists("cdosMobileProductList")){var b=j.getCDOArrayValue("cdosMobileProductList");var h=c.getStringValue("strPhoneType");if(h=="10"){$("#logo_img").attr("src","../img/mobileRecharge/yidong.png");$("#phoneName").html("中国移动");$("#yyt_logo").show()}else{if(h=="20"){$("#logo_img").attr("src","../img/mobileRecharge/liantong.png");$("#phoneName").html("中国联通");$("#yyt_logo").show()}else{if(h=="30"){$("#logo_img").attr("src","../img/mobileRecharge/dianxin.png");$("#phoneName").html("中国电信");$("#yyt_logo").show()}}}var e=0;var o=0;var f="";for(var k=0;k<b.length;k++){var l=b[k].getStringValue("strProductName");var a=b[k].getStringValue("strProductTypeName");var g=b[k].getStringValue("lRechargeValue");var d=b[k].getStringValue("lRechargeRealValue");if(k==0){e=g;o=d}var n=$("#productModelDiv").html();n=n.replace("#i#",k);n=n.replace("#lRechargeValue#",g);n=n.replace("#lRechargeRealValue#",d);n=n.replace("#i#",k);n=n.replace("#lRechargeValue#",g/100);n=n.replace("#lRechargeRealValue#",d/100);if(k!=b.length-1){n=n.replace("#display#","")}f+=n}$("#productList").html(f);$("#lAmount").val(e);$("#lRealAmount").val(o);$("#strPhoneType").val(h)}$("#rechargeCode_0").show();$("#rechargeCode_1").hide();$("#rechargeCode_2").hide();open_paybtn();_shade_layer.hide()}}function open_paybtn(){$("#pay_btn").removeClass();$("#pay_btn").addClass("rech_inc_submit");$(".rech_inc_submit").click(function(){_shade_layer.show("努力加载中,请稍候...");checkIsPayPwd("open_paybtn2");setTimeout(function(){_shade_layer.hide()},2000)})}function open_paybtn2(){var a="输入支付密码";var d=($("#lRealAmount").val())/100;var c=false;var b="callbackFunctionOpenPayPasswordWindow";openPayWindow(a,"交易金额：￥"+d+"元","","",c,b)}function callbackFunctionOpenPayPasswordWindow(b,a){if(a==1){_shade_layer.show("努力加载中,请稍候...");checkPayCode(b)}}function checkPayCode(h){var g=$("#lAmount").val();var b=$("#lRealAmount").val();var e=$("#strPhoneNumber").val();var a=$("#strPhoneType").val();var f=getStringValue("lUserId");var d=getChannelType();var c=new CDO();c.setStringValue("strServiceName","MobileRechargeOperateService");c.setStringValue("strTransName","feeRecharge");c.setStringValue("lAmount",g);c.setStringValue("lRealAmount",b);c.setStringValue("strPhoneNum",e);c.setStringValue("strPhoneType",a);c.setLongValue("lUserId",Number(f));c.setStringValue("strPayPassword",hex_md5(h+""));c.setIntegerValue("nChannelType",d);raiseTrans(c,"callBackForFeeRecharge")}function callBackForFeeRecharge(f,h,b){if(b==undefined||b==null){info("请求服务器失败");return false}if(b.nCode==0){if(h.exists("cdoFeeRecharge")){var d=h.getCDOValue("cdoFeeRecharge");var c=d.getLongValue("lRechargeMoney");var e=d.getLongValue("lRechargeRealMoney");var a=d.getStringValue("strMobilePhone");var g="lRechargeMoney="+c+"&lRechargeRealMoney="+e+"&strMobilePhone="+a;openWindow("mobileRecharge/sj_cz_Result.htm","充值结果",g,1,"");_shade_layer.hide()}else{info("数据异常")}}else{if(b.nCode==1){info("余额不足")}else{if(b.nCode==2){info("易淘客无响应")}else{if(b.nCode==3){info("入参非法 ")}else{if(b.nCode==4){info("查无此人")}else{if(b.nCode==5){info("密码校验失败 ")}else{if(b.nCode==6){info("用户支付密码不存在")}else{info(b.strText)}}}}}}}_shade_layer.hide()}function selectRechargeCode(c,a,b){if(c==0){$("#rechargeCode_0").show();$("#lAmount").val(a);$("#lRealAmount").val(b)}else{$("#rechargeCode_0").hide()}if(c==1){$("#rechargeCode_1").show();$("#lAmount").val(a);$("#lRealAmount").val(b)}else{$("#rechargeCode_1").hide()}if(c==2){$("#rechargeCode_2").show();$("#lAmount").val(a);$("#lRealAmount").val(b)}else{$("#rechargeCode_2").hide()}}function getMailList(){openContacts("addContactForMobile","1")}function addContactForMobile(c,b,a,d){if(c!=null&&c!="null"&&c!=""){$("#strPhoneNumber").val(c)}else{info("您还没有开启获取联系人权限!")}}function getMallList(){openWindow("mobileRecharge/rech_list_mall.htm","充值记录","",1,"")}$("#strPhoneNumber").bind("input propertychange",function(){var a=$("#strPhoneNumber").val();if(a.match(/^1[3,5,8]\d{9}$/)){checkPayBut()}else{$("#pay_btn").removeClass();$("#pay_btn").addClass("inc_submit");$("#pay_btn").unbind("click")}});