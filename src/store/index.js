import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	loginActive:false,
  },
  mutations: {
	changeActive(state){
		state.loginActive=true
	},
	changeActive2(state){
		state.loginActive = false
	}
	
  },
  actions: {
  },
  modules: {
  }
})
