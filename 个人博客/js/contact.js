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
	 	$('.rightmain div').animate({left:'0px',top:'0px'},800)
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
var map = new BMapGL.Map('map');
var point = new BMapGL.Point(106.55429,29.55642);
map.centerAndZoom(point, 15);
map.enableScrollWheelZoom(true);

// 创建点标记
var marker = new BMapGL.Marker(point);
map.addOverlay(marker);
// 创建信息窗口
var opts = {
    width: 200,
    height: 100,
    title: '重庆市'
};
var infoWindow = new BMapGL.InfoWindow('地址：重庆市', opts);
// 点标记添加点击事件
marker.addEventListener('click', function () {
    map.openInfoWindow(infoWindow, point); // 开启信息窗口
});
