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
        <p class="tmt-article-title">如何出售商品？</p>
        <p class="tmt-article-time">发布作者： 淘米淘官网</p>
        <div class="tmt-aritcle-content">
          <p class="context"><b>基本流程：</b>注册/登录账号>发布商品信息>移交商品>收款到账<br>
            <b>具体操作：</b><br>
          </p>
          <p class="context t2em">注册/登陆“淘米淘”账号，在网站首页、个人中心或其他页面点击【我要卖】开始发布商品。
            首先请在“发布交易”页面选择游戏类型相关属性：游戏名 > 交易分类 > 交易类型 > 出售方式 > 客户端，完成后点击“下一步”。（温馨提示：部分商品交易成功后平台收取一定的平台服务费）<br>进入“填写商品信息”页，卖家需要进一步填写：商品信息 > 游戏账号信息 > 密保信息 > 交易选项等详细信息，确定“发布交易”信息无误后，点击“确定并发布”完成发布交易流程。</p>
          <p class="context t2em">等待官方审核，此时您可以在【个人中心】 > 【我是卖家】 > 【管理我的商品】 > 相应状态栏目中查看刚刚发布交易信息和审核状态。（温馨提示：请保持手机开机或及时查看QQ消息，等待客服与您联系进行交易） 。
            商品审核通过，卖家可以在管理我的商品查看已上架的商品，与此同时您也可以点击“编辑商品”再次编辑或“下架”等操作来管理您的商品。(仅修改价格无需审核直接上架，使用“编辑商品”修改商品需要审核后上架。)
            到此为止，“出售/发布商品”的所有流程已完成。当有买家购买了您上架的商品时，官方客服将会第一时间与您联系，全程帮助您完成账号交易手续。<br>买家“确定收货”后，卖出的金额将转入您的支付宝或银行卡内。</p>
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
          p.t2em{text-indent: 2em;}
        }
      }
    }
  }
</style>
