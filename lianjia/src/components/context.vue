<template>
	<div class="context">
		<div class="title">
			<img src="../assets/back.svg" alt="" @click="run">
			<span>消息</span>
			<img src="../assets/share.svg" alt="">
		</div>
		<div class="msg">
			<li v-for="val in lists"><div :style="{background:val.color}"><van-icon :name="val.name" color="white" size="30px"/></div><p>{{val.p1}}<span v-if="val.v">官方人工客服</span></p>
			<p>{{val.p2}}</p></li>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
	export default{
		data(){
			return{
				lists:[{name:'friends',color:'rgba(57, 172, 106, 1)',p1:'链家网团队',v:false,p2:'刚需看过来！均价5万内/m^2新房全搜罗'},
				{name:'manager',color:'rgba(42, 130, 228, 1)',p1:'链家帮帮',v:true,p2:'欢迎使用链家帮帮'}]
			}
		},
		methods:{
			run(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less">
	.context{
		li{list-style: none;}
		.title{width: 100%;height: 43px;text-align: center;line-height: 43px;border-bottom: 1px solid rgba(0,0,0,.1);
			img{width: 35px;float: left;}
			span{color: rgba(80, 80, 80, 1);}
			img:last-of-type{width: 27px; float: right;margin-right: 10px;margin-top: 5px;}
		}
		.msg{width: 100%;
			li{width: 96%;height: 55px; margin-left: 4%;margin-top: 10px;border-bottom: 1px solid rgba(0,0,0,.1);
				div{width: 48px;height: 48px; background: rgba(57, 172, 106, 1);border-radius: 100px;text-align: center;line-height: 64px;float: left;}
				p{ font-size: 13px;margin-left: 56px;margin-top: 8px;
					span{padding: 5px;border-radius: 20px;background: rgba(153, 153, 153, 0.32);font-size: 9px;margin-left: 10px;}
				}
				p:last-of-type{font-size: 11px;color: rgba(153, 153, 153, 0.99);}
			}
		}
	}
</style>
