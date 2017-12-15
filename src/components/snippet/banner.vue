<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(banner,index) in banners.data" :key="index"><router-link :to="{path:'/'}"><img :src="banner.img_src"></router-link></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'banner',
  data () {
    return {
      swiperOption:{
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      },
      banners: []
    }
  },
  methods:{
    show_banner: function () {
      var vm = this;
      vm.$getDataWithUrl('/banner.json','','',response=>{
        if(response.data.code == "1"){
          vm.banners = response.data;
        }else{
          this.$toast('banner 数据请求失败');
        }
      },'get');
    }
  },
  created: function() {
    this.show_banner();
  }
}
</script>
<style lang="less" scoped>
  .banner{
    width: 100%;
    height: auto;
    img{
      width:100%;
    }
  }
</style>
