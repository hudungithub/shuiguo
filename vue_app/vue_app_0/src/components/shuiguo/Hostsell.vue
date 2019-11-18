<template>
    <div class="container">
        <!-- 这是背景图片加字体 -->

      <v-Ddd></v-Ddd>
      <div class="hotb">
          <div>
              <img src="../../assets/file1.png">
          </div>
          <div class="hotc">新鲜水果热销榜</div>
          <div class="hotd">Hot sale</div>
          <div class="hotw">下午茶做个vc人</div>
      </div>

       <!-- 这下面是选项排序功能 -->

      <div class="tab1">
          <div class="tabs">
              <ul>
                  <li>
                      <span>默认</span>
                  </li>
                  <li>
                      <span>价格</span>
                      <span>
                          <i>▲</i>
                          <i>▼</i>
                      </span>
                  </li>
                  <li>
                      <span>销量</span>
                      <span>
                          <i>▲</i>
                          <i>▼</i>
                      </span>
                  </li>
              </ul>
          </div>
      </div>
    <!--下面的空白部分  -->
    <div class="nulc">

      
    </div>
    </div>
</template>
<script>
  import vDdd from "./Ddd.vue";
export default {
    components:{
      vDdd
    }
}
</script>
<style scoped>
*{margin:0px;padding:0px}
.container{
    width:100%;
    max-width:100%;
    clear:both;
    font-size:14px;
    color:#444;
    font-family: Arial, 微软雅黑, "Microsoft Yahei";
}
.container .hotb{
    background-color:#fff;
    margin:auto;
    position: relative;
    overflow:hidden;
    max-width:100%;
    background-size:100% 100%;
    background-repeat: no-repeat;

}
.container .hotb img{
    width:100%;
    height:100%;
}  
.container .hotb .hotc{
    position:absolute;
    left:35%;
    top:35%;
    color:#fff;
    font-weight:bold;
    font-size:15px;

} 
.container .hotb .hotd{
    position: absolute;
    left:43%;
    top:24%;
    font-size:13px;
    color:#fff
}
.container .hotb .hotw{
    position:absolute;
    left: 40%;
    top:62%;
    font-size:11px;
    color:rgb(255,129,20)
}
.tab1{
    width:100%;
    
}
.tab1 .tabs{
    font-size:13px;
    height: 35px;
    line-height: 35px;
    color:rgb(153,153,153);
    position: relative;
    overflow: hidden;
}
.tab1 .tabs ul{
    display: flex;
    height:50px;
    width:100%;
    white-space: nowrap;
    overflow-x:scroll;
    overflow-y: hidden;
    list-style:none; 
}
.tab1 .tabs ul li{
  
    min-width:71px;
    text-align: center;
    vertical-align: top;
}
.tab1 .tabs ul li span{
    padding-left:.4em;
    white-space: nowrap;
    vertical-align: middle;
    height:20px;
    width:12px;
}
.nulc{
    width:100%;
    height: 999px;
    background-color:#fc0; 
}
</style>