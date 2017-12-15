<template>
  <div id="stepOne">
    <div class="main">
      <back :title='title'></back>
      <div class="row headInfo">
        <div class="col s3">
          <img src="http://clam-test.ufile.ucloud.com.cn/game/2017091915561047600000122c6.jpg">
        </div>
        <div class="col s9">
          <div>少年三国志</div>
        </div>

      </div>
      <div style="height: 1rem;background: #f5f5f5;"></div>
      <div class="row">
          <form class="col s12" >
            <div class="row content">
              <div class="col s5">交易分类：</div>
              <div class="col s6" @click="actionSheet('goodCategory')">
                {{goodCategory}}
              </div>
              <div class="col s1">
              </div>
            </div>
            <div class="row content">
              <div class="col s5">交易类型：</div>
              <div class="col s6" @click="actionSheet('goodType')">
                {{goodType}}
              </div>
              <div class="col s1">
              </div>
            </div>
            <div class="row content">
              <div class="col s5">出售方式：</div>
              <div class="col s6" @click="actionSheet('sellType')">
                {{sellType}}
              </div>
              <div class="col s1">
              </div>
            </div>
            <div class="row content">
              <div class="col s5">客户端：</div>
              <div class="col s6" @click="actionSheet('goodChannel')">
                {{goodChannel}}
              </div>
              <div class="col s1">
              </div>
            </div>
          </form>
        </div>
      <div class="tmt-footer z200">
        <div class="row no-margin">
          <div class="col s12 center no-padding">
            <router-link :to="{ path: '/stepTwo'}" class="div-btn-right-now-buy waves-effect waves-light buy-step-1">下一步</router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import back from '@/components/snippet/back.vue'
export default {
  name: 'stepOne',
  data() {
    return {
      title: '选择商品类型',
      goodCategory:'账号',
      goodType:'成品号',
      sellType:'寄售方式',
      goodChannel:'安卓TT语音',
    }
  },
  components:{
    back,
  },
  created:function(){

  },
  methods: {
    actionSheet:function(e){
        var that=this;
        switch(e){
            case 'goodCategory':
                  var options=[{text:'账号1'},{text:'账号2'},{text:'账号3'},{text:'账号4'}];
            break;
            case 'goodType':
                  var options=[{text:'成品号1'},{text:'成品号2'},{text:'成品号3'},{text:'成品号4'}];
            break;
            case 'sellType':
                  var options=[{text:'寄售方式1'},{text:'寄售方式2'},{text:'寄售方式3'},{text:'寄售方式4'}];
            break;
            case 'goodChannel':
                  var options=[{text:'安卓TT语音'},{text:'安卓TY语音'},{text:'安卓TP语音'},{text:'安卓TW语音'}];
            break;
        }
        that.$actionSheet({
          options:options,
          callback:function(res){
            switch(e){
            case 'goodCategory':
                  that.goodCategory=res.text;
            break;
            case 'goodType':
                  that.goodType=res.text;
            break;
            case 'sellType':
                  that.sellType=res.text;
            break;
            case 'goodChannel':
                  that.goodChannel=res.text;
            break;
            }
          }
        });
    }
  }
}
</script>
<style scoped lang="less">
  #stepOne {
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
        background: #fff;
        margin-bottom: 4.4rem;
        #breakLine{
          height: 1rem;
          background: #f5f5f5;
          }
        .headInfo{
          margin: 0;
          padding: 1rem;
          position: relative;
          .s3{
            padding: 0;
            img{
              width: 100%;
            }
          }
          .s9{
            position: absolute;
            height: 2rem;
            right: 0;
            bottom: 0;
            top: 0;
            margin: auto;
            padding: 0 2rem;
            div{
              letter-spacing: 0.34px;
              line-height: 2rem;
              font-size: 2rem;
            }
          }
        }
        .tmt-footer{background: #fff;position: fixed;bottom:0;left:0;width: 100%;height:4.4rem;
          div.row{max-width:750px;margin: 0 auto !important;}
          div.row div.col{height:4.4rem;position: relative;}
          a{background: #09C7D1;}
        }
        .content{
          padding: 1.5rem 0;
         margin: 1.5rem .5rem;
          background: #f5f5f5;
          color: #666;
          border-radius: 5px;
          .s5{
            font-size: 1.5rem;
          }
          .s6{
            font-size: 1.6rem;
            color: #333;
            text-align: right;
          }
          .s1{
              height: 2rem;
              background:url('../../../static/icons/svg/sp_go.svg');
              background-size: 100% 100%;
              background-repeat: no-repeat;
              transform: scale(0.8);
             }
        }

    }
  }
</style>
