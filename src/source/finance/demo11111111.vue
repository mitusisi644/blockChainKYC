<template>
    <div>
        <!--数据-->
        <el-table
            :data="itemData"
            border
            style="width: 100%">
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
                        <i-input v-model="itemTitle[index]['val']"></i-input>
                    </Form-item>
                </i-form>
            </div>
            <div class="lss-submit-btn"><i-button type="primary" size="large">确认提交</i-button>&nbsp;&nbsp;<i-button @click="itemAddBtn = !itemAddBtn" type="primary" size="large">&nbsp;&nbsp;&nbsp;取消&nbsp;&nbsp;&nbsp;</i-button></div>
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
      name: "demo",
      data (){
          return {
              bgColor:["0c91e5","green","aa0d79","49b3be","ff78e2","eaa810","yellow","red","blue"],
              itemAddBtn:false,
              itemTitle:{
                  "a":{
                    "name":"流动资产",
                    "val":0
                  },
                  "b":{
                    "name":"流动负债",
                    "val":0
                  },
                  "c":{
                    "name":"存货",
                    "val":0
                  },
                  "d":{
                    "name":"货币资金",
                    "val":0
                  },
                  "e":{
                    "name":"短期投资",
                    "val":0
                  },
                  "f":{
                    "name":"应收票据",
                    "val":0
                  },
                  "g":{
                    "name":"应收帐款",
                    "val":0
                  },
                  "h":{
                    "name":"销售收入",
                    "val":0
                  },
                  "i":{
                    "name":"平均应收账",
                    "val":0
                  }
              },
              itemData:[
                {
                  "j":1,
                  "k":63,
                  "l":321,
                  "m":23,
                  "n":673,
                  "o":843,
                  "p":323
                },
                {
                  "j":61,
                  "k":263,
                  "l":721,
                  "m":93,
                  "n":-3,
                  "o":233,
                  "p":-323
                }
              ],
              itemGS:{
                  "j":{
                    "name":"流动比率",
                    "jisuan":"流动资产／流动负债",
                    "js":'this.itemTitle.a.val/this.itemTitle.b.val'
                  },
                  "k":{
                    "name":"速动比率",
                    "jisuan":"（流动资产－存货）／流动负债",
                    "js":"(this.itemTitle.a.val-this.itemTitle.c.val)/this.itemTitle.b.val"
                  },
                  "l":{
                    "name":"保守速动比率（超速动比率）",
                    "jisuan":"货币资金+短期投资+应收票据+应收帐款）／流动负债",
                    "js":"(this.itemTitle.d.val+this.itemTitle.e.val+this.itemTitle.f.val+this.itemTitle.g.val)/this.itemTitle.b.val"
                  },
                  "m":{
                    "name":"现金比率",
                    "jisuan":"（货币资金／流动负债）",
                    "js":"this.itemTitle.d.val/this.itemTitle.b.val"
                  },
                  "n":{
                    "name":"应收帐款周转率",
                    "jisuan":"销售收入／平均应收帐款",
                    "js":"this.itemTitle.h.val/this.itemTitle.i.val"
                  },
                  "o":{
                    "name":"应收帐款周转天数",
                    "jisuan":"360天／(销售收入／平均应收帐款)",
                    "js":"360/(this.itemTitle.h.val/this.itemTitle.i.val)"
                  },
              }
          }
      },
      methods:{
        eval:function (d) {
          if(isNaN(eval(d)) || eval(d) == Infinity || eval(d) == -Infinity){
            return "";
          }else{
            return eval(d);
          }
        },
        addNewRecode:function () {
          this.itemAddBtn = !this.itemAddBtn;
        }
      }
	}
</script>

<style scoped>
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
    width: 100%; height: auto;overflow: hidden;
  }
  .lss-submit-btn { text-align: right;}
  .add-form { padding-top:20px;}
  .lss-input-item {
    display:block;float: left; width: 300px;
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
  .lss-bg-yellow {background: yellow;}
  .lss-bg-red {background: red;}
  .lss-bg-blue {background: blue;}
</style>
