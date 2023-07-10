<template>
  <div id="app">
    <Login
        v-if="flag === 1"
        @toRegister="getFlag1"
        @loginSuccess="loginSuccess"
    />
    <Register v-if="flag === 2" @toLogin="getFlag2"/>
    <Admin
        v-if="flag === 3"
        @toLogin="toLogin"
    />
    <User
        v-if="flag === 4"
        @toLogin="toLogin"
    />
    <!--<ALLGoods
        v-show="flag1 === 1"

    />-->
  </div>
</template>

<script>

import '@/assets/css/global.css'

import Login from "@/components/Login";
import Register from "@/components/Register";
import Admin from "@/components/Admin";
import User from "@/components/User";

export default {
  name: 'App',
  components: {
    Login,Register,Admin,User
  },
  data(){
    return{
      flag:1,
      flag1:0,
    }
  },
  methods:{
    'getFlag1'(flag){
       this.flag=flag
    },
    'getFlag2'(flag){
      this.flag=flag
    },
    'loginSuccess'(flag){
      this.flag=flag
    },
    'toLogin'(flag){
      this.flag=flag
    },

  }
}
</script>




