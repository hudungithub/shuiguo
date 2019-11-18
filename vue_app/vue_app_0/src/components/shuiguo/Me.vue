<template>
  <div>
    <v-Ddd></v-Ddd>
    <table></table>
    <div>
      <div class="top">
        <div class="top1">
          <img src="../../img/tx.png" class="top11" @click="img1" />
        </div>
        <div class="top2" @click="gologin" id="dl">{{ n }}</div>
      </div>
      <div class="body">
        <div class="m0">电商订单</div>
        <div class="body1">
          <div class="m1">
            <img src="../../img/dfk.png" class="m11" /><span>待付款</span>
          </div>
          <div class="m2">
            <img src="../../img/dfh.png" class="m11" /><span>待发货</span>
          </div>
          <div class="m3">
            <img src="../../img/dsh.png" class="m11" /><span>待收货</span>
          </div>
          <div class="m4">
            <img src="../../img/dpj.png" class="m11" /><span>待评价</span>
          </div>
        </div>
      </div>
      <div class="footer">
        <div classs="f0">我的工具</div>
        <div class="f1">
          <img src="../../img/yhq.png" class="m12" /><span>优惠券</span>
        </div>
        <div class="f2" @click="gwc">
          <img src="../../img/gwc.png" class="m12" /><span>购物车</span>
        </div>
        <div class="f3" @click="setadd">
          <img src="../../img/dz.png" class="m12" /><span>收货地址</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vDdd from "./Ddd.vue";

  export default {
    data() {
      return {
        n: "请先登录"
      };
    },
    methods: {
      img1() {
        this.$router.push("/Me1");
      },
      gologin() {
        this.$router.push("/Login");
        this.n = "登录成功";
        console.log(this.n);
      },
      setadd() {
        this.$router.push("/address");
      },
      gwc() {
        this.$router.push("/Gwc");
      }
    },
    components: {
      vDdd
    }
  };
</script>
<style>
  .top {
    margin-top: 40px;
    height: 125px;
    background-image: url("../../img/top.png");
  }
  .top11 {
    margin: 40px 20px 30px 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .top2 {
    position: absolute;
    top: 89px;
    left: 100px;
    color: #fff;
  }
  .body1 {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  .body,
  .footer {
    margin-top: 25px;
    margin-left: 5px;
    width: 100%;
  }
  .m1,
  .m2,
  .m3,
  .m4 {
    display: flex;
    flex-direction: column;
  }
  .m11 {
    display: block;
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
  .m12 {
    position: absolute;
    width: 25px;
    height: 25px;
    margin-top: 5px;
    margin-left: 10px;
  }
  .footer div {
    margin-bottom: 20px;
    height: 35px;
    line-height: 35px;
  }
  .footer div span {
    margin-left: 60px;
    line-height: 35px;
  }
</style>
