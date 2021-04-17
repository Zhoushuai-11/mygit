$(function(){
	var index=0;
	setInterval(function(){
		if(index==0){
			$('.back img').eq(1).fadeOut(3000);
			$('.back img').eq(0).fadeIn(3000);
			index++;
		}else{
			$('.back img').eq(0).fadeOut(3000);
			$('.back img').eq(1).fadeIn(3000);
			index=0;
		}	
	},6000)
	$('.backleft a')
	.mouseenter(function(){
		$(this).stop(true)
		$(this).css('background','black');
		$(this).animate({paddingRight:'50px'})
	})
	.mouseleave(function(){
		$(this).stop(true)
		$(this).animate({paddingRight:'18px'})
		$(this).css('background','rgb(66, 153, 225)');
	})
})
$(function(){
	var index=0;
	$('.jpmain span').eq(0).click(function(){
		$('.jpmain ul').stop(true);
		if(index>0){
			index--;
			$('.jpmain ul').animate({left:index*-310+'px'})
		}else{
			index=4;
			$('.jpmain ul').animate({left:index*-310+'px'})	
		}
	})
	$('.jpmain span').eq(1).click(function(){
		$('.jpmain ul').stop(true);
		if(index<4){
			index++;
			$('.jpmain ul').animate({left:index*-310+'px'})
		}else{
			index=0;
			$('.jpmain ul').animate({left:index*-310+'px'})	
		}
	})
})
$(function(){
	$('.jpmain ul li').mouseenter(function(){
		$(this).children('p').eq(0).css('color','#4299e1')
		
	})
	$('.jpmain ul li').mouseleave(function(){
		$(this).children('p').eq(0).css('color','black')
	})
})
$(function(){
	$(document).scroll(function(){
		if($(document).scrollTop()>300){
			$('.jpmain ul div').eq(0).children('li').animate({top:'0px'},800)
			.parents('ul').children('div').eq(1).children('li').delay(100).animate({top:'0px'},800)
			.parents('ul').children('div').eq(2).children('li').delay(200).animate({top:'0px'},800)
			.parents('ul').children('div').eq(3).children('li').delay(300).animate({top:'0px'},800)
			.parents('ul').children('div').eq(4).children('li').delay(300).animate({top:'0px'})
			.parents('ul').children('div').eq(5).children('li').delay(300).animate({top:'0px'})
			.parents('ul').children('div').eq(6).children('li').delay(300).animate({top:'0px'})
			.parents('ul').children('div').eq(7).children('li').delay(300).animate({top:'0px'})
		}
	})
})
$(function(){
	$(document).scroll(function(){
		if($(document).scrollTop()>700){
			$('.leftmain ul div').eq(0).children('li').animate({top:'0px'},800)
			.parents('ul').children('div').eq(1).children('li').delay(200).animate({top:'0px'},800)
			$('.rightmain div').animate({left:'0px'},800)
		}
		if($(document).scrollTop()>1100){
			$('.leftmain ul div').eq(2).children('li').animate({top:'0px'},800)
			.parents('ul').children('div').eq(3).children('li').delay(200).animate({top:'0px'},800)
		}
		if($(document).scrollTop()>1300){
			$('.leftmain ul div').eq(4).children('li').animate({top:'0px'},800)
			.parents('ul').children('div').eq(5).children('li').delay(200).animate({top:'0px'},800)
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
	$('.haowumain>ul>li').mouseenter(function(){
		$(this).children('div').stop(true)
		$(this).children('div').fadeIn(400)
	})
	$('.haowumain>ul>li').mouseleave(function(){
		$(this).children('div').stop(true)
		$(this).children('div').fadeOut(400)
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