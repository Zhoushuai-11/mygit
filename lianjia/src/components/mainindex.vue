<template>
<div class="mainindex">
	<div class="vansearch">
	<van-search
		v-model="value"
	  label="北京"
	  placeholder="你想住在哪里"
	  @focus="onfocus"
	>
	</van-search>
	</div>
	<div class="vanswipe">
	<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
	  <van-swipe-item><img src="../assets/move.png" alt=""></van-swipe-item>
	  <van-swipe-item><img src="../assets/move1.png" alt=""></van-swipe-item>
	  <van-swipe-item><img src="../assets/move1.png" alt=""></van-swipe-item>
	  <van-swipe-item><img src="../assets/move3.png" alt=""></van-swipe-item>
	</van-swipe>
	</div>
	<div class="icons">
		<ul>
			<li v-for="(val,index) in iconlists" @click="leave(index)"><div :style="{background:val.color}"><van-icon :name="val.name" color="white" size="30px"/></div><p>{{val.text}}</p></li>
		</ul>
	</div>
	<div class="fourimg">
		<ul>
			<li><img src="../assets/fourimg.png" alt=""></li>
			<li><img src="../assets/fourimg1.png" alt=""></li>
			<li><img src="../assets/fourimg2.png" alt=""></li>
			<li><img src="../assets/fourimg3.png" alt=""></li>
		</ul>
	</div>
	<div class="hotact">
		<p>热门活动</p>
		<van-swipe :show-indicators="false">
		  <van-swipe-item><li><p>万链家装-精装修低至5万9</p></li>
		<li><p>50万帮你装新家贝壳装修分期</p></li></van-swipe-item>
		  <van-swipe-item><li><p>文化名城-德国柏林置业指南</p></li>
		<li><p>房产价值评估师级别自测</p></li></van-swipe-item>
		</van-swipe>
	</div>
	<div class="avgprice">
		<p>北京市场行情</p>
		<li><p>全市均价</p><p>61607 <span>元/平米</span> </p></li>
		<li><p>昨日链家成交量</p><p>168 <span>套</span></p></li>
	</div>
	<div class="twohand">
		<p>二手精选</p>
		<van-swipe :show-indicators="false">
		  <van-swipe-item><li><img src="../assets/twohand1.png" alt=""><p>置业朝阳必看商圈</p><p>首付200万买100m^2</p></li>
		<li><img src="../assets/twohand2.png" alt=""><p>新房特惠专场</p><p>优惠新房任你选</p></li></van-swipe-item>
		  <van-swipe-item><li><img src="../assets/twohand3.png" alt=""><p>中国茶叶第一街</p><p>茶香四溢的马连道</p></li>
		<li><img src="../assets/twohand4.png" alt=""><p>天天好房推荐</p><p>最新开盘优选</p></li></van-swipe-item>
		</van-swipe>
	</div>
	<div class="newhome">
		<p>新房优选</p>
		<van-swipe :show-indicators="false">
		  <van-swipe-item><li><img src="../assets/newhome1.png" alt=""><p>刚需优选小户型</p><p>四大商圈 20套精选房</p></li>
		<li><img src="../assets/newhome2.png" alt=""><p>700万改善3居</p><p>五环内改善优选房</p></li></van-swipe-item>
		  <van-swipe-item><li><img src="../assets/newhome3.png" alt=""><p>中国茶叶第一街</p><p>茶香四溢的马连道</p></li>
		</van-swipe-item>
		</van-swipe>
	</div>
	<div class="tools">
		<van-grid :column-num="5" :icon-size="26">
		  <van-grid-item icon="comment-o" text="问答" />
		  <van-grid-item icon="orders-o" text="百科" to="/allknow"/>
		  <van-grid-item icon="newspaper-o" text="计算器" />
		  <van-grid-item icon="star-o" text="购房资质" />
		  <van-grid-item icon="wap-home-o" text="附近门店" />
		</van-grid>
	</div>
	<div class="like">
		<p>猜你喜欢</p>
		<van-tabs v-model="active" title-active-color="rgba(1, 155, 64, 1)" line-width="0" :animated="true">
		  <van-tab title="二手房"><li v-for="val in homefor"><img :src="val.path" alt=""><p>{{val.p1}}</p>
		  <p>{{val.p2}}</p>
		  <p><span v-if="val.year" style="background: rgba(255, 233, 230, 1);color: rgba(255, 164, 150, 1);">满五年</span>
		  <span v-if="val.newhome" style="background: rgba(229, 244, 234, 1);color: rgba(122, 218, 139, 1);">新上房源</span>
		  <span v-if="val.train" style="background: rgba(226, 240, 253, 1);color: rgba(134, 195, 249, 1);">地铁</span></p>
		  <p><font>{{val.p3}}</font> {{val.p4}}</p></li></van-tab>
		  <van-tab title="新房"><li v-for="val in newhome"><img :src="val.path" alt=""><p>{{val.p1}}</p>
		  <p>{{val.p2}}</p>
		  <p><span v-if="val.year" style="background: rgba(255, 233, 230, 1);color: rgba(255, 164, 150, 1);">住宅</span>
		  <span v-if="val.newhome" style="background: rgba(229, 244, 234, 1);color: rgba(122, 218, 139, 1);">车位充足</span>
		  <span v-if="val.train" style="background: rgba(226, 240, 253, 1);color: rgba(134, 195, 249, 1);">低密度</span></p>
		  <p><font>{{val.p3}}</font> {{val.p4}}</p></li></van-tab>
		</van-tabs>
	</div>
	<div class="whiteend"></div>
</div>
</template>

<script>
import Vue from 'vue';
import {Search} from 'vant';
Vue.use(Search);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
import { Grid, GridItem } from 'vant';
import { Icon } from 'vant';
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
	export default{
		name:'mainindex',
		data(){
			return{
				 homefor:[{path:require('../assets/like1.png'),p1:'流星花园三区 2室1厅',p2:'102.4m^2/南 北/低楼层 共6层',year:true,newhome:true,train:true,p3:'460万',p4:'44,922元/平'},
				 {path:require('../assets/like2.png'),p1:'新龙城 2室1厅',p2:'95.19m^2/东 西/低楼层 共9层',year:true,newhome:false,train:true,p3:'462万',p4:'48,544元/平'},
				 {path:require('../assets/like3.png'),p1:'龙腾苑六区 3室1厅',p2:'118.02m^2/南 北/低楼层 共6层',year:true,newhome:true,train:true,p3:'490万',p4:'41.519元/平'},
				 {path:require('../assets/like4.png'),p1:'安华西里一区 2室2厅',p2:'68.85m^2/西 南/低楼层 共21层',year:true,newhome:true,train:true,p3:'540万',p4:'78,432元/平'},
				 {path:require('../assets/like5.png'),p1:'新龙城 3室2厅',p2:'111.6m^2/南 北/低楼层 共15层',year:true,newhome:false,train:true,p3:'610万',p4:'54.660元/平'},
				 {path:require('../assets/like6.png'),p1:'新龙城 2室1厅',p2:'95.19m^2/东 西/低楼层 共9层',year:true,newhome:false,train:true,p3:'462万',p4:'48,544元/平'}],
				 
				 newhome:[{path:require('../assets/likenew1.png'),p1:'望都新地',p2:'昌平-北七家立汤路与定泗路交…',year:true,newhome:true,train:true,p3:'43800元/平',p4:'建面72~178m^2'},
				 {path:require('../assets/likenew2.png'),p1:'花雨汀',p2:'昌平-城南街道凉水河村拓然家…',year:true,newhome:false,train:true,p3:'58000元/平',p4:'建面90~140m^2'},
				 {path:require('../assets/likenew3.png'),p1:'秦禾昌平拾景园',p2:'昌平-昌平地铁南邵站西100米',year:true,newhome:true,train:true,p3:'51000元/平',p4:'建面87~146m^2'},
				 {path:require('../assets/likenew4.png'),p1:'北京风景',p2:'昌平-京藏高速30（昌平城区……',year:true,newhome:true,train:true,p3:'48000元/平',p4:'建面95~150m^2'},
				 {path:require('../assets/likenew5.png'),p1:'领秀慧谷D区',p2:'昌平-京藏高速北安河出口北300米',year:true,newhome:false,train:true,p3:'58000元/平',p4:'建面90~140m^2'},
				 {path:require('../assets/likenew6.png'),p1:'华润未来城市',p2:'昌平-昌平区小汤山镇（未来科…',year:true,newhome:true,train:false,p3:'61000元/平',p4:'建面49~176m^2'}],
				 active:0,
				 value:'',
				 iconlists:[{name:'wap-home',color:'rgba(0, 197, 136, 1)',text:'二手房'},
				 {name:'diamond',color:'rgba(255, 135, 94, 1)',text:'新房'},
				 {name:'bag',color:'rgba(255, 177, 98, 1)',text:'租房'},
				 {name:'send-gift',color:'rgba(76, 162, 249, 1)',text:'海外'},
				 {name:'shop',color:'rgba(42, 202, 228, 1)',text:'旅居'},
				 {name:'invition',color:'rgba(249, 116, 111, 1)',text:'环京区域'},
				 {name:'location',color:'rgba(231, 191, 99, 1)',text:'地图找房'},
				 {name:'label',color:'rgba(7, 192, 168, 1)',text:'找小区'},
				 {name:'graphic',color:'rgba(130, 207, 128, 1)',text:'查成交'},
				 {name:'column',color:'rgba(249, 114, 113, 1)',text:'卖房'}],
				 
				 paths:['/oldhome','/newhome','/renthome','/index/mainindex','/index/mainindex','/index/mainindex','/map','/index/mainindex','/index/mainindex','/sellhome']
			}
		},
		methods:{
			onfocus(){
				this.$router.push('/onsearch')
			},
			leave(index){
				this.$router.push(this.paths[index])
			}
		},
		mounted(){
			var add=document.getElementsByClassName('van-search__label')[0];
			add.onclick=()=>{this.$router.push('/addr') }
		}
	}


</script>

<style lang="less">
	.mainindex{
		li{list-style: none;}
		.vansearch{position: fixed;left: 40px;top: 10px; z-index: 100; .van-search{ padding: 0;}}
		.vanswipe{width: 100%;
			img{width: 100%;height: 140px;}
		}
		.icons{width: 100%;height: 167px;border-bottom: 2px solid rgba(0,0,0,.2);
			ul>li{width: 50px;height: 62px;float: left;margin-left: 11.5px;margin-top: 10px; background: white; text-align: center;font-size: 11px;
				div{width: 39px;height: 39px;margin: 0 auto;border-radius: 100px;background: black;line-height: 55px;}
			}
		}
		.fourimg{width: 96%;height: 116px;margin: 20px auto;
			ul>li{width: 50%;height: 53px;float: left;
				img{width: 142px;}
			}
		}
		.hotact{width: 90%;height: 135px;margin: 10px auto;
			p{font-size: 20px;color: rgba(80, 80, 80, 1);}
			li{width: 44%;height: 89px;margin-left: 3%;float: left;background: url(../assets/hotact1.png) no-repeat center/100%;text-align: center;
				p{width: 120px;height: 36px; font-size: 11px;position: absolute;bottom: 0;color: white;}
			}
			li:nth-of-type(2){background: url(../assets/hotact3.png) no-repeat center/100%;}
			div.van-swipe-item:last-of-type{
				li:nth-of-type(1){background: url(../assets/hotact2.png) no-repeat center/100%;}
				li:nth-of-type(2){background: url(../assets/hotact4.png) no-repeat center/100%;}
			}
		}
		.avgprice{width: 90%;height: 108px; margin: 10px auto;
			p{font-size: 20px;color: rgba(80, 80, 80, 1);}
			li{width: 44%;height: 51px;float: left;margin-left: 10px;margin-top: 10px;border-top: 1px solid rgba(0,0,0,.2);
				p{font-size: 11px;margin-top: 5px;  span{font-size: 11px;}}
				p:last-of-type{font-size: 26px;}
			}
		}
		.twohand{width: 90%;height: 184px;margin: 10px auto;
			p{font-size: 20px;color: rgba(80, 80, 80, 1);}
			li{width: 44%;height: 140px;float: left;margin-left: 10px;
				img{width: 125px;height: 89px;}
				p{font-size: 13px;color: rgba(80, 80, 80, 1);}
				p:last-of-type{font-size: 11px;color: rgba(166, 166, 166, 1);}
			}
		}
		.newhome{width: 90%;height: 164px;margin: 10px auto;
			p{font-size: 20px;color: rgba(80, 80, 80, 1);}
			li{width: 44%;height: 140px;float: left;margin-left: 10px;
				img{width: 125px;height: 89px;}
				p{font-size: 13px;color: rgba(80, 80, 80, 1);}
				p:last-of-type{font-size: 11px;color: rgba(166, 166, 166, 1);}
			}
		}
		.tools{border-top: 2px solid rgba(0,0,0,.1);border-bottom: 2px solid rgba(0,0,0,.1);}	
		.like{width: 90%;height: auto;margin: 10px auto;
			p{font-size: 20px;color: rgba(80, 80, 80, 1);}
			.van-tabs__wrap{width: 100px;height: 30px;left: 100px;margin-left: 180px;margin-bottom: 10px;}
			.van-tab__pane{
				li{width: 100%;height: 99px;
					img{width: 108px;float: left;}
					p{width: 179px; font-size: 12px;margin-left: 118px;margin-top: 5px;
						span{margin-left: 10px;}
						font{color: rgba(212, 48, 48, 1);}
					}
				}
			}
		}
		.whiteend{width: 100%;height: 50px;}
	}
	
</style>
