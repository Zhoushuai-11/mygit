$(function(){
	var imgs=['imgs/head.jpg','imgs/head2.jpg','imgs/head3.jpg','imgs/head4.jpg','imgs/head5.jpg','imgs/head6.jpg','imgs/head7.jpg'];
	$('.rightmain>input:eq(0)').val(window.localStorage.getItem('user'));
	$('.rightmain>input:eq(1)').val(window.localStorage.getItem('name'));
	$('.rightmain>input:eq(2)').val(window.localStorage.getItem('phone'));
	$('.rightmain>input:eq(3)').val(window.localStorage.getItem('email'));
	$('.leftmain>img').attr('src',imgs[parseInt(window.localStorage.getItem('head'))])
})
$(function(){
	var res1,res2,res3;
	$('.rightmain>input:eq(1)').blur(function(){
		var pattern=/^[\u4e00-\u9fa5]{2,4}$/
		res1=pattern.test($('.rightmain>input:eq(1)').val())
		if(!res1){
			$(this).after('<span>您输入的格式错误</span>')
		}
	})
	$('input').focus(function(){
		$('input').next('span').remove()
	})
	$('.rightmain>input:eq(2)').blur(function(){
		var pattern=/^1[0-9]{10}$/
		res2=pattern.test($('.rightmain>input:eq(2)').val())
		if(!res2){
			$(this).after('<span>您输入的格式错误</span>')
		}
	})
	$('.rightmain>input:eq(3)').blur(function(){
		var pattern=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		res3=pattern.test($('.rightmain>input:eq(3)').val())
		if(!res3){
			$(this).after('<span>您输入的格式错误</span>')
		}
	})
	var imgs=['imgs/head.jpg','imgs/head2.jpg','imgs/head3.jpg','imgs/head4.jpg','imgs/head5.jpg','imgs/head6.jpg','imgs/head7.jpg']
	var index=0;
	$('.leftmain>img').click(function(){
		index++;
		$(this).attr('src',imgs[index])
		if(index>6){
			index=0;
		}
	})
	$('.rightmain>button').click(function(){
		if(res1 && res2 && res3){
			alert('修改成功')
			window.localStorage.setItem('name',$('.rightmain>input:eq(1)').val())
			window.localStorage.setItem('phone',$('.rightmain>input:eq(2)').val())
			window.localStorage.setItem('email',$('.rightmain>input:eq(3)').val())
			window.localStorage.setItem('head',index)
		}
	})
	
})