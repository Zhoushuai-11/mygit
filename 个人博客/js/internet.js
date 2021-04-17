$(function(){
	for(var i=0;i<50;i++){
		var randomx=Math.random()*1500;
		var randomy=Math.random()*220;
		$('.titleimg').append('<div class="smallball"></div>')
		$('.smallball').eq(i).css('left',randomx+'px')
		$('.smallball').eq(i).css('top',randomy+'px')
	}
	setInterval(function(){
		$('.smallball').fadeIn(2000).fadeOut(1000)
	},3000)
})
$(function(){
	$(document).ready(function(){
		$('.leftmain ul div').eq(0).children('li').animate({top:'0px',left:'0px'},800)
		.parents('ul').children('div').eq(1).children('li').delay(200).animate({top:'0px',left:'0px'},800)
		$('.rightmain div').animate({left:'0px'},800)
	})
	$(document).scroll(function(){
		if($(document).scrollTop()>200){
			$('.leftmain ul div').eq(2).children('li').animate({top:'0px',left:'0px'},800)
			.parents('ul').children('div').eq(3).children('li').delay(200).animate({top:'0px',left:'0px'},800)
		}
		if($(document).scrollTop()>400){
			$('.leftmain ul div').eq(4).children('li').animate({top:'0px',left:'0px'},800)
			.parents('ul').children('div').eq(5).children('li').delay(200).animate({top:'0px',left:'0px'},800)
		}
	})
})
$(function(){
	$('.rightmain>div>ul>li:nth-of-type(4)>p:last-of-type').mouseenter(function(){
		$(this).stop(true)
		$(this).css('background','black')
		$(this).animate({width:'300px'})
	})
	$('.rightmain>div>ul>li:nth-of-type(4)>p:last-of-type').mouseleave(function(){
		$(this).stop(true)
		$(this).css('background','#4299e1')
		$(this).animate({width:'270px'})
	})
})
$(function(){
	$('.longimg>p').mouseenter(function(){
		$(this).stop(true)
		$(this).css('background','black')
		$(this).animate({width:'300px'})
	})
	$('.longimg>p').mouseleave(function(){
		$(this).stop(true)
		$(this).css('background','#4299e1')
		$(this).animate({width:'270px'})
	})
})
$(function(){
	$(document).scroll(function(){
		if($(document).scrollTop()>700){
			$('.turntop').css('display','block')
		}else{
			$('.turntop').css('display','none')
		}
	})
	var time;
	$('.turntop').click(function(){
		time=setInterval(function(){
			window.scrollBy(0,-20)
		},5)
	})
	$(document).scroll(function(){
		if($(document).scrollTop()<=10){
			clearInterval(time)
		}
	})
})