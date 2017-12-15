<template>
  <div id="modifyQq">
    <back :title='"修改QQ"' :jumpTo='jumpTo'></back>
    <input-cell
      :inputType = '"tel"'
      :placeholderMsg='"请输入您的QQ"'
      :singleInput = 'true'
      @getInputMsg='getInputMsg' />
    <single-btn
      :btnName = '"保存修改"'
      @btnEvent = 'saveQq' />
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  import inputCell from '@/components/snippet/inputCell.vue'
  import singleBtn from '@/components/snippet/singleBtn.vue'
  export default {
    name: 'modifyQq',
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
      saveQq: function () {
        var vm = this;
        if(vm.changeInputMsg != '' && vm.isQQ(vm.changeInputMsg)){
          vm.$getDataWithUrl('/user','/info.view',{qq:vm.changeInputMsg},response=>{
            vm.$toast('QQ号修改成功');
            setTimeout(function(){
              vm.$router.replace('/personalData');
            },1000);
          },'post');
        }else{
          vm.$toast('QQ号为空或不存在');
        }
      },
      getInputMsg: function(msg) {
        var vm = this;
        vm.changeInputMsg = msg.trim();
      },
      isQQ: function (aQQ){
        var bValidate = RegExp(/^[1-9][0-9]{4,9}$/).test(aQQ);
        if(bValidate){
          return true;
        }else{
          return false;
        }
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
  #modifyQq{
    max-width: 60rem;
    margin: 0 auto;
  }
</style>
