/**
 */

import axios from 'axios'

import router from '../router/index'

// axios 配置
//axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://123.59.46.146:8080/mobile/';
// http request 拦截器
axios.interceptors.request.use(
    config => {
        // if (store.state.token) {
        //     config.headers.Authorization = `token ${store.state.token}`;
        // }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        if(response.data.code==-4){//登录失效
          var date=new Date();
          date.setSeconds(date.getSeconds()+-1);
          document.cookie='logindata'+ "="+escape("")+"; expires="+date.toGMTString();
          router.replace({path: 'login'})
        }
        return response;
    },
    error => {
        if (error.response) {
            // switch (error.response.status) {
            //     case 401:
            //         // 401 清除token信息并跳转到登录页面
            //         store.commit(types.LOGOUT);
            //         router.replace({
            //             path: 'login',
            //             query: {redirect: router.currentRoute.fullPath}
            //         })
            // }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });
export default axios;
