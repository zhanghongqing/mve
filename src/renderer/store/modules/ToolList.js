const namespaced = true

const state = {
  toolList: [{
    title: '文件管理',
    icon: 'icon-file_01',
    path: '/tool/file'
  },{
    title: '屏幕操作',
    icon: 'icon-jiankong',
    path: '/tool/screen'
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
