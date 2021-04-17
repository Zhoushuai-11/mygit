<template>
	<div class="danyuan">
		<van-nav-bar title="单元" >
			<template #left>
			  <van-icon name="arrow-left" size="24" color="rgba(153, 153, 153, 1)" @click="backgo()"/>
			</template>
		  <template #right>
		    <van-icon name="warning-o" size="24" color="rgba(153, 153, 153, 1)"/>
		  </template>
		</van-nav-bar>
		<van-search v-model="value" placeholder="输入单元号" />
		<p>您可以直接选择</p>
		<van-index-bar :index-list="indexList">
		  <van-cell title="1单元" @click="goone()"/>
		  <van-cell title="2单元"/>
		  <van-cell title="3单元"/>
		</van-index-bar>
		<div class="endbot">
			<p>没找到对应的单元号</p>
			<button>手动输入单元号</button>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Search } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Search);
Vue.use(NavBar);	
	export default{
		data(){
			return{
				value:'',
				indexList: []
			}
		},
		methods:{
			goone(){
				this.$router.push('/freehome')
			},
			backgo(){
				this.$router.push('/homeaddr')
			}
		}
	}
</script>

<style lang="less">
	.danyuan{
		p{font-size: 12px;color: rgba(153, 153, 153, 0.99);margin-left: 10px;}
		.van-cell__title{color: rgba(80, 80, 80, 1);}
	}
	.endbot{text-align: center;
		p{font-size: 14px;color: rgba(80, 80, 80, 1);margin-top: 15px;}
		button{width: 103px;height: 38px;color: rgba(80, 80, 80, 1);border: rgba(128, 128, 128, 1) solid 1px;background: white;margin-top: 20px;}
	}
</style>
