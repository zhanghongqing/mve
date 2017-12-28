import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default-tool-page',
      component: require('@/components/ToolPage').default
    },
    {
      path: '/tool',
      name: 'tool-page',
      component: require('@/components/ToolPage').default
    },
    {
      path: '/tool/file',
      name: 'file-page',
      component: require('@/components/ToolPage/FileManage').default
    },
    {
      path: '/tool/file/check',
      name: 'file-check',
      component: require('@/components/ToolPage/FileManage/CheckFile').default
    },
    {
      path: '/tool/file/batch',
      name: 'file-batch',
      component: require('@/components/ToolPage/FileManage/BatchFile').default
    },
    {
      path: '/tool/file/find',
      name: 'file-find',
      component: require('@/components/ToolPage/FileManage/FindFile').default
    },
    {
      path: '/tool/screen',
      name: 'screen-page',
      component: require('@/components/ToolPage/ScreenHandle').default
    },
    {
      path: '/web',
      name: 'web-page',
      component: require('@/components/WebPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
