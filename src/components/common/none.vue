<template>
  <div class="loadingmodal">
      <div class="loading" v-show="none">{{text}}</div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'none',
  props: {
    nonegame: Object,
  },
  computed: {
     none() {
　　　　return this.nonegame.nonegame
　　 },
    text(){
        return this.nonegame.text
    }
  },
}
</script>
<style scoped>
.loadingmodal{
  width: 100%;
  text-align: center;
}
.loading{
  padding:2rem 0;
  margin-top:10%;
  font-size: 2rem;
}
</style>
