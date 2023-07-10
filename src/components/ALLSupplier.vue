<template>
  <body style="height: 700px">
  <div id="brall">
    <div id="middle">
      <table class="table table-bordered table-striped" style="text-align: center;">
        <tr>
          <th colspan="6" style="text-align: center;">供应商信息</th>
        </tr>
        <tr>
          <th style="text-align: center;">供货商id</th>
          <th style="text-align: center;">供货商姓名</th>
          <th style="text-align: center;">性别</th>
          <th style="text-align: center;">电话</th>
          <th style="text-align: center;">地址</th>
          <th style="text-align: center;">操作(<a href="admin/add/supplier" @click.prevent="goToAddSupplier">添加</a>)</th>
        </tr>
        <tr v-for="supplier in page.list" :key="supplier.supplierId">

          <td>{{supplier.supplierId}}</td>
          <td>{{supplier.supplierName}}</td>
          <td>{{supplier.supplierGender}}</td>
          <td>{{supplier.supplierTel}}</td>
          <td>{{supplier.supplierAddress}}</td>
          <td>
            <a href="" @click.prevent="updateSupplier($event,supplier.supplierId)">修改</a>
          </td>
        </tr>
      </table>
    </div>
    <div style="text-align: center;">
      <a href=""  @click.prevent="turnToFirst">首页</a>
      <a href="" v-show="page.hasPreviousPage" @click.prevent="turnToPrePage">上一页</a>
      <a href="" v-show="page.hasNextPage" @click.prevent="turnToNext">下一页</a>
      <a href="" @click.prevent="turnToLast">尾页</a>
    </div>
  </div>

  </body>
</template>

<script>
import axios from "axios";

export default {
  name: "ALLSupplier",
  data(){
    return{
      loginId:'',
      cartId:'',
      page:{},
    }
  },
  created() {
    axios.get("http://localhost:8080/api/goods/admin/all/supplier/1",{}).then(
        response => {
          console.log(response.data)
          if(response.data.code == "1"){
            this.page = response.data.page

          }
          else{
            alert("暂无订单")
          }
        },
        error => {
          console.log(error.message)
          return false;
        }
    )

  },
  methods:{
    'goToAddSupplier'(){
      //触发ALLSupplier组件实例身上的this.$emit("toAddAndUpdateSupplier",7)事件
      this.$emit("toAddAndUpdateSupplier",7)
    },
    'turnToFirst'() {
      axios.get("http://localhost:8080/api/goods/admin/all/supplier/1", {}).then(
          response => {
            console.log(response.data)
            if (response.data.code == "1") {
              this.page = response.data.page
            } else {
              alert("暂无订单")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'turnToPrePage'() {
      axios.get(`http://localhost:8080/api/goods/admin/all/supplier/${this.page.prePage}`, {}).then(
          response => {
            console.log(response.data)
            if (response.data.code == "1") {
              this.page = response.data.page
            } else {
              alert("购物车暂无暂无商品")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'turnToNext'() {
      axios.get(`http://localhost:8080/api/goods/admin/all/supplier/${this.page.nextPage}`, {}).then(
          response => {
            console.log(response.data)
            if (response.data.code == "1") {
              this.page = response.data.page
            } else {
              alert("购物车暂无暂无商品")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'turnToLast'() {
      axios.get(`http://localhost:8080/api/goods/admin/all/supplier/${this.page.pages}`, {}).then(
          response => {
            console.log(response.data)
            if (response.data.code == "1") {
              this.page = response.data.page
            } else {
              alert("购物车暂无暂无商品")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'updateSupplier'(event,supplierId){
      console.log(event,supplierId)
      sessionStorage.setItem('supplierId',supplierId)
      this.$emit("toAddAndUpdateSupplier",10)
      // this.$bus.$emit('updateSupplier',supplierId)

    }
  }
}
</script>

<style scoped>
html,body{
  width:100%;
  /*height:100%;*/
  margin:0;
  padding:0;
  overflow: hidden;
}

form {
  margin: 0px;
  padding-left: 14px;
  background-color: #1f6377;
}

table {
  border: solid #ccc 1px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  /* -webkit-box-shadow: 0 1px 1px #ccc;
  box-shadow: 0 1px 1px #ccc; */
  -webkit-box-shadow:  0px 2px 1px 5px rgba(242, 242, 242, 0.1);
  box-shadow:  5px 20px 30px 30px rgba(242, 242, 242, 0.1);
  width: 97%;
}

table thead th {
  /*background:url(../css/img/zebratable.png);*/
  background-repeat:no-repeat;
  background-position: 0px center;
}

table tr {
  background: #D5EAF0;
  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .8) inset;
  box-shadow: 0 1px 0 rgba(255, 255, 255, .8) inset;
}

table tr:nth-child(even) {
  background: #D7E1C5;
  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .8) inset;
  box-shadow: 0 1px 0 rgba(255, 255, 255, .8) inset;
}

table tr:hover {
  background: #91C5D4;
  -o-transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  transition: all 3s ease-in-out;

  /*background-image: -webkit-gradient(linear, left top, left bottom, from(#151515), to(#404040)) !important;
    background-image: -webkit-linear-gradient(top, #151515, #404040) !important;
    background-image:    -moz-linear-gradient(top, #151515, #404040) !important;
    background-image:     -ms-linear-gradient(top, #151515, #404040) !important;
    background-image:      -o-linear-gradient(top, #151515, #404040) !important;
    background-image:         linear-gradient(top, #151515, #404040) !important;
  color:#fff !important;*/
}

table td,table th {
  border-left: 2px solid #ccc;
  border-top: 2px solid #ccc;
  padding: 10px;
  text-align: center;
}

table th{
  background-color: #66a9bd;
  background-image: -moz-linear-gradient(top, #dce9f9, #66a9bd);
  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .8) inset;
  box-shadow: 0 1px 0 rgba(255, 255, 255, .8) inset;
  border-top: none;
  text-shadow: 0 1px 0 rgba(255, 255, 255, .5);
  /*padding: 7px;*/
  /*border: 1px solid;*/
  /*border-color: white;*/
  height:60px;
}

table th td{

}

table td:first-child,table th:first-child {
  border-left: none;
}

table th:first-child {
  -webkit-border-radius: 6px 0 0 0;
  border-radius: 6px 0 0 0;
}

table th:last-child {
  -webkit-border-radius: 0 6px 0 0;
  border-radius: 0 6px 0 0;
}

table th:only-child {
  -webkit-border-radius: 6px 6px 0 0;
  border-radius: 6px 6px 0 0;
}

table tr:last-child td:first-child {
  -webkit-border-radius: 0 0 0 6px;
  border-radius: 0 0 0 6px;
}

table tr:last-child td:last-child {
  -webkit-border-radius: 0 0 6px 0;
  border-radius: 0 0 6px 0;
}

input[type="button"],input[type="submit"],input[type="reset"] {
  border: solid #ccc 1px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  -webkit-box-shadow: 0 1px 1px #ccc;
  box-shadow: 0 1px 1px #ccc;
  background: #B0CC7F;
  margin: 0 2px 0;
}

input[type="text"],input[type="password"] {
  border: solid #ccc 2px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  -webkit-box-shadow: 0 1px 1px #ccc;
  box-shadow: 0 1px 1px #ccc;
  background: #efefef;
  margin: 15px 10px 8px;
  padding:0px 0px 0px;
  text-indent: 5px;
}

input[name="page.now"] {
  border: solid #ccc 1px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  -webkit-box-shadow: 0 1px 1px #ccc;
  box-shadow: 0px 0px 0px #CEB754;
  background: #D5EAF0;
  margin: 0px 10px 0px 0px;
  padding-bottom: 0px;
  padding-top: 5px;
  width: 24px;
  line-height:10px;
  height: 12px;
}

img {
  border: medium none;
  margin: 0;
  padding: 0;
} /* img elements 图片元素 */
/** 设置默认字体 **/
body,button,input,select,textarea {
  font-size: 15px;
  font: 15px/1.5 ’宋体’, Arial, tahoma, Srial, helvetica, sans-serif;
}

h1,h2,h3,h4,h5,h6 {
  font-size: 100%;
}
</style>