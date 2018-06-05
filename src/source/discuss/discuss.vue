<template>
  <div class="tab-con">
    <NavTag :title="'热门评论'"></NavTag>
    <!-- <div class="hot-con">
        <p class="hot-item">
          <span class="title">股票</span>
          <span class="des">XXX股票独秀一枝，是发展还是套路...</span>
        </p>
        <p class="hot-item">
          <span class="title">期货</span>
          <span class="des">农业发展、工业出产————哪种才是正途，该怎么走？</span>
        </p>
        <p class="hot-item">
          <span class="title">杠杆</span>
          <span class="des">爆发就在一瞬间，胆量练就未来，你的心脏还好吗？</span>
        </p>
        <p class="hot-item">
          <span class="title">政券</span>
          <span class="des">唯一不变的发展，就像喀纳斯的湖水怪</span>
        </p>
    </div> -->
    <i-table class="lss-table-list" :content="self" :columns="tableColumns" :data="tableData"></i-table>
  </div>
</template>

<script>
    export default {
        name: "discuss",
        data () {
          return {
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
                title: '交易对手评价指数',
                key: 'name'
              },
              {
                title: ' ',
                key: ' ',
                width: 200,
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

        }
    }
</script>

<style scoped>
  .tab-con,.hot-con {width: 100%;height: auto;overflow:hidden; position: relative; padding:20px;}
  .hot-con { background:#f3f6ff;}
  .hot-item { padding:15px 25px; width:auto; display: inline-block; height: auto; overflow: hidden; float: left; border-top:1px solid #ccc; border-bottom:1px solid #ccc; border-left:1px solid #ccc;}
  .hot-item:first-child {border-left:none;}
  .hot-item .title { font-style: 16px; display: inline-block; width: auto; overflow: hidden; height: 22px; line-height: 22px; padding: 0px 5px; border:1px solid #2d8cf0; color:#2d8cf0; border-radius: 3px;}
  .hot-item .des {
    display: block; width: 100%; height: auto; overflow: hidden; font-size:14px; color: #363636; line-height: 32px;
  }
  .lss-table-list { margin-top:20px; }
</style>
