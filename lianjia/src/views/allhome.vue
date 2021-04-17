<template>
	<div class="allhome">
		<div class="header">
			<img src="../assets/back.svg" alt="" @click="back()">
			<van-search v-model="value" placeholder="请输入小区或商圈名称" />
			<img src="../assets/msgh.svg" alt="" @click="gomsg()">
			<img src="../assets/addr.svg" alt="">
		</div>
		<div class="goods">
			<van-dropdown-menu>
			  <van-dropdown-item v-model="value1" :options="option1" />
			  <van-dropdown-item v-model="value2" :options="option2" />
			  <van-dropdown-item v-model="value3" :options="option3" />
			  <van-dropdown-item v-model="value4" :options="option4" />
			</van-dropdown-menu>
		</div>
		<div class="goodslist">
			<li v-for="val in homefor"><img :src="val.path" alt=""><p>{{val.p1}}</p>
			<p>{{val.p2}}</p>
			<p><span v-if="val.year" style="background: rgba(255, 233, 230, 1);color: rgba(255, 164, 150, 1);">满五年</span>
			<span v-if="val.newhome" style="background: rgba(229, 244, 234, 1);color: rgba(122, 218, 139, 1);">新上房源</span>
			<span v-if="val.train" style="background: rgba(226, 240, 253, 1);color: rgba(134, 195, 249, 1);">地铁</span>
			<span v-if="val.self" style="background: rgba(250, 222, 187, 1);color: rgba(221, 155, 69, 1);">房主自荐</span></p>
			<p><font>{{val.p3}}</font> {{val.p4}}</p></li>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Search);
	export default{
		data(){
			return{
				value:'',
				value1: 0,
				value2: 1,
				value3: 2,
				value4: 3,
				option1: [
				  { text: '区域', value: 0 },
				],
				option2: [
				  { text: '价格', value: 1 },
				],
				option3: [
				  { text: '房型', value: 2 },
				],
				option4: [
				  { text: '更多', value: 3 },
				],
				homefor:[{path:require('../assets/like1.png'),p1:'流星花园三区 2室1厅',p2:'102.4m^2/南 北/低楼层 共6层',year:true,newhome:true,train:false,p3:'460万',p4:'44,922元/平',self:false},
					{path:require('../assets/like1.png'),p1:'新龙城通透两居室，小区中间位置，全明格局，业主诚售',p2:'102.4m^2/南 北/低楼层 共6层',year:true,newhome:true,train:true,p3:'460万',p4:'44,922元/平',self:false},
					{path:require('../assets/like2.png'),p1:'新龙城 2室1厅',p2:'95.19m^2/东 西/低楼层 共9层',year:true,newhome:false,train:false,p3:'462万',p4:'48,544元/平',self:true},
					{path:require('../assets/like3.png'),p1:'龙腾苑六区 3室1厅',p2:'118.02m^2/南 北/低楼层 共6层',year:true,newhome:true,train:true,p3:'490万',p4:'41.519元/平',self:false},
				{path:require('../assets/like4.png'),p1:'安华西里一区 2室2厅',p2:'68.85m^2/西 南/低楼层 共21层',year:true,newhome:true,train:true,p3:'540万',p4:'78,432元/平',self:false},
				{path:require('../assets/like5.png'),p1:'新龙城 3室2厅',p2:'111.6m^2/南 北/低楼层 共15层',year:true,newhome:false,train:true,p3:'610万',p4:'54.660元/平',self:true}]
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			gomsg(){
				this.$router.push('/index/context')
			}
		}
	}
</script>

<style lang="less">
	.allhome{overflow: hidden;
		li{list-style: none;}
		.header{
			.van-search{width: 70%;float: left;}
			img{width: 24px;float: right;margin-top: 14px;margin-right: 4px;}
			img:first-child{width: 36px;float: left;margin-top: 8px;}
		}
		.goods{ margin-top: 40px;
			.van-dropdown-menu__bar{width: 100%;}
		}
		.goodslist{margin-left: 16px;margin-top: 5px;
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
