import { App, Plugin } from 'vue'

import Spinner from './Spinner.vue'

export default {
    install(Vue: App) {
        Vue.component(Spinner.name, Spinner)
    }
} as Plugin

export {
    Spinner as VMWSpinner
}