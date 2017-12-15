<template>
  <div id="buyOrderData">
      <div class="col s12 no-padding">
        <scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller" style="padding-top:9.55rem;">
          <div class="row order-row-list white" v-for="item in allOrder">
            <div class="h10"></div>
            <div class="row no-margin order-row-head">
              <div class="col s9 no-padding-right">订单号：{{item.id}}</div>
              <div class="col s3 right-align orange-text darken-4 no-padding-left">{{item.stateC}}</div>
            </div>
            <div class="row no-margin">
              <router-link  :to="{path:'/orderDetail',query:{orderId:item.id}}">
              <div class="col s12"><p class="title">{{item.title}}</p></div>
              <div class="col s12"><p>所属游戏：{{item.gameName}}</p></div>
              <div class="col s12"><p class="price">商品类型：{{item.productType}}<span></span>
              </p></div>
              <div class="col s12"><p class="order-time-line">交易时间：{{item.ctime}}</p></div>
              </router-link>
            </div>
            <div class="row no-margin order-row-list-cont">
              <div class="col s3 taomitao-blue-text order-price no-padding-right">￥{{item.orderTotal}}</div>
              <div class="col s9 right-align no-padding-left" v-show="item.state=='DZF' ? 'ok' : ''">
                <span class="waves-effect waves-light left-cancel-button" @click="chooseReason(item.id)">取消订单</span>
                <span class="waves-effect waves-light right-ok-button" @click="payAgain(item.id)">继续支付</span>
              </div>
              <div class="col s9 right-align no-padding-left" v-show="item.state=='DFH' ? 'ok' : ''">
                <span class="waves-effect waves-light right-ok-button" @click="contactClient">联系客服</span>
              </div>
              <div class="col s9 right-align no-padding-left" v-show="item.state=='DCL' ? 'ok' : ''">
                <span class="waves-effect waves-light right-ok-button" @click="contactClient">联系客服</span>
              </div>
              <div class="col s9 right-align no-padding-left" v-show="item.state=='DTK' ? 'ok' : ''">
                <span class="waves-effect waves-light right-ok-button" @click="contactClient">联系客服</span>
              </div>
              <div class="col s9 right-align no-padding-left" v-show="item.state=='DYHQR' ? 'ok' : ''">
                <span class="waves-effect waves-light left-cancel-button" @click="openGetProduct(item.id)">提取商品</span>
                <span class="waves-effect waves-light right-ok-button" @click="confirmOrder(item.title,item.id)">确认收货</span>
              </div>
              <div class="col s9 right-align no-padding-left" v-show="item.state=='JYCG' ? 'ok' : ''">
                <span class="waves-effect waves-light left-cancel-button">提取商品</span>
                <span class="waves-effect waves-light right-ok-button" @click="contactClient">联系客服</span>
              </div>
              <div class="col s9 no-padding-left right-align" v-show="item.state=='QX'?'ok':''">
                <span class="kong">cancel</span>
              </div>
            </div>
          </div>
        </scroller>
      </div>
      <div class="getProduct" v-if="getProduct">
          <div class="getProduct_main">
            <p class="title">提取商品</p>
            <ul class="list">
              <li>帐号：asdada2132<span v-clipboard:copy="message1" v-clipboard:success="onCopy">复制</span></li>
              <li>密码：564654asdsd<span v-clipboard:copy="message2" v-clipboard:success="onCopy">复制</span></li>
            </ul>
            <p class="notice">请您收到帐号后确认是否为三无账号，及时登录账号修改密码并绑定手机。确认账号没有问题之后，请确认收货。</p>
            <div class="closeIt" @click="closeGetProduct">关闭</div>
          </div>
      </div>
    <div class="no-data" v-if="noData"></div>
  </div>
</template>
<script>
  export default {
    name: 'buyOrderData',
    data() {
      return {
        msg: '',
        noData:'',
        state: '',
        noData:false,
        jsonStatue:
          {
            ok:'1',
            err:'-1',
          },
        allOrder: [],
        message1:'AAAAAAAA',
        message2:'BBBBBBBB',
        getProduct:false,
        pageNow:1,
        pageTotal:1,
        jsonStatue:
          {
            ok:'1',
            err:'-1',
          }
      }
    },
    created: function () {
    },
    mounted: function () {
      let that = this;
      that.state = that.$route.query.state;
    },
    computed: {
      code() {
        return this.$route.query.state;
      }
    },
    watch:{
      code(curVal){
        this.state = curVal;
        this.allOrder = [];
        this.pageNow = 1;
        this.pageTotal = 1;
        this.$refs.myscroller.finishInfinite(false);
      }
    },
    methods: {
      refresh: function (done) {
        var self = this;
        setTimeout(function(){
        self.$getDataWithUrl('/user','/order/buy/page/'+self.state+'/1.view','',response=>{
          self.allOrder = [];
          self.noData = '';
          self.pageTotal = response.data.context.pages;
          if(self.pageTotal==0){
            self.noData = true;
          }else{
            self.noData = false;
          }
          if(response.data.code==self.jsonStatue.ok) {
            self.currentHave = false;
            self.allOrder = response.data.context.records;
          }else{

          }
        },'get');
          done()
        }, 500);
      },
      onCopy: function (e) {
        this.$toast(e.text+'复制成功');
      },
      infinite: function (done) {
        let that = this;
        if (that.pageNow > that.pageTotal) {
            done(true)
          return;
        } else {
          that.$getDataWithUrl('/user','/order/buy/page/'+that.state+'/'+that.pageNow+'.view','',response=>{
          that.pageTotal = response.data.context.pages;
            if(that.pageTotal==0){
              that.noData = true;
            }else{
              that.noData = false;
            }
          that.pageNow++;
          setTimeout(function(){
            for(let i=0;i<response.data.context.records.length;i++){
              that.allOrder.push(response.data.context.records[i]);
            }
            that.$refs.myscroller.resize();
            done();
          }, 500);
        },'get');

        }
      },
      payAgain:function (gid) {
        var that=this;
        let param = {
          cliApp:'WAP',
          orderId:gid
        }
        that.$getDataWithUrl('/order','/pay.view',param,response=>{
          document.write(response.data);
        },'post');
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
      }      ,
      contactClient:function () {
        console.log("d");
      },
      openGetProduct:function (gid) {
        console.log(gid);
        this.getProduct = true;
      },
      closeGetProduct:function () {
        this.getProduct = false;
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
                this.$refs.myscroller.triggerPullToRefresh()
              }else{
                that.$toast(response.data.msg);
              }
            },'post');
          }else{
            that.$toast('订单取消失败');
          }
        });
      }
    }
  }
</script>
<style scoped lang="less">
  .getProduct{width: 100%;height: 100%;background: rgba(0,0,0,.5);position: fixed;left: 0;top:0;z-index: 99999;}
  .getProduct_main{width: 90%;margin-left: 5%;height:40%;background: #FFF;border-radius: 2px;margin-top:50%;position: relative;overflow: hidden;
    p.title{text-align: center;font-size: 2rem;line-height:4.2rem;}
    p.notice{padding: .75rem;color: #999;}
    div.closeIt{position: absolute;height: 4.2rem;bottom: 0;left:0;width: 100%;text-align: center;border-top: 1px solid #e2e2e2;line-height: 4.2rem;font-size:1.4rem;    background-color: rgb(245, 248, 250);border-bottom-left-radius: 2px;border-bottom-right-radius: 2px;}
    ul.list{list-style: none;margin: 0;padding: 0 .75rem;
      li{line-height:4rem;height:4rem;padding: 0 0 0 1rem;font-size: 1.4rem;border: 1px solid #e2e2e2;margin-bottom: 1rem;border-radius: 3px;overflow: hidden;;
        span{float: right;padding: 0 3rem;background: #09c7d1;color:#FFF;}
      }
    }
  }
  .no-data{width: 100%;height:20rem;background: url("../../../static/icons/svg/kongbai_dd.svg") top center no-repeat;background-size: 50%;}
  .order-row-list{
    border-bottom:.065rem solid #eee;border-top:1px solid #eee;margin-bottom: .75rem !important;
    .order-row-head{font-size: 1.2rem;color:#999;border-bottom: 1px solid #f3f3f3;padding-bottom:.8rem;padding-top: .2rem;}
    p{margin: 0;color:#666;line-height:1.8rem;font-size:1.2rem;
      span{position: absolute;right:0;font-size: 1rem;}
    }
    p.title{font-size:1.4rem;color:#333;margin:.5rem 0;line-height:2rem;}
    p.price{position:relative;}
  }
  p.order-time-line{line-height: 2rem;}
  .order-row-list-cont{
    border-top: 1px solid #f3f3f3;
    div{
      padding: .5rem 0.75rem;
      span.kong{display: inline-block;padding:.5rem .8rem;text-indent:99999px;font-size:1.3rem;overflow: hidden;}
      span,a{font-size:1.3rem;border-radius:4px;display: inline-block;margin-left:.5rem;padding:.5rem .8rem;}
      a.left-cancel-button,span.left-cancel-button{border: 1px solid #ccc;color:#bbb;}
      a.right-ok-button,span.right-ok-button{border: 1px solid #09c7d1;color:#09c7d1;}

    }
    div.order-price{font-size: 1.6rem;padding: .8rem 0 0 0.75rem;}
  }
</style>

