<template>
  <footer class="page-footer">
    <div class="row no-margin" v-if="false">
      <div class="col s3 center no-padding" v-for="tab in friLinks">
        <router-link :to="{ path:tab.url,query:{id:tab.param}}" class="link">{{tab.name}}</router-link>
      </div>
    </div>
    <div class="footer-copyright" v-if="false">
      <div class="container">
        <p>Copyright &copy; 2017  淘米淘，All Rights Reserved</p>
        <p>粤ICP备17007389</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        friLinks: [
          {
            name: '关于我们',
            url: '/help',
            param: '1'
          },
          {
            name: '诚信服务',
            url: '/article',
            param: '2'
          },
          {
            name: '交易保障',
            url: '/article',
            param: '3'
          },
          {
            name: '客服中心',
            url: '/help',
            param: '4'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .page-footer{
    font-size:1rem;
    background:#f7f7f7;
    padding-bottom:4.4rem;
    max-width:60rem;
    margin:0 auto;
    .link{
      text-align:center;
      border-right:.1rem solid #e5e5e5;
      color:#666;
      &:last-child{
        border:0;
      }
    }
    .footer-copyright{
      font-size:1rem;
      background:#f7f7f7;
      p{
        color:#666;
        text-align:center;
      }
    }
  }
</style>
