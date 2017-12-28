<template>
  <div id="fileContainer">
    <DiskList v-if="rootDisk"/>
    <div v-else>
      <DetailList v-if="fileListShowType == 'detailList' " />
    </div>
  </div>
</template>

<script>

  import { mapState, mapActions } from 'vuex'
  import path from 'path'
  import fs from 'fs'
  import wmic from 'node-wmic'
  import DetailList from './FileContainer/DetailList'
  import DiskList from './FileContainer/DiskList'

  export default {
    name: 'file-container',
    data () {
      return {
      }
    },
    props: {
    },
    components: {
      DetailList,
      DiskList
    },
    computed: {
      ...mapState('CheckFileState',['curPath', 'fileListShowType', 'rootDisk'])
    },
    methods: {
      init () {
        this.loadFileData()
      },
      ...mapActions('CheckFileState',['changeFileData']),
      loadFileData () {
        if(this.curPath == ""){
          wmic.disk().then(disk => {
            this.changeFileData(disk)
          })
        }else{
          let pubPath = this.curPath+'/'
          let files = fs.readdirSync(pubPath);
          let filesData = [];
          files.forEach(function(e, i){
            let info = null;
            try{
              info = fs.statSync(pubPath+e); 
            }catch(error){}
            filesData.push({
              name: e,
              path: pubPath+e,
              isDirectory: info == null ? false : info.isDirectory(),
              infos: info
            })
          }.bind(this))
          this.changeFileData(filesData)
        }
      }
    },
    watch: {
      curPath: {
        handler: function(){
          this.loadFileData()
        },
        deep: true
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
