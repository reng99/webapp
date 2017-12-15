<template>
  <div id="hoking">
    <div class="main">
      <back :title='"王者荣耀专区"'></back>
      <div class="breakLine"></div>
      <div class="row">
          <div class="col s12 center hot">热门皮肤</div>
          <div class="col s12 center tabchoose">
            <span class="tabc" :class="{active:type=='all'}" @click="getSkin('all')">全部</span>
            <span class="tabc" :class="{active:type=='TANK'}" @click="getSkin('TANK')">坦克</span>
            <span class="tabc" :class="{active:type=='ARCHER'}" @click="getSkin('ARCHER')">战士</span>
            <span class="tabc" :class="{active:type=='WARRIOR'}" @click="getSkin('WARRIOR')">法师</span>
            <span class="tabc" :class="{active:type=='ASSASSIN'}" @click="getSkin('ASSASSIN')">刺客</span>
            <span class="tabc" :class="{active:type=='MAGE'}" @click="getSkin('MAGE')">射手</span>
            <span class="tabc" :class="{active:type=='SUPPORT'}" @click="getSkin('SUPPORT')">辅助</span>
          </div>
          <div class="col s12 center searchInput">
            <input type="text" v-model="keyword" class="center" placeholder="请输入你要搜索的英雄或者皮肤名" />
          </div>
      </div>

      <div class="row skinArea">
        <router-link :to="{ path: '/GameDet', query: {id:hotskin.productId}}" class="goodLink">
          <div class="note">
            <div>热卖皮肤</div>
          </div>
          <div class="col s8 skinImg"><img v-lazy="hotskin.smallImgUrl"></div>
          <div class="col s4 center skinDetail no-padding">
               <div class="title">{{hotskin.skin}}</div>
               <div class="hero">({{hotskin.hero}})</div>
               <div class="price">&yen;{{hotskin.price}}</div>
               <div class="buynow"><div></div>立即购买</div>
          </div>
        </router-link>
      </div>

      <div class="row skinList">
      <none :nonegame='nonegame'></none>
      <loading :loading='searchfinish'></loading>
      <transition name="router-slid" mode="out-in">
      <div v-if="searchfinish">
        <div class="col s4" v-for="(skin, index) in skinList"  >
         <router-link :to="{ path: '/GameDet', query: {id:skin.productId}}" class="goodLink">
          <div v-if="index==0" class="note">
            <p>{{skin.discountV}}折</p>
          </div>
          <img v-lazy="skin.smallImgUrl">
          <div class="title">{{skin.skin}}</div>
          <div class="hero">{{skin.hero}}</div>
          <div class="price">&yen;{{skin.price}}</div>
          </router-link>
        </div>
       </div>
        </transition>
      </div>
      <div class="center more" @click="more" v-if="hasmore">查看更多</div>

       <div class="breakLine"></div>
       <div class="row buyInfo">
          <div class="col s12 center hot">购买流程</div>
          <div class="col s12 center buyPath">
            <div><img src="../../static/imgs/king_icon1.svg"><p>拍下账号</p></div>
            <div class="line"></div>
            <div><img src="../../static/imgs/king_icon2.svg"><p>提交订单</p></div>
            <div class="line"></div>
            <div><img src="../../static/imgs/king_icon3.svg"><p>等待发货</p></div>
            <div class="line"></div>
            <div><img src="../../static/imgs/king_icon4.svg"><p>订单完成</p></div>
          </div>
          <div class="col s12 buyIntro">
            <div class="title">30级账号</div>
            <div class="detail marBottom">指游戏角色等级已经达到30级的账号，且带有大量金币与钻石，无任何排位赛记录，购买后无需练级，铭文孔全开的《王者荣耀》游戏账号。
            </div>
            <div class="title">金币账号</div>
            <div class="detail marBottom">指游戏账号内带有大量金币与钻石，并没有任何的排位记录，购买后可以直接使用账号内的金币与钻石，并不能送到自己的账号内。
            </div>
           <div class="title">转移账号</div>
            <div class="detail">使用游客身份登录游戏，且账号有特殊英雄、等级、大量金币钻石、皮肤铭文。购买后我们会将改账号绑定到您指定QQ或者微信上，安全快捷。（仅限IOS版本）
            </div>
          </div>
       </div>

       <div class="breakLine"></div>
       <div class="row accountInfo">
          <div class="col s12 center hot">账号交易</div>
          <div class="col s12 center tabchoose">
            <div @click="getSkinGoods('30级账号')" class="left-align"><span :class="{active:goodType=='30级账号'}">30级账号</span></div>
            <div @click="getSkinGoods('金币账号')"><span :class="{active:goodType=='金币账号'}">金币账号</span></div>
            <div @click="getSkinGoods('转移账号')" class="right-align"><span :class="{active:goodType=='转移账号'}">转移账号</span></div>
          </div>
       </div>
       <div class="row order-top">
          <div class="col s12" v-for="skinGood in SkinGoods">
            <router-link :to="{ path: '/GameDet', query: {id:skinGood.id}}" class="goodLink">
            <p class="tmt-detail-title">
              <span  class="fuzhu spanIcon">辅</span>
              <span  class="baopei spanIcon">赔</span>
              <span  class="yanzheng spanIcon">验</span>
              {{skinGood.gameName}}【{{skinGood.typeName}}】{{skinGood.title}} {{skinGood.channelName}}
            </p>
            <span class="typeandArea">{{skinGood.typeName}}/{{skinGood.areaName}}</span>
            <p class="price">&yen;{{skinGood.price}}</p>
            </router-link>
           </div>
       </div>
    </div>
  </div>
</template>

<script>
import loading from '@/components/common/loading'
import none from '@/components/common/none'
import back from '@/components/snippet/back.vue'
  export default {
    name : "hok",
    data () {
      return {
        hotskin:null,
        skinList:[],
        skinListall:[],
        type:'all',
        goodType:'30级账号',
        SkinGoods:[],
        hasmore:false,
        keyword:'',
        searchfinish:true,//请求是否完成
        nonegame:{nonegame:true,text:"找不到皮肤"},//有没有游戏
      }
    },
    created: function () {
      this.getHotSkin();
      this.getSkin("all");
      this.getSkinGoods('30级账号');
    },
    components:{
      back,
      loading,
      none
    },
    watch:{
      keyword(curVal,oldVal){　
        this.getSkin(this.type,curVal);
      }
    },
    methods: {
      getHotSkin:function(){
        var that = this;
        that.$getDataWithUrl('','/api/product/hok/skins/hot.view','',response=>{
        that.hotskin=response.data.context;
        },"get");
      },
      getSkin:function(type,keyword){
        var that = this;
        that.type=type;
        that.searchfinish=false;
        that.nonegame.nonegame=false;
        if (keyword==""||!keyword) {
          var url='/api/product/hok/skins/'+type+'.view';
        }else{
          var url='/api/product/hok/skins/'+type+'.view?q='+keyword;
        }
        that.$getDataWithUrl('',url,'',response=>{
            that.searchfinish=true;
            if (response.data.context) {
              if (response.data.context.length>6) {
                that.hasmore=true;
                that.skinListall=response.data.context
                that.skinList=response.data.context.slice(0,6);
              }else{
                that.hasmore=false;
                that.skinListall=response.data.context;
                that.skinList=response.data.context;
              }
            }else{
                that.nonegame.nonegame=true;
                that.hasmore=false;
                that.skinList=[];
            }
        },"get");
      },
      getSkinGoods:function(goodType){
        var that = this;
        that.goodType=goodType;
        that.$getDataWithUrl('','/api/product/hok/recommendation/'+goodType+'.view','',response=>{
        that.SkinGoods=response.data.context;
        },"get");
      },
      more:function(){
        this.skinList=this.skinListall;
        this.hasmore=false;
      }
    }
  }
</script>

<style scoped lang="less">
  #hoking {
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
      background: #fff;
      .breakLine{
        height: 1rem;
        background: #f5f5f5;
      }
      .more{
        padding: 1rem;
        font-size: 1.4rem;
      }
      .row{
        margin-bottom: 0;
        .tabchoose{
          padding-bottom: 1rem;
         .tabc{
           display: block;
           float: left;
           width: 14%;
           padding: .5rem;
           border-radius: 2rem;
           color: #999;
           font-size: 1.3rem;
         }
         div{
           float: left;
           width: 33%;
           padding: .5rem;
           color: #999;
           font-size: 1.3rem;
           span{
            padding: .5rem 1rem;
            border-radius: 2rem;
           }
         }
         .active{
          color: #fff;
          background: #C7A26F;
         }
        }
        .searchInput{
          padding-bottom: 1rem;
          input{
              margin-bottom: 0;
              background: #f5f5f5;
              border-bottom: none;
              border-radius: 50rem!important;
              font-size: 1.4rem;
              padding: .3rem 0;
          }
        }
        .hot{
        padding:2rem;
        font-size: 1.6rem;
        }
        .skinImg{
          img{
            width: 100%;
          }
        }
      }
      .skinArea{
        margin: 0 1rem 1rem 1rem;
        border: .3rem solid #C7A26F;
        border-radius: .8rem;
        .skinImg{
          padding: 0;
          img{
            width: 100%;
            max-width: 20rem;
            border-top-left-radius: .3rem;
            border-bottom-left-radius: .3rem;
          }
        }
        .skinDetail{
          .title{
            font-size: 1.8rem;
            padding: 3rem 1rem .5rem 1rem;
          }
          .hero{
            font-size: 1.3rem;
            color: #999;
          }
          .price{
            margin-top: 2rem;
            font-size: 1.8rem;
            color: #C7A26F;
          }
          .buynow{
            margin-top: 1rem;
            margin-left: 1rem;
            padding: .8rem 1rem;
            background: #C7A26F;
            color: #fff;
            line-height: 1.5rem;
            height: 3rem;
            div{
              width: 0;
              height: 0;
              border: 1.5rem solid;
              border-right-color: #C7A26F;
              position: absolute;
              margin-left: -2.05rem;
              border-left: none;
              margin-top: -.8rem;
            }
          }
        }
        .note{
            position: absolute;
            width: 6rem;
            height: 6rem;
            overflow: hidden;
            color: #fff;
            div{
              transform: rotate(-45deg);
              position: relative;
              top: 1rem;
              background: red;
              left: -2rem;
              text-align: center;
              width: 8rem;
              font-size: 1.2rem;
              padding: .1rem;
            }
        }

      }
      .skinList{
        margin: 1rem .25rem;
        .s4{
          margin-bottom:1rem;
          img{
            width: 100%;
            border-radius: .5rem;
          }
          .title{
            font-size: 1.6rem;
            padding: .5rem 0;
          }
          .hero{
            color:#999;
            margin-top: -.5rem;
          }
          .price{
            padding-top: .5rem;
            font-size: 1.6rem;
            color: #C7A26F;
          }
        }
        .note{
            position: absolute;
            width: 4rem;
            height: 4rem;
            overflow: hidden;
            color: #fff;
            p{
              padding: .1rem;
              font-size: 1.1rem;
              top: .9rem;
              line-height: 1.2rem;
              left: -1.5rem;
              transform: rotate(-45deg);
              position: relative;
              background: #C7A26F;
              text-align: center;
              width: 6rem;
            }
        }
      }
      .buyInfo{
        .buyPath{
          margin: 1rem 0;
          padding: 0 1rem;
          .line{
            width: 10%;
            height: .2rem;
            background: #C7A26F;
            margin-top: 2rem;
          }
          div{
            width: 17%;
            float: left;
            img{
              width: 4rem;
              height: 4rem;
            }
            p{
              margin-top: .8rem;
            }
          }
        }
      }
      .buyIntro{
        padding: 1rem;
        div{
            background: #f5f5f5;
            padding: 1rem;
        }
        .title{
            font-size: 1.6rem;
        }
        .detail{
            color: #999;
            margin-top: -1.5rem;
            font-size: 1.3rem;
        }
        .marBottom{
          margin-bottom: 1rem;
        }
      }
        .order-top{
            margin: 0 1rem;
            background: #fff;
            margin-bottom: 0;
            .s12{
              padding: 0;
              margin-bottom: 1rem;
              border-bottom: 1px solid #e5e5e5;
            }
            .tmt-detail-title{
              font-size: 1.4rem;
              line-height: 2rem;
              color: #333;
              margin-bottom: .6rem !important;
               .spanIcon{
                padding:2px 3px;
                color: #fff;
                margin-right: .3rem;
                border-radius: 2px;
                font-size: 1.2rem;
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
            .typeandArea{
                font-size: 1.3rem;
                color: #999;
            }
            .price{
                float: right;
                font-size: 1.8rem;
                color: #C7A26F;
            }
          }
      img[lazy =loading] {
      background: url('../assets/logo.gif');
      background-size: cover;
      }
      img[lazy =error] {
      background: url('../assets/logo.gif');
      background-size: cover;
      }
      .goodLink{
          display: block;
          color: #333;
        }
        .router-slid-enter-active, .router-slid-leave-active {
        transition: all 0.3s;
        }
        .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
        }
    }
  }
</style>
