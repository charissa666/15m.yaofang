//banner轮播
var bannerList = [
	{image: '../img/goods01.jpg'}, 
	{image: '../img/goods02.jpg'}, 
	{image: '../img/goods03.jpg'}
];
function renderBanner(bannerList) {
	var html = '<ul class="slider-list">';
	$.each(bannerList, function(index, item) {
		html += '<li class="slider-item openParam" data-baidu-action="banner" data-baidu-label="' + (parseInt(index) + 1) + '">' +
			'<div class="img-wrap"><img class="banner-image" src="' + item["image"] + '"/></div></li>';
	});
	html += '</ul>';
	return html;
};
var bannerHTML = bannerList ? this.renderBanner(bannerList) : '';
$('#banner').html(bannerHTML);
$('#banner').slider({
	'autoScroll': true,
	'infinite': true
});

//商品数量
$('#add').click(function(){
	var num = $('#numInp').val();
	var kuc = parseInt($('#kuc').html());
	num<kuc?num++:num=kuc;
	$('#numInp').val(num);
});
$('#reduce').click(function(){
	var num = $('#numInp').val();
	num == 0?0:num--;
	$('#numInp').val(num);
});
$('#numInp').on('input',function(){
	var val = $(this).val();
	var kuc = parseInt($('#kuc').html());
	if(val == ''){
		$('#numInp').val(0);
	}else if(parseInt(val) > kuc){
		$('#numInp').val(kuc);
	}else{
		$('#numInp').val(parseInt(val));
	}
});

//收藏
$('.buy_coll').click(function(){
	if($(this).find('i').html() == '收藏'){
		$(this).find('b').css('background-position','0 -0.4rem').next().html('已收藏');
	}else{
		$(this).find('b').css('background-position','0 0').next().html('收藏');
	}
});
	
//tap切换
$('.goodsShow_tit span').click(function(){
	$(this).addClass('on').siblings().removeClass('on');
	$('.showCont_list').eq($(this).index()).show().siblings().hide();
});

//分享
$('.goodsInf_share').click(function(){
	$('.shade').show();
	$('.shareCont').show();
});
function shadeHide(){
	$('.shade').hide();
	$('.shareCont').hide();
}
$('.shade').click(function(){
	shadeHide();
});
$('.shareTit>img').click(function(){
	shadeHide();
});

//加入购物车
$('.addShop').click(function(){
	var num = parseInt($('#numInp').val());
	var shopNum = parseInt($('.shopNum').html());
	$('.shopNum').html(num+shopNum);
	$('.car_hint').show();
	setTimeout(function(){
		$('.car_hint').hide();
	},1200)
});
	
//tab标题
if($('.goodsShow_tit span').size() == 3){
	$('.goodsShow_tit span').css('width','32%')
}else if($('.goodsShow_tit span').size() == 2){
	$('.goodsShow_tit span').css('width','49%')
};

//说明书友情提示
$('.td_name').each(function(){
	if($(this).html() == '【友情提示】'){
		$(this).css('color','#e83c48');
	}
});
	
	

