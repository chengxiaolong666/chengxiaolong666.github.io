function Richscan_pay(){}window.onload=function(){_shade_layer.show("加载中...");_richscan.scanaccount();setBackURL("index.htm","首页","","1","");setposition()};Richscan_pay.prototype.lUserId=getStringValue("lUserId");Richscan_pay.prototype.scan=getQueryString("scanval");Richscan_pay.prototype.lMoney=this.rich_pay_money-this.strRealPayPoint/100;jsHeight.bodyheight();Richscan_pay.prototype.sm_display_block=function(){var b=document.getElementById("ss_pws");var a=document.getElementById("ss_pow_display");var c=document.getElementById("rou_rightrid");var d=document.getElementById("lsm_conent");b.onclick=function(){var e=$("#rich_pay_money").val();if(b.className=="z_ss_pws"){$("#container").css("height","0px");b.className="z_ss_pws_blue";a.style.display="block";c.className="z_rou_rightrid_right";d.style.borderBottom="0";d.style.paddingBottom="15%"}else{if(b.className=="z_ss_pws_blue"){$("#container").css("height","0px");b.className="z_ss_pws";a.style.display="none";c.className="z_rou_rightrid";$("#zf_integral").val("");$("#lastmoney").val($("#rich_pay_money").val());d.style.borderBottom="1px solid #ccc";d.style.paddingBottom="5%"}}}};Richscan_pay.prototype.scanaccount=function(){var a=new CDO();a.setStringValue("strServiceName","AccountUserBIQueryService");a.setStringValue("strTransName","getAccountAmount");a.setLongValue("lUserId",this.lUserId);raiseTrans(a,"callBackgetAccountAmount");var a=new CDO();a.setStringValue("strServiceName","RichScanService");a.setStringValue("strTransName","qcDecrypt");a.setStringValue("idAndSign",this.scan);raiseTrans(a,"callBackqcDecrypt")};function callBackgetAccountAmount(e,f,b){_shade_layer.hide();if(b==null||typeof b=="undefined"){info("请求账户中心失败");return}if(b.nCode==0){var d=f.getCDOValue("cdoAccountAmount");var c=d.getStringValue("lAccountBalance1")/100;var a=d.getStringValue("lAccountBalance3")/100;document.getElementById("accunt_balance").innerHTML=c+"元";document.getElementById("accunt_integral").innerHTML=a+"分";if(a<=0){$("#lsm_conent").css("display","none")}_richscan.sm_display_block()}else{info(b.strText)}}function callBackqcDecrypt(d,e,a){_shade_layer.hide();if(a.nCode==0){var b=e.getCDOValue("decrypt");if(b==true||b=="true"){var c=e.getCDOValue("strMerchantName");_richscan.tenantpaydetail(c)}else{info(a.strText)}}else{info(a.strText)}}Richscan_pay.prototype.tenantpaydetail=function(a){document.getElementById("tenant_name").innerHTML=a;document.getElementById("lastmoney").innerHTML=this.lMoney;_shade_layer.hide();$("#container").css("display","block")};Richscan_pay.prototype.codepayment=function(){var c=$("#rich_pay_money").val();var a=$("#zf_integral").val();if(c==null||c==""||(typeof c)==undefined){info("输入金额不能为空");return false}if(this.richDecimal(c)==false){info("金额只能输入小数点后两位");return false}if(this.regverify(c,1)==false){info("输入金额不正确");return false}if(a!=""||a!=0){if(this.regverify(a,0)==false){info("输入积分不正确");return false}}var b=$("#rich_pay_money").val();if(b==""||b==0){info("支付金额不能为空");return false}_richscan.richpaypwd()};Richscan_pay.prototype.richpaypwd=function(){var a="请输入支付密码";var b=$("#zf_integral").val();var e=$("#rich_pay_money").val();var d=$("#lastmoney").val();if(d==""){d=""}else{d="实付金额"+$("#lastmoney").val()}if(e==""){e=""}else{e="交易金额"+$("#rich_pay_money").val()}if(b==""){b=""}else{b="实付积分"+$("#zf_integral").val()}var c=false;openPayWindow(a,e,d,b,c,"callbackfunctionrichpay")};function callbackfunctionrichpay(c,b){if(b==0){flag=true;return}var a=new CDO();a.setStringValue("strServiceName","RichScanService");a.setStringValue("strTransName","isRightPwd");a.setStringValue("strPayPassword",hex_md5(c+""));a.setLongValue("lUserId",_richscan.lUserId);pwdword=c;raiseTrans(a,"callBackRichisRightPwd")}function callBackRichisRightPwd(b,c,a){if(a==null||a==undefined){info("验证支付密码通讯失败");return false}if(a.nCode==0){$("#obj_pseudo_submit").css("display","none");$("#obj_pseudo_submit01").css("display","block");_richscan.scansucceed(pwdword)}else{info(a.strText)}}Richscan_pay.prototype.scansucceed=function(e){_shade_layer.show("加载中...");var a=_richscan.scan.split(",");var h=a[0];var b=$("#zf_integral").val()*100;var d=$("#rich_pay_money").val()*100;var c=d-b;if(b==""){b=0}if(d==""){d=0}if(c==""){RealPayMoney=0}var g=getChannelType();var f=new CDO();f.setStringValue("strServiceName","ScanCodeOperateService");f.setStringValue("strTransName","scanCodeDeal");f.setLongValue("lUserId",this.lUserId);f.setLongValue("lMerchantId",h);f.setStringValue("strPayPassword",hex_md5(e+""));f.setLongValue("lPayMoney",c);f.setLongValue("lPayScore",b);f.setLongValue("lTotalPrice",d);f.setIntegerValue("nChannelType",g);raiseTrans(f,"callBackscanCodeDeal")};function callBackscanCodeDeal(k,c,a){_shade_layer.hide();if(a==null||a==undefined){info("支付失败");return false}if(a.nCode==0){var e=c.getLongValue("lTotalPrice")/100;var j=c.getLongValue("lPayMoney")/100;var b=c.getLongValue("lPayScore")/100;var g=escape(c.getStringValue("strMerchantName"));var f=c.getStringValue("strMerchantSn");var h=c.getStringValue("strDealSN");var d=c.getStringValue("strDealTime");var i="lTotalPrice="+e+"&lPayMoney="+j+"&lPayScore="+b+"&strMerchantName="+g+"&strMerchantSn="+f+"&strDealSN="+h+"&strDealTime="+d;openWindow("richScanPay/RichScan_succeed.htm","扫码详情",i,1,"")}else{info("支付失败");$("#obj_pseudo_submit").css("display","block");$("#obj_pseudo_submit01").css("display","none")}}Richscan_pay.prototype.nsoninput=function(e){var c=Number($("#rich_pay_money").val());var a=Number($("#zf_integral").val());var d=Number($("#accunt_integral").html().slice(0,-1));var b=Number($("#accunt_balance").html().slice(0,-1));if(c>b){$("#rich_hint").html("支付金额不能大于账户余额");$("#rich_pay_money").val("");document.getElementById(e).value=c;return false}else{$("#rich_hint").html("")}if(d<a){$("#gral_hint").html("输入积分不能大于账户积分余额");$("#zf_integral").val("");document.getElementById(e).value=c;return false}else{$("#gral_hint").html("")}if(c<a){$("#gral_hint").html("积分不能大于支付金额");$("#zf_integral").val("");document.getElementById(e).value=c;return false}else{$("#gral_hint").html("")}if(a&&a>0){a=a}else{a=0}document.getElementById(e).value=Math.round((c-a)*100)/100};Richscan_pay.prototype.regverify=function(a,d){var b=new RegExp("^["+d+"-9]{1}[0-9]*([.]{1}[0-9]{1,2})?$");var c=b.test(a);return c};Richscan_pay.prototype.richDecimal=function(c){var a=/^[0-9]\d*(?:\.\d{1,2}|\d*)$/;var b=a.test(c);return b};function strAstrict(a){if(a.value.length==1){a.value=a.value.replace(/[^1-9]/g,"")}else{a.value=a.value.replace(/\D/g,"")}}function aftAstrict(a){if(a.value.length==1){a.value=a.value.replace(/[^1-9]/g,"")}else{a.value=a.value.replace(/\D/g,"")}}function setposition(){var a=navigator.userAgent.toLowerCase();if(/iphone|ipad|ipod/.test(a)){jQuery(".lo_bj").css("position","absolute")}else{if(/android/.test(a)){jQuery(".lo_bj").css("position","fixed")}}}function strback(){setTimeout(function(){back()},300)}_richscan=new Richscan_pay();