$(function(){
	$(document).ready(function(){
			$('.rightmain div').animate({left:'0px'},800)	
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
		if($(document).scrollTop()>300){
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