<template>
  <div id="articleDet">
    <div class="main">
      <!--<div class="tmt-page-header bg-main">
        <div class="row no-margin">
          <div class="col s3 no-padding">
            <a href="javascript:void(0)" @click="goBack" class="tmt-page-top-back">
              <i class="tmt-icons-arrow-leftright"></i>
            </a>
          </div>
          <div class="col s6 no-padding">
            <div class="tmt-page-top-title center">文章详情</div>
          </div>
          <div class="col s3 no-padding">
            <router-link :to="{ path: '/'}"  class="tmt-page-top-icon right" replace>
              <i class="tmt-icons-home right"></i>
            </router-link>
          </div>
        </div>
      </div>-->
      <back :title='title'></back>
      <div class="tmt-article-main">
        <p class="tmt-article-title color-red" v-if="articleDets.mark == '1'">{{articleDets.title}}</p>
        <p class="tmt-article-title" v-else>{{articleDets.title}}</p>
        <p class="tmt-article-time">发布时间： {{articleDets.time}}</p>
        <div class="tmt-aritcle-content" ref="bodyContent"></div>
      </div>
      <vue-footer></vue-footer>
    </div>
  </div>
</template>
<script>
  import vueFooter from '@/components/common/footer.vue'
  import back from '@/components/snippet/back.vue'
  export default {
    name: 'articleDet',
    data() {
      return {
        articleDets:{},
        title : '文章详情'
      }
    },
    components:{
      vueFooter,
      back
    },
    created: function(){
      if(!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
        window.location.href='https://www.taomitao.com/notice/article/'+this.$route.query.id+'.view';
      }
      var vm = this;
      vm.showArticle(vm.$route.query.id);
    },
    methods: {
      goBack: function () {
        let _this = this;
        _this.$router.back(-1)
      },
      showArticle: function(currentId){
        var vm =this;
        vm.$getDataWithUrl('/api','/notice/detail/'+currentId+'.view',{},response => {
          vm.articleDets = response.data.context;
          vm.$refs.bodyContent.innerHTML = vm.articleDets.body;
        },'get');
      },
      limitImgs: function(){
        // 获取内容的主要宽度
        var _width = $('.tmt-article-main').width();

        // 非table下面的imgs
        var not_table_imgs = $('img').not("table img");
        for(let i = 0; i < not_table_imgs.length ; i++){
          not_table_imgs[i].style.width = _width + 'px';
        }

        // 改变table的宽度
        var table = $ ("table");
        for(let j =0 ; j < table.length ; j++){
          table[j].style.width = _width + 'px';
          // table tr 内的imgs
          var tr_imgs = $("table tr img");
          var first_tr_len = $("table tr:first img").length;
          switch(first_tr_len){
            case 1 : limitTableImg(tr_imgs,0,1) ;break;
            case 2 : limitTableImg(tr_imgs,30,2) ;break;
            case 3 : limitTableImg(tr_imgs,20,3) ;break;
            case 4 : limitTableImg(tr_imgs,10,4);break;
            case 5 : limitTableImg(tr_imgs,4,5);break;
            default: ;break;
          }
        }
        function limitTableImg(imgsStack,distance,imgNum){
          for(let k = 0 ; k < imgsStack.length; k++){
            imgsStack[k].style.width = Math.floor((_width-distance*imgNum)/imgNum) + 'px';
          }
        }
      }
    },
    updated: function () {
      var vm = this;
      vm.$nextTick(function(){
        vm.limitImgs();
        $(window).resize(function(){
          vm.limitImgs();
        });
      });
    }
  }
</script>
<style scoped lang="less">
  #articleDet {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;

    .main {
      .tmt-article-main{
        max-width: 60rem;
        margin: 0 auto;
        padding:.75rem;background:#fff;border-bottom: 1px solid #ddd;
        p{margin: 0;padding: 0;}
        .tmt-article-title{font-size:1.6rem;}
        .tmt-article-time{color:#999;border-bottom: 1px solid #eee;padding-bottom:1rem !important;margin-bottom:1rem !important;}
        .tmt-aritcle-content{
          font-size: 1.2rem;
          p{font-size: 1.2rem;}
        }
      }
      .color-red{
        color:#f00;
      }
    }
  }
  </style>
