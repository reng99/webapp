<template>
  <div id="accountSetting">
    <back :title='title' :jumpTo='jumpTo'></back>
    <ul class="pc_list_quick">
      <li v-for="(item , index) in dataLists" :key="index">
        <router-link :to="{path:item.pathTo}"><p>{{item.name}}</p><span></span></router-link>
      </li>
    </ul>
    <p @click="signOut" id="signOut">退出登录</p>
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  export default {
    name: 'accountSetting',
    data() {
      return {
        title : '账号设置',
        jumpTo :'/personalCenter',
        dataLists:[
          {
            name: '个人资料',
            pathTo: '/personalData'
          },
          {
            name: '修改绑定手机',
            pathTo: '/showPhoneNum'
          },
          {
            name: '修改密码',
            pathTo: '/modifyPwd'
          }
        ]
      }
    },
    created: function () {
      var vm = this;
      if (this.$getCookie('logindata')) {
        vm.$router.replace('/accountSetting');
      }else{
         vm.$router.replace('/login');
      }
    },
    methods: {
      signOut: function () {
      let vm = this;
      if(vm.$getCookie('logindata')){
        vm.$delCookie('logindata');
        vm.$toast('退出成功', 2000);
        setTimeout(function(){
          vm.$router.replace('/')
        }.bind(vm),1000)
      }else{
        vm.$toast('已经退出', 2000);
      }
    }
    },
    components: {
      back
    }
  }
  </script>
<style scoped lang="less">
  #accountSetting{
    margin: 0 auto;
    max-width: 60rem;
    .pc_list_quick{
      margin-top:1rem;width: 100%;background: #FFF;padding:0 .9rem;
        li{line-height:4.4rem;height:4.4rem;font-size: 1.3rem;border-bottom: 1px solid #f3f3f3;width: 100%;}
        li a{color:#666;display: block;width: 100%;}
        li:last-child{border-bottom: none;}
        li p{float: left;display:block;width:70%;height: 4.2rem;}
        li span{float: right;display:block;
          height:4.4rem;
          background: url('../../../../static/icons/svg/icon-leftright_gray.svg') right center no-repeat;
          background-size:30%;
          margin-left: .4rem;
          width:4.2rem;
        }
      }
  }
  #signOut{
    width: 100%;
    display: block;
    height: 4.4rem;
    line-height: 4.4rem;
    background: #fff;
    color: #666;
    font-size: 1.3rem;
    text-align: center;
    margin-top: 1rem;
  }
</style>
