import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    add(state,num){ 
      state.count+=num;
    },
    reduce(state,num){
      state.count-=num;
    }
  },
  getters:{
    count2(state){
      return state.count +10;
    }
  },
  actions: {
    addAction({commit}){
      commit('add',20)
    },
    reduceAction({commit}){
      commit('reduce',20)
    }
  }
})
