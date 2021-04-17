<template>
	<div class="mine">
		<header><img src="../assets/minetop.svg" alt="" @click="tologin()"></header>
		<div class="head">
			<div v-if="this.$store.state.islogin"></div><p v-if="this.$store.state.islogin">{{this.$store.state.username.username}}</p>
			<p>查看并编辑个人资料</p>
		</div>
		<div class="lists">
			<li v-for="val in list"><p>0</p>
			<p>{{val}}</p></li>
		</div>
		<div class="mysee">
			<p>我关注的</p>
			<li><img src="../assets/mysee1.svg" alt=""><p>二手房(0)</p></li>
			<li><img src="../assets/mysee2.svg" alt=""><p>新房(0)</p></li>
			<li><img src="../assets/mysee3.svg" alt=""><p>租房(0)</p></li>
			<li><img src="../assets/mysee4.svg" alt=""><p>小区(0)</p></li>
			<div>
				<p>添加房屋资产</p>
				<p>配置专属维护人，随时关注房屋资产变化</p>
				<button>立即添加</button>
			</div>
		</div>
		<van-cell title="我的经纪人" is-link />
		<van-cell title="我的问答" is-link />
		<van-cell title="我的点评" is-link />
		<van-cell title="用户反馈" is-link />
		<van-cell title="联系客服" is-link value="10109666"/>
		<div class="whiteend"></div></div>
	</div>
</template>

<script>
import Vue from 'vue';	
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup)	
	export default{
		data(){
			return{
				list:['看房记录','我的委托','我的交易','搜索条件'],
				data:JSON.parse( localStorage.getItem('dolist'))
			}
		},
		methods:{
			tologin(){
				this.$router.push('/login')
			}
		}
	}
</script>

<style lang="less">
	.mine{
		li{list-style: none;}
		header{text-align: right;
			img{width: 24px;margin-top: 13px;margin-right: 10px;}
		}
		.head{height: 53px;
			div{width: 53px;height: 53px; background: url(../assets/head.jpeg) no-repeat center/100%;border-radius: 100px;float: left;margin-left: 17px;}
			p{width: 60%; margin-left: 84px;font-size: 21px;margin-top: 10px;}
			p:last-of-type{font-size: 12px;color: rgba(181, 181, 181, 1);}
		}
		.lists{width: 100%;height: 43px;margin-bottom: 4px solid rgba(0,0,0,.1);margin-top: 41px;border-bottom: 5px solid rgba(0,0,0,.1);
			li{width: 71px;height: 43px;margin-left: 7px;float: left;text-align: center;font-size: 12px;color: rgba(80, 80, 80, 1);}
		}
		.mysee{width: 100%;height: 268px;text-align: center;
			p{width: 84px; height: 45px; font-size: 14px;color: rgba(80, 80, 80, 1);line-height: 45px;text-align: center;}
			li{width: 71px;height: 43px;margin-left: 7px;float: left;text-align: center;font-size: 12px;color: rgba(80, 80, 80, 1);
				img{width: 24px;}
				p{width: 53px;height: 19px;line-height: 25px;margin: 0 auto;font-size: 11px;}	
			}
			div{width: 100%;height: 120px;margin-top: 100px;border-bottom: 5px solid rgba(0,0,0,.1);
				p{width: 100%;height: 27px;text-align: center;font-size: 20px;color: rgba(80, 80, 80, 1);font-weight: bold;}
				p:last-of-type{font-size: 12px;color: rgba(128, 128, 128, 1);font-weight: normal;}
				button{border-radius: 2px;width: 76px;height: 31px;margin: 0 auto;background: rgba(153, 153, 153, 0.02);border: rgba(166, 166, 166, 1) solid 1px;margin-top: 20px;}
			}
		}
		.whiteend{width: 100%;height: 50px;}
	}
</style>
