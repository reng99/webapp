<template>
  <div id="result">
    <div class="main">
      <back :title='title'></back>

        <div class="row successInfo">
          <div class="col s5"><img src="../../../static/icons/svg/sp_zhifu_cg.svg"></div>
          <div class="col s7">提交成功</div>
          <div class="col s12">
            恭喜您，商品已成功提交客服审核，审核通过后将直接为您上架，如需下架商品，请前往个人中心商品管理下架商品。
          </div>
          <div class="col s12 btngroup">
            <span  class="btnchild back">查看商品</span>
            <span  class="help btnchild">继续发布</span>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
import back from '@/components/snippet/back.vue'
export default {
  name: 'result',
  data() {
    return {
      title: '发布结果',
    }
  },
  components:{
    back,
  },
  created:function(){

  },
  methods: {

  }
}
</script>
<style scoped lang="less">
  #result {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    margin: 0 auto;
    background: #fff;
    .main {
      .successInfo{
        padding: 5rem 4rem;
        .s5{
          text-align: right;
          img{
            width: 3rem;
          }
        }
        .s7{
          font-size: 2.5rem;
          color: #09C7D1;
        }
        .s12{
          padding: 2rem 0;
          color: #999;
          font-size: 1.4rem;
        }
      }
      .btngroup{
        text-align: center;
        .btnchild{
          padding: 1rem 3rem;
          border: 1px solid #999;
          border-radius: .2rem;
          color: #333;
        }
        .back{
          margin-right: 2rem;
        }
      }

    }
  }
</style>
