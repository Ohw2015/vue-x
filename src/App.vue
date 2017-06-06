<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h3>{{title}}</h3>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数才增加" @click="clickOdd">
    <div>
        现在数字为：{{count}},当前的数字是:{{getodd}}
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',
  data(){
    return {
      title:'vuex状态管理学习',
    }
  },
  computed:mapGetters([
     'count',
     'getodd'
  ]),
  methods:mapActions([
     "increment",
     "decrement",
     "clickOdd"
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
