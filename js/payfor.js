//显示每康卡跟预存款
$('.payList>li>p').click(function(){
	$(this).children('b').toggleClass('down');
	$(this).next().toggle();
	if($('.mkkzf').css('display') == 'none' && $('.yckzf').css('display') == 'none'){
		$('.footPay').hide();
	}else{
		$('.footPay').show();
	}
});

//底部输入密码
$('.footBtn').click(function(){
	$('.shade').show();
	$('.payCont').show();
});
function closePay(){
	$('.shade').hide();
	$('.payCont').hide();
};
$('.payCont>img').click(function(){
	closePay();
});
$('.shade').click(function(){
	closePay();
});

//每康卡选择
$('.mkkItem01 input').change(function(){
	if($(this).attr('checked')){
		$(this).prev().addClass('on');
	}else{
		$(this).prev().removeClass('on');
	}
});

//预存款输入金额
$('#yckInp').on('input',function(){
	var val = $(this).val();
	var kuc = parseInt($('#yckMax').html());
	if(val == ''){
		$('#yckInp').val(0);
	}else if(parseInt(val) > kuc){
		$('#yckInp').val(kuc);
	}else{
		$('#yckInp').val(parseInt(val));
	}
});

//底部使用按钮
$('.footBtn').on('click',function(){
	var total = parseInt($('#total').html());
	var mkk = 0;
	var yck = $('#yckInp').val()?parseInt($('#yckInp').val()):0;
	$('.mkkItem01 input:checked').each(function(){
		mkk += parseInt($(this).parents('p').next().find('em').html());
	});
	$('#usedNum').html(mkk+yck);
	$('#needNum').html(total-mkk-yck);
});
