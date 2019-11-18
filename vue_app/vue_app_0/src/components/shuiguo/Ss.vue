<template>
  <div class="page-ss">
    <div class="page-ss1">
      <img src="../../assets/ss.png" alt="" />
      <input type="text" placeholder="      请输入搜索内容" v-model="nr" />
      <router-link :to="`/Product/`+list.lid">
        <button @click="ss">搜索</button>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        nr: "",
        list: []
      };
    },
    methods: {
      ss() {
        var url = "search";
        var obj = { nr: this.nr };
        this.axios
          .get(url, { params: obj })
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
  .page-ss {
    text-align: center;
    display: block;
    width: auto;
    max-width: 100%;
    box-sizing: border-box;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-color: #222;
    border-width: 0;
    height: 80px;
  }
  .page-ss1 {
    position: absolute;
    top: 51px;
    left: 75.5px;
  }
  .page-ss1 input {
    margin-left: -31px;
    width: 232px;
    display: inline-block;
    border: none;
    line-height: 30px;
  }
  .page-ss1 button {
    height: 36px;
    text-align: center;
    background-color: #dfdfdf;
    color: #999;
  }
  .page-ss1 img {
    width: 23px;
    position: absolute;
    left: -26px;
    top: 7px;
  }
</style>
