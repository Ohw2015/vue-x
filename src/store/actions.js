import * as types from './type'
export default{
	    'increment':({
      	commit
      })=>{
         commit(types.INCREMENT,{
            odd:'这是一个增加的函数 '
         })//第二个参数传递给mutation里面payload使用。
      },
      'decrement':({
        commit
      })=>{
        commit(types.DECREMENT);
      },
      'clickOdd':({
        commit,state
      })=>{
        commit(types.CLICKODD);
      }
}