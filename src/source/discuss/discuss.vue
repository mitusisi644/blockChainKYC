<template>
  <div class="lss-tab-con">
    <NavTag :title="'交易对手评测指数'"></NavTag>
    <div class="hot-con">
        <i-form :label-width="100">
          <Row>
            <i-col span="20" order="0" class="lss-pingce-form">
              <Form-item label="评测人">
                <Input v-model="pingceValidate.fromUser" placeholder="Enter something..."></Input>
              </Form-item>
              <Form-item label="联系方式">
                <Input v-model="pingceValidate.contact" placeholder="Enter something..."></Input>
              </Form-item>
            </i-col>
            <i-col span="20">
              <Form-item label="内容">
                <Input type="textarea" v-model="pingceValidate.text" :rows="4" placeholder="Enter something..."></Input>
              </Form-item>
            </i-col>

            <i-col span="24" class="form-con-title">企业指数评级</i-col>
            <i-col span="11" class="lss-rate">
              <span>企业素质</span>
              <Rate allow-half v-model="pingceValidate.z">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
              </Rate>
            </i-col>
            <i-col span="11" order="2" class="lss-rate">
              <span>资金信用</span>
              <Rate allow-half v-model="pingceValidate.y">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
              </Rate>
            </i-col>
            <div class="lss-clear"></div>
            <i-col span="11" class="lss-rate">
              <span>经营管理</span>
              <Rate allow-half v-model="pingceValidate.g">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
              </Rate>
            </i-col>
            <i-col span="11" order="2" class="lss-rate">
              <span>经济效益</span>
              <Rate allow-half v-model="pingceValidate.x">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
              </Rate>
            </i-col>
          </Row>
          <div class="sub-btn">
            <Form-item>
              <i-button type="primary" size="large"
                        :disabled="pingceValidate.x && pingceValidate.y && pingceValidate.g && pingceValidate.x ? false : true"
                        @click="subFormData()">
                保存</i-button>&nbsp;&nbsp;
              <i-button type="ghost" size="large" @click="resetForm()">重置</i-button>
            </Form-item>
          </div>
          <div class="lss-auto-complete" @click="autoForm()"></div>
        </i-form>
   </div>
    <i-table class="lss-table-list" size="large" :columns="tableColumns" :data="tableData"></i-table>
  </div>
</template>

<script>
    export default {
        name: "discuss",
        data () {
          return {
            pingceValidate:{
                "fromUser":"",
                "contact":"",
                "text":"",
                "z":0,
                "y":0,
                "g":0,
                "x":0
            },
            valueCustomText:3,
            self: this,
            tableData: [
              {
                name: '企业素质',
                action:5
              },
              {
                name: '资金信用',
                action:5
              },
              {
                name: '经营管理',
                action:2
              },
              {
                name: '经济效益',
                action:0
              }
            ],
            tableColumns: [
              {
                title: '企业评测综合结果',
                key: 'name'
                //width:"80%"
              },
              {
                title: '评分',
                key: 'action',
                //width: "20%",
                align: 'center',
                render: function (h, params) {
                  return h('Rate',{
                      props:{
                        disabled:true,
                        value:params.row.action
                      }
                  });
                }
              }
            ]
          }
        },
        created:function(){

        },
        methods:{
          autoForm:function(){
            this.pingceValidate = {
                "fromUser":"绥绣",
                "contact":"13001002310",
                "text":"合作参考",
                "z":5,
                "y":4.3,
                "g":5,
                "x":4.8
            }
          },
          subFormData:function(){
            var _hash = Math.random().toString(36).substr(2)+
              Math.random().toString(36).substr(2)+
              Math.random().toString(36).substr(2)+
              Math.random().toString(36).substr(2)+
              Math.random().toString(36).substr(2)+
              Math.random().toString(36).substr(2);
            var _today =  Date.parse(new Date())+"000000";
            localStorage.transitionData = '{"timestamp":"'+_today+'", "hash": "0x'+_hash+'","from": "0xed9d02e382b34818e88b88a309c7fe71e65f419d", "to": "0x29d368dcb94c5cc18800bde6473a2c6d23f3dc3f", "value": "1","v": "27"}';
            this.resetForm();
          },
          resetForm:function(){
            this.pingceValidate = {
              "fromUser":"",
              "contact":"",
              "text":"",
              "z":0,
              "y":0,
              "g":0,
              "x":0
            }
          }
        }
    }
</script>

<style scoped>
  .hot-con {width: 100%;height: auto;overflow:hidden; position: relative; padding:20px; background:#f3f6ff;}
  .lss-rate { height:35px;}
  .lss-rate span{
    display: inline-block; width: 100px; line-height:35px;
    float: left; margin-right:8px;
    height: auto;overflow: hidden;text-align:right;
  }
  .form-con-title { text-align: center; font-size:16px; font-weight:bold; padding:5px 0px; margin-bottom:10px; background:#fff;}
  .lss-table-list { margin-top:20px; }
  .sub-btn { clear:both; width:100%; height:auto; overflow: hidden; text-align: right; border-top:1px solid #ccc; margin-top:30px; padding:10px 0px;}
</style>
