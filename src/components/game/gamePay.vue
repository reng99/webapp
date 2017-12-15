<template>
  <div id="gamePay">
    <div class="main">
      <div class="tmt-page-header bg-main">
        <div class="row no-margin">
          <div class="col s3 no-padding">

          </div>
          <div class="col s6 no-padding">
            <div class="tmt-page-top-title center">支付确认</div>
          </div>
          <div class="col s3 no-padding">
            <router-link :to="{ path: '/', query: {id:'1'}}"  class="tmt-page-top-icon right" replace>
              <i class="tmt-icons-home right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="tmt-pay-information yellow darken-2">请在 <b class="deep-orange-text">30</b> 分钟 内付款</div>
      <div class="tmt-order-frame white">
        <div class="h10"></div>
        <div class="tmt-icons-success"></div>
        <div class="tmt-collection-head">
          订单提交成功
        </div>
        <div class="h10"></div>
        <div class="h10"></div>
        <div class="row no-margin">
          <div class="col s12 tmt-submit-order-price">
            <p class="no-margin">商品名称：1000金币+500将魂礼包</p>
            <p class="no-margin">数量：<abbr>1</abbr></p>
            <p class="no-margin">单价：<abbr class="taomitao-blue-text">21.60</abbr></p>
            <p class="no-margin">应付金额 ：<b class="red-text">¥ 21.60</b></p>
          </div>
        </div>
        <div class="h10"></div>
      </div>
      <div class="tmt-order-bill">
        <div class="input-field clearfix">
          <a href="#" class="waves-effect waves-light btn btn-block w100 tmt-submit-order-btn blue">支付宝支付</a>
        </div>
        <div class="input-field clearfix">
          <a href="#" class="waves-effect waves-light btn btn-block w100 tmt-submit-order-btn green darken-1">信用卡支付</a>
        </div>
        <div class="input-field clearfix">
          <a href="#" class="waves-effect waves-light btn btn-block w100 tmt-submit-order-btn taomitao-blue">银联储蓄卡</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'gamePay',
    data() {
      return {
        msg: ''
      }
    }
  }
  </script>
<style scoped lang="less">
  #gamePay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    margin: 0 auto;
    .main {
      .tmt-pay-information{width: 100%;color:#FFF;padding:1rem;font-size: 1.2rem;}
      .tmt-submit-order-price{
        p{font-size: 1.2rem;color:#999;
          b{font-size:2rem;}
          abbr{font-size: 1.6rem;}
        }
      }
      .tmt-submit-order-btn{font-size: 1.4rem;}
      .tmt-order-bill{padding: 0 1rem;}
    }
  }
  </style>
