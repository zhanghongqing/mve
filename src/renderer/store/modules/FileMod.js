const namespaced = true

const state = {
  fileMenuList: [{
    title: '文件查看',
    icon: 'icon-chakan',
    path: '/tool/file/check'
  },{
    title: '批量操作',
    icon: 'icon-piliang',
    path: '/tool/file/batch'
  },{
    title: '文件查找',
    icon: 'icon-chazhao',
    path: '/tool/file/find'
  }]
}

const mutations = {
  CHANG_MENU_INDEX (state, num) {
    state.currentMenuIndex = num
  }
}

const actions = {
  changeCurrentMenu ({ commit }, num) {
    // do something async
    commit('CHANG_MENU_INDEX', num)
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions
}
