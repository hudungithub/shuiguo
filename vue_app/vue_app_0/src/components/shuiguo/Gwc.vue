<template>
  <div class="d0">
    <div class="d1" v-show="alert">
      <!--单选框-->
      <input type="checkbox" class="in1" />
      <!--选定商品图片-->
      <img src="../../img/gwc.png" class="img1" />
      <div class="d11">
        <!--选定商品名称-->
        <div class="sp2">梨子</div>
        <!--商品价格-->
        <div class="sp3">￥119</div>
      </div>
      <div class="d12">
        <button class="btn1" @click="jia">+</button>
        <span class="sp1" id="s1">{{n}}</span>
        <button class="btn1" @click="jia">-</button>
      </div>
      <img src="../../img/gb.png" class="img2" @click="gb" v-show="alert"/>
      <!--删除商品-->
    </div>
    <div class="d2">
      <input type="checkbox" class="in2" />
      <span class="sp4">全选</span>
      <span></span>
      <button class="btn3">结算</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        n:1,
        alert:true
      };
    },
    methods: {
      jia() {
        var sp1 = document.querySelector("#s1");
        if(event.target.innerHTML=="+"){
          sp1.innerHTML++;
        }else if(event.target.innerHTML=="-"){
          sp1.innerHTML--;
          if(sp1.innerHTML<1){
            sp1.innerHTML=1;
          }
        }
      },
      gb(){
        this.alert=false;
      }
    }
  };
</script>
<style scoped>
  .d0 {
    display: flex;
    position: relative;
    height: 600px;
  }
  .d1 {
    width: 100%;
    height: 90px;
    flex-direction: row;
    border: 0px;
  }
  .in1 {
    position: absolute;
    top: 30px;
    margin-left: 5px;
  }
  .img1 {
    width: 60px;
    height: 60px;
    margin-left: 20px;
  }
  .img2 {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: cornflowerblue;
  }
  .btn1,
  .btn2,
  .sp1 {
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-size: 18px;
    color: #999;
    cursor: pointer;
    border: 1px solid #e6e6e6;
  }
  .d11 {
    margin-left: 30px;
    display: inline-block;
  }
  .d12 {
    margin-top: 30px;
    display: inline-block;
    position: absolute;
    right: 44px;
  }
  .img2 {
    position: absolute;
    right: 20px;
    top: 35px;
  }
  .sp2 {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 100px;
  }
  .d2 {
    position: absolute;
    height: 50px;
    bottom: 20px;
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .sp4 {
    line-height: 50px;
    margin-left: 20px;
  }
  .in2 {
    margin-top: 20px;
    margin-left: 20px;
  }
  .btn3 {
    position: absolute;
    right: 0px;
    display: inline-block;
    width: 80px;
    height: 100%;
    border-bottom-right-radius: 50%;
    background-color: cornflowerblue;
  }
</style>
