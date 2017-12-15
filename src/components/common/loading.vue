<template>
  <div class="loadingmodal">
      <div class="loading" v-show="!loading">loading...</div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'loading',
  props: {
    loading: Boolean,
  }
}
</script>
<style scoped>
.loadingmodal{
  width: 100%;
  text-align: center;
}
.loading{
font-size: 2rem;
margin-top:10%;
padding:2rem 0;
}
</style>
