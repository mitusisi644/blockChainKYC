<template>
  <div class="right-menu">
    <div class="status-report">
      <router-link class="status-report-item" to="/finance">
        <p class="title">财务状况</p>
        <p class="risk">风险度:<Tag color="green" size="small">Low</Tag></p>
        <p class="token-title">Last token:</p>
        <p class="token-val">0x76FE7655BACD</p>
      </router-link>
      <router-link class="status-report-item" to="/market">
        <p class="title">市场解析</p>
        <p class="risk">风险度:<Tag color="yellow" size="small">Mid</Tag></p>
        <p class="token-title">Last token:</p>
        <p class="token-val">0x76FE7655BACD</p>
      </router-link>
      <router-link class="status-report-item" to="/discuss">
        <p class="title">互评</p>
        <p class="risk">风险度:<Tag color="green" size="small">Low</Tag></p>
        <p class="token-title">Last token:</p>
        <p class="token-val">0x76FE7655BACD</p>
      </router-link>
    </div>
    <div class="market-menus">
      <div class="hot-market">
        <p></p>
      </div>     
      <Tabs type="card">
          <Tab-pane label="transition">标签一的内容</Tab-pane>
          <Tab-pane label="token">标签二的内容</Tab-pane>
      </Tabs>
    </div>
  </div>
</template>
<script>
    export default {
      name: "MenuNav",
      data(){
          return {
          }
      },
      methods: {
        
      },
      created: function () {
      }
    }
</script>

<style scoped>
  .right-menu {
    width:400px;
    height:100%;
    position: absolute;
    z-index: 1; padding:50px 20px 0px;
    left: 0px; top:0px;
    border:none;
  }
  .market-menus,.hot-market,.status-report-item,.status-report,.status-report-item p {width:100%; height: auto; overflow: hidden; position: relative;}
  .status-report {
    margin: 0 auto; margin-top:20px;
    background: #fff;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
    border-radius:5px; z-index: 5;
  }
  .status-report-item { display: block; border-bottom:1px solid #ccc; padding:15px 20px; color: #999; font-size:14px;}
  .router-link-active { background: #eff7ff; }
  .status-report-item:last-child { border-bottom:none; }
  .status-report-item p { text-align: left;}
  .status-report-item .title { font-size:16px; font-weight: 600; color: #363636;}
  .status-report-item .ivu-tag { margin-left:20%; padding:0px 20px;}
  .status-report-item .token-val { color: #363636; }

  .market-menus { margin-top:-10px; z-index: 1; padding-top:30px; border:1px solid #ccc; padding:30px 10px; border-radius:5px;}
  .hot-market { }
</style>
