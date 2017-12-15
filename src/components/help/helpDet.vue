<template>
  <div id="helpDet">
    <div class="main">
      <div class="tmt-page-header bg-white">
        <div class="row no-margin">
          <div class="col s3 no-padding">
            <a href="javascript:void(0)" @click="goBack" class="tmt-page-top-back">
              <i class="tmt-icons-arrow-leftright"></i>
            </a>
          </div>
          <div class="col s6 no-padding">
            <div class="tmt-page-top-title center">详情</div>
          </div>
          <div class="col s3 no-padding">
            <router-link :to="{ path: '/', query: {id:'1'}}"  class="tmt-page-top-icon right" replace>
              <i class="tmt-icons-home right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="tmt-article-main">
        <p class="tmt-article-title">{{pageTitle}}</p>
        <p class="tmt-article-time">发布作者： 淘米淘官网</p>
        <div class="tmt-aritcle-content">
          <p class="context">{{pageCont}}</p>
          <div class="h10"></div>
         <p><a href="javascript:;" class="ui-link">【在线客服】</a></p>
        </div>
      </div>
      <div class="h10"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'article',
    data() {
      return {
        pageTitle:'',
        pageCont:''
      }
    },
    created: function (){
        this.venderData(this.$route.query.id);
    },
    computed: {
      code() {
        return this.$route.query.id;
      }
    },
    watch:{
      code(curVal,oldVal){
        this.venderData(curVal);
      }
    },
    methods: {
      goBack: function () {
        let _this = this;
        _this.$router.back(-1)
      },
      venderData:function (pid) {
        let that = this;
        that.$getDataWithUrl('/helpDetail.json','','',response=>{
          let listData = [];
          if(response.data.status=='1'){
            var noDatax='';
            listData=response.data.data;
            for(var i=0;i<listData.length;i++){
              if(pid==listData[i].tid){
                that.pageTitle = listData[i].title;
                that.pageCont = listData[i].context;
                noDatax=false;
                break;
              }else{
                noDatax=true;
              }
            }

            if(noDatax){
              // this.$router.push('/p404');
            }
          }
        },'get');
      }
    }
  }
  </script>
<style scoped lang="less">
  #helpDet {
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
      flex-grow: 1;
      .tmt-article-main{padding:.75rem;background:#fff;border-bottom: 1px solid #ddd;
        p{margin: 0;padding: 0;}
        .tmt-article-title{font-size:1.6rem;}
        .tmt-article-time{color:#999;border-bottom: 1px solid #eee;padding-bottom:1rem !important;margin-bottom:1rem !important;}
        .tmt-aritcle-content{font-size: 1.2rem;
          p{font-size: 1.2rem;}
          p.context{color:#666;}
        }
      }
    }
  }
  </style>
