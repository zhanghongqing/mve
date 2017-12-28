<template>
  <div id="checkFile" class="noselect" @click="setDefault">
    <CheckHeader />
    <ToolBar/>
    <FileTree />
    <CheckFooter />
    <FileContainer />
  </div>
</template>

<script>

  import { mapState, mapActions } from 'vuex'
  import CheckHeader from './CheckFile/CheckHeader'
  import ToolBar from './CheckFile/ToolBar'
  import FileTree from './CheckFile/FileTree'
  import CheckFooter from './CheckFile/CheckFooter'
  import FileContainer from './CheckFile/FileContainer'

  export default {
    name: 'file-manage',
    props: {
    },
    components: {
      CheckHeader,
      ToolBar,
      FileTree,
      CheckFooter,
      FileContainer
    },
    computed: {
    },
    methods: {
      setDefault () {
        this.changeActiveIndex(null);
      },
      ...mapActions('CheckFileState',['changeActiveIndex']),
    }
  }
</script>

<style lang="scss">
  
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
    not supported by any browser */
    cursor: default;
  }

  #checkFile{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 20;
  }
</style>
