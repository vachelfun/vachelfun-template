import { defineConfig } from 'vite'
// import { ConfigEnv, defineConfig, loadEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    // extensions: ['.ts', '.tsx', '.json', '.js'],
  },
  plugins: [vue(), eslint()],
})

// const warpperEnv = (
//   command: 'build' | 'serve',
//   envConf: Record<string, string>,
// ): ViteBuildEnv | ViteDevEnv => {
//   if (command === 'serve') {
//     const $env: ViteDevEnv = {
//       VITE_BROWSER_OPEN: false,
//       VITE_SERVER_STRICTPORT: false,
//       VITE_SERVER_PORT: 0,
//       VITE_SERVER_HOST: '',
//       VITE_HTTPS: false,
//       VITE_PROXY_DOMAIN: '',
//       VITE_PLUGIN_ESLINT: false,
//       VITE_PLUGIN_INSPECT: false,
//     }

//     // eslint-disable-next-line no-restricted-syntax
//     for (const [key, value] of Object.entries(envConf)) {
//       const $key = key as keyof ViteDevEnv
//       let $value: any = null
//       if (value === 'true' || value === 'false') $value = JSON.parse(value)
//       else if (key === 'VITE_SERVER_PORT') $value = Number(value)
//       else $value = value
//       $env[$key] = $value as never
//     }
//     return $env
//   }

//   const $env: ViteBuildEnv = {
//     VITE_PLUGIN_ESLINT: false,
//   }
//   // eslint-disable-next-line no-restricted-syntax
//   for (const [key, value] of Object.entries(envConf)) {
//     const $key = key as keyof ViteBuildEnv
//     let $value: any = null
//     if (value === 'true' || value === 'false') $value = JSON.parse(value)
//     else $value = value
//     $env[$key] = $value as never
//   }
//   return $env
// }
// export default ({ command, mode }: ConfigEnv): UserConfigExport => {
//   const pwd = process.cwd()
//   const env = warpperEnv(command, loadEnv(mode, pwd))
//   const config =
//     mode === 'production'
//       ? INIT_BUILD_CONFIG(env as ViteBuildEnv)
//       : INIT_DEV_CONFIG(env as ViteDevEnv)
//   const $mergeConfig = mergeConfig(baseConfig, config)
//   // console.log(_mergeConfig)

//   return $mergeConfig
// }
