<template>
  <div id="myMessageData">
    <scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller" style="padding-top:8.9rem;">
      <router-link class="list-main" v-for="(item,index) in allOrder" :key="index"  :to="{path:'/messageDetail',query:{id:item.id}}">
        <div class="list-content truncate" :class="{'isRead':item.isRead == 'READ'}">{{item.subject}}</div>
        <div class="list-footer">
          <div class="time">{{item.ctime}}</div>
          <div class="right">
            查看详情&nbsp;
            <i class="arrow-right"></i>
          </div>
        </div>
      </router-link>
    </scroller>
    <div class="no-data" v-if="noData"></div>
  </div>
</template>

<script>

export default {
  name : "myMessageData",
  data () {
      return {
        msg: '',
        state: '',
        allOrder: [],
        pageNow:1,
        noData:false,
        modalTitle:'',
        modalContext:'',
        modalBottom:'',
        pageTotal:1,
        jsonStatue:
          {
            ok:'1',
            err:'-1',
          }
      }
  },
  created : function (){

  },
  mounted : function (){
      let that = this;
      that.state = that.$route.query.state;
  },
  computed : {
    code() {
        return this.$route.query.state;
    }
  },
  watch : {
    code(curVal) {
        this.state = curVal;
        this.allOrder = [];
        this.pageNow = 1;
        this.pageTotal = 1;
        this.$refs.myscroller.finishInfinite(false);
    }
  },
  methods : {
      refresh: function (done) {
        var self = this;
        setTimeout(function(){
        self.$getDataWithUrl('/user','/message/page/1.view',{"category":self.state},response=>{
          self.allOrder = [];
          self.pageTotal = response.data.context.pages;
          if(self.pageTotal==0){
            self.noData = true;
          }else{
            self.noData = false;
          }
          if(response.data.code==self.jsonStatue.ok) {
            self.allOrder = response.data.context.records;
          }
        },'get');
          done()
        }, 500);
      },
      infinite: function (done) {
        let that = this;
        if (that.pageNow > that.pageTotal) {
            done(true)
          return;
        } else {
          that.$getDataWithUrl('/user','/message/page/'+that.pageNow+'.view',{"category":that.state},response=>{
          that.pageTotal = response.data.context.pages;
            if(that.pageTotal==0){
              that.noData = true;
            }else{
              that.noData = false;
            }
          that.pageNow++;
          setTimeout(function(){
            for(let i=0;i<response.data.context.records.length;i++){
              that.allOrder.push(response.data.context.records[i]);
            }
            that.$refs.myscroller.resize();
            done();
          }, 500);
        },'get');
        }


      },
  }
}

</script>

<style lang="less" scoped>
  #myMessageData{
    // background:red;
    max-width: 60rem;
    margin:0 auto;
    .no-data{width: 100%;height:20rem;background: url("../../../static/icons/svg/kongbai_xx.svg") top center no-repeat;background-size: 50%;}
    .list-main{
      width:100%;
      padding:0 1rem;
      height:auto;
      background:#fff;
      border-radius:.4rem;
      margin-top:1rem;
      font-size: 1.3rem;
    }
    // .list-header{
    //   display:flex;
    //   flex-direction: row;
    //   justify-content: space-between;
    //   .status{
    //     font-size:1.3rem;
    //   }
    // }
    .list-content{
      color: #333;
      line-height:4rem;
      font-size: 1.4rem;
    }
    .list-content i{padding:.3rem .3rem;background:red;border-radius: 5rem;display: inline-block;margin-right: .5rem;}
    .list-footer{
      border-top: .1rem solid #e5e5e5;
      color: #999;
      display:flex;
      flex-direction: row;
      align-items: center;
      line-height:4rem;
      box-sizing: border-box;
      padding: 0;
      justify-content: space-between;
      font-size: 1.2rem;
      .right {
        display: flex;
        align-items: center;
        i.arrow-right{
          padding-left:.4rem;
          display:block;
          width:1rem;
          height:1rem;
          background: url('../../../static/icons/svg/icon-leftright_gray.svg') center center no-repeat;
          background-size: 90%;
        }
      }
    }
    // 判断消息是否已读
    .isRead{
      color: #999;
    }
  }
</style>
