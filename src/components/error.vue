<template>
  <div id="error">
      <div class="eimg"><img src="../../static/imgs/kong_couwu.png"></div>
      <div class="emsg">{{msg}}</div>
      <div class="btngroup">
        <span @click="back" class="btnchild back">返回</span>
        <span @click="help" class="help btnchild">帮助</span>
      </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'error',
  computed: {
     msg() {
　　　　return this.$route.query.msg;
　　 }
  },
  methods: {
    back:function(){
      this.$router.back(-1);
    },
    help:function(){
      this.$router.push({path:'/help',query:{id:'1'}});
    }
  }
}
</script>
<style scoped>
#error{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  margin: 0 auto;
}
.eimg img{
  margin-top: 10rem;
  width: 100%;
}
.emsg{
  text-align: center;
  padding: 50px;
  font-size: 1.6rem;
}
.btngroup{
  text-align: center;
}
.btnchild{
  padding: 1rem 3rem;
  border: 1px solid #999;
  border-radius: .2rem;
}
.back{
  margin-right: 5rem;
}
</style>
