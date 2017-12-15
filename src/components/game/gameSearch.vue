<template>
  <div id="gameSearch">
    <div class="main">
        <div class="row no-margin sdiv">
        <a @click="goBack" class="tmt-page-top-back">
              <i class="gs-icons-arrow-leftright"></i>
            </a>
         <div class="col s11 paddingtop">
           <input type="text" v-model="keyword" v-focus ref="serchGame" id="gameName" class="tmt-style-txt" placeholder="请搜索喜欢的游戏">
           <abbr @click="closeKeys" v-if="closeKey"></abbr>
            <span class="searchBtn" @click="searchBtn">搜索</span>
          </div>
          <div class="searchresult" v-show="searched">
            <p v-for="item in result" v-historySave:name="item">
             <router-link  :to="{path:'/gameList',query:{game_id:item.id}}">
             <img :src="item.icon" :alt="item.name">{{item.name}}
             </router-link>
             </p>
          </div>
      </div>
     <div class="row history" v-if="hasHistory">
        <p class="hotsearch">历史搜索<span @click="ClearSearchHistory"></span></p>
        <div class="col s3 no-padding" v-for="history in historylist">
        <router-link  :to="{path:'/gameList',query:{game_id:history.id}}">
        <span class="tmt-showAZ-index-span truncate" >{{history.name}}</span>
        </router-link>
        </div>
     </div>
     <div class="row">
        <p class="hotsearch">热门搜索</p>
        <div class="col s3 no-padding hsName" v-for="game in gamelist">
         <router-link  :to="{path:'/gameList',query:{game_id:game.id}}">
         <span class="tmt-showAZ-index-span truncate" v-historySave:name="game">{{game.name}}</span>
         </router-link>
        </div>
      </div>
    </div>
<viewmodal :loading='viewmodal'></viewmodal>

</div>
</template>

<script type="text/javascript">
import viewmodal from '@/components/common/viewmodal'
export default {
  name: 'gameSearch',
  data() {
    return{
    gamelist:[],
    keyword:'',
    searched:false,
    result:[],
    hasHistory:false,
    historylist:[],
    viewmodal:false,
      closeKey:false
    }
  },
  created: function (){
    this.getgame();
    if (localStorage.historySearch) {
      this.hasHistory=true;
      this.historylist=JSON.parse(localStorage.historySearch).reverse();
    }
  },
  components: {
    viewmodal
  },
  methods:{
    goBack:function(){
      let _this = this;
      _this.$router.back(-1)
    },
    getgame:function(){
      var that=this;
      this.$getDataWithUrl('','/api/game/list/HOT/12.view',{},response=>{
          if (response.data.context.length==0) {
            that.gamelist=[];
           }else{
            that.gamelist=response.data.context;
           }
        },'get');

    },
    searchBtn:function () {
      let that = this;
      var keys = that.keyword;
      if(keys!=''){
        that.searched=true;
        that.searching(keys);
        that.closeKey = true;
      }else{
        that.result=[];
        that.searched=false;
        that.closeKey = false;
      }
    },
    closeKeys:function () {
      let that = this;
      that.result=[];
      that.searched=false;
      that.keyword = '';
      that.closeKey = false;
    },
    searching:function(val){
      var arr;
      var that=this;
      that.viewmodal=true;
      this.$getDataWithUrl('','/api/game/search/'+val+'.view',{},response=>{
          if (response.data.context.length==0) {
            arr=[];
           }else{
            arr=response.data.context;
           }
           that.result=arr;
           that.viewmodal=false;
        },'get');
    },
    ClearSearchHistory:function () {
      localStorage.clear();
      this.$toast('清除成功');
      this.hasHistory = false;
    }
  },
  directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  },
  historySave:{
    // 指令的定义
    inserted: function (el,binding) {
      var bindv=binding.value
      $(el).click(function(){
        if (!localStorage.historySearch) {
          var harr=[];
          harr.push(bindv);
          localStorage.historySearch=JSON.stringify(harr);
        }else{
          var harr=JSON.parse(localStorage.historySearch);
          var ishave=false;
          for (var i = harr.length - 1; i >= 0; i--) {
              if(harr[i].name==bindv.name){
                ishave=true;
                harr.splice(i,1);
                harr.push(bindv);
                localStorage.historySearch=JSON.stringify(harr);
                break;
              }
          }
          if(harr.length!=6&&!ishave){
            harr.push(bindv);
            localStorage.historySearch=JSON.stringify(harr);
          }
          if (harr.length==6&&!ishave) {
            harr.splice(0,1);
            harr.push(bindv);
            localStorage.historySearch=JSON.stringify(harr);
          }

        }
      })
    }
  }
}
}
</script>

<style scoped>
  #gameSearch{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    max-width:60rem;
    margin:0 auto;
  }
 .main{
  flex-grow: 1;
 }
.row{
  margin-bottom: 0;
  background: #fff;
}

.paddingtop{
  position: relative;
  padding-top: 0;
  float: right;
}
.paddingtop abbr{display: block;width:3rem;height:3rem;background:url("../../../static/icons/svg/list_delete.svg") center center no-repeat;background-size:70%;position: absolute;right:7rem;top:.7rem;}
.sdiv{
      border-bottom: 1px solid #e2e2e2;
      height: 4.4rem;
}
.hotsearch{
  padding:1rem;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 10px;
  position: relative;
  font-size: 1.2rem;
}
.hotsearch span{position: absolute;top:0;width:48px;height:48px;background:url("../../../static/icons/svg/delete.svg") center no-repeat;background-size:55%;right:0;display: block;}
.searchBtn{
    position: absolute;
    background: #09c7d1;
    color: #fff;
    display: block;
  height: 3rem;
  font-size: 1.2rem;
  top: .7rem;
    right:0.7rem;
  width:6rem;
  text-align: center;
  line-height: 3rem;
  border-bottom-right-radius:3px;
  border-top-right-radius: 3px;
}
.searchresult{
  position: absolute;
  top:4.4rem;
  width: 100%;
  background: #fff;
  height: 100%;
  overflow-y:auto;
  z-index: 9;
}
.searchresult p{
    padding:.5rem 1rem .5rem 1rem;
  border-bottom: 1px solid #e2e2e2;
    font-size: 1.4rem;
  line-height: 3.6rem;
}
  .searchresult p a{color:#666;display: block;}
.searchresult p img{
    width:3.6rem;
    margin-right: 15px;
}
.tmt-style-txt{
    margin-bottom: 0!important;
    height: 3rem!important;
    margin-top: 0.7rem!important;
}
.tmt-page-top-back{
  position: absolute;
}
.history{
  margin-bottom: 10px;
}
/* game search */
.gs-icons-arrow-leftright{width: 3.4rem;height: 4.4rem;background: url('../../../static/icons/svg/icon-leftright.svg') center center no-repeat;-webkit-transform: rotate(180deg);transform: rotate(180deg);background-size:50%;display: inline-block;}
.hsName{
  text-align: center;
}
</style>
