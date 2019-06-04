import Vue from 'vue';
import Vuex from 'vuex';
import storage from '../model/storage.js'

const moduleA = {
  state: {
    count:0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement(state){
      state.count--
    }
  },
  actions: {},
  getters: {}
}

const moduleB = {
  state: {
    count2:storage.get('count2')
  },
  mutations: {
    increment2 (state) {
      state.count2++;
      storage.set('count2', state.count2);
    },
    decrement2(state){
      state.count2--;
      storage.set('count2', state.count2);
    }
  },
  actions: {}
}

Vue.use(Vuex)
//创建Store实例
const store = new Vuex.Store({
  modules:{
    a:moduleA,
    b: moduleB
  }
})
// 要改变状态值只能通过提交mutations来完成
export default store;