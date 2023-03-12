/* eslint-disable */
import { fileURLToPath } from 'node:url'
import type { UserConfig } from 'vite'
import vitePluginEslint from 'vite-plugin-eslint'
// import vitePluginInspect from 'vite-plugin-inspect'
// import { visualizer } from 'rollup-plugin-visualizer'
import vue from '@vitejs/plugin-vue'
/** 处理环境变量 */
export const warpperEnv = (
  command: 'build' | 'serve',
  envConf: Record<string, string>,
): ViteBuildEnv | ViteDevEnv => {
  if (command === 'serve') {
    const $env: ViteDevEnv = {
      VITE_BROWSER_OPEN: false,
      VITE_SERVER_STRICTPORT: false,
      VITE_SERVER_PORT: 0,
      VITE_SERVER_HOST: '',
      VITE_HTTPS: false,
      VITE_PROXY_DOMAIN: '',
      VITE_PLUGIN_ESLINT: false,
      VITE_PLUGIN_INSPECT: false,
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(envConf)) {
      const $key = key as keyof ViteDevEnv
      let $value: any = null
      if (value === 'true' || value === 'false') $value = JSON.parse(value)
      else if (key === 'VITE_SERVER_PORT') $value = Number(value)
      else $value = value
      $env[$key] = $value as never
    }
    return $env
  }

  const $env: ViteBuildEnv = {
    VITE_PLUGIN_ESLINT: false,
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(envConf)) {
    const $key = key as keyof ViteBuildEnv
    let $value: any = null
    if (value === 'true' || value === 'false') $value = JSON.parse(value)
    else $value = value
    $env[$key] = $value as never
  }
  return $env
}

export const INIT_BASE_CONFIG = (): UserConfig => ({
  // base: './',  /// 影响nginx路径
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    // ViteCompression({
    //   verbose: true,
    //   disable: false,
    //   threshold: 10240,
    //   algorithm: 'gzip',
    //   ext: '.gz',
    // }),
    // VueI18n({
    //   runtimeOnly: true,
    //   compositionOnly: true,
    //   include: [resolve('src/plugins/vue-i18n/locales/**')],
    // }),
    // AutoImport({
    //   /** 自动导入vue和vue-router相关函数 */
    //   imports: [
    //     'vue',
    //     'vue-router',
    //     'pinia',
    //     'vue-i18n',
    //     {
    //       '@/plugins/vue-stroage': ['useVueStorage'],
    //     },
    //   ],
    //   /** 自定义解析器 */
    //   resolvers: [
    //     // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
    //     // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
    //     ElementPlusResolver(),
    //     // Auto import icon components
    //     // 自动导入图标组件
    //     IconsResolver({
    //       prefix: 'Icon',
    //     }),
    //   ],
    //   /** 全局类型声明文件路径 */
    //   dts: 'src/plugins/autoimport/auto-import.d.ts',
    // }),
    // Components({
    //   /** 导入文件夹 */
    //   dirs: ['src/components'],
    //   /** 文件后缀 */
    //   extensions: ['vue'], // tjs cjs?
    //   /** 自定义解析器 */
    //   resolvers: [
    //     // 自动导入 Element Plus 组件
    //     ElementPlusResolver({
    //       importStyle: 'sass',
    //     }),
    //     // 自动注册图标组件
    //     IconsResolver({
    //       prefix: false,
    //       enabledCollections: [
    //         'ep',
    //         'fxemoji',
    //         'material-symbols',
    //         'ic',
    //         'line-md',
    //         'bytesize',
    //       ],
    //     }),
    //   ],
    //   /** 全局类型声明文件路径 */
    //   dts: 'src/plugins/autoimport/components.d.ts',
    //   /** 匹配文件 */
    //   include: [/\.vue$/, /\.vue\?vue/],
    // }),
    // Icons({
    //   autoInstall: true,
    //   // defaultClass: 'iconify',
    //   // scale: 1,
    //   compiler: 'vue3',
    // }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/element/index.scss";`,
        // charset: false,
      },
    },
  },
})
/** 生产环境Vite配置 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const INIT_BUILD_CONFIG = (env: ViteBuildEnv) => {
  const main = fileURLToPath(new URL('index.html', import.meta.url))
  const $build: UserConfig = {
    // base: '/admin',
    plugins: [], //[viteBuildInfo(), visualizer()], // vitePluginEslint()
    build: {
      assetsDir: './static',
      rollupOptions: {
        input: {
          main: main.replace(/\\build/, ''),
        },
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/assets/[name]-[hash].[ext]',

          // 最小化拆分包
          // eslint-disable-next-line consistent-return
          // manualChunks(id) {
          //   if (id.includes('node_modules')) {
          //     return id.toString().split('node_modules/')[1].split('/')[0].toString()
          //   }
          // },

          // 比啥都不用好点
          // manualChunks: {
          //   vue: ['vue', 'vue-router', 'pinia'],
          //   lodash: ['lodash'],
          //   echarts: ['echarts'],
          // },
        },
      },

      // #region terser Options

      // 当设置为 'terser' 时必须先安装 Terser。 npm add -D terser
      // minify: 'terser', //默认为 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%。
      // terserOptions: {
      //   compress: {
      //     drop_console: true,
      //     drop_debugger: true,
      //   },
      //   output: {
      //     comments: true,
      //   },
      // },

      // #endregion
    },
  }
  return $build
}
/** 开发环境Vite配置 */
export const INIT_DEV_CONFIG = (env: ViteDevEnv) => {
  const $dev: UserConfig = {
    server: {
      open: env.VITE_BROWSER_OPEN,
      https: env.VITE_HTTPS,
      port: env.VITE_SERVER_PORT,
      strictPort: env.VITE_SERVER_STRICTPORT,
      host: env.VITE_SERVER_HOST,
      proxy: {
        '^/api': env.VITE_PROXY_DOMAIN,
      },
    },
    // plugins: [
    //   env.VITE_PLUGIN_ESLINT ? vitePluginEslint() : null,
    //   env.VITE_PLUGIN_INSPECT ? vitePluginInspect() : null,
    // ],
  }

  return $dev
}
