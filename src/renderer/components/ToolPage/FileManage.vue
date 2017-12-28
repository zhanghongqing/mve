<template>
  <div id="fileManage">
    <div class="fileHandleList">
      <ToolListItem
        v-for="(fileItem, key, fileIndex) in FileState.fileMenuList"
        :key = "key"
        :itemData = "fileItem"
      />
    </div>
  </div>
</template>

<script>

  import ToolListItem from './ToolListItem'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'file-manage',
    props: {
    },
    components: {
      ToolListItem
    },
    computed: {
      ...mapState({
        FileState: 'FileMod'
      })
    }
  }
</script>

<style lang="scss">
  #fileManage{
    width: 100%;
    height: 100%;
  }
</style>
