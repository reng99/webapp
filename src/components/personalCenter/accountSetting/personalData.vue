<template>
  <div id="personalData">
    <back :title='title' :jumpTo='jumpTo'></back>
    <ul class="dataContent">
      <li>
        <router-link :to="{path:'/modifyNickname'}" class="a-link">
          <p class="typeName">昵称</p>
          <span class="typeValue">{{nickName}}<i></i></span>
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/modifyQq'}" class="a-link">
          <p class="typeName">QQ</p>
          <span class="typeValue">{{userQQ}}<i></i></span>
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/showPhoneNum'}" class="a-link">
          <p class="typeName">手机号码</p>
          <span class="typeValue">{{phoneNum}}<i></i></span>
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/verifyUserId'}" class="a-link">
          <p class="typeName">实名认证</p>
          <span class="typeValue">未认证<i></i></span>
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/cashierAccount'}" class="a-link">
          <p class="typeName">收款账号</p>
          <span class="typeValue">5371537155868</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  export default {
    name: 'personalData',
    data() {
      return {
        title : '个人资料',
        jumpTo :'/accountSetting',
        phoneNum: '',
        nickName:'',
        userQQ:''
      }
    },
    created: function () {
      var vm = this;
      if (vm.$getCookie('logindata')) {
        vm.getUserData();
      }else{
        vm.$router.replace('/login')
      }
    },
    methods: {
      getUserData:function () {
        // let that = this;
        // that.phoneNum=JSON.parse(that.$getCookie('logindata')).account.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
        // let un = that.$getCookie('logindata').nickname;
        // if(un==null || un==""){
        //   that.userName = "未填写"
        // }else{
        //   that.userName = un;
        // }
        // let qq = that.$getCookie('logindata').qq;
        // if(qq==null || qq==""){
        //   that.userQQ = "未填写"
        // }else{
        //   that.userQQ = qq;
        // }
        var vm = this;
        vm.$getDataWithUrl('/user','/info.view',{},response => {
          if(response.data.code == 1){
            var body = response.data.context;
            vm.nickName= body.nickname == '' ? '未填写' : body.nickname;
            vm.userQQ = body.qq == '' ? '未填写' : body.qq;
            vm.phoneNum = body.mobilePhone == '' ? '未填写' : body.mobilePhone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
          }else{
            vm.$router.replace('/login');
          }
        },'get');
      },
    },
    components: {
      back
    }
  }
  </script>
<style scoped lang="less">
  #personalData{
    max-width: 60rem;
    margin: 0 auto;
    .dataContent{
      margin-top: 1rem;
      background: #fff;
      width: 100%;
      padding: 0 .9rem;
      li{
        height: 4.4rem;
        line-height: 4.4rem;
        font-size: 1.3rem;
        border-bottom: 1px solid #f3f3f3;
        width: 100%;
        .a-link{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          font-size: 1.3rem;
          color: #666;
          .typeValue{
            flex-direction: row;
            align-items: center;
            padding-right: 1.8rem;
            color: #999;
            background: url('../../../../static/icons/svg/icon-leftright_gray.svg') right center no-repeat;
            background-size: 1.2rem 1.2rem;
          }
        }
      }
    }
  }
</style>
