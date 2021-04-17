<template>
	<div class="homeaddr">
		<van-nav-bar title="楼栋" >
			<template #left>
			  <van-icon name="arrow-left" size="24" color="rgba(153, 153, 153, 1)" @click="backto()"/>
			</template>
		  <template #right>
		    <van-icon name="warning-o" size="24" color="rgba(153, 153, 153, 1)"/>
		  </template>
		</van-nav-bar>
		<van-search v-model="value" placeholder="输入楼栋号搜索" />
		<p>您可以直接选择</p>
		<van-index-bar :index-list="indexList">
		  <van-cell v-for="(val,index) in list" :title="val" @click="gonext(index)"/>
		
		</van-index-bar>
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
				list:['北区1号楼（1）','北区3号楼（3）','北区5号楼（5）','北区6号楼（4）','北区7号楼（2）','北区8号楼（6）','北区9号楼（7）','北区10号楼（9）','北区12号楼（8）'],
				indexList: [],
				golist:['/danyuan']
			}
		},
		methods:{
			gonext(index){
				this.$router.push(this.golist[index])
			},
			backto(){
				this.$router.push('/torent')
			}
		}
	}
</script>

<style lang="less">
	.homeaddr{
		p{font-size: 12px;color: rgba(153, 153, 153, 0.99);margin-left: 10px;}
		.van-cell__title{color: rgba(80, 80, 80, 1);}
	}
</style>
