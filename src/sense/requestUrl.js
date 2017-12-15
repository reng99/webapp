var requestUrl = {};
requestUrl.install = function (Vue,options) {
  Vue.prototype.$getDataWithUrl = function (url,distract,params,fn,type) {
    params=params||{};
    type=type||'get';
    if(type =='get' || type =='delete'){
      this.$ajax({
        method:type,
        url:url+distract,
        timeout:2000,
        params:params
      }).then(function (response) {
        fn(response);
      }).catch(function (error) {
        return error;
      });
    }else if(type =='post' || type =='put'){
      this.$ajax({
        method:type,
        url:url+distract,
        timeout:2000,
        data:$.param(params),
    }).then(function (response) {
        fn(response);
      }).catch(function (error) {
        return error
      });
    }
  }
}
module.exports = requestUrl;
