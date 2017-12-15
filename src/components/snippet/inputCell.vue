<!--使用方法-->

<!--
  分四种情况调用

  情况一：只有一个输入框
  <input-cell
    :inputType='"inputType"'  // 默认是type="text || number || ..."  类型为String
    :placeholderMsg = '"请输入昵称"'  // 为placeholder="请输入昵称"  类型为String
    :singleInput = 'false || true' // 为true时候显示单行的input,默认是false不显示  类型为Boolean
    @getInputMsg='eventInParent' // eventInParent在父亲组件中触发事件获取input内的值
  />

  情况二：输入框在右侧，左侧是文字提示
  <input-cell
    :inputType='"inputType"'
    :placeholderMsg = '"请输入昵称"'
    :rightInput = 'false || true'// 为true时候显示带有在左侧input的div,默认是false不显示  类型为Boolean
    :labelName = '"名称"' // 配合:rightInput使用
    @getInputMsg='eventInParent'
  />

  情况三：输入框在左侧，右侧是按钮
  <input-cell
    :disabledInput = 'true || false'  // 是否禁用输入框
    :register = 'true || false' // 是否是注册  ， 布尔值
    :dynamic = 'true || false' // 是否是获取动态码的按钮,Boolean值，默认是false
    :dynamicText = '"按钮信息"'  // String 类型 ,按钮的信息
    :inputType='"inputType"'
    :placeholderMsg = '"请输入昵称"'
    :leftInput = 'false || true' // 为true时候显示带有在右侧input的div,默认是false不显示  类型为Boolean
    @getInputMsg='eventInParent'
  />

  情况四：输入框在左侧，右侧是验证码图片
  <input-celll
    :verify = 'true || false' // 是否验证码，Boolean值，默认是false
    :inputType = '"inputType"'
    :placeholderMsg = '"请输入昵称"'
    :leftInput = 'true || false' // 为true时候显示带有在右侧input的div,默认是false不显示  类型为Boolean
    @getInputMsg = 'eventInParent'
  />


  注意⚠️ :singleInput :leftInput :rightInput 三个有且仅有一个为真

-->
<template>
  <div id="inputCell">
    <!--情况一-->
    <div v-if="singleInput" class="singleInput">
      <input
      :type="inputType"
      :placeholder="placeholderMsg"
      @change='setInputMsg'
      v-model="inputMsg" />
      <i class="del" @click="emptyMsg()" v-if="showDelIcon"></i>
    </div>
    <!--情况二-->
    <div v-if="rightInput" class="rightInput">
      <span class="label">{{labelName}}</span>
      <span>:</span>
      <div class="inputDiv">
        <input
        :type="inputType"
        :placeholder="placeholderMsg"
        @change='setInputMsg'
        v-model="inputMsg" />
        <i class="del" @click="emptyMsg()" v-if="showDelIcon"></i>
      </div>
    </div>
    <!--情况三-->
    <div v-if="leftInput && !verify" class="leftInput">
      <div class="inputDiv">
        <input
        :type="inputType"
        :disabled = 'disabledInput'
        :placeholder="placeholderMsg"
        @change='setInputMsg'
        v-model="inputMsg" />
        <i class="del" @click="emptyMsg()" v-if="showDelIcon"></i>
      </div>
      <button class="btn active-bg" v-if='dynamicFlag' @click="getVerifyNum">{{dynamicText}}</button>
      <button class="btn bg99" v-else :disabled="true">重新获取(<span>{{time}}</span>)</button>
    </div>
    <!--情况四-->
    <div v-if="leftInput && verify" class="leftInput verify">
      <div class="inputDiv">
        <input
        :type="inputType"
        :placeholder="placeholderMsg"
        @change='setInputMsg'
        v-model="inputMsg" />
        <i class="del" @click="emptyMsg()" v-if="showDelIcon"></i>
      </div>
      <div class="verify_img">
        <img :src="img_captcha_api" class="img_captcha_api" @click="getStaticCode">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'inputCell',
    data() {
      return {
        inputMsg: '',
        getInputMsg: '',
        showDelIcon: false,
        time: 60, // 统一为一分钟
        dynamicFlag : false, // 验证是否为获取动态码
        img_captcha_api:'',
        activeBtnFlag: false, // 判断手机好是否输全了
        jsonStatue:
        {
          ok:'1',
          err:'-1',
        }
      }
    },
    props:{
      inputType:{
        type:String,
        default: 'text'
      },
      placeholderMsg:{ // 输入的提示信息
        type: String,
        default: '请输入相关内容'
      },
      singleInput:{ // 单个 input展示的时候
        type: Boolean,
        default: false
      },
      leftInput:{ // input在左边的时候
        type: Boolean,
        default: false
      },
      rightInput:{ // input 在右侧的时候
        type: Boolean,
        default: false
      },
      labelName:{
        type: String,
        default: '文本标题'
      },
      dynamic: { // 判断动态码
        type: Boolean,
        default: false
      },
      verify:{ // 判断验证码
        type: Boolean,
        default: false
      },
      dynamicText:{
        type: String,
        default: "按钮名称"
      },
      disabledInput:{
        type: Boolean,
        default:false
      },
      register:{
        type: Boolean,
        default: false
      }
    },
    created: function() {
      var vm = this;
      vm.dynamicFlag = vm.dynamic;
      if(vm.verify){//需要获取验证码图
        vm.getStaticCode();
      }
    },
    methods: {
      getStaticCode:function () {
        let vm = this;
        vm.$getDataWithUrl('/api','/img_captcha.view','',response=>{
          if(response.data.code==vm.jsonStatue.ok){
            vm.img_captcha_api = "data:image/gif;base64,"+response.data.context;
          }
        },'get');
      },
      emptyMsg: function () {
        var vm = this;
        vm.inputMsg = '';
        vm.$emit('getInputMsg',vm.inputMsg); // vm.inputMsg为传给父组件的信息，可以为obj类型
      },
      setInputMsg: function () {
        var vm = this;
        // if(!vm.dynamicFlag){
          vm.$emit('getInputMsg',vm.inputMsg); // vm.inputMsg为传给父组件的信息，可以为obj类型
        // }
      },
      getVerifyNum: function () {
        var vm = this;
        var phoneNum = vm.disabledInput ? vm.placeholderMsg.trim() : vm.inputMsg.trim();
        if(phoneNum.length == 11){
          vm.$getDataWithUrl('/api', '/check_account/' + phoneNum + '.view', '', response => {

            if(vm.register){ // 判断是否是注册页面

              if(vm.register && response.data.code == vm.jsonStatue.ok ){ // 注册页面获取动态码
                vm.dynamicFlag = false;
                var timer = setInterval(function(){
                  vm.time -= 1;
                },1000);
                setTimeout(function(){
                  clearInterval(timer);
                  vm.dynamicFlag = true;
                  vm.time = 60;
                },60000);
                vm.$getPhoneCode(phoneNum);
              }else{
                vm.$toast("此账号已经存在")
              }
            }else{

              if(response.data.code == vm.jsonStatue.err){ // 其他获取动态码
                console.log('login');
                vm.dynamicFlag = false;
                var timer = setInterval(function(){
                  vm.time -= 1;
                },1000);
                setTimeout(function(){
                  clearInterval(timer);
                  vm.dynamicFlag = true;
                  vm.time = 60;
                },60000);
                vm.$getPhoneCode(phoneNum);
                vm.$emit('getInputMsg',phoneNum); // vm.inputMsg为传给父组件的信息，可以为obj类
              }else{
                vm.$toast("此账号不存在");
              }
            }



          }, 'get');
        }else{
          vm.$toast('手机格式错误');
        }
        // if(vm.verifyFlag){
        //   vm.verifyFlag = false;
        //   var timer = setInterval(function(){
        //     vm.time -= 1;
        //   },1000);
        //   setTimeout(function(){
        //     clearInterval(timer);
        //     vm.verifyFlag = true;
        //     vm.time = 60;
        //   },60000);
        // }

      }
    },
    watch:{
      inputMsg: function (newVal,oldVal){
        var vm = this;
        if(newVal.trim()!=''){
          vm.showDelIcon = true;
          // console.log(newVal.trim().length);
        }else{
          vm.showDelIcon = false;
        }
      }
    }
  }
</script>
<style scoped lang="less">
  #inputCell{
    width: 90%;
    margin: 0 auto;
    margin-top: 1rem;
    border-radius: .3rem;
    overflow: hidden;
    .singleInput{
      position: relative;
      input{
        width: 100%;
        height: 4.4rem;
        background: #fff;
        margin: 0;
        padding: 0;
        border: none;
        text-indent: 1rem;
        font-size: 1.3rem;
      }
    }
    .leftInput{
      display: flex;
      flex-direction: row;
      align-items: center;
      .inputDiv{
        flex: 3;
        border-radius: .3rem;
        overflow: hidden;
        margin-right: 1rem;
        position: relative;
        input{
          text-indent: 1rem;
          width: 100%;
          background: #fff;
          height: 4.4rem;
          margin: 0;
          padding: 0;
          border: none;
          font-size: 1.3rem;
        }
      }
      .btn{
        flex: 1;
        padding: 0 1rem;
        height: 4.4rem;
        border-radius: .3rem;
        font-size: 1.2rem;
      }
      .verify_img{
        flex: 1;
        max-width: 10rem;
        .img_captcha_api{
          display:block;
          max-width: 10rem;
        }
      }
    }
    .rightInput{
      display: flex;
      flex-direction: row;
      align-items: center;
      background: #fff;
      border-radius: .3rem;
      overflow: hidden;
      span{
        color: #999;
      }
      .label{
        flex: 1;
        height: 4.4rem;
        line-height: 4.4rem;
        font-size: 1.3rem;
        text-indent: .6rem;
        text-align: right;
        letter-spacing: .3rem;
      }
      .inputDiv{
        flex: 3;
        position: relative;
        input{
          width: 100%;
          height: 4.4rem;
          padding: 0;
          margin: 0;
          border: none;
          text-indent: 1rem;
        }
      }
    }
    .bg99{
      background: #999;
    }
    .del{
      display: block;
      width: 1.4rem;
      height: 1.4rem;
      position: absolute;
      top: 1.5rem;
      right: 2rem;
      background: url('../../../static/icons/svg/list_delete.svg') no-repeat  center center;
      background-size: cover;
    }
    .default-bg{
      background: #999;
    }
    .active-bg{
      background: #09c7d1;
    }
  }
</style>
