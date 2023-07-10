<template>
  <body>
  <!--整体部分-->
  <div id="all">
    <!--上部分-->
    <div id="top">
      <div id="top1">
        <span>管理员界面</span>
      </div>
     <!-- <div id="top2" class="text-center">
      <h2><a href="" class="text-danger">退出登录</a></h2>
    </div> -->
      <div id="top3">
        <span>欢迎来到管理员界面</span>
      </div>
      <div id="top3">
            <span>
                <a href="" @click.prevent="goToLogin">退出</a>
            </span>
      </div>
    </div>
    <!--下部分-->
    <div id="bottom">
      <!--下部分左边-->
      <div id="bleft">
        <div id="ltop">
          <div id="lts">
            <img src="@/assets/imgs/touxiang.jpg" /><br />

          </div>
          <p style="text-align: center;">{{loginId}}</p>
        </div>
        <div id="lbottom">
          <ul>
            <a href="" target="myright" @click.prevent="goToALLGoods">
              <li class="one">&nbsp;&nbsp;&nbsp;&nbsp;查看所有商品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>
            </a>
            <a href="admin/all/indent/1" target="myright" @click.prevent="goToALLIndent">
              <li class="one">&nbsp;&nbsp;&nbsp;&nbsp;查看所有订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>
            </a>
            <a href="admin/all/cart/1" target="myright" @click.prevent="goToALLCart">
              <li class="one">&nbsp;&nbsp;&nbsp;&nbsp;查看购物车信息&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            </a>
            <a href="admin/all/supplier/1" target="myright" @click.prevent="goToALLSupplier">
              <li class="one">&nbsp;&nbsp;&nbsp;&nbsp;查看供应商信息&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            </a>
            <a href="admin/all/supplierOrder/1" target="myright" @click.prevent="goToALLSupply">
              <li class="one">&nbsp;&nbsp;&nbsp;&nbsp;查看供货单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>
            </a>
          </ul>
        </div>
      </div>
      <!--下部分右边-->
      <div id="bright">
        <!--<iframe frameborder="0" scrolling="yes" name="myright" width="1235px" height="700px" >
        </iframe>-->
        <div name="myright" width="1235px" height="700px" >
          <ALLGoods v-if="flag1 === 1" @toAddAndUpdateGoods="toAddAndUpdateGoods"/>
          <ALLIndent v-if="flag1 === 2"/>
          <ALLCart v-if="flag1 === 3"/>
          <ALLSupplier v-if="flag1 === 4" @toAddAndUpdateSupplier="toAddAndUpdateSupplier" />
          <ALLSupply v-if="flag1 === 5" @toAddAndUpdateSupply="toAddAndUpdateSupply"/>
          <AddGoods v-if="flag1 === 6"/>
          <AddSupplier v-if="flag1 === 7"/>
          <AddSupply v-if="flag1 === 8"/>
          <UpdateGoods v-if="flag1 === 9" />
          <UpdateSupplier v-if="flag1 === 10"/>
          <UpdateSupply v-if="flag1 === 11" />
        </div>
      <!--<ALLGoods/>-->
      </div>
    </div>
  </div>
  </body>
</template>

<script>

import '@/assets/css/bootstrap.css'
import '@/assets/css/index.css'
import ALLGoods from "@/components/ALLGoods";
import ALLIndent from "@/components/ALLIndent";
import ALLSupplier from "@/components/ALLSupplier";
import ALLCart from "@/components/ALLCart";
import ALLSupply from "@/components/ALLSupply";
import AddGoods from "@/components/AddGoods";
import AddSupplier from "@/components/AddSupplier";
import AddSupply from "@/components/AddSupply";
import UpdateSupply from "@/components/UpdateSupply";
import UpdateSupplier from "@/components/UpdateSupplier";
import UpdateGoods from "@/components/UpdateGoods";
/*import '@/assets/js/jquery-3.3.1'
import '@/assets/js/bootstrap'*/

export default {
  name: "myAdmin",
  components:{
    ALLGoods,ALLIndent,ALLCart,ALLSupplier,ALLSupply,AddGoods,AddSupplier,AddSupply,
    UpdateGoods,UpdateSupplier,UpdateSupply
  },
  data(){
    return{
      loginId:'',
      flag:1,
      flag1:1,
    }
  },
  created() {
    this.loginId = sessionStorage.getItem('LoginId');
  },
  methods:{
    'goToLogin'(){
      //触发Admin组件实例身上的toLogin事件
      this.$emit("toLogin",this.flag)
    },
    'goToALLGoods'(){
      this.flag1=1
    },
    'goToALLIndent'(){
      this.flag1=2
    },
    'goToALLCart'(){
      this.flag1=3
    },
    'goToALLSupplier'(){
      this.flag1=4
    },
    'goToALLSupply'(){
      this.flag1=5
    },
    'toAddAndUpdateGoods'(flag1){
      this.flag1=flag1
    },
    'toAddAndUpdateSupplier'(flag1){
      this.flag1=flag1
    },
    'toAddAndUpdateSupply'(flag1){
      this.flag1=flag1
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