<template>
	<div class="torent">
		<div class="header">
			<img src="../assets/back.svg" alt="" @click="backgoto()">
			<p>发布租赁房源（北京）</p>
		</div>
		<div class="maintop">
			<van-cell title="小区名称" is-link value="康熙家园" />
			<van-cell title="房屋地址" is-link to="/homeaddr"/>
			<van-cell title="期望租金" value="您期望的月租金" />
		</div>
		<div class="mainbot">
			<van-cell title="称呼" value="如何称呼您" />
			<van-cell title="联系方式" value="135********" />
		</div>
		<div class="end">
			<p>房源发布流程</p>
			<li><img src="../assets/torent1.svg" alt=""><p>线上发布</p></li>
			<li><img src="../assets/torent2.svg" alt=""><p>电弧咨询</p></li>
			<li><img src="../assets/torent3.svg" alt=""><p>房源上架</p></li>
			<button>立即发布</button>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			backgoto(){
				this.$router.push('/renthome')
			}
		}
	}
</script>

<style lang="less">
	.torent{
		li{list-style: none;}
		.header{width: 100%;height: 50px;text-align: center;overflow: hidden;border-bottom: 5px solid rgba(0,0,0,.1);
			img{width: 35px;float: left;margin-top: 8px;}
			p{margin-top: 15px;font-size: 16px;color: rgba(80, 80, 80, 1);}
		}
	}
	.maintop{border-bottom: 5px solid rgba(0,0,0,.1);}
	.end{width: 100%;height: 260px;position: relative;
		p{width: 100%; font-size: 12px;color: rgba(166, 166, 166, 1);text-align: center;margin-top: 30px;}
		li{width: 88px;height: 80px;float: left;text-align: center;margin-top: 30px;margin-left: 12px;
			p{margin-top: 0;}
			img{width: 24px;}
		}
		button{width: 100%;height: 42px;position: absolute;bottom: 0;left: 0; background: rgba(57, 172, 106, 1);font-size: 14px;border: none;color: white;}
	}
</style>
