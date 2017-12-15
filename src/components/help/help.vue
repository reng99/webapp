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
            <div class="tmt-page-top-title center">关于我们</div>
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
          <router-link :key="item.tid" :to="{ path:item.path,query:{id:item.pid}}" class="tmt-collection-single-a"  v-for="item in listData">
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
        listData:[
          {
            tid:'a',
            path:'/helpList',
            pid:'a',
            title:'新手帮助'
          },
          {
            tid:'b',
            path:'/helpList',
            pid:'b',
            title:'买家帮助'
          },
          {
            tid:'c',
            path:'/helpList',
            pid:'c',
            title:'卖家帮助'
          },
          {
            tid:'d',
            path:'/helpList',
            pid:'d',
            title:'安全保障'
          },
          {
            tid:'e',
            path:'/helpList',
            pid:'e',
            title:'关于我们'
          }
        ]
      }
    },
    methods: {
      goBack: function () {
        let _this = this;
        _this.$router.back(-1)
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
