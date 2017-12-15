<template>
  <div id="helpDet">
    <div class="main">
      <div class="tmt-page-header bg-white">
        <div class="row no-margin">
          <div class="col s3 no-padding">
            <a href="javascript:void(0)" @click="goBack" class="tmt-page-top-back">
              <i class="tmt-icons-arrow-leftright"></i>
            </a>
          </div>
          <div class="col s6 no-padding">
            <div class="tmt-page-top-title center">详情</div>
          </div>
          <div class="col s3 no-padding">
            <router-link :to="{ path: '/', query: {id:'1'}}"  class="tmt-page-top-icon right" replace>
              <i class="tmt-icons-home right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="tmt-article-main">
        <p class="tmt-article-title">如何购买商品</p>
        <p class="tmt-article-time">发布作者： 淘米淘官网</p>
        <div class="tmt-aritcle-content">
          <p class="context">1）注册/登录淘米淘账号;<br>
            2）浏览商品;<br>
            3）选择游戏;<br>
            4）选择商品类型，如：账号、道具、游戏币等（若没有对应的商品类型可以选择，则表示暂不支持该商品类型的交易）;<br>
            5）选择区服（若某区服没有对应商品可以选择，则表示暂没有卖家上架相关商品）;<br>
            6）点击商品了解详细信息（图文版可以查看相关图片）;<br>
            7）确定商品后点击购买并支付<br>
            满意商品则点击【立即购买】—并确认购买—接受风险提示—选择支付方式—等待验号;<br>
            8）联系在线客服<br>
            客服会根据您预留的QQ添加您核实订单号后进行后续操作;<br>
            9）配合客服发货<br>
            部分账号交易需要您配合解绑换绑，请保持联系方式畅通;<br>
            10）收到商品<br>
            收到商品就赶紧去游戏里面尽情happy吧！商品没有问题别忘了确认收货哦。</p>
          <div class="h10"></div>
          <p><a href="javascript:;" class="ui-link">【在线客服】</a></p>
        </div>
      </div>
      <div class="h10"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'article',
    data() {
      return {

      }
    },
    methods: {
      goBack: function () {
        let _this = this;
        _this.$router.back(-1)
      }
    }
  }
</script>
<style scoped lang="less">
  #helpDet {
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
      flex-grow: 1;
      .tmt-article-main{padding:.75rem;background:#fff;border-bottom: 1px solid #ddd;
        p{margin: 0;padding: 0;}
        .tmt-article-title{font-size:1.6rem;}
        .tmt-article-time{color:#999;border-bottom: 1px solid #eee;padding-bottom:1rem !important;margin-bottom:1rem !important;}
        .tmt-aritcle-content{font-size: 1.2rem;
          p{font-size: 1.2rem;}
          p.context{color:#666;}
        }
      }
    }
  }
</style>
