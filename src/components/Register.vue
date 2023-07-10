<template>
  <body>

  <form action="" method="post">
    <header	class="wrap">

      <div class="logo-box">
        <h1 class="left">
          <a href="#"><img src="../assets/imgs/logo1.jpg" /></a>
        </h1>
        <span class="left logo-r">欢迎注册账号！</span>
      </div>

    </header>

    <article class="content">
      <div class="wrap">
        <div class="login-box">
          <div class="login-form">
            <h2>用户注册</h2>

            <div class="item">
              <label class="username left"></label>
              <input type="text" name="userId" v-model="User.userId" placeholder="请输入账号" required="required"/>

            </div>

            <div class="item">
              <label class="nick left"></label>
              <input type="text" name="userName" v-model="User.userName" placeholder="请输入姓名" required="required"/>
            </div>
            <div class="item">
              <label class="pwd left"></label>
              <input type="password" name="userPassword" v-model="User.userPassword" placeholder="密码" required="required"/>
            </div>
            <div class="item">
              <label class="username left"></label>
              <input type="text" name="userGender" v-model="User.userGender" placeholder="请输入性别" required="required"/>
            </div>
            <div class="item">
              <label class="username left"></label>
              <input type="number" name="userAge" v-model="User.userAge" placeholder="请输入年龄" required="required"/>
            </div>
            <div class="item">
              <label class="username left"></label>
              <input type="text" name="userTel" v-model="User.userTel" placeholder="请输入电话" required="required"/>
            </div>
            <div class="item">
              <label class="username left"></label>
              <input type="text" name="userAddress" v-model="User.userAddress" placeholder="请输入地址" required="required"/>
            </div>




            <div>
              <input class="login-btn" name="注册" type="submit" value="注  册" @click.prevent="userRegister"/>
            </div>
          </div>
          <div class="out">
            <h4>
              <a href="" @click.prevent="goToLogin">退出 </a>
            </h4>


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
  name: "myRegister",
  data(){
    return{
      User:{
        userId:'',
        userName:'',
        userPassword:'',
        userGender:'',
        userAge:'',
        userTel:'',
        userAddress:'',
      },
      flag:1,
    }
  },
  methods:{
    'goToLogin'(){
      //触发Register组件实例身上的toLogin事件
      this.$emit("toLogin",this.flag)
    },
    'userRegister'(){
      const _this = this
      if(_this.User.userId != '' && _this.User.userName != '' && _this.User.userPassword != '' && _this.User.userGender != '' && _this.User.userAge != '' && _this.User.userTel != '' && _this.User.userAddress != ''){
        _this.User.userAge = _this.User.userAge * 1
        console.log(_this.User)
        axios.post("http://localhost:8080/api/goods/register/join/user",this.User).then(
            response => {
              console.log(response.data)
              if(response.data.code == "1"){
                alert(response.data.successMessage);
                this.$emit("toLogin",_this.flag)
              }
              else{
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
        alert("输入不能为空！")
      }
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
.out{

  position:absolute;
  right:600px;
  top:123px;
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

.login-box {
  background: url(../assets/imgs/bgp2.png) no-repeat;
  background-size: cover;
  height: 599px;
}


.login-form {
  float: right;
  margin-top: 25px;
  padding: 20px;
  width: 320px;
  background: #FFF;
  margin-right: 346px;
  height: 535px;
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
  width: 240px

}

.login-form .item label
{
  border-right: 1px #bdbdbd solid ;
  width:38px ;
  height:36px ;

}

.login-form .item  .username
{
  background: url(../assets/imgs/icon1.jpg) no-repeat;
}

.login-form .item  .nick
{
  background: url(../assets/imgs/icon1.jpg) no-repeat;
}

.login-form .item  .pwd
{
  background: url(../assets/imgs/icon2.jpg) no-repeat;
}
.login-form .item  .check
{
  background: url(../assets/imgs/icon1.jpg) no-repeat;
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
  margin-top: 29px;
  margin-left: -11px;
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