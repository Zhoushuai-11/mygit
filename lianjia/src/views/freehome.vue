<template>
	<div class="freehome">
		<div class="header">
			<van-nav-bar title="免费发布房源（北京）" >
				<template #left>
				  <van-icon name="arrow-left" size="24" color="rgba(153, 153, 153, 1)" @click="goback()"/>
				</template>
			  <template #right>
			    <van-icon name="warning-o" size="24" color="rgba(153, 153, 153, 1)"/>
			  </template>
			</van-nav-bar>
		</div>
		<div class="maintop">
			<van-cell title="小区名称" is-link value="康熙家园" />
			<van-cell title="具体地址" is-link to="/homeaddr"/>
			<van-cell title="期望租金" value="请输入期望售价" />
		</div>
		<div class="mainbot">
			<van-cell title="称呼" value="如何称呼您" />
			<van-cell title="联系方式" value="13175961234" />
		</div>
		<div class="end">
			<button>立即发布</button>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(NavBar);
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			  goback(){
				  this.$router.push('/danyuan')
			  }                                                                             
		}
	}
</script>

<style lang="less">
	
</style>
