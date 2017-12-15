<template>
<div id="sell">
    <div class="main">
      <div class="row no-margin sdiv" >
        <div class="col s12 paddingtop">
        <router-link :to="{ path: '/gameSearch'}" >
          <p class="searchBtn"><i class="tmt-header-search-icon"></i>搜索喜欢的游戏</p>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col s3 no-padding">
          <div class="leftChoose" v-setheight:style="wh">
            <router-link :to="{ path: '/sell', query: {ID:'HOT'}}">
            <div class="Hot" >热门</div></router-link>
            <router-link  v-for="item in characters" :key="item.text"  :to="{ path: '/sell', query: {ID:item.text}}"><div>{{item.text}}</div></router-link>
          </div>
        </div>
        <div class="col s9 rightcol" v-setheight:style="wh">
          <gameSort :gameSort='gameSort'></gameSort>
        </div>
      </div>
    <toolbar :toolId='toolId' />
    </div>
</div>
</template>

<script type="text/javascript">
import toolbar from './common/toolbar.vue'
import gameSort from '@/components/game/gameSort'
export default {
  name: 'sell',
  data() {
    return{
    characters:[],
    ww:this.whandww.wWidth,
    wch:0,
    wh:0,
    toolId:2,
    gameSort:{code:'HOT',page:'sell'}
    }
  },
  components: {
    toolbar,
    gameSort
  },
  created: function (){
        if(!this.$route.query.ID){
        this.$router.replace({path: '/sell', query:{ID: 'HOT'}});
        }else{
          this.gameSort.code=this.$route.query.ID;
        }
        this.checkJs();
  },
  computed: {
     code() {
　　　　return this.$route.query.ID;
　　 }
  },
  mounted(){
        var that=this;
        var cur = document.querySelector('.sdiv');
        var curHeight = cur.offsetHeight;
        that.wch=curHeight;

        function change(){
          var wHeight = "innerHeight" in window
               ? window.innerHeight
               : document.documentElement.offsetHeight;//获取当前屏幕高度
          that.wh=wHeight-that.wch*2;//重新设置中间区域高度
        }
        change();
        window.addEventListener('resize',change,false);//监听resize事件
  },
  watch:{
     code(curVal,oldVal){　
        if(curVal){
          this.gameSort.code=curVal;
        }else{
          this.$router.replace({path: '/sell', query:{ID: 'HOT'}});
          this.gameSort.code="HOT";　　
        }
　　　}
  },
  methods:{
    checkJs:function(){
      let arr=[];
      for(var i=65;i<91;i++){
        let  obj={};
        obj.id=i;
        obj.text=String.fromCharCode(i);
        arr[i-65]=obj;
      }
      this.characters=arr;
    }
  },
  directives: {
  setheight:{
    update: function (el,binding) {
     el.style.height=binding.value+"px";
    }
  }
}
}
</script>

<style scoped>
#sell {
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
.router-link-active:nth-child(even) {
border-bottom: 1px solid #E5E5E5;
border-top: 1px solid #E5E5E5;
}
.leftChoose{
text-align: center;
overflow-y: auto;
}
.row{
margin-bottom: 0;
background: #fff;
}
.leftChoose div {
padding: 15px;
font-size: 16px;
}
.paddingtop{
  padding-top: 0.6rem;
}
.paddingtop a{
  width: 100%;
}
.active{
background: #fff!important;
color: #09c7d1;
}
.sdiv{
border-bottom: 1px solid #e5e5e5;
height: 4.4rem;
}
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
.searchBtn{
width: 100%;
padding: 0.8rem;
height: 3rem;
background: #f2f2f2 !important;
border-radius: .5rem !important;
text-indent: 1rem;
font-size: 1.3rem !important;
color: #999;
text-align: center;
}
.rightcol{
  overflow-y:auto;
}
.leftChoose::-webkit-scrollbar {display:none}
.rightcol::-webkit-scrollbar {display:none}
</style>
