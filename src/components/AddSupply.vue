<template>
  <body style="height: 700px">
  <div id="brall">
    <div id="middle">
      <form action="admin/add/supplierOrder/information" method="post" style="padding-left: 0px;">
        <table class="table table-bordered table-striped" style="text-align:center;width: 100%;">
          <tr>
            <th colspan="6" style="text-align: center;">添加供货单</th>
          </tr>
          <tr>
            <td>供应商ID<input colspan="6"  type="text" name="supplierId" placeholder="请输入供应商ID" required="required" v-model="supplierOrder.supplierId"/> </td>
          </tr>
          <tr>
            <td>&nbsp;商品ID&nbsp;&nbsp;<input colspan="6" type="text" name="goodsId" placeholder="请输入商品ID" required="required" v-model="supplierOrder.goodsId"/> </td>
          </tr>
          <tr>
            <td>商品数量<input colspan="6" type="text" name="supplyCount" placeholder="请输入商品数量" required="required" v-model="supplierOrder.supplyCount"/> </td>
          </tr>
          <tr>
            <td><input colspan="6" type="submit" name="添加" value="添加" @click.prevent="AddSupplierOrder"></td>
          </tr>

        </table>
      </form>
    </div>
  </div>

  </body>
</template>

<script>
import axios from "axios";

export default {
  name: "myAddsupply",
  data(){
    return{
      supplierOrder:{
        supplierId:'',
        goodsId:'',
        supplyCount:'',
      }
    }
  },
  methods:{
    'AddSupplierOrder'(){
      if(this.supplierOrder.supplierId != '' && this.supplierOrder.goodsId != '' && this.supplierOrder.supplyCount != ''){
        this.supplierOrder.supplyCount = this.supplierOrder.supplyCount * 1
        axios.post("http://localhost:8080/api/goods/admin/add/supplierOrder/information", this.supplierOrder).then(
            response => {
              console.log(response.data)
              if (response.data.success == 0) {
                alert("不存在该供应商，添加失败")

              }
              else if(response.data.success == 1){
                 alert("已存在该供应单，数量更新成功")
              }
              else{
                alert("添加成功")
              }
            },
            error => {
              console.log(error.message)
              return false;
            }
        )
      }
      else{
        alert("输入框不能为空！")
      }
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