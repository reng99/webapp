<template>
  <div id="verifyUserId">
    <back
     :title='"实名验证"'
      :jumpTo='jumpTo'
      />
    <p class="hint"><i class="note"></i>请填写您的真实信息，通过后将不能修改</p>
    <input-cell
      :inputType='"text"'
      :placeholderMsg = '"请输入身份证号码"'
      :singleInput = 'true'
      @getInputMsg='verifyIdNum'
    />
    <input-cell
      :inputType='"text"'
      :placeholderMsg = '"请输入真实姓名"'
      :singleInput = 'true'
      @getInputMsg='verifyRealName'
    />
    <single-btn
      :btnName = '"提交验证"'
      @btnEvent = 'comfirmModify' />
    <p class="err-hint" v-if="errHintFlag">实名验证失败</p>
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  import singleBtn from '@/components/snippet/singleBtn.vue'
  import inputCell from '@/components/snippet/inputCell.vue'
  export default {
    name: 'verifyUserId',
    data() {
      return {
        jumpTo : '/personalData',
        idNum : '',
        realName : '',
        errHintFlag: false
      }
    },
    methods: {
      comfirmModify: function () {
        var vm = this;
        if(vm.idNum == ''|| vm.realName==''){
          vm.$toast('验证失败');
        }else{
          console.log("身份证号是"+vm.idNum+",真实姓名是"+vm.realName);
          vm.$router.replace('/verifyUserIdSucc');
        }
        // vm.$router.replace('/verifyPhone');
      },
      verifyIdNum: function (msg) {
        this.idNum = msg.trim();
      },
      verifyRealName: function (msg) {
        this.realName = msg.trim();
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
  #verifyUserId{
    max-width: 60rem;
    margin: 0 auto;
    .hint{
      width: 90%;
      height: 1.3rem;
      margin:0 auto;
      margin-top: .8rem;
      font-size: 1.3rem;
      color: #999;
      display: flex;
      i.note{
        width:1.3rem;
        height: 1.3rem;
        display: block;
        background: url('../../../../static/icons/svg/sm_note.svg') no-repeat center center;
        background-size: cover;
        margin-right: .4rem;
      }
    }
    .err-hint{
      width: 90%;
      margin: 0 auto;
      margin-top: 1rem;
      color: red;
    }
  }
</style>
