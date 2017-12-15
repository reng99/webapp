<template>
  <div id="schXC">
    <div class="main">
        <back :title='title'></back>
        <div class="row no-margin sdiv">
         <div class="col s12 paddingtop">
           <input type="text" v-model="keyword" v-focus   class="tmt-style-txt" placeholder="请搜索首充号">
           <div class="tip">仅支持在淘米淘购买的首充号</div>
         </div>


          <div class="col s12"><button class="tmt-style-button" @click="searchXC">搜 索</button></div>
        </div>
    </div>
  <viewmodal :loading='viewmodal'></viewmodal>
  </div>
</template>

<script type="text/javascript">
import viewmodal from '@/components/common/viewmodal'
import back from '@/components/snippet/back.vue'
export default {
  name: 'schXC',
  data() {
    return{
    title:'首充号续充',
    keyword:'',
    viewmodal:false
    }
  },
  components: {
    viewmodal,
    back
  },
  methods:{
    searchXC:function(){
       if (this.keyword!='') {
        var that=this;
       that.viewmodal=true;
       this.$getDataWithUrl('','/api/product/sch/check/'+this.keyword+'.view',{},response=>{
          that.viewmodal=false;
          if (response.data.code==1) {
            that.$router.push('/gameList?game_id='+response.data.context.gameId+'&category_id='+response.data.context.categoryId+'&channel_id='+response.data.context.channelId);
          }else{
            that.alertMsg(response.data.msg);
          }
       })
      }else{
        this.$toast('首充号不能为空');
      }

    },
    alertMsg:function(msg){
      swal({
        text:msg,
        buttons:['关闭','去购买首充号'],
        dangerMode: true
      }).then((value)=>{
        if(value){
          this.$router.push('/buySch');
        }
      });
    }
  },
  directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
}
</script>

<style scoped>
  #schXC{
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
  padding-top: 0;
  float: right;
  margin-top: 20px!important;
  margin-bottom:2rem !important;
}
.sdiv{
      position: absolute;
      width: 100%;
      top: 4.4rem;
      background: none!important;
}
.searchBtn{
    position: absolute;
    background: #09c7d1;
    color: #fff;
    padding: 3px 15px;
    top: 14px;
    right: 20px;
    border-radius: 3px;
}
.tmt-style-txt{
    margin-bottom: 0!important;
    margin-top: 0.7rem!important;
    background: #fff!important;
    height: 4rem!important;
}
.tip{
    margin-top: 1rem;
    color: #999;
}
</style>
