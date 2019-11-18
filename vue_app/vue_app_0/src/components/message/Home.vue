<template>
  <div>
    <!--Home.vue 父组件-->
    <!--1.顶部导航条：调用子组件-->
    <titlebar msg="微信(12)" :rightFirstImg="require('../../assets/ic_search.png')" :rightSecondImg="require('../../assets/ic_add.png')"></titlebar>
    <!--2.面板-->
    <mt-tab-container v-model="active">
      <!-- 2.1子面板 -->
      <mt-tab-container-item id="tab">     
      <!-- 调用子组件 -->
      <messagelist></messagelist>
      </mt-tab-container-item>
    </mt-tab-container>
    <!--3底部导航条-->
    <mt-tabbar fixed v-model="active">
      <!-- 第一个按钮 微信 -->
      <mt-tab-item id="tab" @click.native="changeState(0)"><tabbaricon :focused="list[0].isSelect" :selectedImage="require('../../assets/ic_weixin_selected.png')" :normalImage="require('../../assets/ic_weixin_normal.png')"></tabbaricon>微信</mt-tab-item>
      <mt-tab-item id="tab1" @click.native="changeState(1)"><tabbaricon :focused="list[1].isSelect" :selectedImage="require('../../assets/ic_contacts_selected.png')" :normalImage="require('../../assets/ic_contacts_normal.png')"></tabbaricon>通讯录</mt-tab-item>
      <mt-tab-item id="tab2" @click.native="changeState(2)"><tabbaricon :focused="list[2].isSelect" :selectedImage="require('../../assets/ic_find_selected.png')" :normalImage="require('../../assets/ic_find_normal.png')"></tabbaricon>发现</mt-tab-item>
      <mt-tab-item id="tab3" @click.native="changeState(3)"><tabbaricon :focused="list[3].isSelect" :selectedImage="require('../../assets/ic_me_selected.png')" :normalImage="require('../../assets/ic_me_normal.png')"></tabbaricon>我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import TltleBar from "./common/TitleBar"
import MessageList from "./common/MessageList"
import TabbarIcon from './common/TabbarIcon'
export default {
  data(){
    return{
      //保存当前显示子面板id
      active:"tab",
      //创建数组保存tabbar状态
      list:[
        {isSelect:true},//微信
        {isSelect:false},//通讯录
        {isSelect:false},//发现
        {isSelect:false}//我的
      ]
    }
  },
   components:{
     "titlebar":TltleBar,
     "messagelist":MessageList,
     "tabbaricon":TabbarIcon
   },
   methods:{
     changeState(idx){
        //1.idx值 
        //2.当前状态true其他改false
        //创建循环遍历数组状态值 判断当前下标是否与参数下标相同 修改当前数组状态true 修改其他状态false
        for(var i=0;i<this.list.length;i++){
          if(i==idx){
            this.list[i].isSelect=true
          }else{
            this.list[i].isSelect=false
          }
        }
        console.log(idx)
     }
   }
}
</script>
<style scoped>
/* 默认文字颜色 */
.mint-tabbar>.mint-tab-item{
  color:#999999;
}
/* 选中文字颜色 */
.mint-tabbar>.mint-tab-item.is-selected{
  background-color: transparent;
  color:#45c018;
}
</style>>