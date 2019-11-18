<template>
  <div class="me0">
    <v-Ddd></v-Ddd>
   <table></table>
    <div calss="me"> 
      <div class="me1">
        <span label="nc">昵称</span><input v-model="nc" class="me11" />
      </div>
      <div class="me2">
        <span label="phone">电话号码</span><input v-model="phone" class="me21" />
      </div>
      <div class="me3">
        性别
        <div class="me5" v-show="alert">
          <img src="../../img/gou.png" @click="img1" class="me51" />
        </div>
        <span v-model="nan" @click="img1" class="me31">男</span>
        <div class="me6" v-show="alert1">
          <img src="../../img/gou.png" @click="img2" class="me52" />
        </div>
        <span v-model="nv" class="me32" @click="img2">女</span>
      </div>
      <div class="me4">
        <span label="sr">生日</span><input v-model="sr" class="me41" />
      </div>
      <div calsss="me7">
        <mt-button class="me71">保存</mt-button>
        <mt-button class="me72">退出登录</mt-button>
      </div>
    </div>  
  </div>
</template>
<script>
   import vDdd from "./Ddd.vue";
  export default {
    data() {
      return {
        nc: "520",
        phone: "1537738311",
        nan: "男",
        nv: "女",
        alert: true,
        alert1: false,
        sr: ""
      };
    },
    methods: {
      img1() {
        if (this.alert = true) {
          this.alert1 = false;
        }
        console.log(111);
      },
      img2() {
        if (this.alert1 = true) {
          this.alert = false;
        }
        console.log(222);
      }
    },
    components: {
	    vDdd
 }
  };
</script>
<style scoped>
  .me0 {
    width: 100%;
    height: 100%;
  }
  .me{
    margin-top:40px;
  }
  .me1,
  .me2,
  .me3,
  .me4 {
    width: 90%;
    margin-top: 10px;
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
  }
  .me5 {
    margin-left: 10px;

    left: 100px;
    top: 104px;
  }
  .me6 {
    margin-left: 10px;
    left: 192px;
    top: 106px;
  }
  .me5,
  .me6 {
    width: 50px;
    height: 50px;
    position: absolute;
  }
  .me51,
  .me52 {
    width: 20px;
    height: 20px;
  }
  .me11,
  .me21,
  .me41 {
    height: 40px;
    margin-left: 20px;
    text-align: center;
    border: 0px;
  }
  .me31,
  .me32 {
    margin-left: 80px;
  }
  .me7 {
    position: absolute;
    bottom: 1px;
  }
  .me71,
  .me72 {
    width: 50%;
    background-color: cornsilk !important;
  }
</style>
