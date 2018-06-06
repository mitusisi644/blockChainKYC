<template>
  <div>
    <!--数据-->
    <el-table
      :data="itemData"
      border
      style="width: 100%">
      <el-table-column
        prop="tableDate"
        label="日期">
      </el-table-column>
      <el-table-column
        :prop="index"
        :label="item.name"
        v-for="(item,index) in itemGS" :key="index">
      </el-table-column>
    </el-table>
    <!--添加-->
    <div class="add-btn"><i-button type="primary" :disabled="itemAddBtn" @click="addNewRecode()">add+</i-button></div>
    <!--表单-->
    <div class="add-new-recode-form" v-show="itemAddBtn">
      <div class="line-fg"></div>
      <div class="add-form">
        <i-form label-position="right" :label-width="100">
          <Form-item :label="item.name" v-for="(item,index) in itemTitle" class="lss-input-item" :key="index">
            <i-input v-model="itemTitle[index]['val']" number></i-input>
          </Form-item>
        </i-form>
      </div>
      <div class="lss-auto-complete" @click="SetAutoComplete()"></div>
      <div class="lss-submit-btn"><i-button type="primary" size="large" @click="submitResult()">确认提交</i-button>&nbsp;&nbsp;<i-button @click="itemAddBtn = !itemAddBtn" type="primary" size="large">&nbsp;&nbsp;&nbsp;取消&nbsp;&nbsp;&nbsp;</i-button></div>
      <div class="add-result">
        <p v-for="(item,index,key) in itemGS" :class="'lss-bg-'+bgColor[key]" v-if="eval(item.js) ?  true : false">
          <span class="add-result-title">{{ item.name }}</span><span class="add-result-val">{{eval(item.js)}}</span><span class="add-result-des">{{item.jisuan}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["financeId","itemData","itemTitle","itemGS"],
    data (){
      return {
        bgColor:["0c91e5","green","aa0d79","49b3be","ff78e2","eaa810","696919","red","blue","palevioletred","purple","plum","saddlebrown","powderblue","seashell","navy","tan"],
        itemAddBtn:false,
        tableDate:"2012"
      }
    },
    methods:{
      eval:function (d) {
        if(isNaN(eval(d)) || eval(d) == Infinity || eval(d) == -Infinity){
          return "";
        }else{
          var lastNum = d.substr(-4);
          var result = eval(d);
          if(result != 0){
              result = Number(result).toFixed(2);
              if(lastNum == "*100"){
                result = result+"%";
              }
          }
          return result;
        }
      },
      submitResult:function() {
        var subResu = [];
        var financeAddData = {};
        for(var item in this.itemGS){
            var vals = this.eval(this.itemGS[item]['js']);
            if(vals){            
              subResu.push((vals)+"");
              financeAddData[item] = vals;
            }
        }
        if(subResu.length > 0 && financeAddData.length > 0){
          //表格数据动态添加
          financeAddData.tableDate = 2018;
          this.itemData.push(financeAddData);
          //左侧数据动态添加
          var _hash = Math.random().toString(36).substr(2)+
                      Math.random().toString(36).substr(2)+
                      Math.random().toString(36).substr(2)+
                      Math.random().toString(36).substr(2)+
                      Math.random().toString(36).substr(2)+
                      Math.random().toString(36).substr(2);
          var _today =  Date.parse(new Date())+"000000";
          localStorage.transitionData = '{"timestamp": "'+_today+'", "hash": "'+_hash+'","from": "0xed9d02e382b34818e88b88a309c7fe71e65f419d", "to": "0x29d368dcb94c5cc18800bde6473a2c6d23f3dc3f", "value": "1","v": "27"}';

          //提交完成：
          this.itemAddBtn = false;
          for(var s in this.itemTitle){
            this.itemTitle[s]['val'] = 0;
          }
        }

        /*this.$axios(promiseBaseUrl, JSON.stringify(subResu), function(){
          alert('success');
        },function(){
          alert('error');
        },"post")*/
      },
      addNewRecode:function () {
        this.itemAddBtn = !this.itemAddBtn;
      },
      SetAutoComplete:function(){
        for(var s in this.itemTitle){
            this.itemTitle[s]['val'] = 2;
          }
      }
    },
    created:function(){
    }
  }
</script>

<style scoped>
.lss-auto-complete { width: 100px; height: 200px; background:none; position: absolute;right:0px; top:0px; }
  .line-fg {width: 100%; height: 2px;
    overflow: hidden;
    background:#0c91e5;
  }
  .add-btn {
    width: 100%;
    height: auto;
    overflow: hidden; margin: 10px 0px 20px;
    text-align: right;
  }
  .lss-submit-btn,.add-form,.add-result,.add-new-recode-form {
    width: 100%; height: auto; overflow: hidden; position: relative;
  }
  .lss-submit-btn { text-align: right;}
  .add-form { padding-top:20px;}
  .lss-input-item {
    display:block;float: left; width: 30%; height: 45px; margin-right:10px;
  }
  .add-result {
    padding:30px 20px 0px;
  }
  .add-result p {
    display: inline-block; width: auto; height:auto;
    text-align: center; position: relative;
    margin:0px 5px; color:#fff; padding-top:15px;
  }
  .add-result p span {
    display: block; width: 100%; height: auto;
    overflow: hidden; padding:0px 20px;
  }
  .add-result-title {
    font-weight: 300;
    font-size: 14px;
  }
  .add-result-val {
    font-weight: bold;
    font-size: 30px; line-height: 60px;
  }
  .add-result-des {
    font-size: 12px;color: rgba(255,255,255,0.4);
  }
  .lss-bg-green { background: green;}
  .lss-bg-0c91e5 {background: #0c91e5;}
  .lss-bg-aa0d79 {background: #aa0d79;}
  .lss-bg-49b3be {background: #49b3be;}
  .lss-bg-ff78e2 {background: #ff78e2;}
  .lss-bg-eaa810 {background: #eaa810;}
  .lss-bg-696919 {background: #696919;}
  .lss-bg-red {background: red;}
  .lss-bg-blue {background: blue;}
  .lss-bg-palevioletred {background: palevioletred;}
  .lss-bg-purple {background: purple;}
  .lss-bg-plum {background: plum;}
  .lss-bg-saddlebrown {background: saddlebrown;}
  .lss-bg-powderblue {background: powderblue;}
  .lss-bg-seashell {background: seashell;}
  .lss-bg-navy {background: navy;}
  .lss-bg-tan {background: tan;}
  
</style>
