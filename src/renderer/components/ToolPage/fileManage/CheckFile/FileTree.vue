<template>
  <div id="fileTree">
    <!-- <div id="tree"></div> -->
    <el-tree
      :data="TreeState.filetreeData"
      :props="defaultProps"
      :expand-on-click-node="false"
      @node-click="handleNodeClick"
      @node-expand="updateTree"></el-tree>
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
        defaultProps: {
          label: 'name',
          children: 'children'
        }
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
        this.loadData();
      },
      ...mapActions('FileTree',['changeTreeData']),
      ...mapActions('CheckFileState',['changePath']),
      handleNodeClick (data) {
        this.changePath(data.path)
      },
      loadData () {

        if(this.TreeState.filetreeData.length == 0){
          let treeData = [];
          wmic.disk().then(disk => {

            disk.forEach(function(e, i){

              let curPath = e.DeviceID+'/';
              let files = fs.readdirSync(curPath);
              let fileData = [];
              files.forEach(function(ele,index){
                let fileInfo = "none"
                try{
                  fileInfo = fs.readdirSync(curPath+ele);
                }catch(error){}

                if(fileInfo != "none" && ele != '$Recycle.Bin' && ele != '$RECYCLE.BIN'){

                  fileData.push({
                    name: ele,
                    path: curPath+ele,
                    children: []
                  })
                }
              })

              treeData.push({
                name: e.DeviceID,
                path: e.DeviceID,
                children: fileData
              })
            })
            let param = {
              indexs: "",
              data: treeData
            }
            this.changeTreeData(param);
          })
        }
      },
      updateTree (treeD, node, com) {

        let data = [];

        treeD.children.forEach(function(e, i){
          let fileInfo = "none"
          let files = fs.readdirSync(e.path);

          if(files != "none"){
            let fileData = [];
            
            files.forEach(function(ele,index){
              let fileInfo = "none"
              try{
                fileInfo = fs.readdirSync(e.path + "/" + ele);
              }catch(error){}

              if(fileInfo != "none"){

                let childData = [];

                fileData.push({
                  name: ele,
                  path: e.path + "/" + ele,
                  children: []
                })
              }
            })

            data.push({
              name: e.name,
              path: e.path,
              children: fileData
            });
          }
        })
        
        let pathData = treeD.path.split('/');
        let treeUpData = this.TreeState.filetreeData;
        let curData = treeUpData;
        pathData.forEach(function(e, i){
          pathData[i] = {
            index: null,
            path: e
          }
          if(Array.isArray(curData)){
            curData.forEach(function(ele, index){
              if(e == ele.name){
                pathData[i].index = index;
              }
            })
            curData = curData[pathData[i].index]
          }else{
            curData.children.forEach(function(ele, index){
              if(e == ele.name){
                pathData[i].index = index;
              }
            })
            curData = curData.children[pathData[i].index]
          }
        })
        let indexs = "";
        pathData.forEach(function(e, i){
          indexs += "["+ e.index +"].children"
        })
        let param = {
          indexs: indexs.substring(0, indexs.length - 9),
          data: data
        }
        this.changeTreeData(param)
      }
    },
    mounted () {
      this.init()
    }
  }
</script>

<style lang="scss">
  body .layui-tree-skin-shihuang .layui-tree-branch{color: #EDCA50;}   
  #fileTree{
    width: 200px;
    height: calc(100% - 130px);
    overflow-y: scroll;
    position: absolute;
    top: 100px;
    left: 0;
  }
</style>
