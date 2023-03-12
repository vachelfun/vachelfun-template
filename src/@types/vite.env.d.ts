/** vite dev 配置类型 */
interface ViteDevEnv {
  /** 是否自动打开浏览器 */
  VITE_BROWSER_OPEN: boolean
  /** 禁止使用其他端口 */
  VITE_SERVER_STRICTPORT: boolean
  /** 服务器端口 */
  VITE_SERVER_PORT: number
  /** 服务器地址 */
  VITE_SERVER_HOST: string
  /** 代理服务是否使用https */
  VITE_HTTPS: boolean
  /** 代理服务域名 */
  VITE_PROXY_DOMAIN: string
  /** 是否启用vite-plugin-eslint插件 */
  VITE_PLUGIN_ESLINT: boolean
  /** 是否启用vite-plugin-inspect插件 */
  VITE_PLUGIN_INSPECT: boolean
}

/** vite build 配置类型 */
interface ViteBuildEnv {
  /** 是否启用vite-plugin-eslint插件 */
  VITE_PLUGIN_ESLINT: boolean
}
