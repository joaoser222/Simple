module.exports = function (/* ctx */) {
  return {
    supportTS: false,
    boot: [
      'i18n',
      'axios',
      'custom'
    ],
    css: [
      'app.scss'
    ],
    extras: [
      'line-awesome',
    ],
    build: {
      vueRouterMode: 'hash',
      distDir:'../../../public',
      extendWebpack (cfg) {
      },
    },
    devServer: {
      https: false,
      port: 8080,
      open: true
    },
    framework: {
      iconSet: 'line-awesome',
      lang: 'pt-br',
      config: {
        dark: true
      },
      importStrategy: 'auto',
      plugins: [
        'Dialog',
        'Loading'
      ]
    },
    animations: [],
    ssr: {
      pwa: false
    },
    pwa: {
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {},
      manifest: {
        name: `Simple`,
        short_name: `Simple`,
        description: `ERP de gestao simples`,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    cordova: {
     },
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      bundler: 'packager',
      packager: {
      },
      builder: {
        appId: 'quasar'
      },
      nodeIntegration: true,

      extendWebpack (/* cfg */) {
      }
    }
  }
}
