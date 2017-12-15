<template>
  <div class="viewmodal" v-if="loading">
    <div class="loading" v-marginTop="height">
      <img class="oval" src="../../../static/imgs/oval.svg">加载中</div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'viewmodal',
  props: {
    loading: Boolean,
  },
  computed: {
    height() {
　　　return this.whandww.wHeight/2-30;
　　}
  },
  directives: {
  marginTop:{
    inserted: function (el,binding) {
     el.style.marginTop=binding.value+"px";//设置居中
    }
  }
}
}
</script>
<style scoped>
.viewmodal{
  width: 100%;
  text-align: center;
  position: fixed;
  height: 100%;
  background: rgba(255,255,255,0.2);
  top: 0;
  left: 0;
  z-index: 2;
}
.loading{
  width: 60px;
  height: 60px;
  font-size: 12px;
  background: rgba(0,0,0,0.6);
  color: #fff;
  margin: auto;
  margin-top: 338px;
  border-radius: 5px;
}
.oval{
  width: 30px;
  margin: 5px 15px;
}
</style>
