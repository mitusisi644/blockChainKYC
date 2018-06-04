<template>
  <div class="right-menu">
    <div class=""></div>
    <Menu :theme="theme" :active-name="activeIndex" width="200" @on-select="route">
      <MenuGroup title="统计分析">
        <MenuItem name="/">
          <Icon type="android-home"></Icon>
          H-KYC
        </MenuItem>
        <MenuItem name="finance">
          <Icon type="pie-graph"></Icon>
          芳华
        </MenuItem>
        <MenuItem name="market">
          <Icon type="stats-bars"></Icon>
          复仇者联盟
        </MenuItem>
        <MenuItem name="discuss">
          <Icon type="earth"></Icon>
          红海行动
        </MenuItem>
      </MenuGroup>
      <MenuItem name="about">
        <Icon type="ios-pulse-strong"></Icon>
        ABOUT
      </MenuItem>
    </Menu>
  </div>
</template>
<script>
    var menus = {
        "home":"/",
        "financeForm": "finance",
        "finance": "finance",
        "discuss": "discuss",
        "market": "market",
        "about": "about"
    };
    export default {
      name: "MenuNav",
      data(){
          return {
            activeIndex:menus[this.$route.path.replace('/','')] ? menus[this.$route.path.replace('/','')] : '/'
          }
      },
      methods: {
        route:function (_href) {
          this.$router.push({name:_href});
          this.activeIndex = _href;
        }
      },
      created: function () {
      }
    }
</script>

<style scoped>
  .right-menu {
    width:200px;
    height:100%;
    background: #495060;
    position: absolute;
    z-index: 1; padding-top:50px;
    left: 0px;
    top:0px;
    border:none;
  }
</style>
