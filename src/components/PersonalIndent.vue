<template>
  <body style="height: 700px">
  <div id="brall">
    <div id="middle">
      <!--<div id="selectGoods">
        <form action="user/select/indent/1/${sessionScope.login.loginId}" method="post" class="form1">
          <input  class="input21" type="text" name="message" placeholder="输入要查询的数据">
          <input  class="input22" type="submit" value="查询">
        </form>
      </div>-->
      <!--<c:if test="${page.pages == 0}">
        <script type="text/javascript">
          alert("暂时还没有订单")
        </script>
      </c:if>-->
      <table class="table table-bordered table-striped" style="text-align: center;">
        <tr>
          <th colspan="7" style="text-align: center;">订单信息</th>
        </tr>
        <tr>
          <th style="text-align: center;">订单id</th>
          <th style="text-align: center;">用户id</th>
          <th style="text-align: center;">用户姓名</th>
          <th style="text-align: center;">商品id</th>
          <th style="text-align: center;">商品名</th>
          <th style="text-align: center;">购买数量</th>
          <th style="text-align: center;">订单时间</th>
        </tr>
        <tr v-for="indent in page.list" :key="indent.indentId">

          <td>{{indent.indentId}}</td>
          <td>{{indent.userId}}</td>
          <td>{{indent.userName}}</td>
          <td>{{indent.goodsId}}</td>
          <td>{{indent.goodsName}}</td>
          <td>{{indent.buyCount}}</td>
          <td>{{indent.indentTime}}</td>
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
  name: "PersonalIndent",
  data(){
    return {
      page:{},
      loginId:'',
    }
  },
  created() {
    this.loginId = sessionStorage.getItem("LoginId")
    console.log("login:"+this.loginId)
    axios.get(`http://localhost:8080/api/goods/user/personal/indent/1/${this.loginId}`,{}).then(
        response => {
          console.log(response.data)
          if(response.data.code == "1"){
            console.log(response.data.page)
            this.page = response.data.page
            // console.log(this.list)
            // console.log("=========="+this.page)
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
    'turnToFirst'(){
      axios.get(`http://localhost:8080/api/goods/user/personal/indent/1/${this.loginId}`,{}).then(
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
              alert("暂无订单")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'turnToPrePage'(){
      axios.get(`http://localhost:8080/api/goods/user/personal/indent/${this.page.prePage}/${this.loginId}`,{}).then(
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
              alert("暂无订单")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'turnToNext'(){
      axios.get(`http://localhost:8080/api/goods/user/personal/indent/${this.page.nextPage}/${this.loginId}`,{}).then(
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
              alert("暂无订单")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
    'turnToLast'(){
      axios.get(`http://localhost:8080/api/goods/user/personal/indent/${this.page.pages}/${this.loginId}`,{}).then(
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
              alert("暂无订单")
            }
          },
          error => {
            console.log(error.message)
            return false;
          }
      )
    },
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