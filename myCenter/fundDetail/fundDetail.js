var strPlatform="";var lUserId="1001169";var lId=getQueryString("lId");var strTradeType=getQueryString("strTradeType");jsHeight.bodyheight();$(document).ready(function(){_shade_layer.show("加载中...");lUserId=getQueryString("lUserId");var a=new CDO();a.setStringValue("strServiceName","CommonService");a.setStringValue("strTransName","queryThirdRecordByDealSN");a.setStringValue("lId",lId);a.setLongValue("lUserId",lUserId);a.setStringValue("strTradeType",strTradeType);a.setIntegerValue("nPageIndex",0);a.setIntegerValue("nPageSize",1);raiseTrans(a,"callBackForThirdRecord")});$("#app_bj_raw").click(function(){back()});function callBackForThirdRecord(k,t,b){if(b==null||b==undefined){info("通讯失败");_shade_layer.hide();$("#capitalDetails_cen").show();return false}if(b.nCode==0){var p=t.getCDOArrayValue("cdoFundTradeList");var c=p[0].getStringValue("strMsg");var j=p[0].getLongValue("lId");var v=p[0].getIntegerValue("nState");var g=p[0].getStringValue("nFundType");var s=p[0].getStringValue("strTradeMode");var m=p[0].getStringValue("strOrderSn");var e=p[0].getLongValue("lPrice");var h=p[0].getStringValue("dtCreateTime");var l=p[0].getStringValue("dtUpdateTime");var d="";if(p[0].exists("strProductName")){d=p[0].getStringValue("strProductName")}if(v==0){v="交易处理中"}else{if(v==1){v="交易成功"}else{if(v==2){v="交易失败";$("#strMsg").html(c);$("#msgHide").show()}else{v="异常状态id:"+j}}}if(null!=d&&$.trim(d)!=""){$("#jycpName").html(d);$("#JYCP").show()}$("#state").html(v);$("#price").html(e/100+"元");$("#dtCreateTime").html(h);$("#dtModifyTime").html(l);$("#strTradeNo").html(m);$("#strTradeMode").html(s);$("#detailjiaoyi").append(g);if(t.exists("cdosThirdRecord")){var f=t.getCDOArrayValue("cdosThirdRecord");for(var o=0;o<f.length;o++){if(f[o].exists("dtFinishTime")&&f[o].exists("dtScheduleDate")&&f[o].exists("lMoney")&&f[o].exists("strResultDesc")){var a=f[o].getDateTimeValue("dtFinishTime");var q=f[o].getDateTimeValue("dtScheduleDate");var r=f[o].getStringValue("lMoney");var u=f[o].getStringValue("strResultDesc");if(q.length>10){q=q.replace(/-/g,"/");q=q.substring(5)}var n="";n='<li><div class="recrod_time">'+q+'</div>	<div class="recrod_money">'+r/100+'元</div>	<div class="recrod_result">'+u+"</div></li>";$("#dataLi").append(n)}else{continue}}}_shade_layer.hide();$("#capitalDetails_cen").show()}else{info(b.strText);_shade_layer.hide();$("#capitalDetails_cen").show()}};