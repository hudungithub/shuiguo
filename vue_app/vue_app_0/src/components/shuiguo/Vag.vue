<template>
  <div>
    <h1>这里有个页头</h1>
    <div class="bal">
      <!-- 这是当前储值金 -->
      <div class="balD">
        <div class="det">
          <span>当前储值金（元）</span>
        </div>
        <div class="dum">
          <span>0.00</span>
        </div>
        <div class="dre">
          <span @click="tor">去充值</span>
        </div>
      </div>
      <!-- 这里是储值记录 -->

      <div class="sotred">
        <div class="sto">储值记录</div>
        <div class="stal">
          <div @click="dk">
            <span>{{ ress }}</span>
            <span class="st_2">☟</span>
          </div>
          <div class="st_3" v-show="non">
            <div class="st_4" @click="d1">
              <div class="st_5">☠-全部</div>
              <div class="st_6">⚖-收入</div>
              <div class="st_7">⚖-支出</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 这里是数据记录 -->
      <div class="mc">
        <img src="../../assets/b3.png" alt="" />
        <div>无相关数据</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        non: false,
        ress: "全部"
      };
    },
    methods: {
      dk() {
        if (this.non == false) {
          this.non = true;
        } else {
          this.non = false;
        }
      },
      tor() {
        this.$router.push("/Pay");
      },
      d1(e) {
        if (e.target.nodeName == "DIV") {
          var str = e.target.innerHTML;
          str = str.slice(2);
          if (str == "全部") {
            this.ress = "全部";
            this.non = false;
          } else if (str == "收入") {
            this.ress = "收入";
            this.non = false;
          } else {
            this.ress = "支出";
            this.non = false;
          }
        }
      }
    }
  };
</script>
<style scoped>
  * {
    padding: 0px;
    margin: 0px;
  }
  .bal {
    width: 100%;
    height: 999px;
    font-size: 14px;
    background-color: #f3f3f3;
  }
  .bal .balD {
    position: relative;
    background: url(../../assets/b1.png) 100% 100% no-repeat;
    height: 155px;
    color: #fff;
    background-size: cover;
  }
  .bal .balD .det {
    position: absolute;
    top: 49px;
    left: 7%;
    color: #fefefe;
    opacity: 0.6;
  }
  .bal .balD .dum {
    position: absolute;
    left: 12%;
    top: 78px;
    font-size: 24px;
  }
  .bal .balD .dre {
    position: absolute;
    top: 111px;
    left: 79%;
    width: 50px;
    height: 17px;
    text-align: center;
    border: 2px solid #fff;
    border-radius: 8px;
    color: #fef3ec;
  }
  .sotred {
    height: 55px;
    line-height: 55px;
    padding: 0 15px;
    color: #333;
    display: flex;
    justify-content: space-between;
  }
  .sotred .sto {
    font-size: 16px;
  }
  .sotred .stal {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 16px;
  }
  .sotred .stal .st_2 {
    font-size: 20px;
    color: #333;
    margin-left: 7px;
    position: relative;
    top: 1px;
  }
  .sotred .stal .st_3 {
    background-color: #fff;
    width: 75px;
    height: 92px;
    position: absolute;
    top: 44px;
    left: -48%;
    overflow: hidden;
    border-radius: 5px;
  }
  .sotred .stal .st_3 .st_4 {
    z-index: 2;
    position: relative;
    text-align: center;
  }
  .sotred .stal .st_3 .st_4 .st_5 {
    position: absolute;
    top: -13px;
    left: 10px;
    margin-bottom: 10px;
    height: 30px;
  }
  .sotred .stal .st_3 .st_4 .st_6 {
    position: absolute;
    top: 17px;
    left: 11px;
    margin-bottom: 10px;
    height: 30px;
  }
  .sotred .stal .st_3 .st_4 .st_7 {
    position: absolute;
    top: 48px;
    left: 10px;
    height: 30px;
  }
  .bal .mc {
    text-align: center;
    color: #999;
    font-size: 14px;
  }
  .bal .mc img {
    width: 236px;
    height: 166px;
    margin-top: 66px;
  }
</style>
