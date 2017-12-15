<template>
  <div id="showPhoneNum">
    <back
     :title='"手机号码"'
      />
    <div class="showPhone">
      <p class="label">当前手机号码 :</p>
      <p class="phoneNum">{{phoneNum}}</p>
      <aside class="hint">
        <p>更改手机号码不影响您的认证，余额等账户信息</p>
        <p>更改手机号码之后，请用新的手机号码登录</p>
      </aside>
    </div>
    <single-btn
      :btnName = '"更改手机号码"'
      @btnEvent = 'changePhoneNum' />
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  import singleBtn from '@/components/snippet/singleBtn.vue'
  export default {
    name: 'showPhoneNum',
    data() {
      return {
        phoneNum:''
      }
    },
    created: function () {
      let vm = this;
      if (vm.$getCookie('logindata')) {
        vm.getUserData();
      }else{
        vm.$router.replace('/login')
      }
    },
    methods: {
      changePhoneNum: function () {
        var vm = this;
        vm.$router.replace('/verifyPhone');
      },
      getUserData:function () {
        var vm = this;
        vm.$getDataWithUrl('/user','/info.view',{},response=>{
          vm.phoneNum = response.data.context.mobilePhone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
          console.log();
        },'get');
      }
    },
    components: {
      back,
      singleBtn
    }
  }
  </script>
<style scoped lang="less">
  #showPhoneNum{
    max-width: 60rem;
    margin: 0 auto;
    .showPhone{
      width: 90%;
      margin: 1rem auto;
      margin-bottom: 3rem;
      .label{
        color: #666;
        font-size: 1.3rem;
      }
      .phoneNum{
        color: #333;
        font-size: 2.2rem;
        margin: .3rem 0  .4rem 0;
      }
      .hint{
        color: #999;
        font-size: 1.2rem;
      }
    }
  }
</style>
