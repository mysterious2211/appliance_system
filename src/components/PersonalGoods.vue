<template>
  <body style="height: 700px">
  <div id="brall">
    <div id="middle">

      <div id="selectGoods">
        <form action="user/select/goods/1" method="post" class="form1">
          <input  class="input21" type="text" name="message" placeholder="输入要查询的数据" v-model="message">
          <input  class="input22" type="submit" value="查询" @click.prevent="selectGoods">
        </form>
      </div>



      <table class="table table-bordered table-striped" style="text-align: center; background-color: skyblue;">
        <tr>
          <th colspan="9" style="text-align: center;">商品信息</th>
        </tr>
        <tr>
          <th style="text-align: center;">商品id</th>
          <th style="text-align: center;">商品名称</th>
          <!--<th style="text-align: center;">商品展示</th>-->
          <th style="text-align: center;">类别</th>
          <th style="text-align: center;">价格(元)</th>
          <th style="text-align: center;">数量(个)</th>
          <th style="text-align: center;">保修时间(月)</th>
          <th style="text-align: center;">生产日期</th>
          <th style="text-align: center;">操作</th>
        </tr>
        <tr v-for="goods in page.list" :key="goods.goodsId" v-show="goods.isPut == 1">

          <td>{{goods.goodsId}}</td>
          <td>{{goods.goodsName}}</td>
          <!--<td><img src="file:///D:/Program Files_x64/projects_static/idea_projects/goodsManagementSystem/imgs/kele.jpg" width="50" height="50" /></td>-->
          <!--<td><img src="@/assets/imgs/qianbi.jpg" width="50" height="50" /></td>-->
          <td>{{goods.goodsSort}}</td>
          <td>{{goods.goodsPrice}}</td>
          <td>{{goods.goodsCount}}</td>
          <td>{{goods.shelfLife}}</td>
          <td>{{goods.productDate}}</td>
          <td>
            <a href=""  style="color: red;" @click.prevent="buyGoods($event,goods.goodsId)">购买</a>&nbsp;&nbsp;
            <a href=""  style="color: red;" @click.prevent="cartGoods($event,goods.goodsId)">收藏</a>
          </td>
        </tr>
      </table>
    </div>
    <div style="text-align: center;">
      <div v-show="message == ''">
        <a href=""  @click.prevent="turnToFirst">首页</a>
        <a href="" v-show="page.hasPreviousPage" @click.prevent="turnToPrePage">上一页</a>
        <a href="" v-show="page.hasNextPage" @click.prevent="turnToNext">下一页</a>
        <a href="" @click.prevent="turnToLast">尾页</a>
      </div>
      <div v-show="message != ''">
        <a href=""  @click.prevent="selectTurnToFirst">首页</a>
        <a href="" v-show="page.hasPreviousPage" @click.prevent="selectTurnToPrePage">上一页</a>
        <a href="" v-show="page.hasNextPage" @click.prevent="selectTurnToNext">下一页</a>
        <a href="" @click.prevent="selectTurnToLast">尾页</a>

      </div>
    </div>
  </div>

  </body>
</template>

<script>
import axios from "axios";

export default {
  name: "PersonalGoods",
  data(){
    return{
      loginId:'',
      message:'',
      page:{},
      goodsId: '',
      /*page:{
        total:1,
        /!*list:[
          {
            goodsId:'',
            goodsName:'',
            goodsPhoto:'',
            goodsSort:'',
            goodsPrice:0,
            goodsCount:0,
            shelfLife:'',
            productDate:'',
            isPut:1
          }

        ],*!/
        list:[],
        pageNum:1,
        pageSize:1,
        size:5,
        startRow:1,
        endRow:1,
        pages:1,
        prePage:1,
        nextPage:1,
        isFirstPage:true,
        isLastPage:true,
        hasPreviousPage:true,
        hasNextPage:true,
        navigatePage:1,
        navigatepageNums:[],
        navigateFirstPage:1,
        navigateLastPage:1
      }*/

    }
  },
  created() {
    // this.loginId = sessionStorage.getItem("loginId")
    axios.get("http://localhost:8080/api/goods/user/personal/goods/1",{}).then(
        response => {
          console.log(response.data)
          if(response.data.code == "1"){
            console.log(response.data.page)
            this.page = response.data.page
            this.message = response.data.message
            // console.log(this.list)
            // console.log("=========="+this.page)
          }
          else{
            alert("暂无商品")
          }
        },
        error => {
          console.log(error.message)
          return false;
        }
    )

  },
  methods:{
    'turnToFirst'(){
      axios.get("http://localhost:8080/api/goods/user/personal/goods/1",{}).then(
          response => {
            console.log(response.data)
            if(response.data.code == "1"){
              console.log(response.data.page)
              this.page = response.data.page
              this.message = response.data.message
              // console.log(this.list)
              // console.log("=========="+this.page)
            }
            else{
              alert("暂无商品")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'turnToPrePage'(){
      axios.get(`http://localhost:8080/api/goods/user/personal/goods/${this.page.prePage}`,{}).then(
          response => {
            console.log(response.data)
            if(response.data.code == "1"){
              console.log(response.data.page)
              this.page = response.data.page
              this.message = response.data.message
              // console.log(this.list)
              // console.log("=========="+this.page)
            }
            else{
              alert("暂无商品")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'turnToNext'(){
      axios.get(`http://localhost:8080/api/goods/user/personal/goods/${this.page.nextPage}`,{}).then(
          response => {
            console.log(response.data)
            if(response.data.code == "1"){
              console.log(response.data.page)
              this.page = response.data.page
              this.message = response.data.message
              // console.log(this.list)
              // console.log("=========="+this.page)
            }
            else{
              alert("暂无商品")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'turnToLast'(){
      axios.get(`http://localhost:8080/api/goods/user/personal/goods/${this.page.pages}`,{}).then(
          response => {
            console.log(response.data)
            if(response.data.code == "1"){
              console.log(response.data.page)
              this.page = response.data.page
              this.message = response.data.message
              // console.log(this.list)
              // console.log("=========="+this.page)
            }
            else{
              alert("暂无商品")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'selectGoods'(){
      if(this.message == ""){
        axios.get(`http://localhost:8080/api/goods/user/select/goods/1`,{}).then(
            response => {
              console.log("message:"+this.message)
              console.log(response.data)
              if(response.data.code == "1"){
                console.log(response.data.page)
                this.page = response.data.page
                this.message = response.data.message
                // console.log(this.list)
                // console.log("=========="+this.page)
              }
              else{
                alert("暂无商品")
              }
            },
            error => {
              console.log(error.message)
              return false;
            }
        )
      }
      else{
        axios.get(`http://localhost:8080/api/goods/user/select/goods/1/${this.message}`,{}).then(
            response => {
              console.log("message:"+this.message)
              console.log(response.data)
              if(response.data.code == "1"){
                console.log(response.data.page)
                this.page = response.data.page
                this.message = response.data.message
                // console.log(this.list)
                // console.log("=========="+this.page)
              }
              else{
                alert("暂无商品")
              }
            },
            error => {
              console.log(error.message)
              return false;
            }
        )
      }
    },
    'selectTurnToFirst'(){
      axios.get(`http://localhost:8080/api/goods/user/select/goods/1/${this.message}`,{}).then(
          response => {
            console.log(response.data)
            if(response.data.code == "1"){
              console.log(response.data.page)
              this.page = response.data.page
              this.message = response.data.message
              // console.log(this.list)
              // console.log("=========="+this.page)
            }
            else{
              alert("暂无商品")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'selectTurnToPrePage'(){
      axios.get(`http://localhost:8080/api/goods/user/select/goods/${this.page.prePage}/${this.message}`,{}).then(
          response => {
            console.log(response.data)
            if(response.data.code == "1"){
              console.log(response.data.page)
              this.page = response.data.page
              this.message = response.data.message
              // console.log(this.list)
              // console.log("=========="+this.page)
            }
            else{
              alert("暂无商品")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'selectTurnToNext'(){
      axios.get(`http://localhost:8080/api/goods/user/select/goods/${this.page.nextPage}/${this.message}`,{}).then(
          response => {
            console.log(response.data)
            if(response.data.code == "1"){
              console.log(response.data.page)
              this.page = response.data.page
              this.message = response.data.message
              // console.log(this.list)
              // console.log("=========="+this.page)
            }
            else{
              alert("暂无商品")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'selectTurnToLast'(){
      axios.get(`http://localhost:8080/api/goods/user/select/goods/${this.page.pages}/${this.message}`,{}).then(
          response => {
            console.log(response.data)
            if(response.data.code == "1"){
              console.log(response.data.page)
              this.page = response.data.page
              this.message = response.data.message
              // console.log(this.list)
              // console.log("=========="+this.page)
            }
            else{
              alert("暂无商品")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'buyGoods'(event,goodsId){
      console.log(event,goodsId)
      this.goodsId = goodsId
      this.loginId = sessionStorage.getItem("LoginId")
      axios.get(`http://localhost:8080/api/goods/user/buy/${this.goodsId}/${this.loginId}`,{}).then(
          response => {
            console.log(response.data)
            if(response.data.code == "1"){
              alert("购买成功！")
              // console.log(this.list)
              // console.log("=========="+this.page)
            }
            else{
              alert("商品数量不足！")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'cartGoods'(event,goodsId){
      console.log(event,goodsId)
      this.goodsId = goodsId
      this.loginId = sessionStorage.getItem("LoginId")
      axios.get(`http://localhost:8080/api/goods/user/join/cart/${this.goodsId}/${this.loginId}`,{}).then(
          response => {
            console.log(response.data)
            if(response.data.code == "1"){
              alert("加入购物车！")
              // console.log(this.list)
              // console.log("=========="+this.page)
            }
            else{
              alert("商品数量不足！")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    }
  },

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