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
      <Tabs type="card" @on-click="changeTabs()">
          <Tab-pane label="transition" class="transition-warp topnav_box">
            <p class="transition-line" v-for="(item,index) in transitionData" :key="index"><span>{{timestampToTime(item.timestamp)}}</span> <span>{{item.hash}}</span></p>
          </Tab-pane>
          <Tab-pane label="Contract">
            <p class="btn-span"><span class="ivu-btn-primary" @click="addTokenAsf = !addTokenAsf">+add</span></p>
            <p class="transition-line"><span>0xa8e4c3d8def65ce7167ca6b1c6f1a4481df0b7cb</span></p>
            <p class="transition-line"><span>0xa1er23tge4c3d8def65635ce71g67ca6b1c6f1a9</span></p>
            <p class="transition-line"><span>0xa23834e4c3d8def6gt5ce7167ca6b1c6f1a24481</span></p>
            <p class="transition-line" v-for="(item,index) in tokenData" :key="index"><span>{{item.address}}</span></p>
          </Tab-pane>
      </Tabs>
      <div class="add-token-dialog" v-if="addTokenAsf">
        <p class="back-tabs">ADD TOKEN</p>
        <Form ref="addToken" :model="addToken" :label-width="100">
          <FormItem label="Token Contract Address">
              <Input v-model="addToken.address" placeholder="Token Contract Address..."></Input>
          </FormItem>
          <FormItem label="Token Symbol">
              <Input v-model="addToken.symbol"></Input>
          </FormItem>
          <FormItem label="Decimals of Precision">
              <Input v-model="addToken.precision"></Input>
          </FormItem>
        </Form>
        <p class="btn-span"><span class="ivu-btn-primary" @click="addTokenRecode()">&nbsp;&nbsp;提交&nbsp;&nbsp;</span></p>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      name: "MenuNav",
      data(){
          return {
            addTokenAsf:false,
            addToken:{
              "address":'0xa8e4c3d8def65ce7167ca6b1c6f1a4481df0b7cb',
              "symbol":"TOKEN",
              "precision":"18"
            },
            transitionData:[],
            firstTransaction:[],
            tokenData:[]
          }
      },
      methods: {
        timestampToTime: function (timestamp) {
            var date = new Date(parseInt(timestamp/1000000));//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds();
            return Y+M+D+h+m+s;
        },
        addTokenRecode:function(){
          this.tokenData.push(this.addToken);
          this.addTokenAsf = !this.addTokenAsf;
        },
        changeTabs:function(v){
          $(".btn-span,.transition-line").show();
        },
        setIn:function(){
          setInterval(() => {
              if(localStorage.transitionData && localStorage.transitionData != 'false'){
                var newJ = eval('(' + localStorage.transitionData + ')');
                this.transitionData.unshift(newJ);
                localStorage.transitionData = false;
                setTimeout(function(){
                  $(".transition-warp p").eq(0).css("background","#eff7ff");
                },1000)
                
              }else{
                setTimeout(function(){
                  $(".transition-warp p").eq(0).css("background","none");
                },1000)
              }
          }, 5000)

        }
      },
      created: function () {
          var _this = this;
          localStorage.transitionData = false;     
          this.$http.get('../../../static/json/transaction.json').then(res => {
            var newArr = [];
            res.body.map((item,index)=>{
              newArr = newArr.concat(item.result.data)
            });
            _this.transitionData = newArr;
            _this.setIn()
          });
          this.$http.get('../../../static/json/firstTransaction.json').then(res => {
            this.firstTransaction = res.body;
          });
      },
      watch:{
        "transitionData":function(){

        }
      }
    }
</script>
<style scoped>
  .aniShan {
    animation: shans 0s 0.5s infinite;
    -webkit-animation: shans 0s 0.5s infinite;
  }
  @keyframes shans{
    from{ background:rgba(203,100,0,0); }
    to{ background:rgba(203,100,0,0.8); }
  }
  .right-menu {
    width: 500px;
    height:100%;
    position: absolute;
    z-index: 1; padding:50px 0px 0px 20px;
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
  .transition-warp {width: 100%; height: 500px; overflow-y: scroll;}
  .transition-line { width: 100%; height: auto; height: auto; line-height: 22px; font-size:14px; padding:5px 0px; border-bottom:1px solid #ccc; }
  .transition-line span:last-child { font-size:12px; }
  .topnav_box::-webkit-scrollbar{  
      width: 5px;  
      height:10px; 
     background-color:#b5b1b1;

  }  
  .topnav_box::-webkit-scrollbar-track  {  
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
      border-radius: 10px; 
        background-color:black;    
      
  }
  .topnav_box::-webkit-scrollbar-thumb{  
      border-radius: 10px;  
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
     background-color:#b5b1b1;
  } 
  .add-token-dialog { width:100%; height:100%; overflow: hidden; background:#fff; position: absolute; left: 0px; top:0px; padding:10px 30px;}
  .back-tabs {width: 100%; height: auto; font-size:16px; font-weight: bold; text-align: center; padding:20px 0px 10px;}
  .btn-span {
    text-align: right;
  }
  .btn-span span {
    padding:5px 10px; border-radius: 2px; cursor: pointer;
  }
</style>
