<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <div class="lss-area">
            <div class="huan-warp">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="huan">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div class="middle">
                      <a>区</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to block chain'
        }
    }
}
</script>
<style scoped>
    h1, h2 {
        font-weight: normal; text-align: center;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .lss-area div {
      display: inline-block;
      position: relative;
      text-align: center;
    }
    .lss-area {
      width: 100%;height: 600px;
      text-align: center;
    }
    .huan-warp {
      width:600px; height:600px; line-height: 600px; background: #fff;
    }
    .huan {
      width:400px;height: 400px;border:1px solid pink;border-radius: 50%; line-height: 400px; background: #fff;transform: rotate(15deg);
    }
    .middle {
      display: inline-block; background: #fff;
      width: 120px;height: 120px; border:1px solid cornflowerblue; border-radius: 50%; line-height: 120px;
    }
    .middle a {
      font-size:40px;
    }

    .lss-area span {
      display: block;
      width:2px;
      background:blue;
      position: absolute;
      top:50%;
      left: 50%;
      transform-origin: 50% 100%;

    }
    .huan-warp > span {
      height: 400px;
      margin-top:-400px;
    }
    .huan > span {
      height: 200px;
      margin-top:-200px;
    }
    .lss-area span:nth-child(1) {
      transform: rotate(-36deg);
    }
    .lss-area span:nth-child(2) {
      transform: rotate(-72deg);
    }
    .lss-area span:nth-child(3) {
      transform: rotate(-108deg);
    }
    .lss-area span:nth-child(4) {
      transform: rotate(-144deg);
    }
    .lss-area span:nth-child(5) {
      transform: rotate(-180deg);
    }
    .lss-area span:nth-child(6) {
      transform: rotate(-216deg);
    }
    .lss-area span:nth-child(7) {
      transform: rotate(-252deg);
    }
    .lss-area span:nth-child(8) {
      transform: rotate(-288deg);
    }
    .lss-area span:nth-child(9) {
      transform: rotate(-324deg);
    }
    .lss-area span:nth-child(10) {
      transform: rotate(-360deg);
    }
</style>
