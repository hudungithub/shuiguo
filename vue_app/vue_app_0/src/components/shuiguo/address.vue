<template>
  <div>
    <v-Ddd></v-Ddd>
    <table></table>
    <div class="myAddress">
      <div class="get-wechat-address" @click="Obtain">
        <div><i class="icon-wechat"></i><span>获取微信收货地址</span></div>
        <i class="icon-ctrl"></i>
      </div>
      <div class="my-address" v-for="(item, index) in items" :key="index">
        <div class="myAddress-address">
          <div class="myAddress-address-top">
            <label class="adressLabel" :class="addclass(item.label)">{{
              item.label
            }}</label
            ><span class="address-person"
              >{{ item.uname }} ({{ item.uage }}) {{ item.phone }}</span
            >
          </div>
          <span class="address-detail"
            >{{ item.province }}{{ item.city }}{{ item.country
            }}{{ item.address }}</span
          >
        </div>
        <router-link :to="'/setaddress/'+item.id"
          ><i class="icon-pencil"></i
        ></router-link>
      </div>
    </div>
    <div class="myAddress-bottom-nav" @click="add">
      新增收货地址
    </div>
  </div>
</template>
<script>
  import vDdd from "./Ddd.vue";
  export default {
    data() {
      return {
        items: [],
        type: 0
      };
    },
    methods: {
      addclass(i) {
        var arr = ["school", "home", "company"];
        if (i == "家") {
          return "home";
        } else if (i == "公司") {
          return "company";
        }
        if (i == "学校") {
          return "school";
        }
      },
      Obtain() {
        this.$toast("除微信里面，其他地方暂时不支持导入");
      },
      add() {
        this.$router.push("/setaddress/add");
      }
    },
    created() {
      this.axios
        .get("http://localhost:4001/course")
        .then(res => {
          this.items = res.data;
          // console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    },
    components: {
      vDdd
    }
  };
</script>
<style scoped>
  @font-face {
    font-family: "icomoon";
    src: url("../../fonts/icomoon.eot?q0tv6r");
    src: url("../../fonts/icomoon.eot?q0tv6r#iefix") format("embedded-opentype"),
      url("../../fonts/icomoon.ttf?q0tv6r") format("truetype"),
      url("../../fonts/icomoon.woff?q0tv6r") format("woff"),
      url("../../fonts/icomoon.svg?q0tv6r#icomoon") format("svg");
    font-weight: normal;
    font-style: normal;
  }
  i {
    font-style: normal;
  }
  .myAddress {
    padding: 0 15px;
    font-size: 13px;
    color: #666;
  }
  .get-wechat-address {
    height: 34.5px;
    margin-bottom: 7.5px;
    display: flex;
    justify-content: space-between;
    line-height: 34.5px;
  }
  .icon-wechat::before {
    font-family: "icomoon";
    content: "\e901";
    color: #5fc726;
    margin-right: 5px;
  }
  .icon-ctrl::before {
    font-family: "icomoon";
    content: "\ea50";
  }
  .myAddress-address {
    width: 90%;
    padding: 13px 0;
    display: flex;
    flex-direction: column;
  }
  .my-address {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f3f3f3;
  }

  .adressLabel {
    display: inline-block;
    width: 2rem;
    border: 1px solid #ccc;
    border-radius: 14px;
    text-align: center;
    line-height: 14px;
    font-size: 12px;
    margin-right: 5px;
  }
  .address-person {
    color: #000;
  }
  .address-detail {
    font-size: 13px;
    margin: 5px 0 0;
  }
  .icon-pencil {
    width: 10%;
    height: 38px;
    border-left: 1px solid #f3f3f3;
    text-align: center;
    line-height: 38px;
  }
  .icon-pencil::before {
    font-family: "icomoon";
    content: "\e905";
    color: #666;
  }
  .myAddress-bottom-nav {
    height: 47px;
    width: 100%;
    background: rgb(255, 113, 0);
    color: #fff;
    position: fixed;
    bottom: 0;
    text-align: center;
    line-height: 47px;
    margin: 0;
    padding: 0;
  }
  .school {
    background: #f1fbea;
    color: #79dc31;
    border: 1px solid #79dc31;
  }
  .home {
    background: #ffefe2;
    color: #ff7100;
    border: 1px solid #ff7100;
  }
  .company {
    background: #eaf4fe;
    color: #3091f2;
    border: 1px solid #3091f2;
  }
</style>
