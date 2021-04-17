<template>
	<div class="addr">
		<p><span @click="fun"><img src="../assets/delete.svg" alt=""></span>选择城市</p>
		<van-index-bar>
		  <van-index-anchor index="当前定位城市" />
		  <van-cell title="北京市" />
		
		  <van-index-anchor index="热门城市" />
		  <van-cell title="北京" />
		  <van-cell title="上海" />
		  <van-cell title="广州" />
		  <van-cell title="深圳" />
		  
		  <van-index-anchor index="B" />
		  <van-cell title="北京" />
		  
		  <van-index-anchor index="C" />
		  <van-cell title="成都" />
		  <van-cell title="重庆" />
		  <van-cell title="长沙" />
		  
		  <van-index-anchor index="D" />
		  <van-cell title="东莞" />
		  <van-cell title="大连" />

		  <van-index-anchor index="F" />
		  <van-cell title="佛山" />
		  
		  <van-index-anchor index="G" />
		  <van-cell title="广州" />、
		  
		  <van-index-anchor index="H" />
		  <van-cell title="合肥" />
		  <van-cell title="海口" />
		  <van-cell title="惠口" />
		  <van-cell title="杭州" />

		</van-index-bar>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { IndexBar, IndexAnchor,Cell } from 'vant';
	Vue.use(Cell);
	Vue.use(IndexBar);
	Vue.use(IndexAnchor);
	export default{
		methods:{
			fun(){
				this.$router.push('index/mainindex')
			}
		}
	}
</script>

<style scoped>
	.addr>p{text-align: center;font-size: 18px;color: rgba(56, 56, 56, 1);font-family: Microsoft YaHei;margin-bottom: 10px;}
	.addr>p>span{position: absolute;left: 15px;top: 5px;}
	.addr>p>span>img{width: 22px;}
</style>
