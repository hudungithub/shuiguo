<template>
  <div class="page-tabbar">
    <v-Ss></v-Ss>
    <div class="page-wrap">
      <!--轮播图
      -->
      <div class="head_carousel">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img src="../../assets/1dh.png"/></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/2dh.png"/></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/3dh.png"/></mt-swipe-item>
        </mt-swipe>
      </div>
      <!--新鲜果送-->
      <div class="sg_center_navigation">
        <div class="sg_navigation_left"><img src="../../assets/4.png" /></div>
        <div class="sg_navigation_right">
          <div class="sg_img_yi">
            <img src="../../assets/5.png" />
          </div>
          <div class="sg_inner_yi">新鲜果送</div>
          <div class="sg_inner_er">工作日也要VC满满</div>
          <div>
            <div class="sg_img_er">
              <img src="../../assets/6.png" />
            </div>
            <div class="sg_inner_san">开始点单</div>
          </div>
        </div>
      </div>
      <!--中部导航-->
      <div class="wd"></div>
      <!--广告栏-->
      <div class="gg">
        <div class="gg1" @click="gg">
          <img src="../../assets/rx.png" alt="" />
          <span>热销</span>
        </div>
        <div class="gg1" @click="gg1">
          <img src="../../assets/yhq.png" alt="" />
          <span>优惠券</span>
        </div>
        <div class="gg1" @click="gg2">
          <img src="../../assets/cz.png" alt="" />
          <span>充值</span>
        </div>
        <div class="gg1" @click="gg3">
          <img src="../../assets/fk.png" alt="" />
          <span>付款</span>
        </div>
      </div>

      <!--秒杀-->
      <div class="sg_ms">
        <div class="sg_ms1"><img src="../../assets/7.png" /></div>
        <div class="sg_ms2"><img src="../../assets/8.png" /></div>
      </div>

      <!--秒杀水果详情-->
      <div class="sg_ms_inner">
        <div class="sg_ms_inn">
          <div class="sg_ms_left">
            <img :src="`http://127.0.0.1:4000/${list3.img}`" />
            <div class="sg_ms_left2">{{ list3.title }}</div>
            <div class="sg_ms_bottom">
              <div class="sg_ms_bottom1">包邮</div>
              <div class="sg_ms_bottom2">
                <span>￥{{ list3.price }}</span>
              </div>
              <div class="sg_ms_bottom3">
                <span>4人付款</span>
                <span class="sg_ms_span">
                  <img src="../../assets/9.png" />
                </span>
              </div>
            </div>
          </div>
          <div class="sg_ms_left">
            <img :src="`http://127.0.0.1:4000/${list4.img}`" />
            <div class="sg_ms_left2">
              {{ list4.title }}
            </div>
            <div class="sg_ms_bottom">
              <div class="sg_ms_bottom1">包邮</div>
              <div class="sg_ms_bottom2">
                <span>￥{{ list4.price }}</span>
              </div>
              <div class="sg_ms_bottom3">
                <span>2人付款</span>
                <span class="sg_ms_span">
                  <img src="../../assets/9.png" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 中间轮播图 -->
      <div class="middle_carousel">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img src="../../assets/dh4.png"/></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/dh5.png"/></mt-swipe-item>
        </mt-swipe>
      </div>

      <!-- 每日推荐 -->
      <div class="sg_tj">
        <div class="sg_tj1">Daily Recommand</div>
        <div class="sg_tj2">
          <img src="../../assets/10.png" alt="" />
        </div>
        <div class="sg_tj3">每日推荐</div>
      </div>

      <!-- 每日推荐商品列 -->
      <div class="sg_tj_end" v-for="(item,i) of list" :key="i">
        <div class="sg_tj_en">
          <div class="sg_tj_en1">
            <img :src="`http://127.0.0.1:4000/${item.img0}`" />
            <div class="sg_en_right">
              <div class="sg_en_right1">
                {{ item.title }}
              </div>
              <div class="sg_ms_right2">包邮</div>
              <div class="sg_ms_right3">
                <span>￥{{ item.price }}</span>
              </div>

              <div class="sg_ms_bot4">
                <span>2人付款</span>
                <span class="sg_ms_img">
                  <img src="../../assets/9.png" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vSs from "./Ss.vue";
  export default {
    data() {
      return {
        list1: [{ img: "001.jpg" }],
        list2: [{ img: "200.jpg" }],
        list3: [{ img: "300.jpg" }],
        list4: [{ img: "400.jpg" }],
        list: [],
        //面板中显示子组件id
        active: "message",
        //创建数组保存图片焦点状态
        currentIndex: [
          { isSelect: true },
          { isSelect: false },
          { isSelect: false },
          { isSelect: false },
          { isSelect: false }
        ]
      };
    },
    created() {
      this.loadMore();
    },
    methods: {
      gg() {
        this.$router.push("/Hostsell");
      },
      gg1() {
        this.$router.push("/Coupon");
      },
      gg2() {
        this.$router.push("/Pay");
      },
      gg3() {
        this.$router.push("/Topup");
      },
      loadMore() {
        var url = "product1";
        this.axios.get(url).then(res => {
          console.log(res);
          this.list1 = res.data.data[0];
          this.list2 = res.data.data[1];
          this.list3 = res.data.data[2];
          this.list4 = res.data.data[3];
          this.list = res.data.data;
        });
      },
      handleChange(index) {},
      changeState(n) {
        //函数功能:将当前参数下标
        //对应数组值修改true其它修改false
        //1:创建循环,循环数组中内容
        for (var i = 0; i < this.currentIndex.length; i++) {
          //2:判断如果循环下标与n相等 20
          if (n == i) {
            //3:当前下标元素true 10:22
            this.currentIndex[i].isSelect = true;
          } else {
            //4:其它元素修改false
            this.currentIndex[i].isSelect = false;
          }
        }
      }
    },
    components: {
      vSs
    }
  };
</script>
<style scoped>
  /*最外层父元素Home.vue*/
  .page-tabbar {
    overflow: hidden; /*溢出隐藏*/
    display: flex; /*弹性布局*/
    /*子元素两端对齐*/
    justify-content: space-between;
    flex-wrap: wrap; /*换行*/
    padding: 4px; /*内边距*/
  }
  .gg {
    display: flex;
    justify-content: space-around;
    height: 75px;
  }
  .gg1 {
    display: flex;
    flex-direction: column;
  }
  .gg1 img {
    width: 32px;
    height: 40px;
  }
  /*修改 tabbar 默认文字颜色*/
  .mint-tabbar > .mint-tab-item {
    color: #999999;
  }
  /*修改默认tab选中文字样式*/
  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: transparent;
    color: #515151;
  }

  .page-wrap {
    overflow: auto; /*溢出显示轮动条*/
    padding-bottom: 60px;
  }
  .head_carousel {
    width: 49%; /*指定商品宽度*/

    border-radius: 5px; /*圆角*/
    margin: 2px 0; /*外边距*/
    padding: 2px; /*内边距*/
    box-sizing: border-box; /*计算宽度*/
    display: flex; /*弹性布局*/
    flex-direction: column; /*按列排*/
    min-height: 215px; /*最小高度*/
  }
  /*轮播图*/
  .head_carousel {
    width: 100%;
    height: 160px;
  }
  .head_carousel img {
    width: 100%;
  }
  .mint-swipe {
    height: 88%;
  }
  /*新鲜果送*/
  .sg_center_navigation {
    display: flex;
    position: relative;
    height: 114px;
  }
  .sg_navigation_left {
    position: absolute;
    width: 120px;
    height: 80px;
    left: 24px;
    top: 4px;
  }
  .sg_navigation_left img {
    width: 100%;
    height: 100%;
  }
  .sg_navigation_right {
    position: absolute;
    width: 120px;
    height: 80px;
    right: 46px;
    top: 12px;
  }
  .sg_center_navigation img {
    width: 100%;
    height: 100%;
  }
  .sg_inner_yi {
    position: absolute;
    top: 0px;
    right: 35px;
    color: #333;
    font-size: 5px;
    font-weight: bold;
  }
  .sg_inner_er {
    font-size: 4px;
    color: #666;
    line-height: 9px;
    margin-left: 10px;
  }
  .sg_inner_san {
    position: absolute;
    bottom: 22px;
    right: 28px;
    color: #fff;
    line-height: 22px;
    margin-top: 10px;
    font-size: 5px;
  }
  .sg_img_er {
    margin-top: 5px;
    width: 100px;
    margin-left: 15px;
  }
  /*秒杀栏*/
  .sg_ms {
    position: relative;
    /* width: 345px; */
    display: flex;
    margin-left: 10px;
    height: 128px;
  }
  .sg_ms1 img {
    position: absolute;
    width: 100%;
  }
  .sg_ms2 img {
    position: absolute;
    width: 12%;
  }
  /*秒杀详情栏*/
  .sg_ms_inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .sg_ms_inn {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .sg_ms_left {
    width: 40%;
    flex-direction: column;
    display: inline-block;
    box-sizing: border-box;
    margin: 0 10px;
  }
  .sg_ms_left img {
    width: 100%;
  }
  .sg_ms_left2 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
    font-size: 5px;
    padding: 0px 10px;
  }
  .sg_ms_bottom {
    padding: 0 9px;
  }
  .sg_ms_bottom1 {
    margin: -0.06rem 0 0.04rem;
    height: 1rem;
  }
  .sg_ms_bottom1 {
    color: #ff7100;
    background: #ff710033;
    font-size: 0.22rem;
    border-radius: 0.5rem;
    display: inline-block;
    vertical-align: middle;
    padding: 0 0.4rem;
    line-height: 1.3;
  }
  .sg_ms_bottom2 {
    position: relative;
    top: -0.12rem;
    left: -0.04rem;
  }
  .sg_ms_bottom2 span {
    font-size: 0.9rem;
    margin-right: 0.14rem;
    color: #ff7100;
    display: inline-block;
    vertical-align: middle;
  }
  .sg_ms_bottom3 {
    position: relative;
    top: -0.2rem;
    left: 0.04rem;
  }
  .sg_ms_bottom3 span {
    color: #999;
    font-size: 0.24rem;
  }
  .sg_ms_span {
    display: inline-block;
    width: 16%;
  }
  .sg_ms_span {
    margin-left: 49%;
  }

  /* 中间轮播图 */
  .middle_carousel {
    width: 100%;
    height: 96px;
  }
  .mint-swipe-items-wrap {
    margin-top: 8px;
  }
  .middle_carousel img {
    width: 100%;
  }
  .mint-swipe {
    height: 88%;
  }

  /* 每日推荐 */
  .sg_tj {
    /* width: 7.5rem; */
    /* width: 120px; */
    height: 50px;
    /* right: 46px; */
    /* top: 12px; */
    position: relative;
    /* overflow: hidden; */
    text-align: center;
    border-bottom: 1px solid #e6e2e2;
    margin-bottom: 10px;
  }
  .sg_tj1 {
    color: rgb(255, 129, 20);
    font-size: 0.257813rem;
    line-height: 0.585938rem;
  }
  .sg_tj2 img {
    width: 100%;
    height: 100%;
  }
  .sg_tj2 {
    width: 100px;
    position: absolute;
    left: 132px;
    top: 20px;
  }
  .sg_tj3 {
    position: absolute;
    left: 150px;
    top: 20px;
  }

  /* 推荐商品列 */
  .sg_tj_end {
    width: 100%;
    height: 120px;
    position: relative;
    /* position: absolute; */
    /* display: flex; */
    /* justify-content: space-between; */

    border-bottom: 1px solid #e6e2e2;
  }
  .sg_tj_en1 img {
    position: absolute;
    display: inline-block;
    width: 30%;
  }
  .sg_en_right {
    position: absolute;
    width: 68%;
    left: 30%;
    margin-left: 10px;
  }
  .sg_ms_bot4 {
    position: relative;
  }
  .sg_ms_bot4 {
    color: #999;
    font-size: 0.24rem;
  }
  .sg_ms_img {
    display: inline-block;
    width: 16%;
    height: 14px;
    margin-left: 65%;
  }
  .sg_ms_img img {
    width: 9%;
  }
  .sg_en_right1 {
    color: #333;
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
  .sg_ms_right2 {
    margin: -0.06rem 0 0.04rem;
    height: 1rem;
  }
  .sg_ms_right2 {
    color: #ff7100;
    background: #ff710033;
    font-size: 0.22rem;
    border-radius: 0.5rem;
    display: inline-block;
    vertical-align: middle;
    padding: 0 0.4rem;
    line-height: 1.3;
    margin-bottom: 0.2rem;
  }
  .sg_ms_right3 {
    position: relative;
    top: -0.12rem;
    left: -0.04rem;
  }
  .sg_ms_right3 span {
    font-size: 0.9rem;
    margin-right: 0.14rem;
    color: #ff7100;
    display: inline-block;
    vertical-align: middle;
  }
</style>
