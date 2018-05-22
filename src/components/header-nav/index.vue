<template>
  <div class="lss-header-warp">
    <router-link to="/" class="logo"><img src="../../assets/images/logo.png" /></router-link>
    <router-link to="/" class="title">Bcos Because</router-link>
  </div>
</template>

<script>
    export default {
        name: "HeaderNav"
    }
</script>

<style scoped>
  .lss-header-warp {
    width: 100%; height: 50px; line-height: 50px;
    border-bottom:4px solid #2d8cf0;
    background: #fff;
    position: relative;
    z-index: 5;
    color:#fff;
    padding:0px 10px;
    text-align: left;
  }
  .lss-header-warp a {
    display: inline-block;
    width: auto;
    float: left;
    font-size:16px;
    margin-right:10px;
  }
  .logo {
    height: 50px; line-height: 50px; vertical-align: middle;
  }
  .logo img {
    width: auto;
    height: 30px;
  }
  .title {

  }
</style>
