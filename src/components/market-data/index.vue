<template>
    <div class="market">
      <router-link to="/market" class="market-item" v-for="(item,index) in todayMarket" :key="index">
        <span class="market-name">{{item[13]}}</span>
        <span class="market-new-price">{{item[0]}}</span>
        <span :class="item[1] > 0 ? 'zhang-n market-zd' : 'die-n market-zd'">{{item[1]}}%</span>
        <span class="market-kp">开盘: {{item[8]}}</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "discuss",
        data () {
          return {
            todayMarket:[]
          }
        },
        created:function(){
        	var _this = this;
			this.$http.get('../../../static/json/TODAY.json').then(res => {
				for(var p in res.body){
					_this.todayMarket.push(res.body[p].split(","));
				}
			})
        }
    }
</script>

<style scoped>
  .market {width: 100%;height: auto;overflow:hidden; position: relative; padding:0px 0px 20px 0px;}
  .market-item { display: inline-block; width: auto; height: auto; overflow: hidden; text-align: center; padding:15px 20px; font-size:14px; background:#ecf6f7; margin-left:10px; margin-right:10px;}
  .market-item span {
    display: block; width: 100%; height: auto; overflow: hidden;
  }
  .market-name { color:#666; font-weight: bold; }
  .market-new-price,
  .market-kp { color:#999; }
  .market-zd { font-size:24px; }
</style>
