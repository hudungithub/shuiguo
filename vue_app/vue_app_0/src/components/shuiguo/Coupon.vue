<template>
  <div class="cont1">
    <table></table>
    <v-Ddd></v-Ddd>
    <!-- 这是一个优惠券 -->
    <div class="cou1">
      <div class="cou2">
        <div class="cou3">
          <img src="../../assets/cou1.png" />
        </div>
        <div class="cou4">优惠券减1万元</div>
        <div class="cou5">购物满1元可用</div>
        <div class="cou6">有效期：永久</div>
        <div class="cou7">满足条件即可使用</div>
        <div class="cou8">
          <img src="../../assets/cou2.png" alt="" />
        </div>
        <div class="cou9" @click="fc">立即使用</div>
      </div>
    </div>
    <!-- 有数据可以循环一波 -->
    <div class="cou1">
      <div class="cou2">
        <div class="cou3">
          <img src="../../assets/cou1.png" />
        </div>
        <div class="cou4">优惠券减1万元</div>
        <div class="cou5">购物满1元可用</div>
        <div class="cou6">有效期：永久</div>
        <div class="cou7">满足条件即可使用</div>
        <div class="cou8">
          <img src="../../assets/cou2.png" alt="" />
        </div>
        <div class="cou9">立即使用</div>
      </div>
    </div>

    <div class="cou1">
      <div class="cou2">
        <div class="cou3">
          <img src="../../assets/cou1.png" />
        </div>
        <div class="cou4">优惠券减1万元</div>
        <div class="cou5">购物满1元可用</div>
        <div class="cou6">有效期：永久</div>
        <div class="cou7">满足条件即可使用</div>
        <div class="cou8">
          <img src="../../assets/cou2.png" alt="" />
        </div>
        <div class="cou9">立即使用</div>
      </div>
    </div>
  </div>
</template>
<script>
  import vDdd from "./Ddd.vue";
  export default {
    data() {
      return {};
    },
    methods: {
      fc() {
        this.$router.push("/NoO");
      }
    },
    components: {
      vDdd
    }
  };
</script>
<style scoped>
  * {
    margin: 0px;
    padding: 0;
  }
  .cont1 {
    min-height: 568px;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    font-size: 14px;
    color: #444;
  }
  .cont1 .cou1 {
    margin-top: 60px;
    clear: both;
    max-width: 100%;
  }
  .cont1 .cou1 .cou2 {
    height: 108px;
    margin: 15px auto auto 0px;
    position: relative;
    overflow: hidden;
  }
  .cont1 .cou1 .cou2 .cou3 {
    height: 95px;
    width: 279px;
    position: absolute;
    left: 12%;
  }
  .cont1 .cou1 .cou2 .cou3 img {
    width: 100%;
    height: 100%;
  }
  .cont1 .cou1 .cou2 .cou4 {
    font-size: 23px;
    color: #fff;
    font-weight: 23px;
    line-height: 25px;
    position: absolute;
    top: 18px;
    left: 14%;
  }
  .cont1 .cou1 .cou2 .cou5 {
    font-size: 10px;
    color: rgb(218, 107, 56);
    position: absolute;
    top: 50px;
    left: 23%;
  }
  .cont1 .cou1 .cou2 .cou6 {
    font-size: 10px;
    color: rgb(255, 221, 151);
    position: absolute;
    top: 72px;
    left: 20%;
  }
  .cont1 .cou1 .cou2 .cou7 {
    color: rgb(254, 213, 173);
    font-size: 11px;
    text-align: left;
    position: absolute;
    top: 15px;
    left: 63%;
    width: 50px;
  }
  .cont1 .cou1 .cou2 .cou8 {
    height: 24px;
    width: 60px;
    position: absolute;
    top: 56px;
    left: 62%;
  }
  .cont1 .cou1 .cou2 .cou8 img {
    width: 100%;
    height: 100%;
  }
  .cont1 .cou1 .cou2 .cou9 {
    color: rgb(251, 65, 34);
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    left: 63%;
    top: 60px;
  }
</style>
