var _obj={};_obj.strAgreementNo="";jsHeight.bodyheight();window.onload=function(){setTimeout(function(){_shade_layer.show("加载中,请稍候......");$("#container").hide();var a=_obj.initParameter();if(!a){return false}loadDetail()},200)};_obj.initParameter=function(){setStringValue("nState","2");setBackURL("myCenter/myLend/list.htm","理财列表","",1);var a=getStringValue("lUserId");if(isNaN(a)){alert("非法登录，用户信息有误！");return false}_obj.lId=getStringValue("lLendId");_obj.strLendType=getStringValue("strLendType");_obj.lUserId=a;return true};var loadDetail=function(){var a=new CDO();a.setStringValue("strServiceName","LendIntentService");a.setStringValue("strTransName","getLendIntentForMobile");a.setLongValue("lLenderId",Number(_obj.lUserId));a.setLongValue("lLendIntentId",Number(_obj.lId));raiseTrans(a,"callBackGetLendIntentForMobile")};function callBackGetLendIntentForMobile(l,v,b){if(b==undefined||b==null){_shade_layer.hide();info("请求服务失败！");return false}if(b.nCode!=0||!v.exists("cdoLendIntent")){_shade_layer.hide();alert("请求失败，响应参数有误！");return false}var k=v.getCDOValue("cdoLendIntent");var p=""+k.getStringValue("strLendProductName");var h=""+k.getStringValue("dtCreateTime");var e=k.getStringValue("lAmount")+"元";var r=""+k.getStringValue("strStartDate");var n=k.exists("strDisplayRate")?k.getStringValue("strDisplayRate"):"";var a="";if(k.exists("nLendExtRate")){if(checkNumberVariable(k.getStringValue("nLendExtRate"))!=0){a=" + "+k.getStringValue("nLendExtRate")+"%"}}var m=""+k.getStringValue("nDayCount");_obj.strAgreementNo=""+k.getStringValue("strAgreementNo");_obj.get("strLendProductName").innerHTML=p;_obj.get("dtCreateTime").innerHTML=h;_obj.get("lAmount").innerHTML=e;_obj.get("strStartDate").innerHTML=r;_obj.get("nLenderYearRate").innerHTML=n+a;_obj.get("nDayCount").innerHTML=m;var g=k.getStringValue("nDayUnit");if(g=="0"){_obj.get("nDayUnit").innerHTML="天"}else{if(g=="1"){_obj.get("nDayUnit").innerHTML="月"}else{_obj.get("nDayUnit").innerHTML="年"}}var u=k.getStringValue("nContinue");if(u=="0"){_obj.get("nContinue").innerHTML="否"}else{_obj.get("nContinue").innerHTML="是"}if(v.exists("lTotalInterest")){_obj.get("lTotalInterest").innerHTML=Number(v.getStringValue("lTotalInterest"))+"元";_obj.get("lTotalInterest_id_2").innerHTML=Number(v.getStringValue("lTotalInterest"))+"元"}if(v.exists("cdosIncomeList")){var s=v.getCDOArrayValue("cdosIncomeList");var o='<div name="I_dolist_hr" class="z_I_dolist_hr_title"><ul><li>预期收益时间</li><li>收益利息</li><li>收益本金</li><li>状态</li></ul></div>';for(var q=0;q<s.length;q++){o=o+'<div class="z_I_dolist_hr" name="I_dolist_hr"><ul>';o=o+"";var c=s[q];var f=c.getStringValue("strScheduleDate");var t=c.getStringValue("lInterest");var d=c.getStringValue("lPrincipal");o=o+"<li>"+f+"</li>";o=o+"<li>"+(Number(t)/100).toFixed(2)+"元</li>";o=o+"<li>"+(Number(d)/100).toFixed(2)+"元</li>";var w=c.getStringValue("nState");if(w=="0"){o=o+"<li>作废</li>"}else{if(w=="1"){o=o+"<li>未收益</li>"}else{if(w=="2"){o=o+"<li>收益中</li>"}else{if(w=="3"){o=o+"<li>收益成功</li>"}else{o=o+"<li>收益失败</li>"}}}}o=o+"</ul></div>"}_obj.get("i_dolist_0").innerHTML=o}if(v.exists("cdosRechargeList")){var j=v.getCDOArrayValue("cdosRechargeList");var o='<div name="I_dolist_hr" class="z_I_dolist_hr_czjltitle"><ul><li>购买时间</li><li>购买金额</li><li>状态</li></ul></div>';for(var q=0;q<j.length;q++){o=o+'<div class="z_I_dolist_czjlhr" name="I_dolist_hr"><ul>';var x=j[q];var f=x.getStringValue("strScheduleDate");var e=x.getStringValue("lAmount");o=o+"<li>"+f+"</li>";o=o+"<li>"+(Number(e)/100).toFixed(2)+"元</li>";var w=x.getStringValue("nState");if(w=="0"){o=o+"<li>未生效</li>"}else{if(w=="1"){o=o+"<li>未购买</li>"}else{if(w=="2"){o=o+"<li>购买中</li>"}else{if(w=="3"){o=o+"<li>购买成功</li>"}else{o=o+"<li>购买失败</li>"}}}}o=o+"</ul></div>"}_obj.get("i_dolist_1").innerHTML=o}discover_liwidth();_shade_layer.hide();$("#container").show()}function toProductList(){openWindow("lend/productList.htm","理财产品","",1)}$("#finnacial_tzxypull_up").click(function(){if(_obj.strAgreementNo==""||_obj.strAgreementNo=="null"){info("理财协议生成中,请稍候...")}else{seeToAgreementAfterSignature(_obj.strAgreementNo)}});function discover_liwidth(){var b=0;var c=0;if(window.innerWidth){b=window.innerWidth}else{if((document.body)&&(document.body.clientWidth)){b=document.body.clientWidth}}if(window.innerHeight){c=window.innerHeight}else{if((document.body)&&(document.body.clientHeight)){c=document.body.clientHeight}}if(document.documentElement&&document.documentElement.clientHeight&&document.documentElement.clientWidth){c=document.documentElement.clientHeight;b=document.documentElement.clientWidth}var e=document.getElementById("financial_class");var h=e.getElementsByTagName("li").length;var j=b*0.9;var a=(j/2)-1;var k=e.getElementsByTagName("li");var f="";e.style.width=j+"px";for(var d=0;d<h;d++){if(d==1){var g=a+1;k[d].style.width=g+"px"}else{k[d].style.width=a+"px"}}obj_li_width("I_dolist_hr",j)}function onclick_syjl(a,b){if($(a).hasClass("row")){return false}else{$("#crow1").removeClass("row");$("#crow2").removeClass("row");$(a).addClass("row");$("#i_dolist_0").hide();$("#i_dolist_1").hide();$("#i_dolist_"+b).show()}}function obj_li_width(h,d){var g=document.getElementsByName(h);for(var c=0;c<g.length;c++){var f=document.getElementsByName(h)[c].getElementsByTagName("li");var e=(d/f.length)-1;for(var b=0;b<f.length;b++){if(b==(f.length-1)){f[b].style.border="0px"}f[b].style.width=e+"px"}}}function backList(){openWindow("myCenter/myLend/list.htm","理财列表","","1","","1")}function stagespopup(){document.ontouchmove=function(a){a.preventDefault()};document.getElementById("fin_i_table_list").style.display="block";document.getElementById("black_stages_overlayasd").style.display="block"}function stages_close(){document.ontouchmove=function(a){};document.getElementById("fin_i_table_list").style.display="none";document.getElementById("black_stages_overlayasd").style.display="none"}_obj.ret=function(a,b){if(a==undefined||a==null){return false}if(a.nCode!=0){alert("错误:"+a.strText);return false}};_obj.get=function(a){return document.getElementById(a)};_obj.show=function(c,b){if((typeof c==="string")&&c.constructor==String){c=document.getElementById(c)}if(c){var a=b==true?"block":"none";c.style.display=a}};