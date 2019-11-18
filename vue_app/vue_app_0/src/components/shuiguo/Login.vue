<template>
  <div>
    <v-Ddd></v-Ddd>
    <table></table>
    <div>
      <mt-field
        label="手机号"
        placeholder="请输入手机号"
        v-model="phone"
        class="phone"
      ></mt-field>
      <div>
        <mt-field label="验证码" placeholder="请输入验证码" v-model="inputyzm"
          ><canvas id="c3" width="170" height="48" @click="change()"></canvas
        ></mt-field>
      </div>
      <mt-button id="delu" @click="login">登陆</mt-button>
    </div>
  </div>
</template>
<script>
  import vDdd from "./Ddd.vue";
  export default {
    data() {
      return {
        phone: [],
        yzm: [],
        inputyzm: []
      };
    },
    mounted() {
      this.change();
    },
    methods: {
      change() {
        var c3 = document.getElementById("c3");
        var ctx = c3.getContext("2d");
        var a = Math.floor(Math.random() * 10);
        var b = Math.floor(Math.random() * 10);
        var c = Math.floor(Math.random() * 10);
        var d = Math.floor(Math.random() * 10);
        this.yzm = "" + a + b + c + d;
        console.log(this.yzm);
        //随机背景颜色
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var q = Math.floor(Math.random() * 255);
        c3.style.background = `rgba(` + r + `,` + g + `,` + q + `,` + `0.6)`; // console.log(abcd); // console.log(a);
        ctx.font = "40px Arial";
        ctx.clearRect(0, 0, 999, 999);
        ctx.fillText(this.yzm, 60, 40);
      },
      login() {
        //功能：完成用户登录操作
        // 1.获取用户输入的电话
        var phone = this.phone; // 2.创建正则表达式
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/; // 3.验证用户手机
        if (!reg.test(phone)) {
          // 3.1 验证不成功提示消息
          this.$messagebox("手机号格式不正确");
          return;
        }
        if (this.inputyzm !== this.yzm) {
          this.$messagebox("验证码输入错误,请重新");
          return;
        }
        //创建url请求服务器
        var url = "login";
        //请求参数为phone
        var obj = { phone: phone };
        //向服务器请求
        this.axios.get(url, { params: obj }).then(res => {
          console.log(res);
          if (res.data.code == "1") {
            //如果成功，跳转主页面
            sessionStorage.uid = res.data.data[0].id;
            console.log("登陆成功", sessionStorage.uid);
            this.$messagebox("登录成功");
            this.$router.push("/Home");
          } else if (res.data.code == "-1") {
            this.$messagebox("账号不存在");
            this.$router.push("/Reg");
          }
        });
      }
    },
    components: {
      vDdd
    }
  };
</script>
<style scope>
  * {
    margin: 0;
    padding: 0;
  }
  .phone {
    margin-top: 40px;
  }
  #c3 {
    width: 120px;
    height: 50px;
  }
  #delu {
    background: #ddffdd;
    width: 40%;
    margin-left: 30%;
    margin-top: 20px;
  }
</style>
