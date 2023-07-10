<template>
  <body>
  <!--整体部分-->
  <div id="all">
    <!--上部分-->
    <div id="top">
      <div id="top1">
        <span>用户界面</span>
      </div>
      <div id="top3">
        <span>欢迎来到用户界面</span>
      </div>
      <div id="top3">
            <span>
                <a href="user/exit" @click.prevent="goToLogin">退出</a>
            </span>
      </div>
    </div>
    <!--下部分-->
    <div id="bottom">
      <!--下部分左边-->
      <div id="bleft">
        <div id="ltop">
          <div id="lts">
            <img src="../assets/imgs/touxiang.jpg" /><br />

          </div>
          <p style="text-align: center;">{{loginId}}</p>
        </div>
        <div id="lbottom">
          <ul>
            <a href="user/personal/goods/1" target="myright" @click.prevent="goToPersonalGoods">
              <li class="one">&nbsp;&nbsp;&nbsp;&nbsp;查看所有商品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>
            </a>
            <a href="user/personal/indent/1/${sessionScope.login.loginId}" target="myright" @click.prevent="goToPersonalIndent">
              <li class="one">&nbsp;&nbsp;&nbsp;&nbsp;查看所有订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>
            </a>
            <a href="user/personal/cart/1/${sessionScope.login.loginId}" target="myright" @click.prevent="goToPersonalCart">
              <li class="one">&nbsp;&nbsp;&nbsp;&nbsp;查看购物车信息&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            </a>
            <a href="user/personal/information/${sessionScope.login.loginId}" target="myright" @click.prevent="goToPersonalInformation">
              <li class="one">&nbsp;&nbsp;&nbsp;&nbsp;查看个人信息&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            </a>
          </ul>
        </div>
      </div>
      <!--下部分右边-->
      <div id="bright">
        <!--<iframe frameborder="0" scrolling="yes" name="myright" width="1235px" height="700px" ></iframe>-->
        <div name="myright" width="1235px" height="700px" >
           <PersonalGoods v-if="flag2 === 1" />
           <PersonalIndent v-if="flag2 === 2" />
           <PersonalCart v-if="flag2 === 3" />
           <PersonalInformation v-if="flag2 === 4" />
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>

import '@/assets/css/bootstrap.css'
import '@/assets/css/index.css'
import PersonalGoods from "@/components/PersonalGoods";
import PersonalIndent from "@/components/PersonalIndent";
import PersonalCart from "@/components/PersonalCart";
import PersonalInformation from "@/components/PersonalInformation";
export default {
  name: "myUser",
  components:{
    PersonalGoods,PersonalIndent,PersonalCart,PersonalInformation
  },
  data(){
    return{
      loginId:'',
      flag:1,
      flag2:1,
    }
  },
  created() {
    this.loginId = sessionStorage.getItem('LoginId')
    console.log(sessionStorage.getItem('LoginId'))
  },
  methods:{
    'goToLogin'(){
      this.$emit("toLogin",this.flag)
    },
    'goToPersonalGoods'(){
      this.flag2=1
    },
    'goToPersonalIndent'(){
      this.flag2=2
    },
    'goToPersonalCart'(){
      this.flag2=3
    },
    'goToPersonalInformation'(){
      this.flag2=4
    },
  }
}
</script>

<style scoped>

html,body{
  width:100%;
  height:100%;
  margin:0;
  padding:0;
  overflow: hidden;
}

</style>