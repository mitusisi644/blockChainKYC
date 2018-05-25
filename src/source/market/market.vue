<template>
    <div class="tab-con">
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
      <!--指数-->
      <div class="index-table">
        <div class="index-table-title"><h2>指数</h2><span>测评指数权重配置</span></div>
        <Row>
          <div class="chard">
            <img src="../../assets/images/tubiao.jpg" />
          </div>
          <h2 class="index-item-title">相关指数</h2>
          <i-col span="11" class="index-item">
            <div class="index-item-con">
              <p>
                <span>布伦特原油</span>
                <span class="progress-tab"><a class="status-g">Green</a></span>
              </p>
              <p>
                <span>上交所原油</span>
                <span class="progress-tab"><a class="status-y">Orange</a></span>
              </p>
              <p>
                <span>深交所原油</span>
                <span class="progress-tab"><a class="status-r">Light blue</a></span>
              </p>
            </div>
          </i-col>
          <i-col span="11" offset="2" class="index-item">
            <i-form :label-width="50">
              <Form-item
                label="加权" >
                <Row>
                  <i-col span="18">
                    <i-input type="text" placeholder="请输入..."></i-input>
                  </i-col>
                  <i-col span="4" offset="1">
                    <i-button type="primary" size="small">确认</i-button>
                  </i-col>
                </Row>
              </Form-item>
            </i-form>
            <i-form  :label-width="50">
              <Form-item
                label="加权" >
                <Row>
                  <i-col span="18">
                    <i-input type="text" placeholder="请输入..."></i-input>
                  </i-col>
                  <i-col span="4" offset="1">
                    <i-button type="primary" size="small">确认</i-button>
                  </i-col>
                </Row>
              </Form-item>
            </i-form>
            <i-form  :label-width="50">
              <Form-item
                label="加权" >
                <Row>
                  <i-col span="18">
                    <i-input type="text" placeholder="请输入..."></i-input>
                  </i-col>
                  <i-col span="4" offset="1">
                    <i-button type="primary" size="small">确认</i-button>
                  </i-col>
                </Row>
              </Form-item>
            </i-form>
          </i-col>
        </Row>
      </div>
    </div>
</template>

<script>
    export default {
      name: "market",
      data(){
        return {
          percent:50
        }
      }
    }
</script>

<style scoped>
  .industry-item{
    padding:20px;
  }
  .industry-item h2 {
    text-align: left;
    font-size:24px;
    padding:8px 0px;
  }
  .industry-item-con,.index-item-con {
    border:1px solid #ccc; border-radius: 5px;
  }
  .industry-item-con p,.index-item-con p {
    width:100%;
    height: 38px; line-height: 38px; padding:0px 8px;
    border-bottom:1px solid #ccc;
  }
  .industry-item-con p>span,
  .index-item-con p>span{
    display: inline-block; float:left;
  }
  .industry-item-con p:last-child,.index-item-con p:last-child { border-bottom:none;}
  .industry-item-con p span:nth-child(1){
    width: 50%; font-size:14px;
  }
  .industry-item-con p .ivu-tag{
    font-size:12px; padding:0px 15px;
  }

  .index-item-con p span:nth-child(1) {
    width: 40%; font-size:14px;height: 38px; line-height: 38px;
  }
  .index-item-con p .progress-tab {
    min-width: 55%;font-size:12px; color:#fff;height: 38px;
  }
  .index-item-con p .progress-tab a {
    display: inline-block;
    width:auto; height:22px; line-height:22px; border-radius: 3px; color:#fff; padding:0px 8px;
  }
  .index-item .ivu-form-item {margin-bottom:7px;}
  .status-g { background: #19be6b;}
  .status-y { background: #f90;}
  .status-r { background: #ed3f14;}

  .index-table {
    width:100%;
    height: auto;
    overflow: hidden; padding:0px 20px;
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
</style>
