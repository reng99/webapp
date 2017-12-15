var Testimony = {};
Testimony.install = function (Vue, options) {
  Vue.prototype.$validate = function (spooky) {
    let suc = [];
    for (var i = 0; i < spooky.length; i++) {
      if (spooky[i].refex == 'phone') {
        let rulx = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
        if (spooky[i].value == null || spooky[i].value == '') {
          this.$toast('手机号码不能为空');
          break;
        } else {
          if (rulx.test(spooky[i].value)) {
            suc.push(spooky[i]);
          } else {
            this.$toast('手机号码格式错误', 2000);
            break;
          }
        }
      } else if (spooky[i].refex == 'password') {
        if (spooky[i].value == null || spooky[i].value == '') {
          this.$toast('密码不能为空', 2000);
          break;
        } else if (spooky[i].value.length < 6) {
          this.$toast('密码少于6位', 2000);
          break;
        } else {
          suc.push(spooky[i]);
        }
      } else if (spooky[i].refex == 'valicode') {
        if (spooky[i].value == null || spooky[i].value == '') {
          this.$toast('动态码不能为空', 2000);
          break;
        } else if (spooky[i].value.length < 6) {
          this.$toast('动态码少于6位', 2000);
          break;
        } else {
          suc.push(spooky[i]);
        }
      } else if (spooky[i].refex == 'ag_password') {
        if (spooky[i].value == null || spooky[i].value == '') {
          this.$toast('请再次输入密码', 2000);
          break;
        } else if (spooky[i].value != spooky[i].ovalue) {
          this.$toast('两次密码不一样', 2000);
          break;
        } else {
          suc.push(spooky[i]);
        }
      } else if (spooky[i].refex == 'staticode') {
        if (spooky[i].value == null || spooky[i].value == '') {
          this.$toast('验证码不能为空', 2000);
          break;
        } else {
          suc.push(spooky[i]);
        }
      } else if (spooky[i].refex == 'email') {
        let rulx = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@wz\.com$/i;
        if (spooky[i].value == null || spooky[i].value == '') {
          this.$toast('邮箱不能为空', 2000);
          break;
        } else {
          if (rulx.test(spooky[i].value).trim()) {
            suc.push(spooky[i]);
          } else {
            this.$toast('邮箱格式错误');
            break;
          }
        }
      } else if (spooky[i].refex == 'url') {
        let rulx = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
        if (spooky[i].value == null || spooky[i].value == '') {
          this.$toast('URL不能为空');
          break;
        } else {
          if (rulx.test(spooky[i].value)) {
            suc.push(spooky[i]);
          } else {
            this.$toast('URL格式错误');
            break;
          }
        }
      }
    }
    return suc;
  },
  Vue.prototype.$loginBP = function (options) {
      let validateGroup = [
        {
          refex: 'phone',
          value: options.username
        },
        {
          refex: 'password',
          value: options.password
        }];
      if (this.$validate(validateGroup).length == validateGroup.length) {
        return true;
      } else {
        return false;
      }
    },
  Vue.prototype.$loginBS = function (options) {
      let validateGroup = [
        {
          refex: 'phone',
          value: options.username
        },
        {
          refex: 'valicode',
          value: options.password
        }];
      if (this.$validate(validateGroup).length == validateGroup.length) {
        return true;
      } else {
        return false;
      }
    },
  Vue.prototype.$getPhoneCode = function (options) {
      let that = this;
      let jsonStatue={ok:'1',err:'-1'};
        that.$getDataWithUrl('/api', '/message_captcha/' + options + '.view', '', response => {
          if (response.data.code == jsonStatue.ok) {
            this.$toast('动态码已发送');
          } else {
            this.$toast(response.data.msg);
          }
        }, 'get');
  }
  Vue.prototype.$registFuc = function (options) {
      let validateGroup = [
        {
          refex: 'phone',
          value: options.account
        },
        {
          refex: 'valicode',
          value: options.captcha
        },
        {
          refex: 'password',
          value: options.password
        },
        {
          refex: 'ag_password',
          value: options.reTypePassword,
          ovalue: options.password
        }
      ];
      if (this.$validate(validateGroup).length == validateGroup.length) {
        return true;
      } else {
        return false;
      }
    },
  Vue.prototype.$forgetFuc = function (options) {
      let validateGroup = [
        {
          refex: 'phone',
          value: options.account
        },
        {
          refex: 'valicode',
          value: options.messageCode
        },
        {
          refex: 'staticode',
          value: options.captcha
        },
        {
          refex: 'password',
          value: options.password
        },
        {
          refex: 'ag_password',
          value: options.reTypePassword,
          ovalue: options.password
        },

      ];
      if (this.$validate(validateGroup).length == validateGroup.length) {
        return true;
      } else {
        return false;
      }
    }
}
module.exports = Testimony;
