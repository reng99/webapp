<template>
  <div id="cashierAccount">
    <back :title='"收款账号"' :jumpTo='jumpTo'/>
    <input-cell
      :inputType = '"text"'
      :placeholderMsg = '"请输入您的账号"'
      :rightInput = 'true'
      :labelName = '"支付宝"'
      @getInputMsg = 'getZhifubaoNum'/>
    <input-cell
      :inputType = '"text"'
      :placeholderMsg = '"请输入您的姓名"'
      :rightInput = 'true'
      :labelName = '"姓名"'
      @getInputMsg = 'getName'/>
    <p class="hint">请认真核对您的收款信息，以免在造成您的损失。</p>
    <single-btn
      :btnName = 'btnName'
      @btnEvent = 'saveCashierAccount' />
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  import inputCell from '@/components/snippet/inputCell.vue'
  import singleBtn from '@/components/snippet/singleBtn.vue'
  export default {
    name: 'cashierAccount',
    data () {
      return {
        jumpTo: '/personalData',
        hasAccount: false,
        btnName:'',
        showZhifubaoNum:'',
        showName:''
      }
    },
    created: function () {
      var vm = this;
      vm.hasAccount ? (vm.btnName = '修改') : (vm.btnName = '保存');
    },
    components: {
      back,
      inputCell,
      singleBtn
    },
    methods: {
      saveCashierAccount: function () {
        var vm = this;
        console.log('支付宝是:'+vm.showZhifubaoNum+'姓名是:'+vm.showName);
      },
      getZhifubaoNum: function (msg){
        var vm = this;
        vm.showZhifubaoNum = msg.trim();
      },
      getName: function (msg){
        var vm = this;
        vm.showName = msg.trim();
      }
    }
  }
</script>
<style lang="less" scoped>
  #cashierAccount{
    max-width: 60rem;
    margin: 0 auto;
    .hint{
      width: 90%;
      margin: 0 auto;
      color: #999;
      margin-top: 1rem;
    }
  }
</style>
