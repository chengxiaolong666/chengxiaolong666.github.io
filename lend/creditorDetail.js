var _obj={};_obj.rate=0;_obj.nDayCount;_obj.productName="";_obj.lAccountBalance1=0;_obj.lLenderId=-1;_obj.xieyiVal=1;_obj.goPage=1;_obj.initParameter=function(){_obj.lId=getStringValue("lId");_obj.lUserId=getStringValue("lUserId");_obj.pageType=getStringValue("openPageType")};_obj.loadRightsDetail=function(){if(!_obj.lId){info("系统错误!");return}_obj.remaining();var a=new CDO();a.setStringValue("strServiceName","LendIntentService");a.setStringValue("strTransName","getRdptApplyByIdForMobile");a.setLongValue("lId",Number(_obj.lId));raiseTrans(a,"callBackRightsDetail")};function callBackRightsDetail(c,j,b){if(_obj.ret(b,"获取债权转让详情失败")==false){return}if(b.nCode==0&&j.exists("cdoRecord")){var f=j.getCDOValue("cdoRecord");var n=f.getIntegerValue("nLenderYearRate");var k=f.getIntegerValue("nSurplusDayCount");var g=f.getLongValue("lMinInvestAmount");var d=f.getLongValue("lAmount");var h=f.getLongValue("lContributedAmount");var a=_obj.getMoney(d-h,0);_obj.surplus=a;var m=(Number(h/d)*100).toFixed(2)||0;var e=1-(m/100);var i=f.getStringValue("strLendProductName");_obj.productName=i;_obj.html("strLendProductName_id",i);_obj.html("nLenderYearRate_id",Number(n/100).toFixed(2)+'<span class="bfb">%</span>');_obj.html("nSurplusDayCount_id",k+"天");_obj.html("transfer_txt_id","<li>转让金额："+_obj.getMoney(d,0)+"元</li><li>剩余可投金额："+a+"元</li>");if(_obj.pageType==1){_obj.html("invst_plan_scale",m+"%");_obj.get("invst_plan_bl").style.width=m+"%";_obj.rate=(n/10000).toFixed(4);_obj.lMinInvestAmount=_obj.getMoney(g,0)||0;_obj.nDayCount=k;var l="起投金额"+_obj.lMinInvestAmount+"元";_obj.get("lMinInvestAmount_id").setAttribute("placeholder",l);_obj.hint(_obj.getMoney(g))}_obj.lLenderId=f.getStringValue("lLenderId")}else{_Not.show("mui-content_id","找不到数据了")}_loading.hide();_obj.show("mui-content_id",true);finactdetail()}_obj.remaining=function(){var a=new CDO();a.setStringValue("strServiceName","AccountUserBIQueryService");a.setStringValue("strTransName","getAccountAmount");a.setLongValue("lUserId",Number(_obj.lUserId));raiseTrans(a,"callBackRemaining")};function callBackRemaining(d,e,a){if(_obj.ret(a,"查询余额失败")==false){return}if(a.nCode==0&&e.exists("cdoAccountAmount")){var c=e.getCDOValue("cdoAccountAmount");var b=c.getStringValue("lAvailablebalance1");_obj.html("balance_money_id",b/100);_obj.lAccountBalance1=b/100}}_obj.hint=function(a){var b=Number(numMulti(a*_obj.rate/365,_obj.nDayCount)).toFixed(2);if(a==null||a==""){a=0}_obj.html("hint_id","如您投资"+a+"元，预估收益："+b+"元，次日计息")};function numMulti(d,b){var a=0;try{a+=d.toString().split(".")[1].length}catch(c){}try{a+=b.toString().split(".")[1].length}catch(c){}return Number(d.toString().replace(".",""))*Number(b.toString().replace(".",""))/Math.pow(10,a)}_obj.inputMoney=function(b){var a=/^[1-9]{1}\d*$/g;var c=b.value;if(c.length>0){if(!a.test(c)){c=0;alert("请输入数字类型");b.value="";_obj.hint(c);return false}}if(Number(c)>Number(_obj.surplus)){alert("金额不能超过"+_obj.surplus+"元");c=0;b.value="";_obj.hint(c);return false}_obj.hint(c)};_obj.changePic=function(b,a){var c=b.src;if(c.indexOf("dx_02.png")>-1){if(a==0){_obj.xieyiVal=0}else{_obj.xutouVal=0}b.src="../img/public/dx_01.png"}else{if(a==0){_obj.xieyiVal=1}else{_obj.xutouVal=1}b.src="../img/public/dx_02.png"}};_obj.openXieyi=function(){_TTPopups.open1({title:"协议",contentId:"protocol_div_id",cancelBtn:"取消",submitBtn:"同意",closeCallBack:"protocolCallBack"})};function protocolCallBack(c){var d="../img/public/dx_01.png";var b=0;if(c==1){d="../img/public/dx_02.png";b=1}var a=_obj.get("xieyi_id");a.src=d;_obj.xieyiVal=b}_obj.buyFlag=true;_obj.buyStyle=function(a){if(a==true){_obj.get("buy_id").style.display="block";_obj.get("buy_in_id").style.display="none";_obj.payFlag=true}else{_obj.get("buy_id").style.display="none";_obj.get("buy_in_id").style.display="block";_obj.payFlag=false}};_obj.realNameIdeIndex=-1;_obj.buy=function(){_obj.goPage=1;_obj.realNameIde()};_obj.money=0;_obj.buying=function(){setTimeout(function(){var a=_obj.get("lMinInvestAmount_id");if(!a||a.value.length==0){info("请输入金额");_obj.buyStyle(true);_loading.hide();return}if(_obj.inputMoney(a)==false){_obj.buyStyle(true);_loading.hide();return}if(_obj.buyingVerify()==false){_obj.buyStyle(true);_loading.hide();return}setStringValue("money",_obj.money+"");setStringValue("type","0");setStringValue("lId",_obj.lId);clearArray(["lLenderId"]);setStringValue("lLenderId",_obj.lLenderId+"");setStringValue("payType","0,");_loading.hide();openWindow("product/pay.htm","支付页面","dPage=creditorDetail.htm",0);_obj.buyStyle(true)},200)};_obj.buyingVerify=function(){if(_obj.xieyiVal==0){info("请同意协议");return false}var b=_obj.get("lMinInvestAmount_id").value||0;var a=Number(b)%100==0;if(a==false){info("请输入100的整数倍金额");return false}if(Number(b)>Number(_obj.lAccountBalance1)){_TTPopups.open2({content:"您的账户余额不足，请充值",cancelBtn:"取消",submitBtn:"确定",closeCallBack:"callBackOpen"});return false}if(Number(b)<Number(_obj.lMinInvestAmount)){info("请输入不小于"+_obj.lMinInvestAmount+"元的投资金额");_obj.buyStyle(true);return false}_obj.money=b;return true};function callBackOpen(a){if(a==1){_obj.goVoucher()}_obj.buyStyle(true)}_obj.realNameIde=function(){var a=new CDO();a.setStringValue("strServiceName","UserService");a.setStringValue("strTransName","queryIdentity");a.setLongValue("lUserId",Number(_obj.lUserId));raiseTrans(a,"callBackRealNameIde")};function callBackRealNameIde(c,d,a){_loading.hide();if(_obj.ret(a,"查询是否实名认证失败")==false){_obj.buyStyle(true);return}if(a.nCode==0&&d.exists("nIdentityState")){var b=d.getIntegerValue("nIdentityState");if(b==90||b==100){_obj.realNameIdeIndex=0;if(_obj.goPage==0){_obj.goVoucher()}else{_obj.buying()}return}else{if(b==10){_obj.realNameIdeIndex=-2}else{if(b==20){_obj.realNameIdeIndex=-3}else{if(b==30){_obj.realNameIdeIndex=-4}}}}_obj.goIdenPage()}}_obj.goIdenPage=function(){if(_obj.realNameIdeIndex==-2){_TTPopups.open2({content:"您未实名认证，请认证",cancelBtn:"否",submitBtn:"是",closeCallBack:"TT_pay_sm_1"})}else{if(_obj.realNameIdeIndex==-3){info("您的实名认证正在认证中，请稍候查看实名认证");_obj.buyStyle(true)}else{if(_obj.realNameIdeIndex==-4){_TTPopups.open2({content:"您的实名认证失败,查看原因",cancelBtn:"否",submitBtn:"是",closeCallBack:"TT_pay_sm_2"})}}}};function TT_pay_sm_1(a){if(a==1){openWindow("securityCenter/accountIdCard.htm","实名认证","clearUser=1&nIdentityState=10",1)}_obj.buyStyle(true)}function TT_pay_sm_2(a){if(a==1){openWindow("securityCenter/accountIdCard.htm","实名认证","clearUser=1&nIdentityState=30",1)}_obj.buyStyle(true)}_obj.goVoucherBefore=function(){_obj.goPage=0;_obj.realNameIde()};_obj.goVoucher=function(){setStringValue("backURL","product/creditorDetail.htm");openWindow("myRecharge/financial_recharge.htm","充值页面","",0)};_obj.loadInvestList=function(){var a=_obj.productName;a=encodeURI(a);setStringValue("lId",_obj.lId);setStringValue("productName",a);setStringValue("investListType","0");setStringValue("lLenderId",_obj.lLenderId+"");openWindow("product/investList.htm","投资记录","",0)};_obj.getMoney=function(b,a){a=a||0;return Number(Number(b)/100).toFixed(a)||0};_obj.ret=function(a,b){if(a==null||typeof a=="undefined"){info(b);return false}if(a.nCode!=0){info(a.strText);return false}};_obj.get=function(a){return document.getElementById(a)};_obj.show=function(c,b){if((typeof c==="string")&&c.constructor==String){c=document.getElementById(c)}if(c){var a=b==true?"block":"none";c.style.display=a}};_obj.html=function(b,a){if((typeof b==="string")&&b.constructor==String){b=document.getElementById(b)}if(b){b.innerHTML="";b.innerHTML=a}};_obj.back=function(){openDelayWindow(_obj.productBackURL,"产品超市","","1","product/creditorDetail.htm","1")};window.onload=function(){$("input").click(function(){var a=navigator.userAgent.toLowerCase();if(/android/.test(a)){$("#container").css("-webkit-transform","translate3d(0px, -60px, 0px)")}});_loading.show();setposition();setTimeout(function(){_obj.productBackURL=getStringValue("productBackURL");setBackURL(_obj.productBackURL,"","",1,"","1");_obj.initParameter();_obj.loadRightsDetail()},200);setStringValue("productType","2")};function setposition(){var a=navigator.userAgent.toLowerCase();if(/iphone|ipad|ipod/.test(a)){jQuery(".lo_bj").css("position","absolute")}else{if(/android/.test(a)){jQuery(".lo_bj").css("position","fixed")}}}jsHeight.bodyheight("mrys_bag");