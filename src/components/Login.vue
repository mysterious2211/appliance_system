<template>
  <body>
  <form action="" method="post">

    <header	class="wrap">

      <div class="logo-box">
        <h1 class="left">
          <a href="#"><img src="../assets/imgs/logo1.jpg" /></a>
        </h1>
        <span class="left logo-r">欢迎登录家电购物系统</span>
      </div>

    </header>

    <article class="content">
      <div class="wrap">
        <div class="login-box">
          <div class="login-form">
            <h2>用户登录<a href="" @click.prevent="goToRegister">立即注册</a></h2>
            <div class="item">
              <label class="nick left"></label>
              <input type="text" name="loginId" placeholder="请输入账号" required="required" v-model="Login.loginId"/>
            </div>
            <div class="item">
              <label class="pwd left"></label>
              <input type="password" name="loginPassword" placeholder="密码" required="required" v-model="Login.loginPassword"/>
            </div>

            <div class="item2">

              <input type="radio" name="loginPerson" v-model="Login.loginPerson" value="1" checked="checked">用户
              <input type="radio" name="loginPerson" v-model="Login.loginPerson" value="0">管理员



              <input class="login-btn" name="登录" type="submit" value="登  录" @click.prevent="loginSuccess"/>
            </div>
            <div>
              <span style="color:red;">{{error}}</span>
            </div>
          </div>
        </div>

      </div>
    </article>





  </form>
  </body>
</template>

<script>
import axios from "axios";
export default {
  name: "myLogin",
  data(){
    return {
      Login:{
        loginId:'',
        loginPassword:'',
        loginPerson:"1",
      },
      error:'',
      flag:2,
    }
  },
  methods:{
    'goToRegister'(){
      //触发Login组件实例身上的toRegister事件
      this.$emit("toRegister",this.flag)
    },
    'loginSuccess'(){
      const _this = this
      if(_this.Login.loginId !="" && _this.Login.loginId != null && _this.Login.loginPassword != "" && _this.Login.loginPassword != null){
        axios.post("http://localhost:8080/api/goods/login/judge",this.Login).then(
            response => {
              // console.log(response.data)
              if(response.data.code == "2"){
                sessionStorage.setItem('LoginId',_this.Login.loginId);
                this.$emit("loginSuccess",3)
              }
              else if(response.data.code =="1"){
                sessionStorage.setItem('LoginId',_this.Login.loginId);
                this.$emit("loginSuccess",4)
              }
              else{
                // _this.error = response.data.successMessage
                alert(response.data.successMessage)
              }

            },
            error => {
              console.log(error.message)
              return false;
            }
        )
      }
      else{
        alert("账号或密码不能为空！")
      }



      //触发Login组件实例身上的loginSuccess事件
      // this.$emit("loginSuccess",3)
    }
  }
}
</script>

<style scoped>


*{margin:0; padding: 0;}
a{text-decoration:none; color:#666 ;}
a:hover{
  text-decoration:underline ;
  color: #E4393C;
}
html,body
{
  font: 12px/150% Arial,Verdana ;
  background-color: #88cfed;


}
.wrap{
  width:1000px;
  margin:0 auto ;

}

.left
{
  float: left;


}
.logo-box
{
  height:60px;
  padding-top:10px;
  background-color: #88cfed;

}
.logo-r
{
  font-size: 36px;
  padding-left:37px ;
  margin-top:22px ;

}

.content
{
  margin-top:15px ;

}

.login-box
{
  background:url(../assets/imgs/bgp2.png) no-repeat;
  height:500px ;
}


.login-form
{
  float: right;
  margin-top: 85px;
  padding: 20px;
  width: 332px;
  background: #FFF;
  margin-right: 65px;
  height: 300px;
}

.login-form h2
{
  font-size: 20px;
  height:27px ;
  margin-bottom: 25px;

}


.login-form h2 a
{
  font-size:15px ;
  color: #b61d1d ;
  padding-left: 20px ;
  background:url(../assets/imgs/icon5.jpg) no-repeat;
  float:right ;
}

.login-form .item
{
  border :1px solid #bdbdbd ;
  height: 38px ;
  margin-bottom: 20px ;

}

.login-form .item input{
  float: left ;
  padding: 10px 0 10px 10px ;
  border :0 none ;
  line-height: 12px ;
  width: 252px

}

.login-form .item label
{
  border-right: 1px #bdbdbd solid ;
  width:38px ;
  height:36px ;

}

.login-form .item  .nick
{
  background: url(../assets/imgs/icon1.jpg) no-repeat;
}

.login-form .item  .pwd
{
  background: url(../assets/imgs/icon2.jpg) no-repeat;
}

.item2
{
  margin-bottom:15px ;

}

.item2 label
{
  font-size: 12px ;
  vertical-align:middle ;

}

.item2 input
{
  vertical-align:middle ;
  margin-right:3px ;
}

.item2 a
{
  float:right ;
  font-size:12px ;

}


.login-btn
{
  display: block ;
  height:35px ;
  color:#FFF ;
  background:#e4393c ;
  width:302px ;
  text-align:center ;
  font-size: 22px ;
  line-height: 35px ;
  margin-top: 22px;
  margin-left: -6px;

}

.login-btn:hover
{
  color:#fff ;
  text-decoration: none;


}

.footer
{
  text-align:center ;
  margin-top:20px;
  padding-bottom:30px ;

}



.copy
{
  margin-top:8px ;

}








</style>