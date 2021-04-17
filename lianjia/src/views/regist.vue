<template>
	<div class="regist">
		<div class="header">
			<van-nav-bar   left-arrow @click-left="onClickLeft">
			  <template #left>
			    <van-icon name="cross" size="18" color="#999"/>
			  </template>
			</van-nav-bar>
		</div>
		<div class="registmain">
			<p>注册</p>
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
			  <p style="font-size: 12px;color: #999;" @click="onClickLeft()">已有帐号?点击去登陆</p>
			  <div style="margin: 16px;">
			    <van-button round block type="primary" native-type="submit">注册</van-button>
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
			    localStorage.setItem('users',JSON.stringify(values))
				Notify({ type: 'success', message: '注册成功' })
				this.$router.push('/login')
			},
			onClickLeft() {
			    this.$router.push('/login')
			}
		}
	}
</script>

<style lang="less">
	.regist{
		.registmain{
			p{font-size: 26px;font-weight: 700;margin: 15px}
		}
	}
</style>

