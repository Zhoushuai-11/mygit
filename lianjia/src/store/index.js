import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  islogin:false,
	  username:JSON.parse(localStorage.getItem('users')) 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
