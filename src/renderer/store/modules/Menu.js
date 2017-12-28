const namespaced = true

const state = {
  menuList: [{
    title: '工具',
    icon: 'icon-gongju',
    path: '/tool'
  },{
    title: '网站',
    icon: 'icon-wangzhan',
    path: '/web'
  }],
  currentMenuIndex: 0
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
