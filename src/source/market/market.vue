<template>
    <div class="lss-tab-con">
      <div class="lss-market-warp">
        <NavTag :title="'行业状况'"></NavTag>
        <div class="lss-clear"></div>
        <div :class="item.data[1]>0 ? 'lmw-item zhang-item' : 'lmw-item die-item'" v-for="(item,index) in qihuo" @click="showCharts(index)">
          <p class="lmw-title">
            <span>{{item.name}}【{{item.kId}}】</span>
            <span class="refresh-time">{{item.data[12]}} {{item.data[6]}}</span>
            <span class="zd">{{Number(item.data[1]).toFixed(2)}}%</span>
          </p>
          <p class="lmw-data">
            <span>今开<a>{{item.data[8]}}</a></span><span>最新价<a>{{item.data[0]}}</a></span>
            <span>买量<a>{{item.data[10]}}</a></span>
            <span>买入<a>{{item.data[2]}}</a></span>
            <span>卖量<a>{{item.data[11]}}</a></span>
            <span>卖出<a>{{item.data[3]}}</a></span>
            <span>持仓量<a>{{item.data[9]}}</a></span>
            <span>昨日结算<a>{{item.data[7]}}</a></span>
            <span>最低<a>{{item.data[5]}}</a></span>
            <span>最高<a>{{item.data[4]}}</a></span>
            <span class="mid-line"></span>
          </p>
        </div>
      </div>
      <!--指数-->
      <div class="index-table">
        <div class="index-table-title"><h2>{{defaultQihuoZS.title}}</h2><span>指数K详情</span></div>
        <Row>
          <div class="chard" style="height:600px">
            <Charts :chart-title="defaultQihuoZS.title" :k-id="defaultQihuoZS.kId"></Charts>
          </div>
          <h2 class="index-item-title">{{defaultQihuoZS.title}}加权指数</h2>
          <i-col span="24" class="index-item">
            <div class="index-item-con">
              <p>
                <span>行业测评</span>
                <span class="progress-tab"><a class="status-g">上升</a></span>
                <span class="quanzhan-bfb">权占%：&nbsp;{{(defaultQihuoZS.newPrice*(Number(quanzhong.PCT)+20)/100).toFixed(2)}}</span>
                <span class="add-quan">
                  加权：&nbsp;<Input-number :min="0" :value="0" v-model="quanzhong.PC"></Input-number>
                </span>
              </p>
              <p>
                <span>行业指数</span>
                <span class="progress-tab"><a class="status-r">下降</a></span>
                <span class="quanzhan-bfb">权占%：&nbsp;{{(defaultQihuoZS.newPrice*(Number(quanzhong.HYT)+25)/100).toFixed(2)}}</span>
                <span class="add-quan">
                  加权：&nbsp;<Input-number :min="0" :value="0" v-model="quanzhong.HY"></Input-number>
                </span>
                <span class="default-auto-com" @click="jiaquanAutoCom()"></span>
              </p>
              <p>
                <span>资产风险</span>
                <span class="progress-tab"><a class="status-y">持平</a></span>
                <span class="quanzhan-bfb">权占%：&nbsp;{{(defaultQihuoZS.newPrice*(Number(quanzhong.ZJT)+33)/100).toFixed(2)}}</span>
                <span class="add-quan">
                  加权：&nbsp;<Input-number :min="0" :value="0" v-model="quanzhong.ZJ"></Input-number>
                </span>
              </p>
              <div class="button-warp">
                <i-button type="primary" size="large" @click="addQuanPHZ()">确定</i-button>
              </div>
            </div>
          </i-col>
        </Row>
      </div>
      <Row>
        <i-col span="12" class="industry-item">
          <h2>所属行业</h2>
          <div class="industry-item-con">
            <p>
              <span>同业指标</span>
              <Tag color="green">上升</Tag>
            </p>
            <p>
              <span>同业拆借率</span>
              <Tag color="yellow">中度</Tag>
            </p>
            <p>
              <span>Text description</span>
              <Tag color="red">下降</Tag>
            </p>
          </div>
        </i-col>
        <i-col span="12" class="industry-item">
          <h2>市场状况</h2>
          <div class="industry-item-con">
            <p>
              <span>行业测评</span>
              <Tag color="green">上升</Tag>
            </p>
            <p>
              <span>当前指标</span>
              <Tag color="yellow">中度</Tag>
            </p>
            <p>
              <span>远期指标</span>
              <Tag color="red">下降</Tag>
            </p>
          </div>
        </i-col>
      </Row>
    </div>
</template>
<script>
    import Charts from "../../components/charts/demo.vue";
    export default {
      name: "market",
      data(){
        return {
          todyJson:"",
          quanzhong:{
            "PC":0,
            "HY":0,
            "ZJ":0,
            "PCT":0,
            "HYT":0,
            "ZJT":0
          },
          defaultQihuoZS:{
              "title":"木材",
              "kId":"AHD",
              "newPrice":0
          },
          beginTime:'2018/1/1',
          //qihuos:["AHD","CAD","S","W","C","NG","CL","SI","GC","OIL","XPD"],
          qihuo: [
            {
              "kId":"AHD",
              "name":"木材",
              "data":[]
            },
            {
              "kId":"NG",
              "name":"天然气",
              "data":[]
            },
            {
              "kId":"CL",
              "name":"原油",
              "data":[]
            },
            {
              "kId":"GC",
              "name":"黄金",
              "data":[]
            }
          ]
        }
      },
      components: {
          Charts
      },
      created: function(){
          /*
          *全日线 https://stock.sina.com.cn/futures/api/jsonp.php/var20_GC2018_5_29=/GlobalFuturesService.getGlobalFuturesDailyKLine?symbol=GC&_=2018_5_29
          *时实线 http://hq.sinajs.cn/?_=1527583443029/&list=hf_AHD,hf_CAD,hf_S,hf_W,hf_C,hf_NG,hf_CL,hf_SI,hf_GC,hf_OIL,hf_XPD
          *分钟线 http://stock2.finance.sina.com.cn/futures/api/json.php/IndexService.getInnerFuturesMiniKLine30m?symbol=M1805
          */
          var _this = this;
          this.$http.get('../../../static/json/TODAY.json').then(res => {
            _this.todyJson = res.body;
            this.qihuo.map((item,index)=>{
              _this.qihuo[index]["data"] = _this.todyJson[item.kId].split(",");
            });
            this.showCharts(0);
          })
      },
      methods:{
          jiaquanAutoCom: function(){
            this.quanzhong.PC = 2;
            this.quanzhong.HY = 3;
            this.quanzhong.ZJ = 5;
          },
          showCharts: function(_index){
            this.defaultQihuoZS.title =  this.qihuo[_index]['name'];
            this.defaultQihuoZS.kId =  this.qihuo[_index]['kId'];
            this.defaultQihuoZS.newPrice =  this.qihuo[_index]["data"][0];
            this.quanzhong.PC = 0;
            this.quanzhong.HY = 0;
            this.quanzhong.ZJ = 0;
          },
          addQuanPHZ: function(){
            this.quanzhong.PCT = this.quanzhong.PC;
            this.quanzhong.HYT = this.quanzhong.HY;
            this.quanzhong.ZJT = this.quanzhong.ZJ;
            this.quanzhong.PC = 0;
            this.quanzhong.HY = 0;
            this.quanzhong.ZJ = 0;
            var _hash = Math.random().toString(36).substr(2)+
                        Math.random().toString(36).substr(2)+
                        Math.random().toString(36).substr(2)+
                        Math.random().toString(36).substr(2)+
                        Math.random().toString(36).substr(2)+
                        Math.random().toString(36).substr(2);
            var _today =  Date.parse(new Date())+"000000";
            localStorage.transitionData = '{"timestamp":"'+_today+'", "hash": "0x'+_hash+'","from": "0xed9d02e382b34818e88b88a309c7fe71e65f419d", "to": "0x29d368dcb94c5cc18800bde6473a2c6d23f3dc3f", "value": "1","v": "27"}';
          }
      }
    }
</script>
<style scoped>
  .lss-clear {
    clear: both;}
  .lss-market-warp {
    width:100%; height: auto; overflow: hidden;
  }
  .lmw-item {
    display: inline-block; width: 24%; margin-right:0.5%;margin-left:0.5%; margin-bottom: 8px; height: auto; overflow: hidden;
    position: relative; float:left;
    border:1px solid #ccc; padding:10px; border-bottom-width: 6px; border-radius: 4px; cursor:pointer;
  }
  .zhang-item{ border-color:#19be6b; }
  .zhang-item .zd {  color:#19be6b; }
  .ping-item { border-color:#999; }
  .ping-item .zd { color:#999; }
  .die-item { border-color:#ed3f14; }
  .die-item .zd { color:#ed3f14; }

  .lmw-item p {
    width:100%;  height: auto; overflow: hidden; position: relative;
  }
  .lmw-item span {
    display: inline-block; width: auto; height: auto;
  }
  .lmw-item .lmw-title {
    font-size:16px; padding-bottom:8px; border-bottom:1px solid #ccc;
  }
  .lmw-item .lmw-title span {width: 100%;}
  .lmw-item .lmw-title .refresh-time { font-size:12px;}
  .lmw-item .lmw-title .zd {
    position: absolute;right:0px; top:0px; font-weight: bold;
    font-size:32px; width:auto; text-align: right;
  }
  .lmw-item .lmw-data {
    font-size:14px; padding-top:8px;
  }
  .lmw-item .lmw-data span {
    width: 45%; color: #9ea2a0;
  }
  .lmw-item .lmw-data span:nth-child(2n) {
    float:right;
  }
  .lmw-item .lmw-data .mid-line {
    width:1px; height:100%; position: absolute; left: 50%; top:0px; background: #ccc;
  }
  .lmw-item .lmw-data a {float: right; color:green}
  .industry-item h2 {
    text-align: left;
    font-size:24px;
    padding:8px 0px;
  }
  .industry-item-con,.index-item-con {
    border:1px solid #ccc; border-radius: 5px; position:relative;
  }
  .industry-item-con p,.index-item-con p {
    width:100%;
    height: 38px; line-height: 38px; padding:0px 8px; position:relative;
    border-bottom:1px solid #ccc;
  }
  .industry-item-con p>span,
  .index-item-con p>span{
    display: inline-block; float:left; width: auto;
  }
  .industry-item-con p:last-child,.index-item-con p:last-child { border-bottom:none;}
  .industry-item-con p span:nth-child(1){
    width: 50%; font-size:14px;
  }
  .industry-item-con p .ivu-tag{
    font-size:12px; padding:0px 15px;
  }

  .index-item-con p span:nth-child(1) {
    min-width: 10%; font-size:14px;height: 38px; line-height: 38px;
  }
  .index-item-con p>span {
    padding:0px 4%; border-right:1px solid #ccc;
  }
  .index-item-con p .quanzhan-bfb { font-weight: 600; min-width:300px;}
  .index-item-con p .progress-tab {
    font-size:12px; height: 38px;
  }
  .index-item-con p .progress-tab a {
    display: inline-block;
    width:auto; height:22px; line-height:22px; border-radius: 3px; color:#fff; padding:0px 8px; margin-right:10px;
  }
  .index-item-con p .add-quan { font-weight: 600; border-right:none;}
  .index-item-con p .add-quan button { margin-left:20px; }
  .index-item .ivu-form-item {margin-bottom:7px;}
  .status-g { background: #19be6b;}
  .status-y { background: #f90;}
  .status-r { background: #ed3f14;}

  .index-table {
    width:100%;
    height: auto;
    overflow: hidden;
  }
  .index-table-title {width:100%; height:60px; padding:9px 15px; background:#0c91e5; color:#fff; border-top-left-radius:5px; border-top-right-radius:5px;}
  .index-table>.ivu-row {
    padding:15px;border:1px solid #ccc; border-top:0px;
  }
  .chard {border-bottom:1px solid #ccc;
    text-align: center;}
  .chard img {width:100%;
    height: auto; max-width:700px;}
  .index-item-title { padding:8px 0px;}
  .button-warp {
    width:150px;
    height:100%; position:absolute;
    right:0px;top:0px; background:#fff; border-left:1px solid #ccc; text-align:center; line-height:112px;
  }
  .default-auto-com { display:inline-block; width:100px; height:35px;position:absolute; right:160px; top:0px; z-index:5px; }
  .index-item-con p .default-auto-com { border:none;}
</style>
