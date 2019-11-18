<template>
  <div class="page-navbar">
    <v-Ddd></v-Ddd>
    <v-Ss></v-Ss>
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">当季时令</mt-tab-item>
      <mt-tab-item id="3">葡提浆果</mt-tab-item>
      <mt-tab-item id="4">西瓜蜜瓜</mt-tab-item>
      <mt-tab-item id="5">芒橙甘油</mt-tab-item>
    </mt-navbar>

    <!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <v-Nr></v-Nr>
      </mt-tab-container-item>
      <mt-tab-container-item id="2"> </mt-tab-container-item>
      <mt-tab-container-item id="3"> </mt-tab-container-item>
      <mt-tab-container-item id="4"> </mt-tab-container-item>
      <mt-tab-container-item id="5"> </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import vDdd from "./Ddd.vue";
  import vSs from "./Ss.vue";
  import vNr from "./Nr.vue";
  export default {
    name: "page-navbar",

    data() {
      return {
        selected: "1"
      };
    },
    components: {
      vNr,
      vSs,
      vDdd
    }
  };
</script>
<style lang=""></style>
