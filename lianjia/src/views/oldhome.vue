<template>
	<div class="oldhome">
		<header><img src="../assets/back2.svg" alt="" @click="back()"><van-search v-model="value" placeholder="请输入小区或商圈名" background="white"/><img src="../assets/msg.svg" alt="" @click="gomsg()"></header>
		<div class="swipei">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
			  <van-swipe-item><img src="../assets/oldhome1.png" alt=""></van-swipe-item>
			  <van-swipe-item><img src="../assets/oldhome2.png" alt=""></van-swipe-item>
			  <van-swipe-item><img src="../assets/oldhome3.png" alt=""></van-swipe-item>
			  <van-swipe-item><img src="../assets/oldhome4.png" alt=""></van-swipe-item>
			</van-swipe>
		</div>
		<div class="toollists">
			<li v-for="(val,index) in tools"><div @click="gomap(index)"><img :src="val.path" alt=""></div><p>{{val.p1}}</p></li>
		</div>
		<div class="foryou">
			<p>为您推荐</p>
			<van-swipe class="my-swipe" indicator-color="white" :show-indicators="false">
			  <van-swipe-item><li><p>后沙峪安家轻松选</p>
			  <p>1-3局给您舒适生活</p></li>
			  <li><p>房山长阳好居所</p>
			  <p>500万内精选1-3居</p></li></van-swipe-item>
			  <van-swipe-item><li><p>安家常营好房推荐</p>
			  <p>优质房源不容错过</p></li></van-swipe-item>
			</van-swipe>
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
				 tools:[{path:require('../assets/oldtool1.svg'),p1:'智能找房'},
				 {path:require('../assets/oldtool2.svg'),p1:'地图找房'},
				 {path:require('../assets/oldtool3.svg'),p1:'换房地图'},
				 {path:require('../assets/oldtool4.svg'),p1:'全部房源'}],
				 value1: 0,
				 value2: 'a',
				 value3: 'c',
				 value4: 'd',
				 option1: [
				   { text: '区域', value: 0 },
				 ],
				 option2: [
				   { text: '价格', value: 'a' },
				 ],
				 option3: [
				   { text: '房型', value: 'c' },
				 ],
				 option4: [
				   { text: '更多', value: 'd' },
				 ],
				 homefor:[{path:require('../assets/like1.png'),p1:'新龙城通透两居室，小区中间位置，全明格局，业主诚售',p2:'102.4m^2/南 北/低楼层 共6层',year:true,newhome:true,train:true,p3:'460万',p4:'44,922元/平',self:false},
				 {path:require('../assets/like4.png'),p1:'安华西里一区 2室2厅',p2:'68.85m^2/西 南/低楼层 共21层',year:true,newhome:true,train:true,p3:'540万',p4:'78,432元/平',self:false},
				 {path:require('../assets/like5.png'),p1:'新龙城 3室2厅',p2:'111.6m^2/南 北/低楼层 共15层',year:true,newhome:false,train:true,p3:'610万',p4:'54.660元/平',self:true}],
				 
				 addrs:['/oldhome','/map','/oldhome','allhome']
			}
		},
		methods:{
			back(){
				this.$router.push('/index/mainindex')
			},
			gomsg(){
				this.$router.push('/index/context')
			},
			gomap(index){
				this.$router.push(this.addrs[index])
			}
		}
		
	}
</script>

<style lang="less">
	.oldhome{overflow: hidden;
		li{list-style: none;}
		header{width: 100%;height: 40px;background: rgba(0,0,0,0);overflow: hidden;position: fixed;z-index: 100;
			img{width: 31px;float: left;margin-top: 8px;}
			img:last-of-type{width: 24px;float: right;margin-top: 12px;margin-right: 8px;}
			.van-search{padding: 0;width: 230px;margin-top: 10px;height: 26px;float: left;margin-left: 10px;}
			.van-search__content{width: 229px;height: 26px;background: white;}
			.van-cell{margin-bottom: 10px;height: 26px;padding: 0;}
		}
		.swipei{width: 321px;height: 168px;
			img{width: 321px;height: 168px;}
		}
		.toollists{width: 100%;height: 74px;margin-top: 24px;border-bottom: 5px solid rgba(0,0,0,.1);
			li{width: 52px;height: 64px;float: left;text-align: center;margin-left: 114px/5;
				div{width: 36px;height: 36px;background: rgba(226, 250, 236, 1);text-align: center;line-height: 50px;border-radius: 18px;margin: 0 auto;
					img{width: 24px;}
				}
				p{font-size: 12px;color: rgba(80, 80, 80, 1);margin-top: 10px;}
			}
		}
		.foryou{width: 100%;height: 120px;border-bottom: 5px solid rgba(0,0,0,.1);
			p{font-size: 12px;color: rgba(128, 128, 128, 1);margin-top: 12px;margin-left: 16px;}
			
			.my-swipe{width: 100%;height: 83px;margin-top: 10px;
				li{width: 146px;height: 83px;float: left;text-align: center;margin-left: 9px;background: url(../assets/foryou1.png) no-repeat center/100%;filter: contrast(80%);
					p{font-size: 12px;color: rgba(0,0,0,.9);margin-top: 25px;margin-left: 0;}
					p:last-of-type{font-size: 9px;margin-top: 5px;}
				}
				li:nth-of-type(2){background: url(../assets/foryou2.png) no-repeat center/100%;}
			}
			.van-swipe-item:last-of-type{
				li{background: url(../assets/foryou3.png) no-repeat center/100%;}
			}
		}
		.goodslist{margin-left: 16px;
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