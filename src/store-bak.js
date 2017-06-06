import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

var state = {
	  count:10,
}
const mutations = {
      increment(state){
           state.count++;
      },
      decrement(state){
           state.count--;
      },
      clickOdd(){
         if(state.count%2 == 0){
           state.count ++;
         }
      }
}
const actions = {
      'increment':({
      	commit
      })=>{
         commit('increment')  
      },
      'decrement':({
        commit
      })=>{
        commit('decrement');
      },
      'clickOdd':({
        commit,state
      })=>{
        commit('clickOdd');
      }

}
const getters = {
   count(state){
      return state.count;
   },
   getodd(state){
      return state.count%2==0?'偶数':'基数'
   }
}
export default new Vuex.Store({
       state,
       actions,
       mutations,
       getters
})