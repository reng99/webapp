<template>
  <div id="gameOrder">
    <div class="main">
      <pageheader :title='title'></pageheader>
      <div class="tmt-order-frame">
      <div class="row order-top">
        <p class="tmt-detail-title">
        <span  class="fuzhu spanIcon">辅</span>
        <span  class="baopei spanIcon">赔</span>
        <span  class="yanzheng spanIcon">验</span>
        {{detail.gameName}}【{{detail.typeName}}】{{detail.title}} {{detail.channelName}} {{detail.areaName}}
        {{detail.description}}
        </p>
        <span class="price">&yen;{{detail.price}}</span>
        <p class="quantity"><i class="btngroup upbtn" @click="numUp"> - </i>
          <input id="prdnum" type="text" v-model="prdnum" :readonly="isreadonly" />
          <i class="btngroup downbtn" @click="numDown">+</i></p>
      </div>
        <div class="row white">
          <div class="tmt-collection-head">
          联系信息
          </div>
          <form class="col s12" >
          <div class="row connect">
            <div class="col s5">手机号码</div>
            <div class="input-field col s7">
              <input id="user_phone_ms" type="tel" v-model="user_phone"  placeholder="请输入手机号码">
            </div>
            </div>
            <div class="row connect">
            <div class="col s5">QQ号码</div>
            <div class="input-field col s7">
              <input id="user_QQ" type="tel" v-model="user_QQ" placeholder="请输入联系QQ">
            </div>
           </div>
           <div class="tips">请核实您的联系方式，方便交易员联系到您</div>
          </form>
        </div>


         <div class="row  white" v-if="detail.category!='DJ'&&detail.category!='LB'&&detail.category!='ZH'">
          <div class="tmt-collection-head">
          填写购买信息
          </div>

          <!-- 服务器选择弹窗 -->
          <div class="back_cover" v-if="isshowarealist" @click="closeAreaList"></div>
          <div class="arealist" v-if="isshowarealist">
               <div class="title"><input type="text" placeholder="搜索关键字" v-model="keyword"/></div>
               <div class="row">
                <div class="col s3" v-for="item in areaList" @click="chooseArea(item.gameArea)"><div >{{item.gameArea}}</div></div>
               </div>
               <div v-if="noArea" class="noArea">没有结果,请更换关键字</div>
          </div>

          <form class="col s12" ref="buyInfo">
          <!-- 首充号 -->
          <div id="schInputs" v-if='detail.category=="SCH"'>

            <div class="row connect">
              <div class="col s5">服务器</div>
              <div class="input-field col s7" @click="showChooseArea">
                <input name="piList[0].map['服务器']"  readonly type="text" v-model="areaName" placeholder="请输入服务器">
              </div>
            </div>

            <div class="row connect">
              <div class="col s5">第一角色名称</div>
              <div class="input-field col s7">
                <input name="piList[1].map['第一角色名称']" type="text"  placeholder="请输入第一角色名称">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5">第二角色名称</div>
              <div class="input-field col s7">
                <input name="piList[2].map['第二角色名称']" type="text" placeholder="请输入第二角色名称">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5">第三角色名称</div>
              <div class="input-field col s7">
                <input name="piList[3].map['第三角色名称']" type="text" placeholder="请输入第三角色名称">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5">职业</div>
              <div class="input-field col s7">
                <input name="piList[4].map['职业']" type="text" placeholder="请输入职业">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5">性别</div>
              <div class="input-field col s7" @click="chooseSex">
                <input name="piList[5].map['性别']" type="text"  placeholder="选择性别" v-model="sex" readonly>
              </div>
            </div>
          </div>
          <!-- 续充号 -->
            <div id="xcInputs" v-if='detail.category=="SCHXC"'>
            <div class="row connect">
              <div class="col s5">服务器</div>
              <div class="input-field col s7" @click="showChooseArea">
                <input name="piList[0].map['服务器']"  type="text" v-model="areaName" placeholder="请输入服务器">
              </div>
            </div>
              <div class="row connect">
              <div class="col s5">首充号</div>
              <div class="input-field col s7">
                <input name="piList[1].map['首充号']" type="text" placeholder="请输入首充号">
              </div>
            </div>
              <div class="row connect">
              <div class="col s5">首充号密码</div>
              <div class="input-field col s7">
                <input name="piList[2].map['首充号密码']" type="text" placeholder="请输入首充号密码">
              </div>
            </div>
              <div class="row connect">
              <div class="col s5">角色名称</div>
              <div class="input-field col s7">
                <input name="piList[3].map['角色名称']" type="text" placeholder="请输入角色名称">
              </div>
            </div>
            </div>
            <!-- 代充/代练 -->
            <div v-if='detail.category=="DC" || detail.category=="DL"'>
            <div class="row connect">
              <div class="col s5">服务器</div>
              <div class="input-field col s7" @click="showChooseArea">
                <input name="piList[0].map['服务器']"  type="text" v-model="areaName" placeholder="请输入服务器">
              </div>
            </div>
              <div class="row connect">
              <div class="col s5">账号</div>
              <div class="input-field col s7">
                <input name="piList[1].map['账号']" type="text" placeholder="请输入账号">
              </div>
            </div>
              <div class="row connect">
              <div class="col s5">密码</div>
              <div class="input-field col s7">
                <input name="piList[2].map['密码']" type="text" placeholder="请输入密码">
              </div>
            </div>
              <div class="row connect">
              <div class="col s5">角色名称</div>
              <div class="input-field col s7">
                <input name="piList[3].map['角色名称']" type="text" placeholder="请输入角色名称">
              </div>
            </div>
            </div>
          </form>
        </div>


         <div class="row white">
          <div class="tmt-collection-head">
          其他信息
          </div>
          <form class="col s12">
          <div class="row connect">
            <div class="col s5">备注</div>
            <div class="input-field col s7">
              <input type="text" placeholder="请输入备注" v-model="buyerMsg">
            </div>
            </div>
          </form>
        </div>

        <div class="row no-margin">
          <div class="col s12">
            <div class="h10"></div>
            <p class="tmt-order-deal">
              <input type="checkbox"  class="filled-in" id="filled-in-box" v-model="checked" />
              <label for="filled-in-box">我已同意
               <router-link :to="{path:'/helpDete3',query:{id:e3}}" class="fwxy">
                《淘米淘交易平台服务协议》</router-link>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div class="tmt-order-bill row">
        <div class="col s7">
          合计：¥ {{total}}
        </div>
        <div class="col s5" @click="submitOrder" :class="{disabled:!checked}">
          提交订单
        </div>
      </div>
      <div class="h10"></div>
    <vue-footer></vue-footer>
    </div>
  </div>
</template>
<script>
import pageheader from '@/components/common/pageheader'
import vueFooter from '@/components/common/footer'
export default {
  name: 'gameOrder',
  data() {
    return {
      title: '确认订单',
      user_QQ:'',
      user_phone:'',
      detail:{},
      prdnum:1,
      total:0.00,
      isreadonly:false,
      sex:'',
      buyerMsg:'',
      areaList:[],
      areaListbc:[],
      areaName:'',
      isshowarealist:false,
      paynow:null,
      checked:true,
      keyword:'',
      noArea:false
    }
  },
  components:{
    pageheader,
    vueFooter
  },
  created:function(){
        var userData=JSON.parse(this.$getCookie('logindata'));
        this.user_phone=userData.mobilePhone;
        this.user_QQ=userData.qq;
        var id=this.$route.query.id;
        this.getDetial(id);
  },
  watch:{
    prdnum(curVal,oldVal){　
        if (curVal!='') {
          var cur = parseInt(curVal);
          if (isNaN(cur) || cur <= 0) {
              this.prdnum=oldVal;
              this.$toast("数量必须为数字");
              return;
          }else{
              if (cur>this.detail.quantity) {
                this.$toast("库存不足");
                this.prdnum=oldVal;
                return;
              }else{
                this.prdnum=cur;
                this.total=(this.detail.price*curVal).toFixed(2);
              }
          }
        }
　　},
    keyword(curVal,oldVal){
        if(curVal!=''){ 　
           var areaList=this.areaListbc;
           var result=[];
           for (var i = areaList.length - 1; i >= 0; i--) {
             if(areaList[i].gameArea.indexOf(curVal)>=0){
                result.unshift(areaList[i]);
             }
           }
           this.areaList=result;
           if (result.length==0) {
            this.noArea=true;
           }else{
            this.noArea=false;
           }
    　　　}else{
           this.areaList=this.areaListbc;
           this.noArea=false;
          }
    }
  },
  methods: {
    getDetial:function(id){
        var that = this;
        that.$getDataWithUrl('','/api/product/get/'+id+'.view','',response=>{
          if(response.data.code=='1'){
            that.detail=response.data.context.detail;
            that.total=(that.detail.price).toFixed(2);
            if (that.detail.category == 'SCH' || that.detail.category == 'ZH') {
              that.isreadonly=true;
            }
            that.$getDataWithUrl('','/api/product/area/'+that.detail.gameId+'/all.view','',response=>{
              that.areaList=response.data.context;
              that.areaListbc=response.data.context;
              that.areaName=that.areaList[0].gameArea;
            },'get');

          }
        },'get');
      },
      numDown:function(){
        if (this.prdnum>1) {
          this.prdnum--;
        }
      },
      numUp:function(){
        if (this.prdnum<this.detail.quantity&&!this.isreadonly) {
            this.prdnum++;
        }else{
            this.$toast('已经是最大值');
        }
      },
      chooseSex:function(){
        var that=this;
        that.$actionSheet({
          options:[{text:'男',value:'1'},{text:'女',value:'0'}],
          callback:function(res){
           that.sex=res.text;
          }
        });
      },
      showChooseArea:function(){
        $("body").css({position: "fixed",width: "100%"})
        this.isshowarealist=true;
      },
      chooseArea:function(areaName){
        $("body").css({position: "",width: ""});
        this.areaName=areaName;
        this.isshowarealist=false;
      },
      closeAreaList:function(){
        $("body").css({position: "",width: ""});
        this.isshowarealist=false;
      },
      submitOrder:function(){
        if (!this.checked) {
          this.$toast("未同意服务协议",2000);
          return;
        }
        if (this.prdnum=="") {
          this.$toast("数量不能为空",2000);
          return;
        }
        var that = this;
        var obj={
        productId:that.$route.query.id,
        quantity:that.prdnum,
        cliApp:'WAP',
        buyerMobile:that.user_phone,
        buyerQq:that.user_QQ,
        buyerMsg:that.buyerMsg
        }
        //动态属性
        var empty=false;
        var buyInfo=that.$refs.buyInfo;
        for (var i = 0; i < buyInfo.length; i++) {
         obj[buyInfo.elements[i].name]=buyInfo.elements[i].value;
         if (buyInfo.elements[i].value=='') {
            empty=true;
            that.$toast(buyInfo.elements[i].placeholder);
            break;
         }
        }

        function checklegel(object){
          if (object.buyerMobile=="") {
            that.$toast("手机号码不能为空",2000);
            return false;
          }else{
            var rulx = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
            if(!rulx.test(object.buyerMobile)){
             that.$toast('手机号码格式错误', 2000);
              return false;
            }
          }
          if (object.buyerQq=="") {
           that.$toast("QQ号码不能为空",2000);
            return false;
          }else{
            var rulx = /^[1-9][0-9]{4,14}$/;
            if(!rulx.test(object.buyerQq)){
              that.$toast('QQ号码格式错误', 2000);
              return false;
            }
          }
          return true;
        }

        if (checklegel(obj)) {
          if(!empty){
           that.$getDataWithUrl('','/order/submit.view',obj,response=>{
            document.write(response.data);
          },"post")
          }
        }

      }
  }
}
</script>
<style scoped lang="less">
  #gameOrder {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    margin: 0 auto;
    .main {
      .tmt-detail-fixed-param {
        div {
          line-height: 4rem;
          border-bottom: .065rem solid #f2f2f2;
          font-size: 1.2rem;
        }
        div.right-align {
          color: #999;
        }
      }
      .tmt-order-bill{
          position: fixed;
          bottom: 0;
          padding: 0;
          width: 100%;
          right: 0;
          background: #09C7D1;
          margin-bottom: 0;
          font-size: 1.6rem;
          max-width: 60rem;
          left: 0;
          .s7{
            padding: 1.5rem;
            background: #fff;
            color: #09C7D1;
          }
          .s5{
            padding: 1.5rem;
            color: #fff;
            text-align: center;
          }
      }
      .tmt-submit-order-btn{font-size: 1.4rem;}
      .tmt-submit-order-price{
        p{font-size: 1.2rem;color:#999;
          b{font-size:2rem;}
          abbr{font-size: 1.6rem;}
        }
      }
      .tmt-collection-head{position: relative;width: 100%;text-align: left;padding:1rem 1rem;font-size: 1.5rem;
        span{width:4%;height:.4rem;background: #09c7d1;display: block;position: absolute;left:50%;margin-left:-2%;bottom:0;border-radius: 2rem;}
      }
      .tmt-order-frame,.tmt-user-register,.tmt-user-forget{
        input{font-size:1.5rem !important;}
        textarea{font-size:1.5rem !important;padding-bottom: 0;}
      }
      .tmt-order-deal label{font-size: 1.2rem;}
      .tmt-footer{background: #fff;position: fixed;bottom:0;left:0;width: 100%;height:4.4rem;
        div.row{max-width:750px;margin: 0 auto !important;}
        div.row div.col{height:4.4rem;position: relative;}
        div.row div.col abbr.line{border-right:.065rem solid #eee;position: absolute;right:0;top:0;line-height: 0;font-size: 0;height: 4.4rem;}
        div.row div.col b.badges{background: #ff5000;color:#FFF;position: absolute;left:50%;top:5%;padding:.1rem .4rem .08rem .4rem;font-size: .75rem;border-radius:2rem;line-height: 1rem;overflow: hidden;}
        a{display: block;width: 100%;overflow: hidden;padding: .6rem 0 0 0;color:#b3b3b3;
          .icon_a_on{color:#09c7d1;}
        }
      }
      .tmt-footer-link{
        i{width:2rem;display: block;height: 2rem;margin: 0 auto;}
        span{font-size: 1rem;}
      }
      #select{
        display: block;
        font-size: 1.5rem;
        background: none;
        border: none;
        border-bottom: solid 1px #999;
      }
      .btngroup{
        width: 3rem;
        position: absolute;
        height: 3rem;
        opacity: 0;
      }
      .downbtn{
        margin-top: -3rem;
        margin-left: 7rem;
      }
      .upbtn{

      }
      #prdnum{
        border: none;
        background-image: url('../../../static/imgs/sp_sl_abb.svg');
        background-size: 100% 100%;
        margin-bottom: 0;
        text-align: center;
      }
      .order-top{
        margin-top: 4.4rem;
        padding: 1rem;
        background: #fff;
        .tmt-detail-title{
          font-size: 1.4rem;
          line-height: 2rem;
          margin-bottom: .6rem !important;
           .spanIcon{
            padding: 3px;
            color: #fff;
            margin-left: .3rem;
            margin-right: .3rem;
            border-radius: 2px;
            }
            .fuzhu{
              background: #09C7D1;
              margin-left: 0;
            }
            .yanzheng{
              background: #D142CC;
            }
            .baopei{
              background: #53A0E8;
            }
        }
        .price{
          font-size: 2rem;
          color: #09c7d1;
        }
        .quantity{
          float: right;
          font-size: 1.4rem;
          width: 10rem;
        }
      }
      .connect{
         background: #f7f7f7;
         .s5{
          padding: 1.5rem;
          font-size: 1.3rem;
         }
         .s7{
          margin: 0;
          padding: 1rem;
          input{
            border: none;
            margin-bottom: 0;
            text-align: right;
          }
         }
      }
      .tips{
        color: #ccc;
        padding-bottom: 1rem;
        padding-left: 1rem;
      }
      .fwxy{
        color: #333;
        font-size: 1.5rem;
      }
      .arealist{
            position: absolute;
            top: 33%;
            width: 80%;
            text-align: center;
            z-index: 88888888;
            background: #fff;
            border: 1px solid #e5e5e5;
            right: 10%;
            border-radius: .3rem;
            .title{
            color: #999;
            font-size: 1.3rem;
            padding: 1rem 0;
            input{
                margin-bottom: 0;
                text-align: center;
                padding: 0rem 2rem;
                width: 60%;
                border-bottom-color: #666;
            }
            }
            .row{
            height: auto;max-height: 20rem;overflow: scroll;
              .s3{
                font-size: 1.3rem;
                padding: 1rem;
                div{
                  padding: .5rem 0;
                  background: #e5e5e5;
                  text-align: center;
                }
              }
            }
            .noArea{
                  padding: 1rem;
                  margin-top: -2rem;
                  font-size: 1.4rem;
            }
      }
      .disabled{
        background: #f0f0f0;
        color: #999!important;
      }
      .back_cover{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 88888;
        top: 0;
        background-color: rgba(0,0,0,.3);
        }
    }
  }
</style>
