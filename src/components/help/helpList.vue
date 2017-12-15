<template>
  <div id="help">
    <div class="main">
      <div class="tmt-page-header bg-white">
        <div class="row no-margin">
          <div class="col s3 no-padding">
            <a href="javascript:void(0)" @click="goBack" class="tmt-page-top-back">
              <i class="tmt-icons-arrow-leftright"></i>
            </a>
          </div>
          <div class="col s6 no-padding">
            <div class="tmt-page-top-title center">{{pageTitle}}</div>
          </div>
          <div class="col s3 no-padding">
            <router-link :to="{ path: '/', query: {id:'1'}}"  class="tmt-page-top-icon right" replace>
              <i class="tmt-icons-home right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="tmt-collection">
        <div class="tmt-collection-main no-padding-bottom no-padding-top">
          <router-link :key="item.tid" :to="{ path:item.url,query:{id:item.tid}}" class="tmt-collection-single-a"  v-for="item in renderData">
            <p class="pArticle truncate left">{{item.title}}</p><abbr class="rightIcon right"></abbr>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'article',
    data() {
      return {
        msg: '',
        pageTitle:'',
        renderData:[]
      }
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
    created:function () {
      this.venderData(this.$route.query.id);
    },
    methods: {
      goBack: function () {
        let _this = this;
        _this.$router.back(-1)
      },
      venderData:function (pid) {
        let that = this;
        that.$getDataWithUrl('/helplist.json','','',response=> {
          let listData = [];
          if(response.data.status=='1') {
            var noDatax = '';
            listData=response.data.data;
            for (var i = 0; i < listData.length; i++) {
              if (pid == listData[i].tid) {
                that.pageTitle = listData[i].title;
                that.renderData = listData[i].list;
                noDatax = false;
                break;
              } else {
                noDatax = true;
              }
            }
            if (noDatax) {
              this.$router.push('/p404');
            }
          }
        },'get');
      }
    }
  }
</script>
<style scoped lang="less">
  #help {
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
      /* index page collection code */
      .tmt-collection{
        width: 100%;background: #fff;overflow: hidden;
        .tmt-collection-main{
          padding: .8rem .75rem;
          a.row{padding-bottom:1rem;border-bottom:.065rem solid #f2f2f2;margin-bottom: 1rem;height:4rem;display: block;width: 100%;}
          a:last-child{margin-bottom: 0 !important;border-bottom: none !important;}
          .tmt-collection-single-a{font-size: 1.3rem;margin: 0;padding:1.2rem 0;border-bottom:1px solid #f2f2f2;display: block;overflow: hidden;
            p.pIndex{width: 70%;margin: 0;padding: 0;color:#333;}
            p.pArticle{width: 80%;margin: 0;padding: 0;color:#333;}
            abbr.rightIcon{padding:.8rem 1rem;background: url('../../../static/icons/svg/icon-leftright_gray.svg') center center no-repeat;background-size: 70%;}
          }
        }
      }
    }
  }
</style>
