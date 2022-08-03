import { reactive } from 'vue'
import { setupMedia, breakpoints } from './main.js'

export const bp = reactive(Object.keys(breakpoints).reduce((acc, e) => (acc[e] = null, acc), {}))
export const plugin = {
  install() {
    setupMedia((mediaUpdate) => {
      bp[mediaUpdate.name] = mediaUpdate.matches
    })
  }
}
