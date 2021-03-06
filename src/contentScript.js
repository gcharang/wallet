import { inject } from './broker/utils'
import Script from './broker/Script'

;(new Script()).start()

inject(`
function proxy (type, data) {
  return new Promise((resolve, reject) => {
    const id = Date.now() + '.' + Math.random()

    window.addEventListener(id, ({ detail }) => {
      const response = JSON.parse(detail)
      if (response.error) reject(new Error(response.error))
      else resolve(response.result)
    }, {
      once: true,
      passive: true
    })

    window.postMessage({
      id,
      type,
      data
    }, '*')
  })
}

class InjectedProvider {
  constructor (asset) {
    this.asset = asset
  }

  setClient () {}

  getMethod (method) {
    return (...args) => proxy('CAL_REQUEST', {
      asset: this.asset,
      method,
      args
    })
  }
}

class ProviderManager {
  constructor () {
    this.cache = {}
  }

  getProviderFor (asset) {
    if (this.cache[asset]) return this.cache[asset]

    this.cache[asset] = new InjectedProvider(asset)

    return this.cache[asset]
  }

  enable () {
    return proxy('ENABLE_REQUEST')
  }
}

window.providerManager = new ProviderManager()
`)
