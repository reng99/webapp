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
        <p class="tmt-article-title">账号交易协议</p>
        <p class="tmt-article-time">发布作者： 淘米淘官网</p>
        <div class="tmt-aritcle-content">
          <p class="context"><b>买家安全交易服务协议</b>
          </p>
          <p class="context t2em">欢迎阅读淘米淘手机网络游戏服务网站《淘米淘买家服务协议》条款，本协议建立在您接受《淘米淘手机网络游戏服务网站服务协议》基础之上，如您要使用淘米淘所提供的网络游戏物品交易服务，您需要注意并遵守以下内容：<br>1.买家有义务在交易前验证客服QQ的真假，因买家没有验证客服真假造成买家损失的淘米淘概不负责也不承担任何责任。<br>2.淘米淘有权验证在交易过程中您使用的QQ是否与填单QQ相一致，并有权无条件拒绝QQ不一致的寄售交易。<br>3.由于虚拟交易的特殊性，购买物品存在一定的风险。淘米淘会尽可能引导您进行相关资料的更改，保证您的账号安全。淘米淘和您一样无法辨别物品的来源，如果发生意外淘米淘可以提供一份“交易证明”，证明您是在淘米淘合法购买的此物品，您可以联系游戏官方网站找回。  <br>4.淘米淘不审核道具类商品的市场价值，请您购买时再三确认是否要交易。若交易成功后，您对道具类商品市场价值有异议，淘米淘概不负责也不承担任何法律责任。<br>5.所有账号交易，在您交易成功后，由于您的原因造成的账号被盗，物品丢失淘米淘概不负责。</p>
          <p class="context t2em">凡通过淘米淘网站购买商品，即表示接受并遵守以上内容。 此协议建立在遵守《淘米淘手机网络游戏服务网站服务协议》基础上，如本协议与《淘米淘手机网络游戏服务网站服务协议》内容冲突，以本协议为准。 本服务协议双方为本网站与使用本网站寄售交易服务用户，本服务协议具有合同效力。<br><b>卖家安全交易服务协议</b><br>欢迎阅读淘米淘手机网络游戏服务网站《淘米淘卖家服务协议》条款，本协议建立在您接受《淘米淘手机网络游戏服务网站服务协议》基础之上，如您要使用淘米淘所提供的网络游戏物品交易服务，您需要注意并遵守以下内容：1.在您发布商品前请您确保您的商品真实存在，属于合法所得。且获得此物品之方式不违反该网络游戏开发商及运营商之相关游戏规定。<br>2.在您使用淘米淘进行交易时，请确保您的账号信息与您描述的完全符合，并保证在交易前账号属性不会发生变化。如发生变化请在原商品中添加说明。<br>3.淘米淘有权检查您的账号信息的真实性，如有出入淘米淘有权拒绝为此商品提供交易服务。<br>
            4.在您发布商品之后请您保持您的通信正常，若因联系不到卖家而造成的订单取消，淘米淘不承担任何责任。<br>
            5.物品交易后您不得再用任何直接或者间接的方式取回商品。如需取回商品，再与买家达成共识的情况下，方可取回商品。<br>
            6.在买家与您完成整个交易后，您不再拥有该物品的使用权，您不得以任何形式取回商品，如有发现恶意追回，淘米淘有权从卖家的淘米淘账户扣除买家所支付的款项，同时锁定卖家的账号和冻结资金。<br>
            凡通过淘米淘网站出售商品，即表示接受并遵守以上内容。 此协议建立在遵守《淘米淘手机网络游戏服务网站服务协议》基础上，如本协议与《淘米淘手机网络游戏服务网站服务协议》内容冲突，以本协议为准。 本服务协议双方为本网站与使用本网站寄售交易服务用户，本服务协议具有合同效力。</p>
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
