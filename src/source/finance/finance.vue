<template>
  <div class="tab-con">
    <Collapse v-model="value">
      <Panel v-for="(item,index) in tableData" :name="'1'+index" :key="index">
        {{ item.title }}{{ item.equation ? '——————'+item.equation : '' }}
        <Row slot="content">
          <div class="addNewRecode">
            <router-link :to="{name:'financeForm',params: item}"><Button type="ghost" shape="circle" icon="plus-round">Add</Button></router-link>
          </div>
          <Col span="24" class="lss-table-group-item">
            <Table :loading="item.loading" :columns="item.tableTh" :data="item.data" height="230"></Table>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  </div>

</template>

<script>
    var financeJson = [
      {
        title:"偿债能力分析",
        loading:false,
        equation:'流动比率 = 流动资产／流动负债',
        description:"流动比率可以反映短期偿债能力。一般认为生产企业合理的最低流动比率是2。影响流动比率的主要因素一般认为是营业周期、流动资产中的应收帐款数额和存货周转速度。",
        tableTh:[
          {
            title: '流动资产(万元)',
            key: 'workingFund'
          },
          {
            title: '流动负债(万元)',
            key: 'fundObligation'
          },
          {
            title: '流动比率',
            key: 'ratioMeter',
            align: 'right'
          }
        ],
        data:[
          {
            workingFund: 145,
            fundObligation: 18,
            ratioMeter: '25.2%'
          }
        ]
      },
      {
        title:"资本结构分析（或长期偿债能力分析）",
        loading:false,
        equation:'',
        description:"流动比率可以反映短期偿债能力。一般认为生产企业合理的最低流动比率是2。影响流动比率的主要因素一般认为是营业周期、流动资产中的应收帐款数额和存货周转速度。",
        tableTh:[
          {
            title: '流动资产(万元)',
            key: 'workingFund'
          },
          {
            title: '流动负债(万元)',
            key: 'fundObligation'
          },
          {
            title: '流动比率',
            key: 'ratioMeter',
            align: 'right'
          }
        ],
        data:[
          {
            workingFund: 145,
            fundObligation: 18,
            ratioMeter: '25.2%'
          }
        ]
      },
      {
        title:"经营效率分析",
        loading:false,
        equation:'',
        description:"流动比率可以反映短期偿债能力。一般认为生产企业合理的最低流动比率是2。影响流动比率的主要因素一般认为是营业周期、流动资产中的应收帐款数额和存货周转速度。",
        tableTh:[
          {
            title: '流动资产(万元)',
            key: 'workingFund'
          },
          {
            title: '流动负债(万元)',
            key: 'fundObligation'
          },
          {
            title: '流动比率',
            key: 'ratioMeter',
            align: 'right'
          }
        ],
        data:[
          {
            workingFund: 145,
            fundObligation: 18,
            ratioMeter: '25.2%'
          }
        ]
      },
      {
        title:"盈利能力分析",
        loading:false,
        equation:'',
        description:"流动比率可以反映短期偿债能力。一般认为生产企业合理的最低流动比率是2。影响流动比率的主要因素一般认为是营业周期、流动资产中的应收帐款数额和存货周转速度。",
        tableTh:[
          {
            title: '流动资产(万元)',
            key: 'workingFund'
          },
          {
            title: '流动负债(万元)',
            key: 'fundObligation'
          },
          {
            title: '流动比率',
            key: 'ratioMeter',
            align: 'right'
          }
        ],
        data:[
          {
            workingFund: 145,
            fundObligation: 18,
            ratioMeter: '25.2%'
          }
        ]
      },
      {
        title:"投资收益分析",
        loading:false,
        equation:'',
        description:"流动比率可以反映短期偿债能力。一般认为生产企业合理的最低流动比率是2。影响流动比率的主要因素一般认为是营业周期、流动资产中的应收帐款数额和存货周转速度。",
        tableTh:[
          {
            title: '流动资产(万元)',
            key: 'workingFund'
          },
          {
            title: '流动负债(万元)',
            key: 'fundObligation'
          },
          {
            title: '流动比率',
            key: 'ratioMeter',
            align: 'right'
          }
        ],
        data:[
          {
            workingFund: 145,
            fundObligation: 18,
            ratioMeter: '25.2%'
          }
        ]
      },
      {
        title:"现金保障能力分析",
        loading:false,
        equation:'',
        description:"流动比率可以反映短期偿债能力。一般认为生产企业合理的最低流动比率是2。影响流动比率的主要因素一般认为是营业周期、流动资产中的应收帐款数额和存货周转速度。",
        tableTh:[
          {
            title: '流动资产(万元)',
            key: 'workingFund'
          },
          {
            title: '流动负债(万元)',
            key: 'fundObligation'
          },
          {
            title: '流动比率',
            key: 'ratioMeter',
            align: 'right'
          }
        ],
        data:[
          {
            workingFund: 145,
            fundObligation: 18,
            ratioMeter: '25.2%'
          }
        ]
      },
      {
        title:"利润构成分析",
        loading:false,
        equation:'',
        description:"流动比率可以反映短期偿债能力。一般认为生产企业合理的最低流动比率是2。影响流动比率的主要因素一般认为是营业周期、流动资产中的应收帐款数额和存货周转速度。",
        tableTh:[
          {
            title: '流动资产(万元)',
            key: 'workingFund'
          },
          {
            title: '流动负债(万元)',
            key: 'fundObligation'
          },
          {
            title: '流动比率',
            key: 'ratioMeter',
            align: 'right'
          }
        ],
        data:[
          {
            workingFund: 145,
            fundObligation: 18,
            ratioMeter: '25.2%'
          }
        ]
      }
    ];
    export default {
        name: "finance",
        data(){
            return {
              value:"",
              tableData:financeJson
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
    .lss-table-group-item {
      margin-bottom:5px;
      margin-top:5px;
    }
</style>
