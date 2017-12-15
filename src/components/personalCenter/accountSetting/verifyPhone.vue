<template>
  <div id="verifyPhone">
    <back
     :title='"验证手机"'
      :jumpTo='jumpTo'
      />
    <input-cell
      :dynamicText = '"获取动态码"'
      :dynamic = 'true'
      :inputType='"tel"'
      :placeholderMsg = '"请输入当前手机"'
      :leftInput = 'true'
    />
    <input-cell
      :inputType='"tel"'
      :placeholderMsg = '"请输入动态码"'
      :singleInput = 'true'
      @getInputMsg='readVerifyNum'
    />
    <single-btn
      :btnName = '"下一步"'
      @btnEvent = 'nextStep'
     />
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  import inputCell from '@/components/snippet/inputCell.vue'
  import singleBtn from '@/components/snippet/singleBtn.vue'
  export default {
    name: 'verifyPhone',
    data() {
      return {
        jumpTo :'/showPhoneNum',
        getPhoneNum: '',
        getVerifyNum: ''
      }
    },
  created: function () {
    let that = this;
    if (that.$getCookie('logindata')) {
      // that.getUserData();
    }else{
      that.$router.replace('/login')
    }
  },
    methods: {
      // getPhoneNum:function (msg) {
      //   var vm = this;
      //   vm.getPhoneNum = msg.trim();
      // },
      readVerifyNum: function (msg) {
        var vm = this;
        vm.getVerifyNum = msg.trim();
      },
      nextStep: function () {
        var vm = this;
        console.log("验证码是:"+vm.getVerifyNum);
        //  vm.$router.replace('/verifyPhone');
      }
    },
    components: {
      back,
      inputCell,
      singleBtn
    }
  }
  </script>
<style scoped lang="less">
  #verifyPhone{
    max-width: 60rem;
    margin: 0 auto;
  }
</style>
