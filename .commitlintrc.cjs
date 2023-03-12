// ts check
/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    //自定义规则
    //'header-max-length-10': [2, 'always'],
  },
  prompt: {
    /** 定义常用的 commit message 别名 */
    alias: { fd: 'docs: fix typos' },
    /** 自定义命令行提问信息 */
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?',
    },
    /** 自定义选择类型提示 */
    types: [
      {
        value: 'feat',
        name: 'feat:     ✨  新增功能 | A new feature',
        emoji: ':sparkles:',
      },
      {
        value: 'fix',
        name: 'fix:      🐛  修复缺陷 | A bug fix',
        emoji: ':bug:',
      },
      {
        value: 'docs',
        name: 'docs:     📝  文档更新 | Documentation only changes',
        emoji: ':memo:',
      },
      {
        value: 'style',
        name: 'style:    💄  代码格式 | Changes that do not affect the meaning of the code',
        emoji: ':lipstick:',
      },
      {
        value: 'refactor',
        name: 'refactor: ♻️   代码重构 | A code change that neither fixes a bug nor adds a feature',
        emoji: ':recycle:',
      },
      {
        value: 'perf',
        name: 'perf:     ⚡️  性能提升 | A code change that improves performance',
        emoji: ':zap:',
      },
      {
        value: 'test',
        name: 'test:     ✅  测试相关 | Adding missing tests or correcting existing tests',
        emoji: ':white_check_mark:',
      },
      {
        value: 'build',
        name: 'build:    📦️   构建相关 | Changes that affect the build system or external dependencies',
        emoji: ':package:',
      },
      {
        value: 'ci',
        name: 'ci:       🎡  持续集成 | Changes to our CI configuration files and scripts',
        emoji: ':ferris_wheel:',
      },
      {
        value: 'chore',
        name: 'chore:    🔨  其他修改 | Other changes that do not modify src or test files',
        emoji: ':hammer:',
      },
      {
        value: 'revert',
        name: 'revert:   ⏪️  回退代码 | Reverts a previous commit',
        emoji: ':rewind:',
      },
    ],
    /** 是否开启 commit message 带有 Emoji 字符 */
    useEmoji: false,
    /** 设置 Emoji 字符 的 位于头部位置 */
    emojiAlign: 'center',
    /** 设置终端交互部件的主题色 */
    themeColorCode: '',
    /** 自定义选择 模块范围 命令行显示信息 */
    scopes: [],
    /** 是否在选择 模块范围 显示自定义选项(custom) */
    allowCustomScopes: true,
    /** 是否在选择 模块范围 显示为空选项(empty) */
    allowEmptyScopes: true,
    /** 设置 选择范围 中 为空选项(empty) 和 自定义选项(custom) 的 位置 */
    customScopesAlign: 'bottom',
    /** 自定义 选择范围 中 自定义选项(custom) 在命令行中显示的 名称 */
    customScopesAlias: 'custom',
    /** 自定义 选择范围 中 为空选项(empty) 在命令行中显示的 名称 */
    emptyScopesAlias: '跳过(enter to skip)',
    /** 是否自动将简短描述(subject)第一个字符进行大写处理 */
    upperCaseSubject: false,
    /** 添加额外的问题重大变更(BREAKING CHANGES)提问，询问是否需要添加 "!" 标识于头部 */
    markBreakingChangeMode: false,
    /** 允许出现 重大变更(BREAKING CHANGES)的特定 type */
    allowBreakingChanges: ['feat', 'fix'],
    /** 详细描述(body)和重大变更(BREAKING CHANGES)中根据字符超过该数值自动换行 */
    breaklineNumber: 100,
    /** 详细描述(body)和重大变更(BREAKING CHANGES)中换行字符 */
    breaklineChar: '|',
    /** 自定义选择指定的问题不显示 */
    skipQuestions: ['breaking', 'footerPrefix', 'footer'],
    /** 自定义选择issue前缀 */
    issuePrefixes: [
      // 如果使用 gitee 作为开发管理
      { value: 'link', name: 'link:     链接 ISSUES 进行中' },
      { value: 'closed', name: 'closed:   标记 ISSUES 已完成' },
    ],
    /** 设置 选择 issue 前缀 中 跳过选项(skip) 和 自定义选项(custom) 的 位置 */
    customIssuePrefixAlign: 'top',
    /** 自定义 选择 issue 前缀 中 跳过选项(skip) 在命令行中显示的 名称 */
    emptyIssuePrefixAlias: 'skip',
    /** 自定义 选择 issue 前缀 中 自定义选项(custom) 在命令行中显示的 名称 */
    customIssuePrefixAlias: 'custom',
    /** 是否在选择 ISSUE 前缀 显示自定义选项(custom) */
    allowCustomIssuePrefix: true,
    /** 是否在选择 ISSUE 前缀 显示为跳过选项(skip) */
    allowEmptyIssuePrefix: true,
    /** 确定提交中模板 commit message 是否着色 */
    confirmColorize: true,
    /** 定义commit message中的 header 长度, 给予在命令行中的校验信息 */
    maxHeaderLength: Infinity,
    /** 定义commit message中的 subject 长度, 给予在命令行中的校验信息 */
    maxSubjectLength: Infinity,
    /** 定义commit message中的 subject 长度, 给予在命令行中的校验信息 */
    minSubjectLength: 0,
    /** 自定义选择了特定类型后 覆盖模块范围 命令行显示信息 */
    scopeOverrides: undefined,
    /**  在 详细描述 中是否使用显示默认值 */
    defaultBody: '',
    /** 在 输入ISSUE 中是否使用显示默认值 */
    defaultIssues: '',
    /** 如果 defaultScope 与在选择范围列表项中的 value 相匹配就会进行星标置 */
    defaultScope: '',
    /** 在 简短描述 中是否使用显示默认值 */
    defaultSubject: '',
  },
}
