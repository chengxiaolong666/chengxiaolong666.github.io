jsHeight.bodyheight();$(document).ready(function(){$("#toGoodsList").click(function(){toGoodsList()});$("#toOrderList").click(function(){toOrderList()});$("#toGoodsListBtn").click(function(){toGoodsList()});setTimeout(function(){if(getQueryString("strResult")!=""){$("#showTitel").html(decodeURI(getRequestParameter("strResult")))}var a=getQueryString("strOrderSerl");$("#orderSerl").html(a);$("#payValue").html("￥"+(Number(getQueryString("strFirstPrice"))/100));$("#payTime").html(getQueryString("strOrderTime"))},300)});function toOrderList(){openDelayWindow("myCenter/mallOrder/orderList.htm","订单列表","backType=afterPayment",0)}function toGoodsList(){openDelayWindow("mall/goodsList.htm","商品列表","",0)};