import { App } from 'vue'

import * as components from './components'

const VMWLibrary = {
    install(app: App) {
        for (const componentKey in components) {
            app.use((components as any)[componentKey])
        }
    }
}

export default VMWLibrary

export * from './components'