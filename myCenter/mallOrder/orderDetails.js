var strSerlNum=getQueryString("strSerlNum");var strAgreementId="";jsHeight.bodyheight();$(document).ready(function(){_shade_layer.show("加载中,请稍候......");var a=new CDO();a.setStringValue("strServiceName","OrderService");a.setStringValue("strTransName","getCDOOrderyOId");a.setStringValue("strSerlNum",strSerlNum);raiseTrans(a,"callBackForCDOOrderyOId")});function callBackForCDOOrderyOId(j,t,b){if(b==null||b==undefined){_shade_layer.hide();info("通信失败!");return false}if(b.nCode==0){var a=t.getCDOValue("cdoOrder");var r=a.exists("strGoodsTitle")?a.getStringValue("strGoodsTitle"):"";var q=a.exists("nGoodsAmount")?a.getStringValue("nGoodsAmount"):"0";var e=a.exists("nAmount1")?a.getStringValue("nAmount1"):"0";var o=a.exists("nFirstPrice1")?a.getStringValue("nFirstPrice1"):"0";var s=a.exists("nTermCount")?a.getStringValue("nTermCount"):"0";var c=a.exists("nTermPrice1")?a.getStringValue("nTermPrice1"):"0";var p=a.getStringValue("strGoodsLogoURL");var u=a.getStringValue("nState");var m=a.exists("lId")?a.getStringValue("lId"):"";var n=a.getStringValue("strProtocolSN");var l=a.getIntegerValue("nProtocolState");if(Number(l)==14){strAgreementId=n}if(u=="0"||u=="1"||u=="2"||u=="3"||u=="4"||u=="7"||u=="8"||u=="9"||u=="10"){u="未完成"}else{if(u=="-1"||u=="5"||u=="6"||u=="11"||u=="12"||u=="13"){u="已完成"}else{u="位置状态"}}var d=a.exists("strSerlNum")?a.getStringValue("strSerlNum"):"";var g=a.exists("dtCreateTime")?a.getStringValue("dtCreateTime"):"";var i=a.exists("strConsigneeName")?a.getStringValue("strConsigneeName"):"";var h=a.exists("strMobile")?a.getStringValue("strMobile"):"";var f=a.exists("strFullDistrictName")?a.getStringValue("strFullDistrictName"):"";var k=a.exists("strAddress")?a.getStringValue("strAddress"):"";$("#img_title").attr("src",p).attr("height","180px").attr("width","99px");$("#strGoodsTitle").html(r);$("#nGoodsAmount").html(q);$("#nAmount1").html("￥"+e);$("#nFirstPrice1").html("￥"+o);$("#nTermCount").html(s+"个月");$("#nTermPrice1").html(c+"元");$("#nState").html(u);$("#strSerlNum").html(d);$("#dtCreateTime").html(g);$("#strConsigneeName").html(i);$("#strMobile").html(h);$("#strAddress").html(f+k)}else{info(b.strText)}$("#container").show();_shade_layer.hide()}$("#mall_pull_up").click(function(){if(strAgreementId==""){info("协议尚未生成,暂无法查看。")}else{EngineClass.seeToAgreementAfterSignature(strAgreementId)}});function toOrderList(){openDelayWindow("myCenter/mallOrder/orderList.htm","订单列表","",0)};