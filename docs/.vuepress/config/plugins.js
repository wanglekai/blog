module.exports = [
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