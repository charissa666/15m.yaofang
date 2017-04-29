//优化加载
var t = setInterval(function(){
	if(document.readyState=="complete"){
		clearInterval(t);
		$('#spinner').hide();
		$('#s_shade').hide();
	}
},500);

//取消默认的双击事件
$('body').dblclick(function(ev){
	ev.preventDefault();
});
