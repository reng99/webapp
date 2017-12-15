<template>
  <div id="verifyUserIdSucc">
    <back
      :title = '"验证结果"'
      :jumpTo = 'jumpTo'/>
    <dl class="hint-msg">
      <dt><i></i>实名认证成功！</dt>
      <dd><span class="labelName">真实姓名&nbsp;:</span><span class="content">你个小子</span></dd>
      <dd><span class="labelName">身份证号&nbsp;:</span><span class="content">23366*****6233</span></dd>
    </dl>
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  export default {
    name: 'verifyUserIdSucc',
    data () {
      return {
        jumpTo: '/verifyUserId'
      }
    },
    components: {
      back
    },
    created : function () {
      var vm = this;
    },
    methods:{

    }
  }
</script>
<style lang="less" scoped>
  #verifyUserIdSucc{
    max-width: 60rem;
    margin: 0 auto;
    .hint-msg{
      width: 90%;
      display: block;
      height: 17rem;
      background-image: linear-gradient(-199deg, #15E5EA 0%, #09C7D1 100%);
      box-shadow: 0 8px 12px 0 rgba(9,199,209,.35);
      margin:0 auto;
      margin-top: 2rem;
      color: #fff;
      border-radius: .6rem;
      font-weight: lighter;
      dt{
        font-size: 2.1rem;
        margin: 0 auto;
        height: 3rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5rem 0 4rem 0;
        i{
          width: 3rem;
          height: 3rem;
          background: url("../../../../static/icons/svg/sm_cg.svg") no-repeat left center;
          background-size: 80%;
          margin-right: .4rem;
        }
      }
      dd{
        width: 80%;
        margin: 0 auto;
        font-size: 1.3rem;
        margin-bottom: 1.2rem;
        .content{
          margin-left: .6rem;
        }
      }
    }
  }
</style>
