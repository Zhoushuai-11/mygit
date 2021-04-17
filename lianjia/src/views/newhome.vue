<template>
	<div class="newhome">
		<div class="header">
			<img src="../assets/back2.svg" alt="" @click="back()">
			<p>链家新房</p>
			<p>优选房源 专业顾问 免费服务</p>
			<van-search
			  v-model="value"
			  label="北京"
			  placeholder="请输入搜索关键词"
			>
			</van-search>
		</div>
		<div class="lists">
			<li @click="goall()"><div><img src="../assets/newhome1.svg" alt=""></div><p>全部楼盘</p></li>
			<li><div><img src="../assets/newhome2.svg" alt=""></div><p>在售楼盘</p></li>
			<li><div><img src="../assets/newhome3.svg" alt=""></div><p>最近开盘</p></li>
			<li @click="gomap()"><div><img src="../assets/newhome4.svg" alt=""></div><p>地图找房</p></li>
			<li><div><img src="../assets/newhome5.svg" alt=""></div><p>优惠楼盘</p></li>
			<li><div><img src="../assets/newhome6.svg" alt=""></div><p>旅居</p></li>
			<li><div><img src="../assets/newhome7.svg" alt=""></div><p>三居</p></li>
			<li><div><img src="../assets/newhome8.svg" alt=""></div><p>两居</p></li>
		</div>
		<div class="mylove">
			<p>我的关注</p>
			<p>【丽景长安】丽景长安项目在售4号楼、5号楼和8号楼平层产品，在售面积……</p>
		</div>
		<div class="goodchoose">
			<p>优选好房</p>
			<div><img src="../assets/fiveimg1.png" alt=""><img src="../assets/fiveimg2.png" alt=""></div>
			<div><img src="../assets/fiveimg3.png" alt="">
			<img src="../assets/fiveimg4.png" alt="">
			<img src="../assets/fiveimg5.png" alt=""></div>
		</div>
		<div class="hotactive">
			<p>热门活动</p>
			<van-swipe class="my-swipe"  indicator-color="white" :show-indicators="false">
			  <van-swipe-item><img src="../assets/hotactive1.png" alt=""><p>热评全城好房</p>
			  <p>刚需改善全搜罗</p><button>了解详情</button></van-swipe-item>
			  <van-swipe-item><img src="../assets/hotactive2.png" alt=""><p>回龙观刚需两居</p>
			  <p>总价522万</p><button>了解详情</button></van-swipe-item>
			  <van-swipe-item><img src="../assets/hotactive3.png" alt=""><p>700万独栋别墅</p>
			  <p>本周主打盘</p><button>了解详情</button></van-swipe-item>
			</van-swipe>
		</div>
		<div class="topthree">
			<p>北京10月排行榜</p>
			<p>查看全部</p>
			<van-swipe class="my-swipe"  indicator-color="white" :show-indicators="false">
			  <van-swipe-item><div><img src="../assets/top1.jpg" alt=""><p>城建万科城</p><p>延庆-延庆其他</p></div><div><img src="../assets/top2.png" alt=""><p>TBD住万科天地</p><p>昌平-沙河</p></div></van-swipe-item>
			  <van-swipe-item><div><img src="../assets/top3.png" alt=""><p>泰禾昌平拾景园</p><p>昌平-南邵</p></div></van-swipe-item>
			</van-swipe>
		</div>
		<div class="foryou">
			<p>为您推荐</p>
			<li v-for="val in newhome"><img :src="val.path" alt=""><p>{{val.p1}}</p>
			<p>{{val.p2}}</p>
			<p><span v-if="val.year" style="background: rgba(255, 233, 230, 1);color: rgba(255, 164, 150, 1);">住宅</span>
			<span v-if="val.newhome" style="background: rgba(229, 244, 234, 1);color: rgba(122, 218, 139, 1);">车位充足</span>
			<span v-if="val.train" style="background: rgba(226, 240, 253, 1);color: rgba(134, 195, 249, 1);">低密度</span></p>
			<p><font>{{val.p3}}</font> {{val.p4}}</p></li>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
	export default{
		data(){
			return{
				value:'',
				newhome:[{path:require('../assets/likenew1.png'),p1:'望都新地',p2:'昌平-北七家立汤路与定泗路交…',year:true,newhome:true,train:true,p3:'43800元/平',p4:'建面72~178m^2'},
				{path:require('../assets/likenew2.png'),p1:'花雨汀',p2:'昌平-城南街道凉水河村拓然家…',year:true,newhome:false,train:true,p3:'58000元/平',p4:'建面90~140m^2'},
				{path:require('../assets/likenew3.png'),p1:'秦禾昌平拾景园',p2:'昌平-昌平地铁南邵站西100米',year:true,newhome:true,train:true,p3:'51000元/平',p4:'建面87~146m^2'},
				{path:require('../assets/likenew4.png'),p1:'北京风景',p2:'昌平-京藏高速30（昌平城区……',year:true,newhome:true,train:true,p3:'48000元/平',p4:'建面95~150m^2'},
				{path:require('../assets/likenew5.png'),p1:'领秀慧谷D区',p2:'昌平-京藏高速北安河出口北300米',year:true,newhome:false,train:true,p3:'58000元/平',p4:'建面90~140m^2'},
				{path:require('../assets/likenew6.png'),p1:'华润未来城市',p2:'昌平-昌平区小汤山镇（未来科…',year:true,newhome:true,train:false,p3:'61000元/平',p4:'建面49~176m^2'}]
			}
		},
		methods:{
			back(){
				this.$router.push('/index/mainindex')
			},
			goall(){
				this.$router.push('/allhome')
			},
			gomap(){
				this.$router.push('/map')
			}
		}
	}
</script>

<style lang="less">
	.newhome{
		li{list-style: none;}
		.header{width: 100%;height: 143px;background: rgba(57, 172, 106, 1);
			img{width: 24px;margin-left: 10px;margin-top: 10px;}
			p{font-size: 12px;color: white;margin-left: 30px;margin-top: 10px;}
			p:first-of-type{font-size: 26px;}
			.van-search{width: 90%;padding: 5px;background: white;margin: 0 auto;margin-top: 20px;border: 1px solid rgba(0,0,0,.1);border-radius: 4px;
				.van-search__content{background: white;}
			}
		}
		.lists{width: 278px;height: 149px;margin: 50px auto;margin-bottom: 0;
			li{width: 52px;height: 62px;float: left;font-size: 11px;margin-left: 12px;text-align: center;color: rgba(80, 80, 80, 1);margin-top: 10px;
				div{width: 39px;height: 39px;background: rgba(28, 183, 64, 0.23);border-radius: 20px;text-align: center;line-height: 52px;margin: 0 auto;}
				img{width: 24px;}
				p{margin-top: 5px;}
			}
		}
		.mylove{width: 95%;height: 70px;margin: 20px auto;border-top: 1px solid rgba(0,0,0,.1);
			p{width: 238px;height: 48px; float: left;font-size: 12px;line-height: 22px;margin-left: 15px;margin-top: 19px;}
			p:first-of-type{width: 36px;height: 40px;font-size: 16px;color: rgba(255, 68, 28, 1);font-weight: bold;}
		}
		.goodchoose{width: 100%;height: 260px;
			p{font-size: 20px;color: rgba(80, 80, 80, 1);margin-left: 12px;}
			div{width: 100%;height: 106px;margin-top: 10px;
				img{width: 97px;height: 106px;margin-left: 9px;}
			}
			div:first-of-type{height: 82px;
				img{width: 145px;height: 82px;}
			}
		}
		.hotactive{width: 100%;height: 200px;
			p{font-size: 20px;color: rgba(80, 80, 80, 1);margin-left: 12px;}
			.my-swipe{width: 295px;height: 155px;margin: 0 auto;
				img{width: 295px;height: 155px;position: absolute;z-index: -1;}
				.van-swipe-item{
					p{font-size: 12px;color: rgba(56, 56, 56, 1);margin-top: 10px;margin-left: 31px;}
					p:first-of-type{font-size: 21px;margin-top: 30px;}
					button{font-size: 12px;color: rgba(56, 56, 56, 1);background: rgba(153, 153, 153, 0.03);border: rgba(56, 56, 56, 1) solid 1px;margin-left: 31px;margin-top: 9px;}
				}
			}
		}
		.topthree{width: 100%;height: 150px;
			p{font-size: 20px;color: rgba(80, 80, 80, 1);margin-left: 12px;float: left;}
			p:nth-of-type(2){float: right;font-size: 12px;margin-top: 10px;margin-right: 10px;}
			.my-swipe{width: 295px;height: 95px;margin-left: 4px;
				.van-swipe-item{margin-top: 8px;}
				div{width: 143px;height: 95px;float: left;margin-left: 4px;
					img{width: 143px;height: 95px;position: absolute;z-index: -1;filter: brightness(50%);}
					p{font-size: 12px;color: white;text-align: center;margin: 0 auto;float: none;}
					p:first-of-type{margin-top: 25px;}
				}
				
			}
		}
		.foryou{width: 90%;height: auto;margin: 10px auto;
			p{font-size: 20px;color: rgba(80, 80, 80, 1);}
			li{width: 100%;height: 99px;
				img{width: 108px;float: left;}
				p{width: 179px; font-size: 12px;margin-left: 118px;margin-top: 5px;
					span{margin-left: 10px;}
					font{color: rgba(212, 48, 48, 1);}
				}
			}
		}
	}
</style>
