<template>
  <div>
    <navbar></navbar>
    <div id="body_container" class="index">
      <banner></banner>
      <div class="brief-intro">
        <div class="row no-margin top">
          <div class="col s4 center no-padding" v-for="safeguard in safeguards"><i class="tmt-index-icons-service"></i>{{safeguard}}</div>
        </div>
        <div class="row no-margin bottom">
          <router-link v-for="(businessScope,index) in businessScopes" :to="businessScope.link" class="col s3 no-padding color66" :key="index">
              <i :class="businessScope.class"></i>
              <div>{{businessScope.name}}</div>
          </router-link>
        </div>
      </div>

      <!-- game brief-->
      <div class="game-brief">
        <div class="tmt-searchAZ-index">
          <div class="row no-margin" v-if="singleLetter">
            <div class="col s13 paddingAZ"><router-link :to="{ path: '/', query: {ID:'hot'}}"><span class="tmt-searchAZ-index-span">热</span></router-link></div>
            <div class="col s13 paddingAZ"><router-link :to="{ path: '/', query: {ID:'A'}}"><span class="tmt-searchAZ-index-span">A</span></router-link></div>
            <div class="col s13 paddingAZ"><router-link :to="{ path: '/', query: {ID:'B'}}"><span class="tmt-searchAZ-index-span">B</span></router-link></div>
            <div class="col s13 paddingAZ"><router-link :to="{ path: '/', query: {ID:'C'}}"><span class="tmt-searchAZ-index-span">C</span></router-link></div>
            <div class="col s13 paddingAZ"><router-link :to="{ path: '/', query: {ID:'D'}}"><span class="tmt-searchAZ-index-span">D</span></router-link></div>
            <div class="col s13 paddingAZ" @click="switchLetterMode"><span class="tmt-searchAZ-index-span-no-event">…</span></div>
            <div class="col s13 paddingAZ"><router-link :to="{ path: '/', query: {ID:'Y'}}"><span class="tmt-searchAZ-index-span">Y</span></router-link></div>
            <div class="col s13 paddingAZ"><router-link :to="{ path: '/', query: {ID:'Z'}}"><span class="tmt-searchAZ-index-span">Z</span></router-link></div>
            <div class="col s13 paddingAZ" @click="switchLetterMode"><span class="tmt-searchAZ-index-span-more-down"></span></div>
          </div>
          <div class="row no-margin" v-else>
            <div class="col s13 paddingAZ">
              <router-link :to="{ path: '/', query: {ID:'hot'}}"><span class="tmt-searchAZ-index-span" >热</span></router-link>
            </div>
            <div class="col s13 paddingAZ"  v-for="item in character">
              <router-link :to="{ path: '/', query: {ID:item.text}}">
                <span class="tmt-searchAZ-index-span">{{item.text}}</span>
              </router-link>
            </div>
            <div class="col s13 paddingAZ" @click="switchLetterMode"><span class="tmt-searchAZ-index-span-more-up"></span></div>
          </div>
        </div>
        <div class="tmt-showAZ-index">
        <div class="row" id="ajaxDataForShowGameByLetter">
          <router-view></router-view>
        </div>
      </div>
      </div>

      <!--hot recommend-->
      <div class="hot-recommend">
        <div class="title">
          <span class="middel-line margin-right6"></span>
          <span class="txt color33">热门推荐</span>
          <span class="middel-line margin-left6"></span>
        </div>
        <div class="tmt-collection-main no-padding-bottom no-padding-left no-padding-right">
          <router-link v-for="(hotRecommendList,index) in hotRecommendLists" :key="index" :to="{path:'/GameDet',query:{id:hotRecommendList.id}}" class="row">
            <div class="col s9 no-padding-right">
              <i class="tmt-collection-icons-hot"></i>
              <div class="txt-collection-txt">
                <p class="no-margin truncate color33 hot-title">{{hotRecommendList.title}}</p>
                <p class="no-margin truncate color99">{{hotRecommendList.description}}</p>
              </div>
            </div>
            <div class="col s3 dsil right-align hot-price">&yen;&nbsp;{{hotRecommendList.price | formatPri}}</div>
          </router-link>
        </div>
      </div>

      <!--notice-->
      <div class="notice">
        <div class="title">
          <span class="middel-line margin-right6"></span>
          <span class="txt color33">淘米公告</span>
          <span class="middel-line margin-left6"></span>
        </div>
        <div class="tmt-collection-main no-padding-top no-padding-right">
          <router-link v-for="(noticeList,index) in noticeLists" :to="{ path: '/article',query:{id:noticeList.id}}" :key="index" class="tmt-collection-single-a">
            <p class="pIndex truncate left notice-title red-text" v-if="noticeList.mark == '1'">{{noticeList.title}}</p>
            <p class="pIndex truncate left notice-title" v-else>{{noticeList.title}}</p>
            <span class="right notice-time">{{noticeList.time}}</span>
          </router-link>
        </div>
        <div class="tmt-collection-bottom-more-button">
          <router-link :to="{path:'/notice'}" class="tmt-collection-more">
            查看更多
          </router-link>
        </div>
      </div>

      <!--customer service-->
      <div class="customer-service">
        <div class="title">
          <span class="middel-line margin-right6"></span>
          <span class="txt color33">客服验证</span>
          <span class="middel-line margin-left6"></span>
        </div>
        <div class="row no-margin-bottom">
          <div class="col s8 no-padding-right">
            <input type="tel" class="tmt-style-txt" placeholder="请输入客服QQ" ref="validateClientQQ">
          </div>
          <div class="col s4">
            <button class="tmt-style-button verify" @click="validateClientQQ">验&nbsp;证</button>
          </div>
        </div>
      </div>
    </div>
    <vue-footer></vue-footer>
    <toolbar :toolId='toolId' />
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import vueFooter from '@/components/common/footer.vue'
import toolbar from '@/components/common/toolbar.vue'
import banner from '@/components/snippet/banner.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      singleLetter: true,
      toolId: 0,
      safeguards:['闪电发货','7x24小时服务','安全交易'],
      character:[],
      businessScopes:[
        {
          link: '/buySch',
          class: 'tmt-index-icons-sc',
          name: '首充号'
        },
        {
          link: '/schXC',
          class: 'tmt-index-icons-xc',
          name: '首充号续充'
        },
        {
          link: '/sell',
          class: 'tmt-index-icons-zhjy',
          name: '账号交易'
        },
        {
          link: '/hok',
          class: 'tmt-index-icons-wzpf',
          name: '王者荣耀专区'
        }
      ],
      hotRecommendLists:[],
      noticeLists:[]
    }
  },
  components: {
    navbar,
    vueFooter,
    toolbar,
    banner
  },
  created: function(){
    this.defaultGL();
    this.checkJs();
    this.hotRecommend();
    this.notice();
    this.loadOnTop();
  },
  methods:{
    loadOnTop:function () {
      window.scrollTo(0,0);
    },
    checkJs: function(){
      let arr = [];
      for(var i = 65;i< 91;i++){
        let obj = {};
        obj.id = i;
        obj.text = String.fromCharCode(i);
        arr[i-65] = obj;
      }
      for(var j = 0;j < arr.length ; j++){
        if(arr[j].text == 'V'){
          arr.splice(j,1);
          break;
        }
      }
      this.character = arr;
    },
    switchLetterMode: function(){
      this.singleLetter = !this.singleLetter;
    },
    defaultGL: function(){
      this.$router.push({path: '/',query:{ID: 'hot'}});
    },
    hotRecommend: function(){
      var vm = this;
      vm.$getDataWithUrl('/api','/product/getRecommends.view',{},response => {
          var maxLength = 4;
          var newArr = [];
          if(response.data.context.length > maxLength){
            for(let i= 0 ; i <= maxLength-1; i++){
              newArr[i] = response.data.context[i];
            }
            vm.hotRecommendLists = newArr;
          }else{
            vm.hotRecommendLists = response.data.context;
          }
        },'get');
    },
    notice: function(){
      var vm = this;
      vm.$getDataWithUrl('/api','/notice/list/1.view',{},response => {
          var maxLen = 4;
          var newArr = [];
          if(response.data.context.list.length > maxLen){
            for( let i = 0 ; i <maxLen ; i++ ){
              newArr[i] = response.data.context.list[i];
            }
            vm.noticeLists = newArr;
          }else{
            vm.noticeLists = response.data.context.list;
          }
        },'get');
    },
    validateClientQQ: function(){
      var vm = this;
      var reg = /^[0-9]*$/;
      var z = vm.$refs.validateClientQQ.value;
      if(z=="" || z==null){
        this.$toast('请输入客服号QQ号码');
      }else if(!reg.test(z)){
        this.$toast('客服号QQ号只能为数字组合');
         vm.$refs.validateClientQQ.value = "";
      }else{
        vm.showValidateResult(z);
      }
    },
    showValidateResult: function(z){
      var vm = this;
      var alertText = '';
      vm.$getDataWithUrl('/api','/cs/valid_qq/'+z+'.view',{},response => {
        if(response.data.code == '1'){
          alertText = '您当前查询的QQ号 '+z+' 为淘米淘官方QQ，请放心交易！'
          vm.alertMsg(alertText);
        }else{
          alertText = '您当前验证的QQ '+z+'不是淘米淘官方QQ,为了保障您的财产安全，请不要添加此QQ为好友。';
          vm.alertMsg(alertText)
        }
      },'get');

    },
    alertMsg: function(msg){
      swal({
        text:msg,
        buttons:['取消','我知道了'],
        dangerMode: true
      }).then((value)=>{
        if(value){
          console.log(msg+'点击蓝色按钮');
        }else{
          console.log('点击取消按钮');
        }
      });
    }
  },
  filters: {
    formatPri: function(value){
      return Number(value).toFixed(2);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .index{
    .brief-intro{
      width:100%;
      height:auto;
      background:#fff;
      margin-bottom:1rem;
      font-size:1.2rem;
      color: #666;
      .top{
        height:3.2rem;
        line-height:3.2rem;
        border-bottom: .1rem solid #e7e7e7;
      }
      .bottom{
        padding:.4rem 0 .8rem 0;
        a{
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
        }
      }
    }
    .game-brief{
      width:100%;
      height:auto;
      background: #fff;
    }
    .hot-recommend{
      width: 100%;
      height: auto;
      margin: 1rem auto;
      background:#fff;
      .hot-title{
        font-size:1.4rem;
      }
    }
    .notice{
      width: 100%;
      height: auto;
      background:#fff;
    }
    .customer-service{
      margin-top: 1rem;
      background: #fff;
      .verify{
        font-size:1.4rem;
      }
    }
    .title{
      width: 100%;
      height: 4.6rem;
      text-align:center;
      line-height:4.6rem;
      font-size:1.6rem;
      display:flex;
      justify-content: center;
      align-items:center;
      .middel-line{
        width:2rem;
        height: .2rem;
        background: #09c7d1;
        display:block;
      }
    }
  }
  .txt-collection-txt p.color33{text-indent: -7px;}
  .txt-collection-txt p.color99{font-size: 1.2rem;}
  .tmt-collection-main a.row{height:4.5rem;}
  .tmt-collection-icons-hot{width:3rem;
  height:3rem;background: url("../../static/icons/svg/icon-hot.svg") center center no-repeat;background-size: 80%;display: block;float: left;margin-right:.2rem;}
  .tmt-index-icons-sc{
    background: url(../../static/icons/svg/icon_sc.svg) center center no-repeat;background-size:65%;height:4rem;display: block;width: 4rem;
  }
  .tmt-index-icons-xc{
    background: url(../../static/icons/svg/icon_xc.svg) center center no-repeat;background-size:65%;height:4rem;display: block;width: 4rem;
  }
  .tmt-index-icons-zhjy{
    background: url(../../static/icons/svg/icon_zhjy.svg) center center no-repeat;background-size:65%;height:4rem;display: block;width: 4rem;
  }
  .tmt-index-icons-wzpf{
    background: url(../../static/icons/svg/icon_wzpf.svg) center center no-repeat;background-size:65%;height:4rem;display: block;width: 4rem;
  }

  .router-link-active{display: block;width: 100%;}
  .tmt-collection-bottom-more-button{width: 100%;overflow: hidden;padding: 1rem 0 2rem 0;}

  .router-link-exact-active span{
    background: #09c7d1;
    color: #FFF;
  }
</style>
