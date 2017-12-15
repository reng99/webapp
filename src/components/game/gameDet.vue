<template>
  <div id="gameDet">
    <div class="main">
      <pageheader :title='title'></pageheader>
<!--       <div class="tmt-focus-index">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in focusData" :key="item.id"><img :src="item.img_src"/></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div> -->
      <div class="detailArea">
      <div class="row no-margin tmt-detail-head">
        <p class="tmt-detail-title">{{detail.gameName}}【{{detail.typeName}}】{{detail.title}} {{detail.channelName}} {{detail.areaName}}
        {{detail.description}}
        </p>
        <span class="price">&yen;{{detail.price}}</span>
        <span class="quantity">库存:{{detail.quantity}}件</span>
      </div>
      <div class="h10"></div>
      <div class="row no-margin white tmt-detail-company">
        <div class="col s12 detail-info">
           <span class="fuzhu spanIcon">辅</span>客服辅助<span class="baopei spanIcon">赔</span>找回包赔<span class="yanzheng spanIcon">验</span>信息验证
          </div>
      </div>
      <div class="googleUI-head googleUI-top-line">
        <div class="row no-margin white">
<!--           <div class="col s4 center tmt-detail-company-info">
            <router-link :to="{ path: '/gameList', query: {id:'all'}}">
              <div class="googleUI-head-nav">
                <i class="googleUi-shopInfo-no">5089</i>
                <span>全部商品</span>
              </div>
              <div class="border-right-line"></div>
            </router-link>
          </div>
          <div class="col s4 center tmt-detail-company-info">
            <router-link :to="{ path: '/gameList', query: {id:'new'}}">
              <div class="googleUI-head-nav">
                <i class="googleUi-shopInfo-no">65</i>
                <span>上新</span>
              </div>
              <div class="border-right-line"></div>
            </router-link>
          </div> -->
          <!-- <div class="col s12 center tmt-detail-company-info">
            <a href="#">
              <div class="googleUI-head-nav">
                <i class="googleUi-shopInfo-no">99.78%</i>
                <span>7天成交率</span>
                <div class="border-right-line"></div>
              </div>
            </a>
          </div> -->
        </div>
      </div>
      <div class="h10"></div>
      <div class="tmt-detail-information white">
        <div class="col s12">
          <div class="row no-margin">
            <ul class="tmt-user-login-tab no-margin">
              <li class="col s6 no-padding"><div @click="openDetailDiv" :class="detailDiv">商品详情<span></span></div></li>
              <li class="col s6 no-padding"><div @click="openStepDiv" :class="stepDiv">交易说明<span></span></div></li>
            </ul>

            <div id="detailDiv" v-show="detail_main">

<!--               <div class="tmt-collection-head">
                图文详情
                <span></span>
              </div>
              <div class="h10"></div>
              <div class="tmt-detail-images">
                <img v-img:det src="../../static/imgs/banner1.jpg">
                <img v-img:det src="../../static/imgs/banner2.jpg">
                <img v-img:det src="../../static/imgs/banner3.jpg">
                <img v-img:det src="../../static/imgs/banner4.jpg">
              </div> -->

              <div class="h10"></div>
              <div class="row no-margin tmt-detail-shop-param">
                <div class="col s3 right-align">所属游戏：</div>
                <div class="col s9 no-padding-left">{{detail.gameName}}</div>
                <div class="col s3 right-align">适用系统：</div>
                <div class="col s9 no-padding-left">{{game.os}}</div>
                <div class="col s3 right-align">客户端：</div>
                <div class="col s9 no-padding-left">{{detail.channelName}}</div>
                <div class="col s3 right-align">商品类型：</div>
                <div class="col s9 no-padding-left">{{detail.typeName}}</div>
                <div class="col s3 right-align">区服：</div>
                <div class="col s9 no-padding-left">{{detail.areaName}}</div>
<!--                 <div class="col s3 right-align">商品描述：</div>
                <div class="col s9 no-padding-left">{{detail.description}}</div>
                <div class="col s3 right-align">免责声明：</div>
                <div class="col s9 no-padding-left">1.以上展示的商品供求信息由买卖双方自行提供，其真实性，准确性和合法性由信息发布人员负责。<br/>2.国家法律规定，未成年人不能参与虚拟物品交易。</div> -->
              </div>
            </div>
            <div id="stepDiv" v-show="step_main">
              <div class="row no-margin tmt-detail-shop-param">
                  <div class="col s3 right-align">订单流程：</div>
                  <div class="col s9 buy-infoImg"><img src="../../../static/imgs/sp_liucheng.svg"></div>
                  <div class="col s3 right-align">免责声明：</div>
                  <div class="col s9 no-padding-left">1.以上展示的商品供求信息由买卖双方自行提供，其真实性，准确性和合法性由信息发布人员负责。<br/>2.国家法律规定，未成年人不能参与虚拟物品交易。</div>
                  <div class="col s3 right-align">注意事项：</div>
                  <div class="col s9 no-padding-left">如果遇到以下情况，请警惕是骗子：<br/>
                    1. 向您索要游戏帐号和密码 ;<br/>
                    2. 向您索要绑定手机号、验证码 ;<br/>
                    3. 向买卖家索要【保证金】【手续费】【诚信费】要求支付宝转账等以各种名目索要金钱的 ;<br/>
                    4. 发送假冒链接(钓鱼链接)给买卖家，在您输入帐号密码后盗取您的游戏、支付宝、银行卡等帐号密码 ;<br/>
                    5. 自称是淘米淘客服，并添加您的QQ，但官网验证不符的100%是骗子。<br/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tmt-collection-head">
        相关推荐
        <span></span>
      </div>
      <!--hot recommend-->
      <div class="hot-recommend no-margin-bottom">
        <div class="tmt-collection-main no-padding-bottom">
          <router-link v-for="(hotRecommendList,index) in hotRecommendLists" :key="index" :to="{path:'/GameDet',query:{id:hotRecommendList.id}}" class="row">
            <div class="col s9 no-padding-right">
              <i class="tmt-collection-icons-hot"></i>
              <div class="txt-collection-txt">
                <p class="no-margin truncate color33 hot-title">{{hotRecommendList.title}}</p>
                <p class="no-margin truncate color99">{{hotRecommendList.description}}</p>
              </div>
            </div>
            <div class="col s3 dsil right-align hot-price">&yen;&nbsp;{{hotRecommendList.price | formatPri}}</div>
          </router-link>
        </div>
      </div>

      <vue-footer></vue-footer>
      <div class="tmt-footer z200">
        <div class="row no-margin">
          <div class="col s12 center no-padding">
            <router-link :to="{ path: '/gameOrder', query: {id:id}}" class="div-btn-right-now-buy waves-effect waves-light buy-step-1">立即购买</router-link>
          </div>
        </div>
      </div>
      </div>
    </div>
    <viewmodal :loading='viewmodal'></viewmodal>
  </div>

</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import vueFooter from '@/components/common/footer.vue'
  import viewmodal from '@/components/common/viewmodal'
  import pageheader from '@/components/common/pageheader'
  export default {
    name: 'gameDet',
    data() {
      return {
        title: '商品详情',
        detailDiv:'active',
        stepDiv:'',
        detail_main:true,
        step_main:false,
        detail:{},
        game:{},
        hotRecommendLists:[],
        viewmodal:false,
        focusData:[],
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          loop: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false
        }
      }
    },
    created:function () {
      if(!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
        window.location.href='https://www.taomitao.com/prd/detail.view?id='+this.$route.query.id;
      }
      var id=this.$route.query.id;
      this.getDetial(id);
      this.getFocus();
      this.hotRecommend();
    },
    computed: {
       id() {
  　　　　return this.$route.query.id;
  　　 }
    },
    watch:{
       id(curVal,oldVal){
         window.scrollTo(0,0);　
         this.getDetial(curVal);
  　　　}
    },
    components:{
      vueFooter,
      viewmodal,
      pageheader
    },
    methods: {
      components:{
        swiper,
        swiperSlide
      },
      openDetailDiv:function () {
        this.detailDiv = 'active';
        this.stepDiv = '';
        this.detail_main = true;
        this.step_main = false;
      },
      openStepDiv:function () {
        this.stepDiv = 'active';
        this.detailDiv = '';
        this.step_main = true;
        this.detail_main = false;
      },
      getFocus:function () {
        var that = this;
        that.$getDataWithUrl('','/banner.json','',response=>{
          if(response.data.status=='1'){
            that.focusData = response.data.data;
          }else{

          }
        },'get');
      },
      getDetial:function(id){
        var that = this;
        that.viewmodal=true;
        that.$getDataWithUrl('','/api/product/get/'+id+'.view','',response=>{
          if(response.data.code=='1'){
            that.game=response.data.context.game;
            that.detail=response.data.context.detail;
            that.viewmodal=false;
          }else{
            that.viewmodal=false;
            that.$router.replace({path:'/error',query:{msg:response.data.msg}});
          }
        },'get');
      },
      hotRecommend: function(){
        var vm = this;
        vm.$getDataWithUrl('/api','/product/getRecommends.view',{},response => {
            var maxLength = 4;
            var newArr = [];
            if(response.data.context.length > maxLength){
              for(let i= 0 ; i <= maxLength-1; i++){
                newArr[i] = response.data.context[i];
              }
              vm.hotRecommendLists = newArr;
            }else{
              vm.hotRecommendLists = response.data.context;
            }
          },'get');
      },
    },
    filters: {
      formatPri: function(value){
        return Number(value).toFixed(2);
      }
    }
  }
  </script>
  <style scoped lang="less">
  #gameDet {
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
      .tmt-focus-index{background: #fff;overflow: hidden;
        img{width: 100%;}
      }
      .tmt-detail-head{background: #fff;border-bottom:1px solid #f2f2f2;padding: .75rem 1.5rem;
        p{margin: 0;padding: 0;}
        .tmt-detail-title{font-size: 1.4rem;line-height:2rem;margin-bottom: .6rem !important;
          span{float: left;padding:0rem .4rem;background: #09c7d1;color:#FFF;border-radius: .2rem;margin-right: .5rem;font-size: 1rem !important;}
          span.discount{float: left;background: #ff5000;}
          font{font-size:1rem;}
        }
        h1.tmt-detail-title{font-size: 1.8rem;margin: 0 !important;}
        p.tmt-detail-info{color: #999;font-size: 1.1rem;}
      }
      .tmt-detail-company{width: 100%;padding: 1rem 0;overflow: hidden;border-top:.065rem solid #f2f2f2;
        .gsh-img{width: 6rem;float: left;height:5rem;margin-left: .8rem;
          img{width:5rem;height:5rem;}
        }
        .gsh-info{float: left;
          p{margin: 0;padding: 0;font-size: 1.2rem;}
          .gsh-star{width: 100%;
            i{display: block;float: left;width:1.5rem;height:1.5rem;margin-right: .5rem;}
            i.tmt-icon-star-favour{background: url('../../../static/icons/svg/icon_star-full.svg') center center no-repeat;background-size: cover;}
            i.tmt-icon-star-favour_off{background: url('../../../static/icons/svg/icon_star-o.svg') center center no-repeat;background-size: cover;}
          }
        }
      }
      .tmt-detail-company-info{position: relative;
        a{width: 100%;}
        .border-right-line{width: 1px;border-right:.065rem solid #f2f2f2;height:2.3rem;position: absolute;right:0;top:1rem;}
        .googleUI-head-nav{width: 100%;box-sizing: border-box;margin: 4px 0;
          i{display: block;width:2rem;height:2rem;margin: 0 auto;font-size:1.8rem;line-height: 2.5rem;color:#666;}
          span{color:#999;font-size:1rem;}
          .googleUi-shopInfo-no{color:#000;font-style:normal;width: 100% !important;text-align: center;}
        }
      }
      .tmt-detail-information{
        border-top:.065rem solid #f2f2f2;border-bottom:1px solid #f2f2f2;
        .tmt-user-login-tab{
          width: 100%;clear: both;height: 4.4rem;
          div{text-align: center;font-size: 1.6rem;color:#666;line-height: 4.4rem;position: relative;}
          div span{display: block;width:8%;height:3px;background: #ffffff;position: absolute;left:50%;bottom:-1px;margin-left: -4%;border-radius: 2px;}
          div.active{color:#09c7d1;}
          div.active span{background: #09c7d1;}
        }
        .tmt-detail-fixed-param{
          div{line-height:4rem;border-bottom:1px solid #f2f2f2;font-size: 1.2rem;}
          div.right-align{color:#999;}
        }
        .tmt-detail-shop-param{
          div{line-height:3rem;font-size: 1.2rem;}
          div.s3{color:#999;}
        }
        .tmt-detail-images{width: 100%;
          img{width: 100%;margin-bottom:1rem;}
        }
        .tmt-buy-flow-intro{
          list-style: none;padding: 1rem 0 1rem 4rem !important;
          li{border-left:3px solid #09c7d1;line-height:6rem;font-size:1.6rem;color:#09c7d1;text-indent:2.5rem;position:relative;
          i{position: absolute;display: block;width: 2.8rem;height:2.8rem;left:-1.6rem;top:1.5rem;background: #09c7d1;border-radius:5rem;text-align: center;margin: 0;padding: 0;line-height: 3rem;color:#FFF;text-indent:0;}
            div.last-deal{position: absolute;left:-3rem;top:0;border:3px solid #999;width: 3rem;height:9rem;border-right: none !important;}
          }
          li.no-deal{border-left: 3px solid #FFF;color:#999;
          i{background: #ccc;}
          }
        }
      }
      .tmt-collection{
        width: 100%;background: #fff;overflow: hidden;
        .tmt-collection-main{
          padding: .8rem .75rem;
          a.row{padding-bottom:1rem;border-bottom:1px solid #f2f2f2;margin-bottom: 1rem;height:4rem;display: block;width: 100%;}
          a:last-child{margin-bottom: 0 !important;border-bottom: none !important;}
          .tmt-collection-single-a{font-size: 1.3rem;margin: 0;padding: 1rem 0;border-bottom:1px solid #f2f2f2;display: block;overflow: hidden;
            p.pIndex{width: 70%;margin: 0;padding: 0;color:#333;}
            p.pArticle{width: 80%;margin: 0;padding: 0;color:#333;}
            abbr.rightIcon{padding:.8rem 1rem;background: url('../../../static/icons/svg/icon-leftright_gray.svg') center center no-repeat;background-size: 70%;}
          }
        }
      }
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
      .hot-recommend{
      width: 100%;
      height: auto;
      margin: 1rem auto;
      background:#fff;
      .hot-title{
        font-size:1.4rem;
      }
    }
    .detailArea{
      position: absolute;
      width: 100%;
      top: 4.4rem;
    }
    .price{
      font-size: 2rem;
      color: #09c7d1;
    }
    .quantity{
      float: right;
      font-size: 1.4rem;
      color: #999;
      margin-top: .5rem;
    }
    .spanIcon{
    padding: 3px;
    color: #fff;
    margin-left: 2rem;
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
    .detail-safy{
      font-size: 1.2rem;
     text-align: center;
    }
    .detail-info{
      color: #666;
      text-align: center;
    }
    .buy-infoImg{
      margin: 1rem 0;
      img{
        width: 100%;
      }

    }
    .div-btn-right-now-buy{
      background: #09C7D1;
    }

    }
  }
    </style>
