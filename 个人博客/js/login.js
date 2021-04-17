$(function(){
	$('.loginjiemian>button').eq(2).click(function(){
		$('.loginjiemian').fadeOut(1000)
		$('.register').fadeIn(1000)
	})
	$('.register>button').eq(1).click(function(){
		$('.loginjiemian').fadeIn(1000)
		$('.register').fadeOut(1000)
	})
})
$(function(){
	var pattern;
	var res1,res2,res3,res4;
	//失焦判断格式是否正确
	$('.register>input').eq(0).blur(function(){
		pattern=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
		res1=pattern.test($('.register>input:eq(0)').val())
		if(!res1){
			$(this).after('<span>您输入的格式有误，请重新输入</span>')  
		}
	})
	$('.register>input').eq(1).blur(function(){
		pattern=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
		res2=pattern.test($('.register>input:eq(1)').val())
		if(!res2){
			$(this).after('<span>您输入的格式有误，请重新输入</span>')  
		}
	})
	$('.register>input').eq(2).blur(function(){
		if($('.register>input:eq(1)').val()!=$('.register>input:eq(2)').val()){
			$(this).after('<span>您输入密码与上面不一致</span>')
		}
	})
	$('.register>button:eq(0)').click(function(){
		if(res1 && res2 && $('.register>input:eq(1)').val()==$('.register>input:eq(2)').val()){
			window.localStorage.setItem('user',$('.register>input:eq(0)').val())
			window.localStorage.setItem('pass',$('.register>input:eq(1)').val())
			alert('注册成功')
			$('.register>input').val(null);
		}else{
			alert('注册失败，请检查你的用户名或密码')
		}
	})
	$('.loginjiemian>input').eq(0).blur(function(){
		pattern=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
		res3=pattern.test($('.loginjiemian>input:eq(0)').val())
		if(!res3){
			$(this).after('<span>您输入的格式有误，请重新输入</span>')  
		}
	})
	$('.loginjiemian>input').eq(1).blur(function(){
		pattern=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
		res4=pattern.test($('.loginjiemian>input:eq(1)').val())
		if(!res4){
			$(this).after('<span>您输入的格式有误，请重新输入</span>')  
		}
	})
	$('.loginjiemian>button:eq(0)').click(function(){
		var random=String(parseInt(Math.random()*10000));
		$('.loginjiemian>div').replaceWith('<div>'+random+'</div>');
	})
	$('.loginjiemian>button:eq(1)').click(function(){
		var user=window.localStorage.getItem('user');
		var pass=window.localStorage.getItem('pass');
		var textuser=$('.loginjiemian>input:eq(0)').val();
		var textpass=$('.loginjiemian>input:eq(1)').val();
		var code=$('.loginjiemian>div').text();
		var textcode=$('.loginjiemian>input:eq(2)').val();
		if(res3 && res4 && textuser==user && textpass==pass && code==textcode && textcode!=""){
			alert('登录成功，欢迎回来！')
			window.location.href='index.html';
		}else{
			alert('您输入的用户名或密码错误')
			var random=String(parseInt(Math.random()*10000));
			$('.loginjiemian>div').replaceWith('<div>'+random+'</div>');
			$('.loginjiemian>input:eq(1)').val(null);
		}
	})
	$('input').focus(function(){
		$('span').remove()
	})
})