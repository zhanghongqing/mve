<template>
  <div id="toolPage">
    <ul class="toolList">
      <ToolListItem
        v-for="(toolItem, key, toolIndex) in toolList.toolList"
        :key = "key"
        :itemData = "toolItem"
      />
    </ul>
  </div>
</template>

<script>

  import ToolListItem from './ToolPage/ToolListItem'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'tool-page',
    components: {
      ToolListItem
    },
    computed: {
      ...mapState({
        toolList: 'ToolList'
      })
    },
  }
</script>

<style lang="scss">
  
</style>
