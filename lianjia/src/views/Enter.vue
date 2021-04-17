<template>
  <div class="Enter">
	<p @click="run()">跳过</p>
  </div>
</template>

<script>
	export default{
		name:'enter',
		mounted(){
			/* setTimeout(()=>{
				this.$router.push('index')
			},3000)	 */
		},
		methods:{
			run(){
				this.$router.push('index/mainindex')
			}
		}
	}
  
</script>
<style lang="less">
	.Enter{width: 100%;height: 100%; background: url(../assets/enter.jpg) no-repeat top/100%;overflow: hidden;
		p{text-align: right;margin-top: 30px;margin-right: 20px;}
	}
	
</style>
