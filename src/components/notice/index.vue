<template>
  <div id="article">
    <back :title='title' :jumpTo='jumpTo'></back>
    <scroller style="padding-top: 4.4rem;"
    :on-refresh="refresh"
    :on-infinite="infinite"
    ref="myscroller">
      <div class="tmt-collection-main white-bg no-padding-top no-padding-bottom">
        <router-link v-for="(item,index) in pageOneDatas" :to="{path:'/article',query:{id:item.id}}" :key="index"  class="tmt-collection-single-a">
          <p class="pIndex truncate left red-text" v-if="item.mark == '1'">{{item.title}}</p>
          <p class="pIndex truncate left" v-else>{{item.title}}</p>
          <span class="right">{{item.time}}</span>
        </router-link>
      </div>
    </scroller>
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  export default {
    name: 'article',
    data() {
      return {
        noData:'',
        pageOneDatas:[],
        totalPage: 1,
        currentPage: 1,
        title : '公告列表',
        jumpTo :'/',
      }
    },
    created: function(){
    },
    methods: {
      goBack: function(){
        var vm = this;
        vm.$router.go(-1);
      },
      refresh: function (done) {
        var vm = this;
        setTimeout(function(){
          vm.$getDataWithUrl('/api','/notice/list/1.view',{},response => {
            vm.pageOneDatas = [];
            vm.noData = '';
            vm.totalPage = vm.currentPage-1;
            if(vm.totalPage>=2){
              vm.currentPage = 2;
            }
            vm.pageOneDatas = response.data.context.list;
          },'get')
          done();
        },1500);
      },
      infinite: function (done) {
        let vm = this;
        if(vm.noData) {
          setTimeout(()=>{
              this.$refs.myscroller.finishInfinite(1);
          })
          return;
        }
        let start = 20;
        console.log('-->'+vm.totalPage);
        vm.$getDataWithUrl('/api','/notice/list/'+vm.currentPage+'.view',{},response => {
          vm.totalPage = response.data.context.pages;
          console.log(vm.currentPage);
          vm.currentPage++;
          setTimeout(function(){
              for(let i = 0; i < response.data.context.list.length; i++) {
                  vm.pageOneDatas.push(response.data.context.list[i]);
              }
              if(vm.currentPage > vm.totalPage) {
                  vm.noData = "没有更多数据"
              }
              vm.$refs.myscroller.resize();
              done();
          }, 1500);
        },'get');
      }
    },
    components: {
      back
    }
  }
</script>
<style scoped lang="less">
#article{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
  .white-bg{
    background-color:#fff;
  }
}

</style>
