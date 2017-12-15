<template>
<div :class="{'hidden': !visiable}" class="toastdiv"  >
    <span>{{message}}</span>
</div>
</template>
<!-- eg: this.$toast({message:"toast test",duration:3000}); -->
<script>
export default {
data () {
    return {
        message: '',
        visiable: true
    }
}
}
</script>
<style scoped>
.hidden {
  transform: scale(0);
  transition: 0.3s;
}
.toastdiv{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 999999999;
   text-align: center;
}
.toastdiv span{
  background: rgba(0,0,0,0.6);
  padding: 1rem;
  font-size: 1.5rem;
  color: #fff;
  border-radius: .5rem;
  position: relative;
  top: 50%;
  margin-bottom: 5rem;
}
</style>
