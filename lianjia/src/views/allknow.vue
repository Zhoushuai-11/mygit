<template>
	<div class="allknow">
		<van-nav-bar title="百科频道" @click-left="onClickLeft">
		  <template #left>
		    <van-icon name="arrow-left" size="18" color="#999"/>
		  </template>
		  <template #right>
		    <van-icon name="share-o" size="18" color="#999"/>
		  </template>
		</van-nav-bar>
		<van-search v-model="value" placeholder="房产知识有疑问？来搜搜吧~" />
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		  <van-swipe-item><img src="../assets/allknow1.png" alt=""><p>在北京贷款购房。需要多少首付？</p></van-swipe-item>
		  <van-swipe-item><img src="../assets/allknow2.png" alt=""><p>测一测，你在北京能买房吗？ </p></van-swipe-item>
		  <van-swipe-item><img src="../assets/allknow3.png" alt=""><p>退税攻略：认真教你退税</p></van-swipe-item>
		</van-swipe>
		<van-grid :column-num="6">
		  <van-grid-item icon="shop" text="二手房" />
		  <van-grid-item icon="wap-home" text="新房" />
		  <van-grid-item icon="gold-coin" text="卖房" />
		  <van-grid-item icon="sort" text="换房" />
		  <van-grid-item icon="send-gift" text="租房" />
		  <van-grid-item icon="bars" text="全部" />
		</van-grid>
		<div class="textmain">
			<li><p>准备买房</p>
			<p>看房/选房</p>
			<p>签约/订房</p>
			<p>全款/贷款</p>
			<p>缴税/过户</p>
			<p>入住/交接</p>
			<p>买房风险</p></li>
			<li><p>非京籍能在北京买二手房吗？<br><span>二手房</span></p>
			<p>买卖二手房，通过中介要怎么交易？<br><span>中介</span><span>二手房</span></p>
			<p>买二手房，需要准备哪些钱？<br><span>首付款</span></p>
			<p>央产房上市交易，住房面积超标了怎么办？<br><span>二手房</span></p></li>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(NavBar);
	export default{
		data(){
			return{
				value:'',
			}
		},
		methods:{
			onClickLeft(){
				this.$router.push('/index/mainindex')
			}
		}
	}
</script>

<style lang="less">
	.allknow{
		li{list-style: none;}
		.my-swipe{
			img{width: 100%;height: 145px;}
			.van-swipe-item{
				p{position: absolute;z-index: 100;bottom: 30px;left: 19px;font-size: 14px;color: white;font-family: Microsoft YaHei;font-weight: bold;}
			}
		}
		.van-icon{color: rgba(153, 153, 153, 1);}
		.van-icon-shop{color: rgba(57, 172, 106, 1);}
		.textmain{width: 100%;height: 316px;
			li{width: 62%;height: 316px;float: left;color: rgba(80, 80, 80, 1);font-weight: bold;
				p{width: 187px;height: 72px;
					span{margin-left: 3px; padding: 3px; color: rgba(8, 58, 136, 1);background-color: rgba(8, 58, 136, 0.10457516339869287);font-size: 11px;text-align: center;}
				}
				p:first-of-type{margin-top: 20px;}
			}
			li:first-of-type{width: 31%;margin-right: 4%;font-size: 12px;border-right: 1px solid rgba(0,0,0,.1);
				p{width: 100%;height: 44px;text-align: center;line-height: 44px;}
				p:first-of-type{margin-top: 0;}
			}
		}
	}
</style>
