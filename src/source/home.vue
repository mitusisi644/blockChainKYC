<template>
  <div class="home">
    <div class="lss-top-block">
      <a class="lss-block-item">
        <span class="lbi-img"><img src="../../src/assets/images/64X64.png" /></span>
        <p class="lbi-con">
          <span class="lbi-title">Token 追踪</span>
          <span class="lbi-des">追踪Token变化</span>
        </p>
      </a>
      <a class="lss-block-item">
        <span class="lbi-img"><img src="../../src/assets/images/64X64.png" /></span>
        <p class="lbi-con">
          <span class="lbi-title">权重管理</span>
          <span class="lbi-des">管理权重配比</span>
        </p>
      </a>
      <a class="lss-block-item">
        <span class="lbi-img"><img src="../../src/assets/images/64X64.png" /></span>
        <p class="lbi-con">
          <span class="lbi-title">市场交易</span>
          <span class="lbi-des">发起交易</span>
        </p>
      </a>
    </div>
    <div class="warning-title">
      <Alert closable><span>友情提示! </span>请使用Dapp管理您的KYC Token.</Alert>
    </div>
    <div class="lss-model">
      <div class="lss-model-item success-border">
        <div class="icon-financial"></div>
        <p>
          <span class="lmi-title">财务数据</span>
          <span>时间戳：2018/30254</span>
        </p>
        <p>
          <span>最新哈希</span>
          <span>1x96afrd5F56a229780543fD899181567F7cFA12544</span>
        </p>
        <p>
          <span>风险等级</span>
          <span class="lmi-btn"><Tag color="green">&nbsp;&nbsp;&nbsp;安全&nbsp;&nbsp;&nbsp;</Tag></span>
        </p>
        <p>
          <span>所占权重</span>
          <span class="lmi-num">30%</span>
        </p>
        <router-link to="/finance" class="lmi-links">
          <Icon type="chevron-right"></Icon>
        </router-link>
      </div>
      <div class="lss-model-item warning-border">
        <div class="icon-market"></div>
        <p>
          <span class="lmi-title">市场指标</span>
          <span>时间戳：2018/30254</span>
        </p>
        <p>
          <span>所属行业</span>
          <span>0x35468197232...</span>
        </p>
        <p>
          <span>风险等级</span>
          <span class="lmi-btn"><Tag color="yellow">&nbsp;&nbsp;&nbsp;安全&nbsp;&nbsp;&nbsp;</Tag></span>
        </p>
        <p>
          <span>所占权重</span>
          <span class="lmi-num">30%</span>
        </p>
        <router-link to="/market" class="lmi-links">
          <Icon type="chevron-right"></Icon>
        </router-link>
      </div>
      <div class="lss-model-item error-border">
        <div class="icon-discuss"></div>
        <p>
          <span class="lmi-title">行业互评</span>
          <span>时间戳：2018/30254</span>
        </p>
        <p>
          <span>评分等级</span>
          <span>1x96afrd5F56a229780543fD899181567F7cFA12544</span>
        </p>
        <p>
          <span>风险等级</span>
          <span class="lmi-btn"><Tag color="red">&nbsp;&nbsp;&nbsp;安全&nbsp;&nbsp;&nbsp;</Tag></span>
        </p>
        <p>
          <span>所占权重</span>
          <span class="lmi-num">30%</span>
        </p>
        <router-link to="/discuss" class="lmi-links">
          <Icon type="chevron-right"></Icon>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .lss-top-block {
    width: 100%;
    height: auto;
    padding:20px;
    overflow: hidden;
    text-align: center;
  }
  .lss-block-item {
    display: inline-block;
    width: auto;
    height: auto;
    overflow: hidden;
    color:#363636;
  }
  .lss-block-item:nth-child(1) {
    float: left;
  }
  .lss-block-item:nth-child(2) {
    display: inline-block;
  }
  .lss-block-item:nth-child(3) {
    float: right;
  }
  .lss-block-item:hover {
    color: #2d8cf0;
  }
  .lbi-img,.lbi-con {
    float: left;
    display: inline-block;
  }
  .lbi-img {
    width:64px; height: 64px;
  }
  .lbi-con {
    width: auto;height: auto;
    overflow: hidden; padding-left:10px; padding-top:5px;
  }
  .lbi-title {
    font-size:16px; line-height: 30px;
    display: block;
  }
  .lbi-des {
    font-size:14px;
  }
  .warning-title .ivu-alert {
    font-size:14px;
  }
  .warning-title span {
    font-weight: bold;
  }

  .lss-model-item { position: relative; width:100%;height:auto;overflow: hidden; border:1px solid #000; border-radius: 5px; border-bottom-width:8px;padding:5px 10px; margin-top:30px; background:#efeff6;}
  .success-border { border-color:#19be6b;}
  .error-border { border-color: #ed3f14;}
  .warning-border { border-color: #f29100;}
  .lss-model-item p {display: inline-block; margin-right:5%; font-size:14px; width:auto; height: 66px; overflow: hidden;}
  .lss-model-item span {display:block;}
  .lss-model-item .lmi-links {
    font-size:48px;padding:0px 10px; position: absolute;
    right: 20px; top:50%; margin-top:-36px; color:#999;
  }
  .lss-model-item p span:nth-child(1) {
    height: 34px; line-height:34px;
  }
  .lss-model-item p span:nth-child(2) {
    height: 32px; line-height: 32px;
  }
  .lss-model-item .lmi-title,.lss-model-item .lmi-num {
    font-weight: bold; font-size:20px;
  }
  .icon-financial,
  .icon-discuss,
  .icon-market {
    display: inline-block;
    background-repeat: no-repeat;
    background-position:center center;
    background-size:50px 50px;
    width:66px; height:66px; margin-right:10px;
  }
  .icon-financial {
    background-size:48px 48px;
    background-image: url("../../src/assets/images/icon-financial.svg");
  }
  .icon-discuss {
    background-image: url("../../src/assets/images/icon-discuss.svg");
  }
  .icon-market {
    background-image: url("../../src/assets/images/icon-market.svg");
  }
</style>
