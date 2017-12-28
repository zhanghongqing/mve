const namespaced = true

const state = {
  filetreeData: []
}

const mutations = {
  CHANG_TREE_DATA (state, param) {
    // state.filetreeData = data
    let newData = state.filetreeData;
    if(param.indexs == ""){
      state.filetreeData = param.data;
    }else{
      let curNewData = eval("newData"+param.indexs);
      curNewData.children = param.data;
      state.filetreeData = newData;
    }
  }
}

const actions = {
  changeTreeData ({ commit }, param) {
    // do something async
    commit('CHANG_TREE_DATA', param)
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions
}
