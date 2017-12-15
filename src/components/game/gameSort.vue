<template>
  <div>

      <none :nonegame='nonegame'></none>
      <loading :loading='searchfinish'></loading>

      <transition name="router-slid" mode="out-in">
        <div class="rightRow" v-if="searchfinish"  >
          <div class="col s4 no-padding" v-for="game in gamelist">

           <router-link v-if="!game.gpcId&&gameSort.page=='buy'"  :to="{path:'/gameList',query:{game_id:game.id}}">
              <img class="tmt-showAZ-index-img" v-lazy="game.icon">
              <span class="tmt-showAZ-index-span truncate" >{{game.name}}</span>
           </router-link>

           <router-link v-if="!game.gpcId&&gameSort.page=='sell'"  :to="{path:'/stepOne',query:{game_id:game.id}}">
              <img class="tmt-showAZ-index-img" v-lazy="game.icon">
              <span class="tmt-showAZ-index-span truncate" >{{game.name}}</span>
           </router-link>

           <router-link v-if="game.gpcId"  :to="{path:'/gameList',query:{game_id:game.id,category_id:game.gpcId}}">
              <img class="tmt-showAZ-index-img" v-lazy="game.icon">
              <span class="tmt-showAZ-index-span truncate" >{{game.name}}</span>
           </router-link>

          </div>
        </div>
      </transition>
  </div>
</template>

<script type="text/javascript">
import loading from '@/components/common/loading'
import none from '@/components/common/none'
export default {
  name: 'gameSort',
  data() {
    return{
    searchfinish:true,//请求是否完成
    nonegame:{nonegame:true,text:"找不到游戏"},//有没有游戏
    gamelist:[],
    }
  },
  props: {
    gameSort: Object,
  },
  created: function (){
      this.getgame(this.code);
  },
  components: {
   loading,
   none
  },
  computed: {
     code() {
　　　　return this.gameSort.code
　　}
  },
  watch:{
     code(curVal,oldVal){　　　
        this.getgame(curVal);
　　　}
  },
  methods:{
    getgame:function(code){
      this.searchfinish=false;
      this.nonegame.nonegame=false;
      var that=this;
      if (that.gameSort.page=="buySch") {
        var url='/api/game/sch/list/'+code+'.view';
      }else{
        var url='/api/game/list/'+code+'/0.view';
      }
      this.$getDataWithUrl('',url,{},response=>{
          if (response.data.context.length==0) {
            that.nonegame.nonegame=true;
            that.gamelist=[];
           }else{
            that.nonegame.nonegame=false;
            that.gamelist=response.data.context;
           }
           that.searchfinish=true;
        },'get');

    }
  }
}
</script>

<style scoped>
.rightRow{
padding-top: 10px;
}
.router-link-exact-active{
background: #fff!important;
color: #09c7d1!important;
}
.router-link-active{
width: 100%;
color: #333;
background: #F2F2F2;
}
.router-slid-enter-active, .router-slid-leave-active {
transition: all 0.3s;
}
.router-slid-enter, .router-slid-leave-active {
transform: translate3d(2rem, 0, 0);
opacity: 0;
}
.loading{
font-size: 20px;
position: absolute;
margin-top: 50%;
left: 50%;
text-align: center;
}
.row .col.s4{
text-align: center;
}
.tmt-showAZ-index-img {
position: relative;
width: 5rem;
height: 5rem;
}
img[lazy =loading] {
background: url('../../assets/logo.gif');
background-size: cover;
}
img[lazy =error] {
background: url('../../assets/logo.gif');
background-size: cover;
}
</style>
