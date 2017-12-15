<template>
  <div class="viewmodal" v-if="show"  @click="close">
      <div class="main">
      <div class="title">请选择</div>
        <ul>
          <li v-for="option in options"  @click="select(option)">{{option.text}}</li>
        </ul>
      </div>
  </div>
</template>


<script type="text/javascript">
export default {
  name: 'actionSheet',
  data(){
    return {
    options: [],
    show:true,
    select:function(a){}
    }
  },
  methods: {
      close:function(){
        this.show=false;
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
  background: rgba(0,0,0,0.3);
  top: 0;
  left: 0;
  z-index: 9999;
}
.main{
  position: fixed;
  bottom: 0;
  background: #e5e5e5;
  width: 100%;
  z-index: 999999999;
}
.main ul{
  max-height: 24rem;
  overflow: auto;
}
.main li{
  padding: 1rem;
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
  font-size: 1.5rem;
}
.title{
  background: #09c7d1;
  color: #fff;
  padding: 1rem;
}
.back_cover{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0,0,0,.6);
}
</style>
