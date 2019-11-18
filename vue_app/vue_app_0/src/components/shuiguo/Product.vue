<template>
  <div>
    <v-Ddd></v-Ddd>
    <div class="head_carousel">
      <mt-swipe :auto="4000" style="width: 100%;height: 570px;">
        <mt-swipe-item
          ><img class="sg_lb" :src="'http://127.0.0.1:4000/'+list.img0"
        /></mt-swipe-item>
        <mt-swipe-item
          ><img class="sg_lb" :src="'http://127.0.0.1:4000/'+list.img1"
        /></mt-swipe-item>
        <mt-swipe-item
          ><img class="sg_lb" :src="'http://127.0.0.1:4000/'+list.img2"
        /></mt-swipe-item>
        <mt-swipe-item
          ><img class="sg_lb" :src="'http://127.0.0.1:4000/'+list.img3"
        /></mt-swipe-item>
        <mt-swipe-item
          ><img class="sg_lb" :src="'http://127.0.0.1:4000/'+list.img4"
        /></mt-swipe-item>
      </mt-swipe>
      <div class="sg_header">
        <div class="sg_header_01">
          {{ list.title }}
        </div>
        <div class="sg_header_02">
          <span>￥{{ list.price }}</span>
        </div>
        <div class="sg_header_03">
          <div>
            <span style="color: #666;">活动：</span
            ><a href="Javascript:;" style="color: rgb(255, 113, 0)"
              >[最新优惠券]</a
            >
            <div style="color: #999;float: right;">立即领取&gt;</div>
          </div>
        </div>
        <div style="font-size: 12px;color: #666;padding: 5px;">
          配送费：包邮
        </div>
        <div class="sg_header_04">
          <div>
            取货方式
            <div style="position: absolute;right: 15px;top: 5px;">
              <span></span><span>快递</span>
            </div>
          </div>
        </div>
        <div class="sg_header_05">
          <span>选择商品规格</span
          ><span style="position: absolute;right: 10px;">&gt;</span>
        </div>
      </div>
    </div>
    <div class="sg_wx">
      <img
        src="../../img/goods-style-wechat.png"
        alt=""
        style="width: 15px;margin-right: 5px;"
      /><span>微信支付</span>
      <div style="position: absolute;right: 10px;top: 5px;">
        <span style="margin-right: 15px;color: rgb(255, 113, 0)">购买0+</span
        ><span style="color: #999">浏览49+</span>
      </div>
    </div>
    <div class="sg_dp">
      <img
        src="../../img/file_5c988bb9897b9.png"
        alt=""
        style="width: 38px;margin-right: 5px;"
      /><span style="position: absolute;font-size: 12px;color: #333"
        >行业模板：水果</span
      >
      <div class="sg_dp_01">进入店铺</div>
      <div class="sg_jg">————继续拖动，查看更多商品————</div>
      <!-- 分类栏 2个按钮 -->
      <mt-navbar v-model="selected">
        <mt-tab-item id="1" @click="search">详情</mt-tab-item>
        <mt-tab-item id="2" @click="search">评价</mt-tab-item>
      </mt-navbar>
      <!-- 分类控制面板 -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1"
          ><all :list="list"></all
        ></mt-tab-container-item>
        <mt-tab-container-item id="2"></mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
  import vDdd from "./Ddd.vue";
  import All from "./Product_xq.vue";
  export default {
    data() {
      return {
        selected: "1",
        list: []
      };
    },
    props: ["lid"],
    methods: {
      load() {
        var url = "product";
        this.axios.get(url, { params: { lid: this.lid } }).then(res => {
          // console.log(res);
          console.log(this.lid);
          this.list = res.data.data[0];
          console.log(this.list);
        });
      },
      search() {}
    },
    created() {
      this.load();
    },
    watch: {
      lid() {
        this.load();
      }
    },
    components: {
      all: All,
      vDdd
    }
  };
</script>
<style scoped>
  .head_carousel {
    position: relative;
    width: 375px;
  }
  .sg_lb {
    width: 100% !important;
    height: auto;
  }
  .sg_header {
    position: absolute;
    top: 375px;
    background-color: #fff;
    width: 375px;
  }
  .sg_header_01 {
    text-align: center;
    font-size: 14px;
    color: #333;
    padding: 10px 30px;
  }
  .sg_header_02 {
    color: #ff7100;
    text-align: center;
    font-size: 18px;
    border-bottom: 1px solid #f3f3f3;
    padding-bottom: 20px;
  }
  .sg_header_03 {
    border-bottom: 1px solid #f3f3f3;
    border-top: 1px solid #f3f3f3;
    font-size: 12px;
    padding: 5px;
  }
  .sg_header_04,
  .sg_header_05 {
    border-bottom: 1px solid #f3f3f3;
    border-top: 1px solid #f3f3f3;
    font-size: 12px;
    padding: 5px;
    color: #666;
    padding: 5px;
    position: relative;
  }
  .sg_wx {
    font-size: 12px;
    padding: 5px;
    position: relative;
  }
  .sg_dp {
    height: 40px;
    padding: 5px;
    line-height: 40px;
    position: relative;
    border-bottom: 1px solid #f3f3f3;
    margin-top: 20px;
  }
  .sg_dp_01 {
    float: right;
    font-size: 10px;
    color: #999;
    border: 1px solid #ccc;
    height: 20px;
    line-height: 20px;
    padding: 0 10px 0 10px;
  }
  .sg_jg {
    text-align: center;
    font-size: 12px;
    color: rgb(178, 178, 178);
    padding: 5px;
  }
  .sg_xq {
    width: 100%;
    height: 50px;
    position: relative;
    font-size: 12px;
    border-bottom: 1px solid #f3f3f3;
  }
  .sg_xq_01,
  .sg_xq_02 {
    width: 50%;
    text-align: center;
    float: left;
  }
</style>
