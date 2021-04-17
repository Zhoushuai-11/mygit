<template>
	<div class="login">
		<div class="header">
			<van-nav-bar   right-text="注册" left-arrow @click-right="onClickRight" @click-left="onClickLeft">
			  <template #left>
			    <van-icon name="cross" size="18" color="#999"/>
			  </template>
			</van-nav-bar>
		</div>
		<div class="loginmain">
			<p>账号密码登录</p>
			<van-form @submit="onSubmit">
			  <van-field
			    v-model="username"
			    name="username"
			    label="用户名"
			    :rules="[{ required: true, message: '请填写用户名' }]"
			  />
			  <van-field
			    v-model="password"
			    type="password"
			    name="password"
			    label="密码"
			    :rules="[{ required: true, message: '请填写密码' }]"
			  />
			  <div style="margin: 16px;">
			    <van-button round block type="primary" native-type="submit">登录</van-button>
			  </div>
			</van-form>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { NavBar } from 'vant';
import { Notify } from 'vant';


Vue.use(NavBar);
Vue.use(Button);
Vue.use(Field);
Vue.use(Form);	
	export default{
		data(){
			return{
				username: '',
				password: ''
			}	 
		},
		methods:{
			onSubmit(values) {
			    var user =JSON.parse(localStorage.getItem('users')) 
				var usertof = (user.username==values.username)
				var passtof = (user.password==values.password)
				if(usertof && passtof){
					Notify({ type: 'success', message: '登陆成功' })
					this.$store.state.islogin=true
					this.$router.push('/index/mainindex')
				}
			},
			onClickLeft() {
			    this.$router.push('/index/mainindex')
			},
			onClickRight() {
			    this.$router.push('/regist')
			}
		}
	}
</script>

<style lang="less">
	.login{
		.header{
			.van-nav-bar__text{color: #999;}
		}
		.loginmain{
			p{font-size: 26px;font-weight: 700;margin: 15px}
		}
	}
</style>
