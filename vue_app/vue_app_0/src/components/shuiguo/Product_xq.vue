<template>
  <div>
    <div class="sg_ph">
      <img :src="'http://127.0.0.1:4000/'+list.img5" alt="" />
      <img :src="'http://127.0.0.1:4000/'+list.img6" alt="" /><img
        :src="'http://127.0.0.1:4000/'+list.img7"
        alt=""
      /><img :src="'http://127.0.0.1:4000/'+list.img8" alt="" /><img
        :src="'http://127.0.0.1:4000/'+list.img9"
        alt=""
      /><img :src="'http://127.0.0.1:4000/'+list.img10" alt="" /><img
        :src="'http://127.0.0.1:4000/'+list.img11"
        alt=""
      /><img :src="'http://127.0.0.1:4000/'+list.img12" alt="" /><img
        :src="'http://127.0.0.1:4000/'+list.img13"
        alt=""
      /><img :src="'http://127.0.0.1:4000/'+list.img14" alt="" />
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    props:["list"]
  }
   
    
</script>
<style>
  .sg_ph > img {
    width: 100%;
  }
</style>
