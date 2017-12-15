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
        {{detail.gameName}}【{{detail.productCategoryC}}】{{detail.title}} {{detail.channelName}} {{detail.areaName}}
        {{detail.description}}
        </p>
        <span class="price">&yen;{{detail.price}}</span>
        <p class="quantity">数量：{{detail.quantity}}</p>
      </div>
        <div class="row white">
          <div class="tmt-collection-head">
          联系信息
          </div>
          <form class="col s12" >
          <div class="row connect">
            <div class="col s5">手机号码</div>
            <div class="input-field col s7">
              <input type="tel" :value="detail.buyerMobile" readonly>
            </div>
            </div>
            <div class="row connect">
            <div class="col s5">QQ号码</div>
            <div class="input-field col s7">
              <input type="tel" :value="detail.buyerQq" readonly>
            </div>
           </div>
          </form>
        </div>
        <div class="row  white" v-if="purchaseInfo">
          <div class="tmt-collection-head">
          填写购买信息
          </div>
          <form class="col s12" ref="buyInfo">
          <!-- 首充号 -->
            <div class="row connect" v-for="(index, item) in purchaseInfo">
              <div class="col s5">{{item}}</div>
              <div class="input-field col s7">
                <input type="text" :value="index" readonly>
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
              <input type="text" :value="detail.buyerMsg" readonly>
            </div>
            </div>
          </form>
        </div>
      </div>

      <div class="tmt-order-bill row" v-if="detail.state=='DZF'">
        <div class="col s6 cancel" @click="chooseReason(detail.id)">
          取消订单
        </div>
        <div class="col s6" @click="paynow">
          继续支付
        </div>
      </div>

      <div class="tmt-order-bill row" v-if="detail.state=='DFH' || detail.state=='DCL' || detail.state=='DTK'">
        <div class="col s12" @click="contactClient">
          联系客服
        </div>
      </div>

      <div class="tmt-order-bill row" v-if="detail.state=='DYHQR'">
        <div class="col s6 cancel" @click="openGetProduct(detail.id)">
          提取商品
        </div>
        <div class="col s6" @click="confirmOrder(detail.title,detail.id)">
          确认收货
        </div>
      </div>

      <div class="tmt-order-bill row" v-if="detail.state=='JYCG'">
        <div class="col s6 cancel" @click="openGetProduct(detail.id)">
          提取商品
        </div>
        <div class="col s6" @click="contactClient">
          联系客服
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
      title: '订单详情',
      detail:{},
      jsonStatue:
          {
            ok:'1',
            err:'-1',
      },
      purchaseInfo:null
    }
  },
  components:{
    pageheader,
    vueFooter
  },
  created:function(){
      var orderId=this.$route.query.orderId;
      this.getDetial(orderId);
  },
  methods: {
    getDetial:function(orderId){
        var that = this;
        that.$getDataWithUrl('','user/order/detail/'+orderId+'.view','',response=>{
           if (!response.data.purchaseInfo=="") {
            var purchaseInfo=JSON.parse(response.data.purchaseInfo);
            that.purchaseInfo=purchaseInfo;
           }
            that.detail=response.data;
            that.total=(that.detail.price).toFixed(2);
            if (that.detail.category == 'SCH' || that.detail.category == 'ZH') {
              that.isreadonly=true;
            }

        },'get');
      },
      chooseReason:function(gid){
        var that=this;
        that.$actionSheet({
          options:[
            {text:'现在不想购买',value:'现在不想购买'},
            {text:'商品价格较贵',value:'商品价格较贵'},
            {text:'重复下单',value:'重复下单'},
            {text:'无法支付订单',value:'无法支付订单'}
          ],
          callback:function(res){
            that.cancelOrder(gid,res.value);
          }
        });
      },
      cancelOrder:function (gid,reason) {
        let that = this;
        let param = {
          id:gid,
          cancelReason:reason
        };
        let initMsg = document.createElement('div');
        initMsg.innerHTML = '<p>您确定取消该订单吗？<b class="orange-text">订单取消成功不可恢复</b>。</p>';
        swal({
          content:initMsg,
          buttons:['否','确认'],
          dangerMode: true
        }).then((value)=>{
          if(value){
            that.$getDataWithUrl('/order','/cancel.view',param,response=>{
              if(response.data.code==that.jsonStatue.ok){
                that.$toast('订单取消成功');
                that.$router.back(0);
              }else{
                that.$toast(response.data.msg);
              }
            },'post');
          }else{
            that.$toast('订单取消失败');
          }
        });
      },
      paynow:function(){
        this.$toast('正在打开支付宝...');
      },
      contactClient:function(){
        this.$toast('正在呼叫客服...');
      },
      openGetProduct:function(gid){
        this.$toast('正在提取商品...');
      },
      confirmOrder:function (gn,gid) {
        let that = this;
        let initMsg = document.createElement('div');
        let param = {
          id:gid
        };
        initMsg.innerHTML = '<p style="text-align: left;">尊敬的用户：您确认已收到<b class="orange-text">'+gn+'</b>的商品吗？<br><font style="color:red;font-size:1rem;">您点击【确认】收货之后，系统将自动将款项打给卖家，【确认】后产生的纠纷将由您承担</font></p>';
        swal({
          content:initMsg,
          buttons:['取消','确认收货'],
          dangerMode: true
        }).then((value)=>{
          if(value){
            that.$getDataWithUrl('/order','/confirm.view',param,response=>{
              if(response.data.code==that.jsonStatue.ok){
                that.$toast('确认收货成功');
              }else{
                that.$toast(response.data.msg);
              }
            },'post');
          }else{
            that.$toast('取消确认收货');
          }
        });
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
          left: 0;
          max-width: 60rem;
          background: #09C7D1;
          margin-bottom: 0;
          font-size: 1.6rem;
          .col.cancel{
            background: #e5e5e5;
          }
          .col{
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
    }
  }
</style>
