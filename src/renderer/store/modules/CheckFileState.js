const namespaced = true

const state = {
  curPath: '',
  sortType: 'name',
  activeIndex: null,
  fileListShowType: 'detailList',
  rootDisk: true,
  fileCount: 0,
  fileHistory: [],
  curFileData: []
}

const mutations = {
  CHANGE_PATH (state, param) {
    state.activeIndex = null
    if(param == ""){
      state.rootDisk = true
    }else{
      state.rootDisk = false
    }
    state.curPath = param
  },
  CHANGE_FILEDATA (state, param) {
    state.fileCount = param.length;
    if(state.curPath == ""){
      state.curFileData = param
    }else{
      let byNameSort = param.sort(SortLikeWin);
      // console.log(byNameSort)
      let byBooleanSort = byNameSort.sort(BooleanSort);
      // console.log(byBooleanSort)
      state.curFileData = byBooleanSort
    }
  },
  CHANGE_SORT_TYPE (state, param) {
    state.sortType = param
  },
  CHANGE_ACTIVE_INDEX (state, param) {
    state.activeIndex = param
  },
  CHNAGE_FILE_COUNT (state, param) {
    state.fileCount = param
  },
}

const BooleanSort = function(v1, v2){
  // console.log(v1,v2)
  let a = v1.isDirectory;
  let b = v2.isDirectory;
  if(a == b){
    return 0
  }else if(a == false){
    return 1
  }else if(b == true){
    return -1
  }
}

const SortLikeWin = function(v1, v2) {
        var a = v1.name
        var b = v2.name
        var reg = /[0-9]+/g
        var lista = a.match(reg)
        var listb = b.match(reg)
        if (!lista || !listb) {
        return a.localeCompare(b)
        }
        for (var i = 0, minLen = Math.min(lista.length, listb.length) ; i < minLen; i++) {
        //数字所在位置序号
        var indexa = a.indexOf(lista[i])
        var indexb = b.indexOf(listb[i])
        //数字前面的前缀
        var prefixa = a.substring(0, indexa)
        var prefixb = a.substring(0, indexb)
        //数字的string
        var stra = lista[i]
        var strb = listb[i]
        //数字的值
        var numa = parseInt(stra)
        var numb = parseInt(strb)
        //如果数字的序号不等或前缀不等，属于前缀不同的情况，直接比较
        if (indexa != indexb || prefixa != prefixb) {
        return a.localeCompare(b)
        }
        else {
        //数字的string全等
        if (stra === strb) {
        //如果是最后一个数字，比较数字的后缀
        if (i == minLen - 1) {
        return a.substring(indexa).localeCompare(b.substring(indexb))
        }
        //如果不是最后一个数字，则循环跳转到下一个数字，并去掉前面相同的部分
        else {
        a = a.substring(indexa + stra.length)
        b = b.substring(indexa + stra.length)
        }
        }
        //如果数字的string不全等，但值相等
        else if (numa == numb) {
        //直接比较数字前缀0的个数，多的更小
        return strb.lastIndexOf(numb + '') - stra.lastIndexOf(numa + '')
        }
        else {
        //如果数字不等，直接比较数字大小
        return numa - numb
        }
        }
        }
      }

const actions = {
  changePath ({ commit }, param) {
    // do something async
    commit('CHANGE_PATH', param)
  },
  changeFileData ({ commit }, param) {
    // do something async
    commit('CHANGE_FILEDATA', param)
  },
  changeSortType ({ commit }, param) {
    // do something async
    commit('CHANGE_SORT_TYPE', param)
  },
  changeActiveIndex ({ commit }, param) {
    commit('CHANGE_ACTIVE_INDEX', param)
  },
  changeFileCount ({ commit }, param) {
    commit('CHNAGE_FILE_COUNT', param)
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions
}
