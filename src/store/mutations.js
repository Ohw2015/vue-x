import * as types from './type'
import getters from './getters'
var state = {
	count: 10
}
const mutations = {
      [types.INCREMENT](state,payload){
           //state.count++;
           console.log(123);
           console.log(payload.odd)//payload接收actions传递过来的第二个参数。
      },
      [types.DECREMENT](state){
           state.count--;
      },
      [types.CLICKODD](){
         if(state.count%2 == 0){
            state.count ++;
         }
      }
}
export default{
	  state,
    mutations,
    getters
}