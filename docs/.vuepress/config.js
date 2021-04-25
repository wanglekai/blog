// 配置文件的入口文件
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
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', 
        items: [
          {text: 'CSS', link: '/note/css/'},
          {text: 'JavaScript', link: '/note/js/'},
          {text: 'Vue', link: '/note/vue/'},
          {text: 'NodeJS', link: '/note/nodejs/'},
        ]
      },
      { text: '关于本站', link: '/about/'}
    ]
  },
  plugins: [
    '@vuepress/back-to-top', // 返回到到顶部插件
    '@vuepress/nprogress', // 进度条插件
    'reading-progress', // 阅读进度插件
    [
      '@vuepress/active-header-links',
      {
        // 页面滚动时自动激活侧边栏链接的插件配置
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor',
      },
    ],
    [
      '@vuepress/last-updated', {
        transformer: (timestamp) => { 
          const moment = require('moment');
          return moment(timestamp).format('YYYY-MM-DD') 
        }
      }
    ],
    [
      "vuepress-plugin-auto-sidebar", 
      {
        mode: "titlecase"
      }
    ]
  ]
}