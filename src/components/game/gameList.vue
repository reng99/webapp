<template>
  <div id="gameList">
   <div class="main">
      <pageheader :title='title'></pageheader>

      <div class="tmt-gamelist-control white">
        <div class="row no-margin">
          <div class="col s3 center chooseword no-padding" @click="chooseType('sort')" >
            <span :class="{sort_select: sortBy == 'sort'}">{{sortWord}}</span>
            <i v-show="sortBy != 'sort'" class="down"></i>
            <i v-show="sortBy == 'sort'" class="up"></i>
          </div>
          <div class="col s3 center chooseword no-padding"  @click="chooseType('goods')">
            <span :class="{sort_select: sortBy == 'goods'}">{{mgWord}}</span>
            <i  v-show="sortBy != 'goods'" class="down"></i>
            <i v-show="sortBy == 'goods'" class="up"></i>
          </div>
          <div class="col s3 center chooseword no-padding"  @click="chooseType('price')">
            <span :class="{sort_select: sortBy == 'price'}">价格</span>
            <i v-show="sortBy != 'price'"   class="down"></i>
            <i v-show="sortBy == 'price'" class="up"></i>
          </div>
          <div class="col s3 center chooseword no-padding" @click="chooseType('service')">
            <span :class="{sort_select: sortBy == 'service'}">区服</span>
            <i v-show="sortBy != 'service'"  class="down"></i>
            <i v-show="sortBy == 'service'" class="up"></i>
          </div>
        </div>
      </div>

      <transition name="showcover">
        <div class="back_cover" v-show="sortBy" @click="closeCover"></div>
      </transition>

      <div class="section_all">
            <!-- 排序section -->
           <transition name="showlist" >
           <div v-show="sortBy == 'sort'" class="service">
            <section v-show="sortBy == 'sort'" class="sort_detail_type">
              <ul class="sort_list_container" >
                <li @click="sortList(0,'综合排序')" class="sort_list_li">
                  <p   :class="{sort_select: sortByType == 0}">
                    <span>综合排序</span>
                    <img v-if="sortByType == 0" src="../../../static/icons/svg/right.svg" class="rightsvg">
                  </p>
                </li>
                <li @click="sortList(1,'价格升序')" class="sort_list_li">
                  <p  :class="{sort_select: sortByType == 1}">
                    <span>价格升序</span>
                    <img v-if="sortByType == 1" src="../../../static/icons/svg/right.svg" class="rightsvg">
                  </p>
                </li>
                <li @click="sortList(2,'价格降序')" class="sort_list_li">
                  <p  :class="{sort_select: sortByType == 2}">
                    <span>价格降序</span>
                    <img v-if="sortByType == 2" src="../../../static/icons/svg/right.svg" class="rightsvg">
                  </p>
                </li>
                <li @click="sortList(3,'最新发布')" class="sort_list_li">
                  <p  :class="{sort_select: sortByType == 3}">
                    <span>最新发布</span>
                    <img v-if="sortByType == 3" src="../../../static/icons/svg/right.svg" class="rightsvg">
                  </p>
                </li>
              </ul>
            </section>
            </div>
          </transition>

         <!-- 商品类型section -->
           <transition name="showlist">
           <div v-show="sortBy == 'goods'" class="service">
               <div class="leftrow">
                 <p @click="getGoodsType('all','全部类型')" :class="{mgt_select: mgType == 'all'}">全部类型</p>
                 <p v-for="item in maingoodtype" @click="getGoodsType(item.id,item.category)"
                  :class="{mgt_select: mgType == item.id}">{{item.category}}</p>
               </div>
               <div class="rightrow">
                  <div class="row servicelist">
                    <div class="col s4" @click="chooseGoodType('')" ><div :class="{listselect: gType == '' & mgType==cmgTpe}" class="word">全部</div></div>
                    <div class="col s4" v-for="item in goodtype" @click="chooseGoodType(item.id)"
                     ><div class="word" :class="{listselect: gType == item.id}">{{item.type}}</div></div>
                  </div>
                </div>
           </div>
           </transition>

          <!-- 价格section -->
           <transition name="showlist">
           <div v-show="sortBy == 'price'" class="service">
               <div class="row pricerow martop">
               <div class="col s3"><div @click="price_range('-30')" :class="{listselect: range == '-30'}">30元以下</div></div>
               <div class="col s3"><div  @click="price_range('30-100')" :class="{listselect: range == '30-100'}">30-100元</div></div>
               <div class="col s3"><div  @click="price_range('100-300')" :class="{listselect: range == '100-300'}">100-300元</div></div>
               <div class="col s3"><div  @click="price_range('300-1000')" :class="{listselect: range == '300-1000'}">300-1000元</div></div>
               </div>
               <div class="row pricerow">
               <div class="col s3"><div @click="price_range('1000-3000')" :class="{listselect: range == '1000-3000'}">1000-3000元</div></div>
               <div class="col s3"><div @click="price_range('3000-')" :class="{listselect: range == '3000-'}">3000以上</div></div>
               </div>
               <div class="row searchInput">
                 <input  type="text" placeholder="最低价" v-model='minprice' class="tmt-style-txt col s4">
                 <span class="col s1 yuan">元</span>
                   <p class="col s2 priceline">—</p>
                  <input type="text" placeholder="最高价" v-model='maxprice' class="tmt-style-txt col s4">
                  <span class="col s1 yuan">元</span>
               </div>
               <div class="row pricerow no-padding">
                <div class="col s6 resetbtn" @click="reset()">
                重置
                </div>
               <div class="col s6 searchbtn" @click="suresearch()">
                确定
               </div>
               </div>
           </div>
           </transition>

          <!-- 区服section -->
           <transition name="showlist">
           <div v-show="sortBy == 'service'" class="service">
               <div class="leftrow">
                 <p @click="getService('all')" :class="{mgt_select: sType == 'all'}">全部</p>
                 <p v-for="item in gamechannel" @click="getService(item.id)" :class="{mgt_select: sType == item.id}">{{item.channelName}}</p>
               </div>
               <div class="rightrow s9">
                 <div  class="row paddingtop">
                 <input type="text" placeholder="输入关键字搜索" class="tmt-style-txt" v-model='aKeyword'>
                  </div>
                  <div class="row servicelist">
                    <div class="col s4" @click="chooseService('0')">
                    <div  class="word" :class="{listselect: scType == '0' & sType==cscType}">
                    全部区服</div></div>
                    <div class="col s4" v-for="item in services" @click="chooseService(item.id)">
                    <div  class="word" :class="{listselect: scType == item.id}">
                    {{item.gameArea}}</div></div>
                  </div>
                </div>
           </div>
           </transition>


      </div>

      <div class="h10"></div>

      <scroller  :on-infinite="infinite" class="listscroll" ref="scroller">
        <ul class="collection with-header tmt-gamelist-ul">
          <!-- <none :nonegame='nonegame'></none> -->
          <loading :loading='searchfinish'></loading>
          <li class="collection-item" v-for="game in gamelist">
           <router-link :to="{path:'/GameDet',query:{id:game.id}}">
                <div class="row order-top">
                  <div class="col s2">
                  <img v-lazy="game.imgUrl">
                  </div>
                  <div class="col s10">
                    <p class="tmt-detail-title">
                    <span  class="fuzhu spanIcon">辅</span>
                    <span  class="baopei spanIcon">赔</span>
                    <span  class="yanzheng spanIcon">验</span>
                    {{game.gameName}}【{{game.typeName}}】{{game.title}} {{game.channelName}}
                    </p>
                    <span class="typeandArea">{{game.typeName}}/{{game.areaName}}</span>
                    <p class="price">&yen;{{game.price}}</p>
                    </div>
                  </div>
            </router-link>
          </li>
        </ul>
      </scroller>
     <div class="no-data" v-if="noData"></div>
    </div>
  </div>
</template>
<script>
import none from '@/components/common/none'
import loading from '@/components/common/loading'
import pageheader from '@/components/common/pageheader'
  export default {
    name: 'gameList',
    data() {
      return {
        title: '商品列表',                        //header 标题
        searchfinish:true,                        //请求是否完成
        nonegame:{nonegame:false,text:"没有商品"},//有没有游戏
        sortBy: '',                               //筛选
        sortByType: null,                         //根据何种方式排序
        sortWord:'综合排序',                      //排序标题
        mgType: null,                             //主类型选择
        gType:null,                               //细类选择
        cmgTpe:null,                              //关联主类细类标识
        sType:null,                               //区服渠道
        scType:null,                              //区服
        mgWord:'全部类型',                        //区服渠道文字
        cscType:null,                             //关联区服渠道和区服
        range:null,                               //价钱范围
        minprice:'',                              //最低价
        maxprice:'',                              //最高价
        aKeyword:'',                              //区服搜索输入
        params:{},                                //筛选条件集
        maingoodtype:[],                          //商品主类
        goodtype:[],                              //商品细类
        gamechannel:[],                           //游戏渠道
        services:[],                              //游戏区服
        servicesbu:[],                            //游戏区服备份 便于搜索
        gamelist:[],                              //游戏列表
        pageNow: 1,                               //初始化页数
        pageTotal:1,                            //初始化总页数
        noData:false                            //没有数据
      }
    },
    components: {
      none,
      loading,
      pageheader
    },
    created: function (){
      if(!this.$route.query.game_id){
        this.$router.replace({path: '/'});
      }else{
        if (this.$route.query.category_id) {
          this.mgType=this.$route.query.category_id;
          if(this.$route.query.channel_id){
            this.mgWord='首充号续充';
            this.params={game_id:this.$route.query.game_id,category_id:this.$route.query.category_id,channel_id:this.$route.query.channel_id,area_id:'0'};
          }else{
            this.mgWord='首充号';
            this.params={game_id:this.$route.query.game_id,category_id:this.$route.query.category_id};
          }
          this.gType='';
          this.cmgTpe=this.mgType;

          this.getGameList(this.params);
        }else{
          this.params={game_id:this.$route.query.game_id};
          this.getGameList(this.params);
        }

      }
     },
    watch:{
       aKeyword(curVal,oldVal){
        if(curVal!=''){ 　
           var services=this.servicesbu;
           var result=[];
           for (var i = services.length - 1; i >= 0; i--) {
             if(services[i].gameArea.indexOf(curVal)>=0){
                result.push(services[i]);
             }
           }
           this.services=result;
    　　　}else{
           this.services=this.servicesbu;
          }
        }
    },
    methods: {
      getGameList:function(obj){
        this.pageNow=1;
        this.pageTotal=1;
        delete obj.current_page;
        this.searchfinish=false;
        var that=this;
        this.$getDataWithUrl('','/api/product/list.view',obj,response=>{
          if (response.data.context.records.length==0) {
            that.gamelist=[];
            that.nonegame.nonegame=true;
            that.noData = true;
           }else{
            that.gamelist=response.data.context.records;
            that.nonegame.nonegame=false;
            that.noData = false;
           setTimeout(() => {
            that.pageTotal = response.data.context.pages;
            that.$refs.scroller.scrollTo(0,0,false);
          },30);
           }
            that.searchfinish=true;

        },'get');
      },
      getMainGoodsType:function(game_id){
        var that=this;
         this.$getDataWithUrl('','/api/product/transaction_type/'+game_id+'.view',{},response=>{
          if(response.data.code==1){
            that.maingoodtype=response.data.context;
            if (that.goodtype.length==0&&that.mgType==null) {
              that.getGoodsType('all','全部类型');
            }
            if (that.goodtype.length==0&&that.mgType!=null) {
              that.getGoodsType(that.mgType,that.mgWord);
            }
          }
        },'get');
      },
      getGoodsType:function(categoryId,mgWord){
        var that=this;
        that.mgType=categoryId;
        that.mgWord=mgWord;
        that.params.type_id='';
        if (categoryId=="all") {
          that.params.category_id='';
        }else{
           that.params.category_id=categoryId;
        }
         this.$getDataWithUrl('','/api/product/subdividing_type/'+this.$route.query.game_id+'/'+categoryId+'.view',{},response=>{
          if(response.data.code==1){
           that.goodtype=response.data.context;
          }
        },'get');

        that.getGameList(that.params);

      },
      getGameChannel:function(game_id){
        var that=this;
         this.$getDataWithUrl('','/api/product/channel/'+game_id+'.view',{},response=>{
          if(response.data.code==1){
            that.gamechannel=response.data.context;
            if (that.services.length==0) {
              that.getService('all');
            }
          }
        },'get');
      },
      getService:function(channelId){

        var that=this;
        that.aKeyword='';
        that.sType=channelId;
        if (channelId=="all") {
          that.params.channelId='';
        }else{
           that.params.channelId=channelId;
        }
         this.$getDataWithUrl('','/api/product/area/'+this.$route.query.game_id+'/'+channelId+'.view',{},response=>{
          if(response.data.code==1){
            that.services=response.data.context;
            that.servicesbu=response.data.context;
          }
        },'get');
      },
      chooseType:function(type){
        if (this.sortBy !== type) {
            this.sortBy = type;
        }else{
          //再次点击相同选项时收回列表
          this.sortBy = '';
        }
        if (type=='goods') {
         //this.params.
         this.getMainGoodsType(this.$route.query.game_id);
        }
        if (type=='service') {
         //this.params.
         this.getGameChannel(this.$route.query.game_id);
        }
      },
      //点击某个排序方式，获取事件对象的data值，并根据获取的值重新获取数据渲染
      sortList:function(type,word){
        this.sortBy = '';
        this.sortByType = type;
        this.sortWord=word;
        switch (type)
        {
          case 0:
                  delete this.params.order_by;
                  delete this.params.sort_order;
          break;
          case 1:
                  this.params.order_by='price';
                  this.params.sort_order='asc';
          break;
          case 2:
                  this.params.order_by='price';
                  this.params.sort_order='desc';
          break;
          case 3:;
                  this.params.order_by='mtime';
                  this.params.sort_order='asc';
          break;
        }
        this.getGameList(this.params);
      },
      price_range:function(range){
       // console.log(this.params);
        this.range=range;
        this.sortBy = '';
        this.params.price_range=range;
        this.getGameList(this.params);
      },
      chooseGoodType:function(type_id){
       this.gType=type_id;
       this.cmgTpe=this.mgType;
       this.sortBy = '';
       this.params.type_id=type_id;
       this.getGameList(this.params);
      },
      chooseService:function(area_id){
       this.scType=area_id;
       this.cscType=this.sType;
       this.sortBy = '';
       this.params.area_id=area_id;
       this.getGameList(this.params);
      },
      suresearch:function(){
       if (checkprice(this.minprice,this.maxprice)) {
       this.sortBy = '';
       this.params.price_range=this.minprice+"-"+this.maxprice;
       this.getGameList(this.params);
       }

       function checkprice(minprice,maxprice){
         if (minprice==''&&maxprice=='') {
          this.$toast('请输入金额');
          return false;
         }

         if (parseInt(minprice)>parseInt(maxprice)||parseInt(minprice)==parseInt(maxprice)) {
          this.$toast('最小金额必须小于最大金额');
          return false;
         }
         return true;
       }

      },
      reset:function(){
        this.range=null;
        delete this.params.price_range;
        this.minprice='';
        this.maxprice='';
        this.getGameList(this.params);
        this.sortBy='';
      },
      refresh:function(done){
        console.log("ddd");
      },
      infinite:function(done){

        let that = this;

        if (that.pageNow == that.pageTotal) {
           setTimeout(() => {
            done(true);
           }, 50)
          return;
        } else {
          setTimeout(() => {
            that.pageNow = that.pageNow + 1;
            that.params.current_page=that.pageNow;
            that.getNextPage(that.params);
            done()
          }, 1500)
        }

      },
      getNextPage:function(obj){
          this.searchfinish=false;
          var that=this;
          this.$getDataWithUrl('','/api/product/list.view',obj,response=>{
            if (response.data.context.records.length==0) {
              that.gamelist=[];
              that.nonegame.nonegame=true;
             }else{
              that.gamelist=that.gamelist.concat(response.data.context.records);
              that.nonegame.nonegame=false;
             }
              that.searchfinish=true;
          },'get');
        },
        closeCover:function(){
          this.sortBy = '';
        }

    }
  }
  </script>

  <style scoped lang="less">
  #gameList{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    margin: 0 auto;
  }
  .no-data{width: 100%;height:50rem;background: url("../../../static/icons/svg/kongbai_sp.svg") center no-repeat;background-size: 50%;}
  .discount{
    display: block;
    width: 50px;
    text-align: center;
    padding: 0.1rem 0.3rem;
  }
    .showlist-enter-active, .showlist-leave-active {
      transition: all .3s;
      transform: translateY(0);
    }
    .showlist-enter, .showlist-leave-active {
      opacity: 0;
      transform: translateY(-100%);
    }
    .sort_detail_type{
      padding: 0 0 0 20px;
    }
    .tmt-gamelist-control{
      position: fixed;
      top: 4.4rem;
      z-index: 10;
      max-width: 60rem;
      border-bottom: 1px solid #e5e5e5;
    }
    .tmt-page-header{
      position: fixed;
      top: 0;
      z-index: 10;
    }
    .section_all{
    z-index: 2;
    position: fixed;
    top: 8rem;
    background: #fff;
    width: 100%;
    max-width: 60rem;
    }
    .sort_list_li {
    padding:1.4rem 0;
    font-size: 1.4rem;
    color: #999;
    border-bottom: 1px solid #e5e5e5;
    }
    .sort_list_li p{font-size: 1.2rem;}
    .sort_select{
      color: #09c7d1;
    }
    .back_cover{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0,0,0,.3);
    }
  .showcover-enter-active, .showcover-leave-active {
    transition: opacity .3s
  }
  .showcover-enter, .showcover-leave-active {
    opacity: 0
  }
  .service{
    position: absolute;
    z-index: 15;
    width: 100%;
    background: #fff;
  }
  .servicelist{
    max-height: 350px;
    overflow-y: auto;
    text-align: center;
    padding: 1rem 0;
  }
  .servicelist .s4 .word{
    padding: .8rem 0;
    background: #f7f7f7;
    color: #999;
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }
  .paddingtop{
    margin: 1rem 5px 0 5px;
    padding: 5px;
  }
  .paddingtop input{
    margin-bottom: 0;
    text-align: center;
  }
  .listselect{
    color: #fff!important;
    background: #09c7d1!important;
  }
  .leftrow {
    width: 25%;
    float: left;
    text-align: center;
    background: #f7f7f7;
    color: #999;
    max-height: 350px;
    overflow-y: auto;
    font-size: 1.4rem;
  }
  .leftrow p {
      padding: 15px;
    font-size: 1.2rem;
      border-bottom: 1px solid #e5e5e5;
  }
  .rightrow{
    width: 75%;
    float: right;
  }
  .martop{
    margin-top: 1rem!important;
  }
  .pricerow{
    padding:0 .5rem;
    margin-bottom: 0;
  }
  .pricerow div div{
    padding: .8rem 0px;
    background: #f7f7f7;
    text-align: center;
    color: #999;
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
  .tmt-style-txt {
    height: 3rem!important;
  }
  .priceline{
    text-align: center;
    margin-top: 8px;
    font-size: 1.2rem;
  }
  .tmt-page-hidden-control {
      position: fixed;
      top: 4.4rem;
      z-index: 12;
      width: 100%;
      background: rgba(0,0,0,0.7);
  }
  .mgt_select{
    background: #fff;
    color: #333;
  }
  .tmt-gamelist-ul{
    padding-top: 8.6rem;
    border: none;
  }
  .rightsvg{
    width: 2.5rem;
    float: right;
    margin: -5px 20px 0 0;
  }
  .resetbtn{
    padding: 1.4rem;
    color: #09C7D1;
    background: #E7FAFB;
    text-align: center;
    font-size: 1.5rem;
  }
  .searchbtn{
    padding: 1.4rem;
    color: #fff;
    background: #09c7d1;
    text-align: center;
    font-size: 1.5rem;
  }
  .searchInput{
    padding: 2rem 4rem;
    margin-bottom: 0;
  }
  .searchInput input{
    margin-bottom: 0;
    text-align: center;
    text-indent: 0px !important;
  }
  .yuan{
    margin-top: .8rem;
    font-size: 1.2rem;
  }
  .chooseword{
    font-size: 1.2rem;
  }
  .up{
    background: url(../../../static/icons/svg/tmt_icon_droplist_click.svg) center center no-repeat;
    background-size: 100%;
    transform:rotate(180deg);
  }
  .order-top{
  padding:0.75rem 0.2rem .3rem .2rem;
  background: #fff;
  margin-bottom: 0;
  img{
    width: 100%;
    border-radius:1rem;
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
      color: #09C7D1;
  }
}
  </style>
