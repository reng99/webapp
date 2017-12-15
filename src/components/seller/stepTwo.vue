<template>
  <div id="stepTwo">
    <div class="main">
      <back :title='title'></back>

      <div class="row white">
          <div class="tmt-collection-head">
          商品信息
          </div>
          <form class="col s12" >
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 商品标题：</div>
              <div class="input-field col s7">
                <input   placeholder="请输入商品标题">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 区服：</div>
              <div class="input-field col s7">
                <input  placeholder="请输入区服">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 商品价格：</div>
              <div class="input-field col s7">
                <input  placeholder="请输入价格">
              </div>
            </div>
          </form>
        </div>

        <div class="row white">
          <div class="tmt-collection-head">
          游戏账号信息
          </div>
          <form class="col s12" >
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 稀有皮肤：</div>
              <div class="input-field col s7">
                <input   placeholder="请输入皮肤名称">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 贵族等级：</div>
              <div class="input-field col s7">
                <input  placeholder="请输入等级">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 五级铭文：</div>
              <div class="input-field col s7">
                <input  placeholder="请输入铭文">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 段位：</div>
              <div class="input-field col s7">
                <input  placeholder="请输入段位">
              </div>
            </div>
            <div class="row connect">
              <div class="col s4"><span class="redStar">*</span> 账号描述：</div>
              <div class="input-field col s8">
                 <textarea></textarea>
              </div>
            </div>
          </form>
        </div>

        <div class="row white goodImg">
          <div class="tmt-collection-head">
          账号图片
          </div>
          <div class="col s3" v-for="(img,index) in imgList">
            <img src="../../../static/icons/svg/sp_tu_delete.svg" class="deleteImg" @click="deleteImg(index)">
            <img :src="img">
          </div>
          <div class="col s3 addimg">
            <input type="file" id="fileElem" accept="image/*"  @change="fileSelects(this)"/>
            <img src="../../../static/icons/svg/sp_tu_abb.svg"/>
          </div>
<!--           <div class="col s3">
            <img src="../../../static/icons/svg/sp_tu_abb.svg">
          </div>
          <div class="col s3">
            <img src="../../../static/icons/svg/sp_tu_abb.svg">
          </div>
          <div class="col s3">
            <img src="../../../static/icons/svg/sp_tu_abb.svg">
          </div> -->

          <div class="tips col 12">上传商品亮点图片越多，越容易出售哦，图片至多14张。</div>
        </div>

        <div class="row white">
          <div class="tmt-collection-head">
          寄售账号信息
          </div>
          <form class="col s12" >
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 账号：</div>
              <div class="input-field col s7">
                <input   placeholder="请输入账号">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 密码：</div>
              <div class="input-field col s7">
                <input  placeholder="请输入密码">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 角色名称：</div>
              <div class="input-field col s7">
                <input  placeholder="请输入角色名称">
              </div>
            </div>
          </form>
        </div>

        <div class="row white">
          <div class="tmt-collection-head">
          交易信息
          </div>
          <form class="col s12" >
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 交易通知QQ：</div>
              <div class="input-field col s7">
                <input   placeholder="请输入QQ">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 交易通知手机：</div>
              <div class="input-field col s7">
                <input  placeholder="请输入手机">
              </div>
            </div>
            <div class="row connect">
              <div class="col s5"><span class="redStar">*</span> 商品有效期：</div>
              <div class="input-field col s7">
                <input  placeholder="请输入有效期">
              </div>
            </div>
          </form>
        </div>

        <div class="tmt-footer z200">
        <div class="row no-margin">
          <div class="col s12 center no-padding">
            <router-link :to="{ path: '/result'}" class="div-btn-right-now-buy waves-effect waves-light">确认发布</router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import back from '@/components/snippet/back.vue'
export default {
  name: 'stepTwo',
  data() {
    return {
      title: '发布商品',
      imgList:[]
    }
  },
  components:{
    back,
  },
  created:function(){

  },
  methods: {
        deleteImg:function(index){
            this.imgList.splice(index,1);
        },
        fileSelects:function(e){
             if (this.imgList.length!=14) {
                 var that=this;
                 var e = e || window.event;
                 if (e.target.files.length!=0) {
                  for (var f, files = e.target.files, imgType = files[0].type.split("/")[1], i = 0; f = files[i]; i++) {
                      var reader = new FileReader();
                      reader.onload = function(file) {
                          return function(e) {
                              that.imgList.push(this.result);
                          };
                      }(f), reader.readAsDataURL(f);
                  }
                }
            }else{
              this.$toast("至多上传14张图");
            }
        }

  }
}
</script>
<style scoped lang="less">
  #stepTwo {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    margin: 0 auto;
    .main {
      .white{
        margin-top: 1rem;
        margin-bottom: 0;
      }
      .tmt-collection-head{
        position: relative;width: 100%;text-align: left;padding:1rem 1rem;font-size:1.8rem;
      }
      .connect{
         background: #f7f7f7;
         .s5{
          padding: 1.5rem;
          font-size: 1.3rem;
         }
         .s7{
          margin: 0;
          padding: 1rem;
          input{
            border: none;
            margin-bottom: 0;
            text-align: right;
            font-size: 1.5rem;
          }
         }
         .redStar{
          color: red;
         }
         .s4{
          padding: 1.5rem;
          font-size: 1.3rem;
         }
         .s8{
          margin: 0;
          padding: 1rem;
          textarea{
            height: 6rem;
            font-size: 1.5rem;
          }
         }
      }
      .goodImg{
        .s3{
          padding-bottom: 1rem;
          min-height: 9rem;
          position: relative;
          img{
            width: 100%;
          }
          #fileElem{
          opacity: 0;
          position: absolute;
          width: 100%;
          height: 100%;
          }
          .deleteImg{
          width: 1.5rem;
          position: absolute;
          right: 0;
          top: -.75rem;
          }
        }
        .addimg{
          position: relative;
        }
        .tips{
        color: #ccc;
        padding-bottom: 1rem;
        padding-left: 1rem;
        }

      }
      .tmt-footer{background: #fff;position: relative;width: 100%;height:4.4rem;
          div.row{max-width:750px;margin: 0 auto !important;}
          div.row div.col{height:4.4rem;position: relative;}
          a{background: #09C7D1;}
        }

    }
  }
</style>
