<template>
  <div id="login">
    <div class="main">
      <div class="tmt-page-header bg-main">
        <div class="row no-margin">
          <div class="col s3 no-padding">
            <a href="javascript:void(0)" @click="goBack" class="tmt-page-top-back">
              <i class="tmt-icons-arrow-leftright"></i>
            </a>
          </div>
          <div class="col s6 no-padding">
            <div class="tmt-page-top-title center"></div>
          </div>
          <div class="col s3 no-padding">
            <router-link :to="{ path: '/', query: {id:'1'}}"  class="tmt-page-top-icon right" replace>
              <i class="tmt-icons-home right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="logo"></div>
      <div class="three-tabs row no-margin-bottom">
        <router-link class="col s6 center" v-for="(item,index) in tabNames" :to="{path:'/login',query:{state:item.state}}" :key="index" @click.native="activeTab(index)">
          <p class="tab-name main-color" v-if="activeTabClass==index">{{item.name}}</p>
          <p class="tab-name" v-else>{{item.name}}</p>
          <span class="underline bg-main" v-show="activeTabClass==index"></span>
        </router-link>
      </div>
      <div class="row tmt-user-login">
        <div class="col s12 no-padding">
          <div class="row no-padding">
            <div class="loginPass" id="loginPass" v-show="passDiv_main">
              <input-cell
                :placeholderMsg='"请输入手机号码"'
                :singleInput = 'true'
                @getInputMsg='setPhone1' />
              <input-cell
                :placeholderMsg='"请输入密码"'
                :singleInput = 'true'
                :inputType='"password"'
                @getInputMsg='setPass1' />
              <single-btn
                :btnName = '"立即登录"'
                @btnEvent = 'btn_LoginByPass' />
            </div>
            <div class="loginSMS" id="loginSMS" v-show="SMSDiv_main">
              <input-cell
                :placeholderMsg='"请输入手机号码"'
                :leftInput ='true'
                :dynamic = 'true'
                :dynamicText = '"获取动态码"'
                @getInputMsg='setPhone2' />
              <input-cell
                :placeholderMsg='"请输入动态码"'
                :singleInput = 'true'
                :inputType='"tel"'
                @getInputMsg='setPass2' />
              <single-btn
                :btnName = '"立即登录"'
                @btnEvent = 'btn_LoginBySMS' />
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <div class="col s6">
                <router-link :to="{ path: '/register', query: {id:'1'}}"  class="taomitao-blue-text">
                  免费注册
                </router-link>
              </div>
              <div class="col s6">
                <router-link :to="{ path: '/forget', query: {id:'1'}}"  class="taomitao-blue-text right">
                  忘记密码
                </router-link>
              </div>
            </div>
          </div>
          <div class="other-accounts">
            <div class="accounts-hint">
              <span class="line"></span>
              <span class="title">第三方登录</span>
              <span class="line"></span>
            </div>
            <div class="accounts">
              <a class="btn" href="http://url.cn/5JrhKwf"><i class="forQq"></i>QQ登录</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import singleBtn from '@/components/snippet/singleBtn.vue'
  import inputCell from '@/components/snippet/inputCell.vue'
  export default {
    name: 'login',
    data () {
      return {
        msg: '',
        passDiv_main:true,
        noRegister:false,
        SMSDiv_main:false,
        jsonStatue:
          {
            ok:'1',
            err:'-1',
          },
        activeTabClass: 0,
        jumpTo :'/login',
        tabNames:[
          {state:'bp',name:'密码登录'},
          {state:'bs',name:'短信登录'}
        ],
        loginBP:
          {
            username:'',
            password:'',
            loginType:1
          }
        ,
        loginBS:
          {
            username:'',
            password:'',
            loginType:2
          }
      }
    },
    mounted(){
      if(this.$getCookie('logindata')){
        this.$router.push('/')
      }
    },
    computed: {
      code() {

      }
    },
    watch:{
      code(e){
      }
    },
    created: function () {

    },
    components: {
      inputCell,
      singleBtn
    },
    methods: {
      setPhone1:function (options) {
        this.loginBP.username = options;
      },
      setPhone2:function (options) {
        this.loginBS.username = options;
      },
      setPass1:function (options) {
        this.loginBP.password = options;
      },
      setPass2:function (options) {
        this.loginBS.password = options;
      },
      activeTab : function (index){
        this.activeTabClass = index;
        if(index==0){
          this.passDiv_main = true;
          this.SMSDiv_main = false;
        }else{
          this.SMSDiv_main = true;
          this.passDiv_main = false;
        }
      },
      goBack: function () {
        let _this = this;
        _this.$router.back(-1)
      },
      btn_LoginByPass: function () {
        let that = this;
        if (that.$loginBP(this.loginBP)) {
          let params=that.loginBP;
          that.$getDataWithUrl('/login_submit.view','',params,response=>{
            if(response.data.code==that.jsonStatue.ok){
              this.$toast('登录成功');
              let datas = JSON.stringify(response.data.context);
              that.$setCookie('logindata',datas,1000*60);
              setTimeout(function(){
               that.$router.back(-1);
              }.bind(that),500)
            }else{
              this.$toast(response.data.msg);
            }
          },'post');
        }
      },
      btn_LoginBySMS: function () {
        let that = this;
        if (that.$loginBS(this.loginBS)) {
          let params=that.loginBS;
          that.$getDataWithUrl('/login_submit.view','',params,response=>{
            if(response.data.code==that.jsonStatue.ok){
              this.$toast('成功');
              let datas = JSON.stringify(response.data.context);
              that.$setCookie('logindata',datas,1000*60);
              setTimeout(function(){
                that.$router.push('/')
              }.bind(that),3000)
            }else{
              this.$toast(response.data.msg);
            }
          },'post');
        }
      }
    }
  }
</script>

<style scoped lang="less">
  #login{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    max-width:60rem;
    margin:0 auto;
    .main{
      flex-grow: 1;
      .tmt-page-top-icon i.tmt-icons-home{background: url('../../static/icons/svg/icon_home_white.svg') center center no-repeat;background-size:50%;}
      .tmt-page-top-back i.tmt-icons-arrow-leftright{width: 4.4rem;height: 4.4rem;background: url('../../static/icons/svg/icon-leftright-white.svg') center center no-repeat;-webkit-transform: rotate(180deg);transform: rotate(180deg);background-size:50%;display: inline-block;}
      .logo{width: 100%;height: 11rem;background: #09c7d1 url("../../static/icons/svg/user_logo.svg") center center no-repeat;background-size:27%;}
      .tmt-user-login{font-size: 1.2rem;}
      .tmt-user-login input{font-size:2rem !important;}
      .tmt-user-login-tab{
        width: 100%;overflow: hidden;
        li{
          height: 4.4rem;line-height: 4.4rem;
          a{display: block;width: 100%;font-size: 1.2rem;text-align: center;border-bottom:1px solid #eee;height: 4.4rem;color:#666;}
          a.active{border-bottom:1px solid #09c7d1;color:#09c7d1;}
        }
      }
      .tmt-user-login-btn{font-size: 1.4rem;}
      .fix-ms-login-tab{margin-bottom:10px !important;}
      .tmt-page-header{border-bottom: none;}
    }
    .three-tabs{
      width:100%;
      height:4.4rem;
      background:#fff;
      z-index: 9999;
      .tab-name{
        height:4.2rem;
        line-height:4.2rem;
        color: #999;
        font-size: 1.4rem;
      }
      .underline{
        display:block;
        width:1.6rem;
        height:.2rem;
        margin:0 auto;
      }
    }
    .register-hint{
      flex-shrink: 0;
      height:4.4rem;
      display:flex;
      flex-direction: row;
      align-items:center;
      justify-content:center;
    }
    .other-accounts{
      width: 90%;
      margin: 0 auto;
    }
    .accounts-hint{
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      .line{
        width: 38%;
        height: .1rem;
        background: #e5e5e5;
      }
      .title{
        color: #ccc;
        font-size: 1.3rem;
      }
    }
    .accounts{
      margin-top:1.5rem;
      text-align: center;
      .btn{
        display: block;
        color:#999;
        background: #fff;
        width: 100%;
        height: 4.4rem;
        font-size:1.4rem;
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: .4rem;
        i.forQq{
          width: 2rem;
          height: 2rem;
          background: url('../../static/icons/svg/QQ.svg') no-repeat center center;
          background-size: 80%;
          margin-right: .4rem;
        }
      }
    }
  }
</style>
