<template>
  <div id="modifyPwd">
    <back
     :title='"修改密码"'
      :jumpTo='jumpTo'
      />
    <input-cell
      :inputType='"password"'
      :placeholderMsg = '"当前密码"'
      :singleInput = 'true'
      @getInputMsg='currentPwd'
    />
    <input-cell
      :inputType='"password"'
      :placeholderMsg = '"新密码 至少6位 不能和旧密码相同"'
      :singleInput = 'true'
      @getInputMsg='newPwd'
    />
    <!--<div class="hint">至少6位&nbsp;不能和旧密码相同</div>-->
    <input-cell
      :inputType='"password"'
      :placeholderMsg = '"确认新密码"'
      :singleInput = 'true'
      @getInputMsg='comfirmPwd'
    />
    <single-btn
      :btnName = '"确认修改"'
      @btnEvent = 'comfirmModify' />
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  import singleBtn from '@/components/snippet/singleBtn.vue'
  import inputCell from '@/components/snippet/inputCell.vue'
  export default {
    name: 'modifyPwd',
    data() {
      return {
        jumpTo :'/accountSetting',
        currentPassword: '',
        newPassword: '',
        comfirmPassword: ''
      }
    },
    created: function () {
      var vm = this;
      if(vm.$getCookie('logindata')){
        vm.$router.replace('/modifyPwd');
      }else{
        vm.$router.replace('/personalCenter');
      }
    },
    methods: {
      comfirmModify: function () {
        var vm = this;
        if(vm.currentPassword == ''){
          vm.$toast('当前密码不能为空');
        }else if(vm.newPassword == '' || vm.newPassword.length < 6){
          vm.$toast('新密码格不能少于6位');
        }else if(vm.newPassword == vm.currentPassword){
          vm.$toast('新密码不能和原密码相同');
        }else if(vm.comfirmPassword != vm.newPassword){
          vm.$toast('两次的密码不相同');
        }else{
          vm.$getDataWithUrl('user','/update_password.view',{oldPassword:vm.currentPassword,password:vm.newPassword,reTypePassword:vm.comfirmPassword},response=>{
            if(response.data.code == 1){
              vm.$toast('修改密码成功，请重新登录');
              vm.$delCookie('logindata');
              setTimeout(function(){
                vm.$router.replace('/login');
              },1000);
            }
          },'post');
        }
        // vm.$router.replace('/accountSetting');
      },
      currentPwd: function (msg) {
        this.currentPassword = msg.trim();
      },
      newPwd: function (msg) {
        this.newPassword = msg.trim();
      },
      comfirmPwd: function (msg){
        this.comfirmPassword = msg.trim();
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
  #modifyPwd{
    max-width: 60rem;
    margin: 0 auto;
    .hint{
      width: 90%;
      margin: 0 auto;
      font-size: 1.2rem;
      color: #999;
      margin-top: .6rem;
    }
  }
</style>
