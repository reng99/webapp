<template>
  <div id="modifyNickname">
    <back :title='"修改昵称"' :jumpTo='jumpTo'></back>
    <input-cell
      :placeholderMsg='"请输入您的昵称，不超过14个字符"'
      :singleInput = 'true'
      @getInputMsg='getInputMsg' />
    <single-btn
      :btnName = '"保存修改"'
      @btnEvent = 'saveNickname' />
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  import singleBtn from '@/components/snippet/singleBtn.vue'
  import inputCell from '@/components/snippet/inputCell.vue'
  export default {
    name: 'modifyNickname',
    data() {
      return {
        jumpTo :'/personalData',
        changeInputMsg: '',
      }
    },
    created: function () {
      var vm = this;
    },
    methods: {
      saveNickname: function () {
        var vm = this;
        if(vm.changeInputMsg!=''&&vm.changeInputMsg.length <= 14){
          vm.$getDataWithUrl('/user','/info.view',{nickname:vm.changeInputMsg},response=>{
            vm.$toast('昵称修改成功');
            setTimeout(function(){
              vm.$router.replace('/personalData');
            },1000);
          },'post');
        }else{
          vm.$toast('昵称为空或过长');
        }
      },
      getInputMsg: function(msg) {
        var vm = this;
        vm.changeInputMsg = msg.trim();
        // console.log(msg);
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
  #modifyNickname{
    max-width: 60rem;
    margin: 0 auto;
  }
</style>
