<template>
	<div class="sellhome">
		<div class="header">
			<van-nav-bar title="想卖：广安.康馨家园" >
				<template #left>
				  <van-icon name="arrow-left" size="24" color="rgba(153, 153, 153, 1)" @click="backgo()"/>
				</template>
			</van-nav-bar>
		</div>
		<div class="swipe">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
			  <van-swipe-item><img src="../assets/sellhome1.png" alt=""></van-swipe-item>
			  <van-swipe-item><img src="../assets/sellhome2.png" alt=""></van-swipe-item>
			</van-swipe>
		</div>
		<div class="toollist">
			<li><img src="../assets/sellicon1.svg" alt=""><p>新手上路</p></li>
			<li><img src="../assets/sellicon2.svg" alt=""><p>房屋估价</p></li>
			<li><img src="../assets/sellicon3.svg" alt=""><p>卖房百科</p></li>
			<li><img src="../assets/sellicon4.svg" alt=""><p>换房百科</p></li>
		</div>
		<div class="midpeo">
			<p>推荐经纪人</p>
			<van-swipe class="my-swipe" indicator-color="white" :show-indicators="false">
			  <van-swipe-item v-for="val in peolist"><div><img :src="val.path" alt=""><p>{{val.p1}}</p><p>{{val.p2}}</p></div><p>{{val.p3}}</p><button>咨询</button></van-swipe-item>
			</van-swipe>
		</div>
		<div class="seeprice">
			<p>定价参考</p>
			<van-tabs v-model="active" line-width="0">
			  <van-tab v-for="val in pricelist" :title="val.tit">
				  <van-row style="font-size: 12px;">
				    <van-col span="11" offset="1">9月参考均价（元/平）</van-col>
				    <van-col span="10" offset="1">成交周期（天）</van-col>
				  </van-row>
				  <van-row style="font-size: 24px;border-bottom: 2px solid rgba(0,0,0,.1);">
				    <van-col span="4" offset="2">{{val.p1}}</van-col>
				    <van-col span="3" offset="8">{{val.p2}}</van-col>
				  </van-row>
				  <van-row style="font-size: 14px;">
				    <van-col span="18" offset="1">{{val.p3}}</van-col>
				    <van-col span="4" offset="1" style="color: rgba(212, 48, 48, 1);">{{val.p4}}</van-col>
				  </van-row>
				  <van-row style="font-size: 14px;color: rgba(128, 128, 128, 0.99);">
				    <van-col span="17" offset="1">{{val.p5}}</van-col>
				    <van-col span="5" >{{val.p6}}</van-col>
				  </van-row>
				  <van-row style="font-size: 14px;">
				    <van-col span="22" offset="1" >{{val.p7}}</van-col>
				  </van-row>
			  </van-tab>
			</van-tabs>
			<button>更多成交</button>
		</div>
		<div class="changehome">
			<p>换房去向</p>
			<div><p>本小区换房迁徙动态</p><button>查看详情</button></div>
		</div>
		<div class="uptp">
			<p>提升卖房技能</p>
			<div class="fourimgs"><li><img src="../assets/uptp1.png" alt=""></li>
			<li><img src="../assets/uptp2.png" alt=""></li>
			<li><img src="../assets/uptp3.png" alt=""></li>
			<li><img src="../assets/uptp4.png" alt=""></li></div>
			<div class="rowsvan">
				<van-row style="font-size: 14px;">
					<van-col span="18" offset="1">房子能卖多少钱，究竟什么说了算？</van-col>
				</van-row>
				<van-row style="font-size: 12px;">
					<van-col span="8" offset="1">浏览:3675</van-col>
					<van-col span="6" offset="9">2017-08-08</van-col>
				</van-row>
			</div>
			<div class="rowsvan">
			<van-row style="font-size: 14px;">
			  <van-col span="18" offset="1">商办类项目如何委托链家出售？</van-col>
			</van-row>
			<van-row style="font-size: 12px;">
			  <van-col span="8" offset="1">浏览:25577</van-col>
			  <van-col span="6" offset="9">2017-08-08</van-col>
			</van-row>
			</div>
		</div>
		<div class="uptpone">
			<p>提升卖房技能</p>
			<div><p>钥匙托管</p><p>将钥匙交付给链家门店，方便买家看房</p></div>
			<li><img src="../assets/uptpicon1.svg" alt=""><p>强大线下，保证卖房效率</p>
			<p>全国门店8000+，超过10万+专业经纪人</p></li>
			<li><img src="../assets/uptpicon2.svg" alt=""><p>线上科技，提升卖房效率</p>
			<p>日均10000万+线上用户浏览保证房源曝光</p></li>
			<li><img src="../assets/uptpicon3.svg" alt=""><p>专业贴心服务，提升卖房效率</p>
			<p>提供个性化的卖房换房方案</p></li>
		</div>
	</div>
</template>
	
<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Tab, Tabs } from 'vant';
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
	export default{
		data(){
			return{
				peolist:[{path:require('../assets/sellhead1.png'),p1:'王振林',p2:'高级店经理 | 康馨家园临时店',p3:'小区房东信赖，善于维护业主关系。'},
				{path:require('../assets/sellhead2.png'),p1:'李森',p2:'高级经纪人 | 康馨家园临时店',p3:'线上咨询活跃，精准匹配业主需求。'},
				{path:require('../assets/sellhead3.png'),p1:'武志红',p2:'高级经纪人 | 康馨家园临时店',p3:'小区销售达人，带看活跃成交多。'},
				{path:require('../assets/sellhead4.png'),p1:'白玉奎',p2:'高级经纪人 | 康馨家园临时店',p3:'线上咨询活跃，精准匹配业主需求。'},
				{path:require('../assets/sellhead5.png'),p1:'张景景',p2:'高级经纪人 | 康馨家园临时店',p3:'线上咨询活跃，精准匹配业主需求。'}],
				active:0,
				pricelist:[{tit:'全部',p1:'46479',p2:'35',p3:'[最新挂牌]2室1厅 773.4平  南 北',p4:'340万',p5:'2017年10月08日 挂牌',p6:'46290元/平',p7:'不满二、已挂牌27天，累计带看93次，99人关注，4294人浏览'},
				{tit:'一居',p1:'46894',p2:'35',p3:'[最新成交]1室1厅 66.6平 东 西',p4:'265万',p5:'2017年10月17日 成交',p6:'39778元/平',p7:'不满二、161天成交，累计带看157次，挂牌价273万，比成交价高8万'},
				{tit:'二居',p1:'46458',p2:'35',p3:'[最新挂牌]2室1厅 74.0平 南',p4:'340万',p5:'2017年10月08日 挂牌',p6:'43632元/平',p7:'不满二、已挂牌27天，累计带看93次，99人关注，4294人浏览'},
				{tit:'三居',p1:'47392',p2:'35',p3:'[最新成交]3室1厅 93.9平 东 南 北',p4:'340万',p5:'2017年10月17日 成交',p6:'39778元/平',p7:'不满二、40天成交，累计带看10次，挂牌价469万，比成交价高19万'},
				{tit:'其他',p1:'暂无',p2:'35',p3:' ',p4:' ',p5:' ',p6:' ',p7:' '}]
			}
		},
		methods:{
			backgo(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less">
	.sellhome{
		li{list-style: none;}
		.swipe{width: 100%;height: 120px;
			.van-swipe{height: 120px;
				img{width: 100%;height: 120px;}
			}
		}
		.toollist{width: 100%;height: 97px;
			li{width: 59px;height: 70px;text-align: center;float: left;margin-top: 22px;margin-left: 86px/5;
				img{width: 32px;}
			}
		}
		.midpeo{width: 100%;height: 230px;
			p{font-size: 18px;color: rgba(80, 80, 80, 1);margin-left: 11px;}
			.my-swipe{width: 239px;height: 179px;margin: 0 auto;margin-top: 17px;
				.van-swipe-item{width: 100%;height: 179px;border: 1px solid rgba(0,0,0,.1);text-align: center;
					div{width: 239px;height: 71px;background: rgba(0, 0, 0, 0.85);overflow: hidden;text-align: left;
						img{width: 54px;height: 47px;border-radius: 24px;float: left;margin-left: 14px;margin-top: 9px;}
						p{width: 170px; height: 20px; font-size: 11px;color: rgba(229, 229, 229, 1);margin-left: 80px;margin-top: 8px;}
						p:first-of-type{font-size: 14px;margin-top: 12px;}
					}
					p{width: 210px;height: 52px;font-size: 14px;text-align: left;margin-top: 7px;}
					button{width: 88px;height: 29px;font-size: 16px;color: rgba(57, 172, 106, 1);border: none;}
				}
			}
		}
		.seeprice{
			p{font-size: 18px;margin: 11px;}
			.van-tabs__wrap{width: 80%;}
			.van-row{margin-top: 10px;color: rgba(80, 80, 80, 1);
				
			}
			button{width: 297px;height: 39px;margin-top: 8px;color: rgba(18, 18, 162, 1);margin-left: 11px;}
		}
		.changehome{
			p{font-size: 18px;color: rgba(80, 80, 80, 1);margin: 11px;}
			div{width: 299px;height: 170px;margin: 4px auto;background: url(../assets/changehome1.png);text-align: center;overflow: hidden;
				p{font-size: 18px;color: white;margin-top: 60px;}
				button{width: 89px;height: 27px;background: rgba(56, 56, 56, 1);color: white;border: none;}
			}
		}
		.uptp{
			p{font-size: 18px;color: rgba(80, 80, 80, 1);margin: 11px;}
			.fourimgs{width: 299px;height: 113px;margin: 0 auto;
				li{width: 145px;height: 53px;float: left;margin: 2px;
					img{width: 145px;}
				}
			}
			.rowsvan{width: 299px;height: 67px;margin: 0 auto;border-bottom: 1px solid rgba(0,0,0,.1);
				
			}
			.van-row{color: rgba(80, 80, 80, 1);margin-top: 15px;}
		}
		.uptpone{
			p{font-size: 18px;color: rgba(80, 80, 80, 1);margin: 11px;}
			div{width: 299px;height: 170px;margin: 4px auto;background: url(../assets/uptpone1.jpg);text-align: center;overflow: hidden;
				p{font-size: 11px;color: white}
				p:first-of-type{font-size: 18px;;margin-top: 60px;}
				
			}
			li{width: 299px;height: 53px;margin:10px auto;border-bottom: 1px solid rgba(0,0,0,.1);
				p{font-size: 9px;margin: 0;color: rgba(128, 128, 128, 0.99);}
				p:first-of-type{font-size: 13px;color: rgba(80, 80, 80, 1);}
				img{width: 40px;float: right;}
			}
		}
	}
</style>
