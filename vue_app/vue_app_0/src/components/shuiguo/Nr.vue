<template>
  <div class="product-app">
    <div class="good-item" v-for="(item,i) of list" :key="i">
      <!--商品图片-->
      <router-link :to="`/Product/`+list[i].lid">
        <img :src="'http://127.0.0.1:4000/'+item.img0" />
      </router-link>
      <!--商品名称-->
      <div class="title">{{ item.title }}</div>
      <!--包邮-->
      <span>包邮</span>
      <!--商品价格-->
      <div class="price">¥{{ item.price.toFixed(2) }}</div>
      <!--商品销量-->
      <div class="xl">
        <span>0人付款</span><img src="../../assets/shopCar.png" alt="" />
      </div>
      <!--购物车按钮-->
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: []
      };
    },
    created() {
      this.loadMore();
    },
    methods: {
      //构造函数 发ajax请求 页面没有点击事件用这个方法
      loadMore() {
        var url = "product1";
        this.axios
          .get(url)
          .then(res => {
            this.list = res.data.data;
            console.log(this.list);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };
</script>
<style scoped>
  .product-app {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 4px;
  }
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
    font-size: 10px;
  }
  .good-item {
    width: 170px;
    height: 279px;
    display: block;
  }
  .good-item img {
    width: 170px;
    height: 180px;
  }
  .good-item span {
    color: rgb(255, 113, 0);
    background: rgba(255, 113, 0, 0.2);
    font-size: 1px;
  }
  .xl img {
    width: 22px;
    height: 22px;
    float: right;
    clear: both;
  }
  .price {
    color: rgb(255, 113, 0);
    font-size: 10px;
  }
  .xl span {
    color: #999;
    font-size: 0.24rem;
  }
</style>
