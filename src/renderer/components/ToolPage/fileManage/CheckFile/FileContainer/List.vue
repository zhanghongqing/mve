<template>
  <div id="fileContainer">
    123
  </div>
</template>

<script>

  import { mapState, mapActions } from 'vuex'
  import path from 'path'
  import fs from 'fs'
  import wmic from 'node-wmic'

  export default {
    name: 'file-tree',
    data () {
      return {
      }
    },
    props: {
    },
    components: {

    },
    computed: {
      ...mapState({
        TreeState: 'FileTree'
      })
    },
    methods: {
      init () {
        // this.loadData();
      }
    },
    mounted () {
      this.init()
    }
  }
</script>

<style lang="scss">
  #fileContainer{
    width: calc(100% - 200px);
    height: calc(100% - 130px);
    overflow: auto;
    position: absolute;
    top: 100px;
    right: 0;
  }
</style>
