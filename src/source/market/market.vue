<template>
    <div class="tab-con">
      <Collapse v-model="value">
        <Panel name="1">
          史蒂夫·乔布斯
            <Row slot="content">
              <Col span="11" class="lss-table-group-item">
                <Table :loading="loading1" :columns="columns1" :data="data1" height="230"></Table>
              </Col>
              <Col span="11" class="lss-table-group-item" offset="2">
                <Table :loading="loading" :columns="columns1" :data="data1" height="230"></Table>
              </Col>
              <Col span="11" class="lss-table-group-item">
                <Table :loading="loading" :columns="columns1" :data="data1" height="230"></Table>
              </Col>
            </Row>

        </Panel>
        <Panel name="2">
          斯蒂夫·盖瑞·沃兹尼亚克
          <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
          乔纳森·伊夫
          <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
      </Collapse>
    </div>
</template>

<script>
    export default {
      name: "market",
      data(){
        return {
          loading: false,
          loading1: true,
          value:"1",
          columns1: [
            {
              title: 'Name',
              key: 'name'
            },
            {
              title: 'Age',
              key: 'age'
            },
            {
              title: 'Address',
              key: 'address'
            }
          ],
          data1: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            },
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            },
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            },
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .lss-table-group-item {
    margin-bottom:5px;
    margin-top:5px;
  }
</style>
