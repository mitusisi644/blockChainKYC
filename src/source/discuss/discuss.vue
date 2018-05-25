<template>
  <div class="tab-con">
    <i-table :content="self" :columns="tableColumns" :data="tableData"></i-table>
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
                name: '交易达成率',
                action:"1"
              },
              {
                name: '品质(Character)',
                action:"3"
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
                width: 100,
                align: 'center',
                render: function (h, params) {
                  return h('div', [
                    h('Button', {
                      props: {
                        type: 'primary',
                        shape:"circle",
                        size: 'small'
                      }
                    }, params.row.action)
                  ]);
                }
              }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
