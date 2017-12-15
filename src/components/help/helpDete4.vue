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
        <p class="tmt-article-title">免责声明说明</p>
        <p class="tmt-article-time">发布作者： 淘米淘官网</p>
        <div class="tmt-aritcle-content">
          <p class="context t2em">本网站在国家相关法律法规规定的范围内，只按现有状况提供虚拟物品在线交易第三方网络平台服务，本网站及其所有者非交易一方，也非交易任何一方之代理人或代表；同时，本网站及其所有者也未授权任何人代表或代理本网站及其所有者从事任何网络交易行为或做出任何承诺、保证或其他类似行为，除非有明确的书面授权。</p>
          <p class="context t2em">鉴于互联网及网络交易的特殊性，本网站无法鉴别和判断相关交易各主体之民事权利和行为能力、资质、信用等状况，也无法鉴别和判断虚拟交易或正在交易或已交易之虚拟物品来源、权属、真伪、性能、规格、质量、数量等权利属性、自然属性及其他各种状况。因此，交易各方在交易前应加以仔细辨明，并慎重考虑和评估交易可能产生的各项风险。</p>
          <p class="context t2em">本网站不希望出现任何因虚拟物品交易而在用户之间及用户与游戏开发运营商之间产生纠纷，但并不保证不发生该类纠纷。对于因前述各类情形而产生的任何纠纷，将由交易各方依据中华人民共和国现行的有关法律通过适当的方式直接加以解决，本网站及其所有者不参与其中；对于因此类交易而产生的各类纠纷之任何责任和后果，由交易各方承担，本网站及其所有者不承担任何责任及后果。</p>
          <p class="context t2em">本网站不希望出现任何人利用本网站或因使用本网站而侵犯他人合法权益的行为，但并不保证不会发生此类行为或类似行为。本网站将依据中国法律采取必要的措施防止发生前述各类行为或降低发生这类行为的可能性或者降低由此造成的损失及其后果。对于因前述各类情形而产生的任何纠纷，将由权利受到侵害之人和侵权方依据中华人民共和国现行的有关法律通过适当的方式直接加以解决，本网站及其所有者不参与其中；对于因此类行为产生的各类纠纷之任何责任和后果，由相关责任方承担，本网站及其所有者不承担任何责任及后果。</p>
          <p class="context t2em">任何非本网站责任而产生的任何其他纠纷，概由纠纷各方依据中国相关法律以适当的方式直接加以解决，本网站不参与其中；对于因该类行为产生的各类纠纷之任何责任和后果，由相关各方承担，本网站及其所有者不承担任何责任及后果。</p>
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
