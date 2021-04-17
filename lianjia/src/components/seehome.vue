<template>
	<div class="seehome"><van-tabs v-model="active" color="rgba(57, 172, 106, 1)" title-active-color="rgba(57, 172, 106, 1)">
  <van-tab title="看房日程"><img src="../assets/waitsee.png" alt=""><p>把房子加入待看清单</p>
  <p>点击预约看房，把喜欢的房子加入待看清单</p><button>去预约</button></van-tab>
  <van-tab title="看房记录"><p>2017.07.08 &gt;</p>
  <li v-for="val in homelist"><img :src="val.path" alt=""><p>{{val.p1}}</p>
  <p>{{val.p2}}</p>
  <p>{{val.p3}}</p><span v-if="val.sp">随时看房</span><br><button>添加看房笔记</button></li>
  </van-tab>
</van-tabs>
<div class="whiteend"></div></div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
	export default{
		data(){
			return{
				active:0,
				homelist:[{path:require('../assets/seehome1.png'),p1:'7500元/月',p2:'4室2厅/132m^2/南 北',p3:'山水人家美林泉',sp:true},
				{path:require('../assets/seehome2.png'),p1:'10000元/月',p2:'4室2厅/172m^2/南 ',p3:'山水人家清水湾',sp:false},
				{path:require('../assets/seehome3.png'),p1:'7393元/月',p2:'4室2厅/137.71m^2/南 ',p3:'山水人家清水湾',sp:false}]
			}
		}
	}
</script>

<style lang="less">
	.seehome{
		li{list-style: none;}
		.van-tabs__wrap{width: 40%;margin: 0 auto;}	
		.van-tab__pane{border-top: 1px solid rgba(0,0,0,.1);}
		.van-tab__pane:first-of-type{text-align: center;
			img{width: 64px;margin-top: 52px;}
			p{font-size: 18px;color: rgba(80, 80, 80, 1);margin-top: 43px;}
			p:last-of-type{font-size: 12px;color: rgba(80, 80, 80, 0.61);margin-top: 20px;}
			button{width: 127px;height: 40px;background: rgba(57, 172, 106, 1);border: none;color: white;margin-top: 52px;}
		}
		.van-tab__pane:last-of-type{
			p{width: 40%;height: 48px;line-height: 48px;margin-left: 17px;}
			li{width: 100%;height: 148px;border-top: 1px solid rgba(0,0,0,.1);
				img{width: 93px;height: 67px;float: left;margin-top: 4px;margin-left: 18px;}
				p{margin-left: 123px;height: 20px;width: 60%; line-height: 20px;font-size: 11px;color: rgba(128, 128, 128, 1);}
				p:first-of-type{font-size: 12px;color: rgba(236, 13, 13, 1);}
				span{background: rgba(11, 138, 11, 0.26);color: rgba(5, 148, 72, 1);margin-left: 13px;}
				button{width: 284px;height: 40px;border: none;margin-left: 18px;margin-top: 19px;font-size: 12px;color: rgba(12, 20, 107, 0.83);}
			}
		}
		.whiteend{width: 100%;height: 50px;}
	}
</style>
