<template>
  <div id="app" class="lss-app-warp">
    <HeaderNav></HeaderNav>
    <MenuNav></MenuNav>
    <div class="lss-warp">
      <router-view/>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    };
  },
  created: function () {
  }
}
</script>

<style>
  @import "./assets/css/common.css";
  .lss-warp {
    width:100%;
    height: auto;
    overflow: hidden;
    position: relative;
    padding:10px 10px 10px 210px;
  }
</style>
