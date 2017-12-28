<template>
  <div class="detailList">
    <DiskListItem
      v-for="(fileItem, fileKey, fileIndex) in curFileData"
      :key="fileKey"
      :itemIndex="fileKey"
      :fileData="fileItem"
    />
  </div>
</template>

<script>

  import { mapState, mapActions } from 'vuex'
  import DiskListItem from './DiskListItem'

  export default {
    name: 'file-detail-list',
    data () {
      return {
      }
    },
    props: {
    },
    components: {
      DiskListItem
    },
    computed: {
      // sortFileData () {
      //   return this.curFileData.sort(this.SortLikeWin)
      // },
      ...mapState('CheckFileState',['curFileData'])
    },
    methods: {
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  .detailList{
    padding: 20px;
  }
</style>
