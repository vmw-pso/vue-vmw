import { App, Plugin } from 'vue'

import Card from './Card.vue'

export default {
    install(Vue: App) {
        Vue.component(Card.name, Card)
    }
} as Plugin

export {
    Card as VMWCard
}