<template>
  <div id="app" class="lss-app-warp">
    <HeaderNav></HeaderNav>
    <MenuNav></MenuNav>
    <div class="lss-warp">
      <router-view/>
    </div>
    <FooterNav></FooterNav>
    <a class="demoValue">SHOW</a>
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
  .demoValue {
    width:50px; position: fixed;
    height: 50px; line-height: 50px; font-size:14px; text-align: center;
    right:10px; bottom:30px; background:#f1f1f1; color:#fff;
  }
  .demoValue:hover {
    background:#0c91e5; color:#fff;
  }
</style>
