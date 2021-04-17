<template>
  <div class="index">
    <van-tabbar v-model="active">
      <van-tabbar-item name="mainindex" icon="wap-home-o" @click="run()">首页</van-tabbar-item>
      <van-tabbar-item name="context" icon="comment-o" @click="run()">消息</van-tabbar-item>
      <van-tabbar-item name="seehome" icon="video-o" @click="run()">看房</van-tabbar-item>
      <van-tabbar-item name="mine" icon="contact" @click="run()">我</van-tabbar-item>
    </van-tabbar>
	<router-view></router-view>
  </div>
</template>
<script>
	import Vue from 'vue';
	import { Tabbar, TabbarItem } from 'vant';
	
	Vue.use(Tabbar);
	Vue.use(TabbarItem);
	export default{
		name:'mainindex',
		data(){
		    return {
		      active:"mainindex",
		    }
		},
		methods:{
			run(){
				this.$router.push(this.active)
			}
		}
	}
</script>
<style lang="less">
	.index{height: 100%;}
</style>
