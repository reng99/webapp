import Toast from '@/components/common/toast'
import actionSheet from '@/components/common/actionSheet'
var plugin = {}
plugin.install = function (Vue, options = {}) {
    // => toast
    const ToastController = Vue.extend(Toast)
    ToastController.prototype.close = function () {
        this.visiable = false
        this.$el.addEventListener('transitionend', removeDom)
    }
    let removeDom = event => {
            if (event.target.parentNode.childNodes.length > 1) {
                event.target.parentNode.removeChild(event.target)
            } else {
                event.target.parentNode.parentNode.removeChild(event.target.parentNode)
            }
    }
    Vue.prototype.$toast = (option = {}) => {
         var instance = new ToastController().$mount(document.createElement('div'))
         let duration = option.duration || options.duration || 1500
         instance.message = typeof option === 'string' ? option : option.message
         document.body.appendChild(instance.$el)
         setTimeout(function () {
            instance.close()
        }, duration)
    }

    // => actionsheet
    const actionSheetController = Vue.extend(actionSheet)
    Vue.prototype.$actionSheet = (option = {}) => {
         var instance = new actionSheetController().$mount(document.createElement('div'))
         instance.options = option.options;
         instance.select = option.callback;
         document.body.appendChild(instance.$el)
    }


}
export default plugin
