<template>
  <div class="toolbar">
    <ul class="row">
      <li v-for="list in toolLists" class="col s3 no-padding">
        <a href="javascript:;" class="default-color" :class="list.curClass">
          <i :class="list.class"></i>
          <span v-if="list.curClass" class="main-color">{{list.name}}</span>
          <span v-else>{{list.name}}</span>
        </a>
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
          param: '1',
          class: 'tmt-icons-home',
          curClass: 'icon-a-on'
        },
        {
          name: '我要买',
          url: '/',
          param: '2',
          class: 'tmt-icons-buy'
        },
        {
          name: '我要卖',
          url: '/',
          param: '3',
          class: 'tmt-icons-sell'
        },
        {
          name: '个人中心',
          url: '/',
          param: '4',
          class: 'tmt-icons-mine'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .toolbar{
    background:#fff;
    position:fixed;
    width:100%;
    bottom:0;
    .row{
      max-width:60rem;
      margin:0 auto;
      height:4.4rem;
      font-size:1.4rem;
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
