<template>
	<div class="map">
		<div class="header">
			<img src="../assets/return.svg" alt="" @click="back()">
			<van-tabbar v-model="active" :fixed="false">
				<van-tabbar-item @click="change()">二手房</van-tabbar-item>
				<van-tabbar-item @click="chan()">新房</van-tabbar-item>
				<van-tabbar-item @click="chang()">租房</van-tabbar-item>
			</van-tabbar>
			<img src="../assets/sanjiao.svg" alt="">
			<img src="../assets/search.svg" alt="">	
		</div>
		<div class="main">
			<li style="top: 148px;left: 73px;">海淀<p>{{newarr[0]}}</p></li>
			<li style="top: 216px;left: 222px;">朝阳<p>{{newarr[1]}}</p></li>
			<li style="top: 236px;left: 159px;">东城<p>{{newarr[2]}}</p></li>
			<li style="top: 245px;left: 111px;">西城<p>{{newarr[3]}}</p></li>
			<li style="top: 298px;left: 39px;">丰台<p>{{newarr[4]}}</p></li>
			<li style="top: 366px;left: 222px;">亦庄开发区<p>{{newarr[5]}}</p></li>
			<li style="top: 418px;left: 100px;">大兴<p>{{newarr[6]}}</p></li>
			<button style="left: 28px;">地铁找房</button><button  style="right: 28px;">画圈找房</button>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
	export default{
		data(){
			return{
				active: 0,
				newarr:['8.1万','6.6万','2万','10.3万','5.3万','4.4万','4万'],
				arr1:['8.1万','6.6万','2万','10.3万','5.3万','4.4万','4万'],
				arr2:['17个','42个','2个','6个','28个','11个','46个'],
				arr3:['2318套','4433套','919套','1610套','1067套','157套','1067套']
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			change(){
				this.newarr=this.arr1
			},
			chan(){
				this.newarr=this.arr2
			},
			chang(){
				this.newarr=this.arr3
			}
		}
	}
</script>

<style lang="less">
	.map{overflow: hidden;
		li{list-style: none;}
		.header{
			.van-hairline--top-bottom{width: 50%;float: left;margin-left: 38px;height: 38px;}
			img{width: 27px;float: right;margin-top: 10px;margin-right: 3px;}
			img:first-child{float: left;margin-top: 7px;margin-left: 5px;}
		}	
		.main{width: 100%;height: 519px;background: url(../assets/bigmap.png) no-repeat center/120%;margin-top: 38px; text-align: center;
			li{width: 68px;height: 68px;border-radius: 35px;background: rgba(57, 172, 106, 1);color: white;text-align: center;line-height: 43px; font-size: 12px;position: absolute;
				p{height: 20px;line-height: 0px;}
			}
			button{width: 141px;height: 33px;background: white;font-size: 11px;color: rgba(80, 80, 80, 1);text-align: center;border: 1px solid rgba(0,0,0,.1);position: absolute;top: 523px;}
		}
	}
</style>
