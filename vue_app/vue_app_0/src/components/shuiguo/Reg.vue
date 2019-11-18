<template>
  <div>
    <div>
      <mt-button @click="fh">返回</mt-button>
    </div>
    <div class="reg1">
      手机号：<input placeholder="请输入手机号" class="r1" v-model="phone" />
    </div>
    <div class="reg2">
      密码：<input placeholder="请输入密码" class="r2" v-model="upwd" />
    </div>
    <div class="reg3">
      确认密码：<input placeholder="确认密码" class="r3" v-model="upwd1" />
    </div>
    <button @click="reg" class="reg3">注册</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        phone: "",
        upwd: "",
        upwd1: ""
      };
    },
    methods: {
      fh() {
        this.$router.push("/Me");
      },
      reg() {
        //创建电话和密码的正则表达式
        var preg = /^1[3,4,5,6,7,8]\d{9}$/;
        var ureg = /^[a-z0-9]{3,12}$/i;
        //获取输入的电话号码和密码
        var p = this.phone;
        var u = this.upwd;
        var u1 = this.upwd1;
        //判断输入的电话号码是否符合要求
        if (preg.test(p) == false) {
          this.$messagebox("请输入正确的电话号码");
          return;
        }
        //验证密码是否符合要求
        if (ureg.test(u) == false) {
          this.$messagebox("请输入正确的密码");
          return;
        }
        //验证两次密码是否一致
        if (u1 !== u) {
          this.$messagebox("两次密码不一致，请重新输入");
        }
        //发送ajax请求
        var url = "reg";
        var obj = { phone: p, upwd: u };
        this.axios.get(url, { params: obj }).then(res => {
          console.log(res.data.code);
          this.$messagebox("注册成功");
          this.$router.push("Home");
        });
      }
    }
  };
</script>
<style>
  .reg1 {
    margin-top: 30px;
  }
  .reg2 {
    margin-top: 20px;
  }
  .reg3 {
    margin-top: 20px;
  }
</style>
