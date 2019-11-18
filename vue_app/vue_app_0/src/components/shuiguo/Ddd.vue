<template>
<div class="page-tabbar" style="position: fixed;">
<div id="page-dd">
  <img src="../../assets/left.png" alt="">
  <span @click="fh">返回</span>
</div>
</div>
</template>
<script>
export default {
  methods: {
    fh(){
      this.$router.go(-1)
    }
  },
}
</script>
<style>
 .page-tabbar{
   z-index: 1;
 }
  #page-dd{
    top: 14px;
    left: 14px;
    width: 374px;
    height: 46px;
    background-image: url("../../assets/ddd.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
   }

   #page-dd img{    cursor: pointer;
    position: absolute;
margin-left:-176px;
top: 15px;
   }
   #page-dd span{top: 16px;
    color: #fff;
    font-size: 16px;
    line-height: 16px;
        cursor: pointer;
    position: absolute;
    margin-left:-160px;}
</style>