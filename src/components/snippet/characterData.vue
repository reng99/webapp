<template>
  <div class="characterData">
    <none :nonegame="nonegame"></none>
    <transition name="router-slid" mode="out-in">
      <div id="characterData" v-if="searchfinish">
        <div class="col s3 no-padding" v-for="gameIndexListData in gameIndexListDatas">
          <router-link  :to="{path:'/gameList',query:{game_id:gameIndexListData.id}}">
            <img class="tmt-showAZ-index-img" v-lazy="gameIndexListData.icon">
            <span class="tmt-showAZ-index-span truncate">{{gameIndexListData.name}}</span>
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import none from '@/components/common/none'
  export default {
    name: 'characterData',
    data () {
      return {
        msg: '',
        id:'',
        gameIndexListDatas:[],
        searchfinish:true,
        nonegame:{nonegame:true,text:"sorry!not relatived game."},
      }
    },
    created: function(){
      if(this.$route.query.ID){
        this.getGame(this.$route.query.ID);
      }else{
        this.$router.replace({path: '/', query:{ID: 'HOT'}});
      }
    },
    computed: {
      code() {
        return this.$route.query.ID;
      }
    },
    watch: {
      code(curVal,oldVal){　
          var vm = this;
          if(curVal){
            vm.getGame(curVal);
          }else{
            vm.$router.replace({path: '/', query:{ID: 'HOT'}});
            vm.getGame('HOT');　　
          }
  　　　}
    },
    methods:{
      getData:function(){
        this.id=this.$route.query.ID;
      },
      getGame: function(code){
        var vm = this;
        vm.searchfinish=false;
        vm.nonegame.nonegame=false;
        vm.$getDataWithUrl('/api','/game/list/'+code+'/8.view',{},response => {
          if(response.data.context.length == 0){
            vm.nonegame.nonegame = true;
            vm.gameIndexListDatas = [];
          }else{
            vm.nonegame.nonegame = false;
            vm.gameIndexListDatas = response.data.context;
          }
          vm.searchfinish=true;
        },'get');
      }
    },
    components: {
      none
    }
  }
</script>
<style scoped lang="less">
  #characterData{
    height: auto;
    overflow:hidden;
  }
  .router-slid-enter-active, .router-slid-leave-active {
    transition: all 0.3s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
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

