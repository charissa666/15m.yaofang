//点击查看提示
$('#hint').click(function(){
	$('.shade').show();
	$('.hintCont').show();
});
function closeHint(){
	$('.shade').hide();
	$('.hintCont').hide();
};
$('.hintClose').click(function(){
	closeHint()
});
$('.shade').click(function(){
	closeHint()
});

//上传处方图片
$(document).on('change','.formImgInp',function(){
	var src = $(this).val();
	var id = $(this).attr('id');
	if(src != ''){
		_src = src.toLowerCase().substring(src.lastIndexOf('.'));
		if(_src != '.jpg' && _src != '.png' && _src != 'jpeg' && _src != 'gif' && _src != 'bmp'){
			alert('暂不支持' + _src + '格式的图片，请上传(jpg/png/jpeg/gif/bmp)的图片');
		}else{
			var f = document.getElementById(id).files[0];
			var s = window.URL.createObjectURL(f);
			$(this).next().show();
			$(this).prev().children().attr('src',s);
		}
	}
});


//删除处方图片
$('.formImg dd').click(function(){
	$(this).hide().siblings('dt').children().attr('src','../img/uploadImg.jpg').prev().val('');
});

//提交需求
$('.formBtn').click(function( ev ){
	var phone = $('#uPhone');
	var name = $('#uName');
	if(name.val() == ''){
		$('.errorHint').show().html('姓名不能为空');
		ev.preventDefault();
	}else if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone.val())) && name.val() != ''){
		$('.errorHint').show().html('请输入正确的手机号');
		ev.preventDefault();
	}else{
		$('.form').submit();
	}
	setTimeout(function(){
		$('.errorHint').hide();
	},1200);
});
