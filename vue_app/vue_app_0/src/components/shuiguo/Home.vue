<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <v-Ddd></v-Ddd>

      <!--3:切换面板列表-->
      <mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="t1"><sgsy></sgsy> </mt-tab-container-item>
        <mt-tab-container-item id="t2"> <v-Fl></v-Fl></mt-tab-container-item>
        <mt-tab-container-item id="t3"> </mt-tab-container-item>
        <mt-tab-container-item id="t4"> </mt-tab-container-item>
        <mt-tab-container-item id="t5"> <Me></Me></mt-tab-container-item>
      </mt-tab-container>
      <!--4:tabbar列表-->
      <!--为每个按钮绑定点击事件-->
      <!--当前按钮isSelect:true-->
      <!--其它按钮isSelect:false-->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="t1" @click.native="changeState(0)">
          <tabbaricon
            :selectedImage="require('../../assets/ic_we_selected.png')"
            :normalImage="require('../../assets/ic_we_normal.png')"
            :focused="currentIndex[0].isSelect"
          >
          </tabbaricon>
          首页
        </mt-tab-item>
        <mt-tab-item id="t2" @click.native="changeState(1)">
          <tabbaricon
            :normalImage="require('../../assets/ic_contacts_normal.png')"
            :selectedImage="require('../../assets/ic_contacts_selected.png')"
            :focused="currentIndex[1].isSelect"
          >
          </tabbaricon>
          分类
        </mt-tab-item>
        <mt-tab-item id="t3" @click.native="changeState(2)">
          <tabbaricon
            :normalImage="require('../../assets/ic_find_normal.png')"
            :selectedImage="require('../../assets/ic_find_selected.png')"
            :focused="currentIndex[2].isSelect"
          >
          </tabbaricon>
          拼团
        </mt-tab-item>
        <mt-tab-item id="t4" @click.native="changeState(3)">
          <tabbaricon
            :normalImage="require('../../assets/ic_me_normal.png')"
            :selectedImage="require('../../assets/ic_me_selected.png')"
            :focused="currentIndex[3].isSelect"
          ></tabbaricon>
          门店
        </mt-tab-item>
        <mt-tab-item id="t5" @click.native="changeState(4)">
          <tabbaricon
            :normalImage="require('../../assets/ic.png')"
            :selectedImage="require('../../assets/ic0.png')"
            :focused="currentIndex[4].isSelect"
          ></tabbaricon>
          <span @click="my">我的</span>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
  import sgsy from "./sgsy.vue";
  import TabBarIcon from "./TabBarIcon.vue";
  import vFl from "./Fl.vue";
  import vDdd from "./Ddd.vue";

  import Me from "./Me.vue";
  export default {
    data() {
      return {
        //面板中显示子组件id
        active: "t1",
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
    methods: {
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
      },
      my() {
        var uid = sessionStorage.uid;
        console.log(uid);
        if (uid == undefined) {
          console.log(1);
          this.$messagebox("请登录");
          this.$router.push("/Login");
        }
      }
    },
    components: {
      Me,
      vFl,

      vDdd,
      sgsy,
      tabbaricon: TabBarIcon
    }
  };
</script>
<style scoped>
  /*最外层父元素Home.vue*/
  .page-tabbar {
    overflow: hidden; /*溢出隐藏*/
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
</style>
