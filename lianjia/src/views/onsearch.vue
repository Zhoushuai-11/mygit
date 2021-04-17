<template>
	<div class="onsearch">
		<form action="/index">
		  <van-search
		    v-model="value"
			label="二手房"
		    show-action
		    placeholder="请输入搜索关键词"
		    @cancel="onCancel"
		  />
		</form>
		<p>历史搜索</p>
		<p>康馨家园</p>
		<p>科教新村</p>
	</div>
</template>

<script>
 export default{
	 name:'onsearch',
	 methods:{
		 onCancel(){
			 this.$router.push('index/mainindex')
		 }
	 }
 }

</script>

<style scoped>
	.onsearch>p{margin-left: 20px;margin-top: 10px;border-bottom: 1px solid #eee;}
</style>
