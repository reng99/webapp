<template>
  <div id="messageDetail">
    <back :title='"消息详情"'></back>
    <div class="headMsg">
      <h3 class="title">{{messageDets.subject}}</h3>
      <p class="time">{{messageDets.ctime}}</p>
    </div>
    <div class="message-content" ref="bodyContent"></div>

  </div>
</template>

<script>
  import back from '@/components/snippet/back.vue'
  export default {
    name : "messageDetail",
    data () {
      return {
        messageDets: {}
      }
    },
    created: function () {
      this.showMessageDetail(this.$route.query.id);
    },
    computed : {
      code() {
        return this.$route.query.id;
      }
    },
    watch : {
      code(curVal) {
        this.showMessageDetail(curVal);
      }
    },
    components:{
      back
    },
    methods: {
      showMessageDetail: function(currentId){
        var vm =this;
        vm.$getDataWithUrl('/user','/message/detail/'+currentId+'.view','',response => {
          vm.messageDets = response.data.context;
          vm.$refs.bodyContent.innerHTML = vm.messageDets.content;
        },'get');
      },
    }
  }
</script>

<style lang="less" scoped>
  #messageDetail{
    max-width: 60rem;
    margin: 0 auto;
    .headMsg{
      border-bottom: .1rem solid #e5e5e5 ;
      width: 94%;
      margin: 0 auto;
      .title{
        font-size: 1.8rem;
        color: #666;
        padding: 1rem 0 .4rem 0;
        line-height: 2rem;
      }
      .time{
        color: #999;
        font-size: 1.2rem;
        padding-bottom: 1rem;
      }
    }
    .message-content{
      width: 94%;
      margin: 0 auto;
      padding: 1rem 0;
      font-size: 1.2rem;
    }
  }
</style>
