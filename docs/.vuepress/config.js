// 配置文件的入口文件
const nav = require('./config/nav')
const plugins = require('./config/plugins')

module.exports = {
  title: 'Silent',
  description: 'note/blog/笔记/博客',
  themeConfig: {
    repo: 'wanglekai/blog',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '发现有错误?前往GitHub指正',
    lastUpdated: '上次更新时间',
    sidebar: 'auto',
    nav,
  },
  plugins
}