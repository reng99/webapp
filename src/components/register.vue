<template>
  <div id="register">
    <div class="main">
      <div class="tmt-page-header bg-white">
        <div class="row no-margin">
          <div class="col s3 no-padding">
            <a href="javascript:void(0)" @click="goBack" class="tmt-page-top-back">
              <i class="tmt-icons-arrow-leftright"></i>
            </a>
          </div>
          <div class="col s6 no-padding">
            <div class="tmt-page-top-title center">注册</div>
          </div>
          <div class="col s3 no-padding">
            <router-link :to="{ path: '/', query: {id:'1'}}"  class="tmt-page-top-icon right" replace>
              <i class="tmt-icons-home right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row tmt-user-register">
        <div class="col s12 no-padding">
          <input-cell
            :placeholderMsg='"请输入手机号码"'
            :leftInput ='true'
            :dynamic = 'true'
            :register = 'true'
            :dynamicText = '"获取动态码"'
            @getInputMsg='setPhone' />
          <input-cell
            :placeholderMsg='"请输入动态码"'
            :singleInput = 'true'
            @getInputMsg='setCode' />
          <input-cell
            :placeholderMsg='"请输入密码"'
            :singleInput = 'true'
            :inputType='"password"'
            @getInputMsg='setPass1' />
          <input-cell
            :placeholderMsg='"请再次输入密码"'
            :singleInput = 'true'
            :inputType='"password"'
            @getInputMsg='setPass2' />
          <div class="h10"></div>
            <div class="row fix-ms-login-tab">
              <div class="col s12">
                <p class="tmt-order-deal">
                  <input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
                  <label for="filled-in-box" @click="withDeal">我已阅读并同意<a href="#">《淘米淘交易平台服务协议》</a>
                  </label>
                </p>
              </div>
            </div>
          <single-btn
            :btnName = '"立即注册"'
            @btnEvent = 'btn_Register' />
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="col s6">
            &nbsp;
          </div>
          <div class="col s6">
            <router-link :to="{ path: '/login', query: {id:'1'}}"  class="taomitao-blue-text right f14">
              已有账号？立即登录
            </router-link>
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
    name: 'register',
    data () {
      return {
        msg: '',
        deal:true,
        jsonStatue:
          {
            ok:'1',
            err:'-1',
          },
        regist:
          {
            account:'',
            captcha:'',
            password:'',
            reTypePassword:''
          }
      }
    },
    methods: {
      goBack: function () {
        let _this = this;
        _this.$router.back(-1)
      },
      setPhone:function (msg) {
        let that = this;
        that.regist.account = msg;
      },
      setPass1:function (msg) {
        this.regist.password=msg;
      },
      setPass2:function (msg) {
        this.regist.reTypePassword = msg;
      },
      setCode:function (msg) {
        this.regist.captcha = msg;
      },
      withDeal:function () {
        let that = this;
        if(that.deal==true){
          that.deal = false;
        }else{
          that.deal = true;
        }
      },
      btn_Register: function () {
        let that = this;
        if (that.$registFuc(that.regist)) {
            let params=that.regist;
            if(that.deal==false) {
              that.$getDataWithUrl('/api', '/signup.view', params, response => {
                if (response.data.code == that.jsonStatue.ok) {
                  that.$toast('注册成功', 2000);
                  setTimeout(function () {
                    that.$router.push('/login')
                  }.bind(that), 2000)
                } else {
                  that.$toast(response.data.msg, 2000);
                }
              }, 'post');
            }else{
              that.$toast('请勾选服务协议');
            }
        }
      }
    },
    components: {
      inputCell,
      singleBtn
    },
    computed: {
      code() {

      }
    },
    watch:{
      code(e){

      }
    }
  }
</script>

<style scoped lang="less">
  #register{
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
      .fix-ms-login-tab{
        margin-bottom:10px !important;
        .tmt-order-deal{padding: 0 1rem;}
        .tmt-order-deal label{font-size: 1.2rem;}
        .tmt-order-deal a{color: #09c7d1;}
      }
    }
    .tmt-user-login-btn{font-size: 1.4rem;}
    .login-hint{
      flex-shrink: 0;
      height:4.4rem;
      display:flex;
      flex-direction: row;
      align-items:center;
      justify-content:center;
    }
    .f14{font-size: 1.2rem;}
  }
</style>
