module.exports = {
  '*.{js,ts,vue}': ['npm run lint:eslint', 'npm run prettier'],
  '*.md': 'npm run prettier',
  '*.{css,scss,sass,vue}': 'npm run lint:style',
}
