//清除收货人姓名
$('.nameClose').click(function(){
	$(this).prev().val('');
});

//地址
function initLocation(option)
{
	option = $.extend({
		sheng:"sheng",		//省的网页ID
		shi:"shi",			//市的网页ID
		xian:"xian",		//县的网页ID
		xiang:"xiang",		//乡的网页ID
		sheng_val:"",		//默认省份
		shi_val:"",			//默认地区
		xian_val:"",		//默认县
		xiang_val:""		//默认乡镇
	},option||{});

	if(option.sheng_val == ""){
		option.sheng_val == "-1";
	}
		
	var gpm = new GlobalProvincesModule;

	gpm.def_province = ["---", -1];
	gpm.initProvince(document.getElementById(option.sheng));
	gpm.initCity1(document.getElementById(option.shi), option.sheng_val);
	gpm.initCity2(document.getElementById(option.xian), option.sheng_val, option.shi_val);
	gpm.initCity3(document.getElementById(option.xiang), option.sheng_val, option.shi_val, option.xian_val);
	gpm.selectProvincesItem(document.getElementById(option.sheng), option.sheng_val);
	gpm.selectCity2Item(document.getElementById(option.xian), option.xian_val);
	gpm.selectCity1Item(document.getElementById(option.shi), option.shi_val);
	if(document.getElementById(option.xiang).options.length > 1){
		gpm.selectCity2Item(document.getElementById(option.xiang), option.xiang_val);
		document.getElementById(option.xiang).style.display ="inline";
		document.getElementById(option.xiang).style.display = "inline";
	}
	
	var onchgProv = function()
	{	
		gpm.initCity1(document.getElementById(option.shi), gpm.getSelValue(document.getElementById(option.sheng)));
		gpm.initCity2(document.getElementById(option.xian), '', '');		/* clear city2 select options*/
		gpm.initCity3(document.getElementById(option.xiang), '', '', '');
		$("#"+option.xiang).hide();
		
	}
	var onchgCity1 = function()
	{
		gpm.initCity2(document.getElementById(option.xian), gpm.getSelValue(document.getElementById(option.sheng)), gpm.getSelValue(document.getElementById(option.shi)));
		gpm.initCity3(document.getElementById(option.xiang), '', '', '');
		$("#"+option.xiang).hide();
		
	}
	var onchgStreet1 = function(){
		
		gpm.initCity3(document.getElementById(option.xiang), gpm.getSelValue(document.getElementById(option.sheng)), gpm.getSelValue(document.getElementById(option.shi)), gpm.getSelValue(document.getElementById(option.xian)));

		if($("#"+option.xiang).children().length > 1) {
				$("#"+option.xiang).show();
		} else {
				$("#"+option.xiang).hide();
		}
	}

	if(option.xiang_val == "") 
		$("#"+option.xiang).hide();
	$("#"+option.sheng).change(onchgProv);
	$("#"+option.shi).change(onchgCity1);
	$("#"+option.xian).change(onchgStreet1);

}

initLocation({
	sheng_val:"北京",
	shi_val:"丰台",
	xian_val:"<?php echo $v['country']?>",
	xiang_val:"<?php echo $v['street']?>"
});

//保存
$('#save').click(function(){
	var Uname = $('#Uname').val();
	var phone = $('#phone').val();
	var p = $('#sheng').val();
	var s = $('#shi').val();
	var q = $('#xian').val();
	var j = $('#xiang').val();
	var a = $('#detail_add').val();
	if(!Uname){
		$('.shade').show();
		$('.errorHint').show();
		$('.errorHint>p').html('收货人姓名不能为空!');
		return false;
	}else if(!/^1[3|5|7|8]\d{9}$/.test($('#phone').val())){
		$('.shade').show();
		$('.errorHint').show();
		$('.errorHint>p').html('请重新输入手机号码!');
		return false;
	}else if(!p || !s || !q || !j || !a){
		$('.shade').show();
		$('.errorHint').show();
		$('.errorHint>p').html('收货地址不能为空!');
		return false;
	}else{				//保存成功
		
	}
});

//关闭弹窗
$('.shade').click(function(){
	$(this).hide();
	$('.errorHint').hide();
});
