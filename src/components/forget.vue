<template>
  <div id="forget">
    <div class="main">
      <div class="tmt-page-header bg-white">
        <div class="row no-margin">
          <div class="col s3 no-padding">
            <a href="javascript:void(0)" @click="goBack" class="tmt-page-top-back">
              <i class="tmt-icons-arrow-leftright"></i>
            </a>
          </div>
          <div class="col s6 no-padding">
            <div class="tmt-page-top-title center">找回密码</div>
          </div>
          <div class="col s3 no-padding">
            <router-link :to="{ path: '/', query: {id:'1'}}"  class="tmt-page-top-icon right">
              <i class="tmt-icons-home right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row tmt-user-forget">
        <div class="col s12 no-padding">
          <input-cell
            :placeholderMsg='"请输入手机号码"'
            :inputType='"tel"'
            :leftInput ='true'
            :dynamic = 'true'
            :dynamicText = '"获取动态码"'
            @getInputMsg='setPhone' />
          <input-cell
            :placeholderMsg='"请输入动态码"'
            :singleInput = 'true'
            @getInputMsg='setDPass' />
          <input-cell
            :placeholderMsg='"请输入新密码"'
            :singleInput = 'true'
            :inputType='"password"'
            @getInputMsg='setPass1' />
          <input-cell
            :placeholderMsg='"请再次输入新密码"'
            :singleInput = 'true'
            :inputType='"password"'
            @getInputMsg='setPass2' />
          <input-cell
            :placeholderMsg='"请输入验证码"'
            :verify='true'
            :leftInput='true'
            :inputType='"text"'
            @getInputMsg='readVerifyNum'  />

            <!--<div class="row fix-ms-login-tab">
              <div class="col s8 no-padding">
                <div class="input-field">
                  <input v-model="forgets.captcha" type="tel" placeholder="请输入验证码">
                </div>
              </div>
              <div class="col s4 no-padding">
                <img :src="img_captcha_api" class="img_captcha_api" @click="getStaticCode">
              </div>
            </div>-->
          <single-btn
            :btnName = '"确 认"'
            @btnEvent = 'btn_ForgetPass' />
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
    data() {
      return {
        msg: '',
        img_captcha_api:'',
        jsonStatue:
          {
            ok:'1',
            err:'-1'
          },
        forgets:
          {
            account:'',
            messageCode:'',
            captcha:'',
            password:'',
            reTypePassword:''
          }
      }
    },
    components: {
      inputCell,
      singleBtn
    },
    methods: {
      goBack: function () {
        let _this = this;
        _this.$router.back(-1)
      },
      setPhone:function (msg) {
        let that = this;
        that.forgets.account = msg;
      },
      setDPass:function (msg) {
        this.forgets.messageCode = msg;
      },
      setPass1:function (msg) {
        this.forgets.password=msg;
      },
      setPass2:function (msg) {
        this.forgets.reTypePassword = msg;
      },
      btn_ForgetPass:function () {
        let that = this;
        if (that.$forgetFuc(that.forgets)) {
          let params=that.forgets;
          that.$getDataWithUrl('/api','/reset_password.view',params,response=>{
            if(response.data.code==that.jsonStatue.ok){
              that.$toast('密码设置成功', 2000);
              setTimeout(function(){
                that.$router.push('/login')
              }.bind(that),2000)
            }else{
              that.$toast(response.data.msg, 2000);
            }
          },'post');
        }
      },
      // getStaticCode:function () {
      //   let that = this;
      //   that.$getDataWithUrl('/api','/img_captcha.view','',response=>{
      //     if(response.data.code==that.jsonStatue.ok){
      //       that.img_captcha_api = "data:image/gif;base64,"+response.data.context;
      //     }
      //   },'get');
      // },
      readVerifyNum: function (msg) {
        var vm = this;
        vm.forgets.captcha = msg.trim();
      }
    },
    computed: {
      code() {

      }
    },
    created:function () {
      // this.getStaticCode();
    },
    watch:{
      code(e){

      }
    }
  }
  </script>
<style scoped lang="less">
  #forget{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    max-width:60rem;
    margin:0 auto;
    .main {
      .tmt-user-login-btn{font-size: 1.4rem;}
      .img_captcha_api{width: 100%;}
    }
  }
  </style>
