<template>
  <div class="toolbar">
    <ul class="row">
      <li v-for="(list,index) in toolLists" class="col s3 no-padding">
        <router-link :to="{path:list.url}" class="color99" :class="{'icon_a_on':list.id==toolId}">
          <i :class="list.class"></i>
          <span :class="{'main-color':list.id==toolId}">{{list.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  data () {
    return {
      toolLists: [
        {
          name: '首页',
          url: '/',
          id: '0',
          class: 'tmt-icons-home'
        },
        {
          name: '我要买',
          url: '/buy',
          id: '1',
          class: 'tmt-icons-buy'
        },
        {
          name: '我要卖',
          url: '/sell',
          id: '2',
          class: 'tmt-icons-sell'
        },
        {
          name: '个人中心',
          url: '/personalCenter',
          id: '3',
          class: 'tmt-icons-mine'
        }
      ]
    }
  },
  props: {
    toolId: {
      type: Number,
      default: 0
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
  .toolbar{
    background:#fff;
    position:fixed;
    width:100%;
    bottom:0;
    left: 0;
    z-index: 997;
    .row{
      max-width:60rem;
      margin:0 auto;
      height:4.4rem;
      font-size:1.2rem;
      text-align:center;
      li a{
        display:flex;
        flex-direction:column;
        margin-top:.6rem;
        i{
          width:1.8rem;
          height:1.8rem;
          display:block;
          margin:0 auto;
        }
      }
    }
  }
</style>
