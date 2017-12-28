<template>
  <div class="checkFileToolBar">
    <div class="back">
      <router-link class="link" to="/tool/file" >
          返回
      </router-link>
    </div>
    <div class="ctrlBtns">
       <div class="btn prev">
         <i class="iconfont icon-xia"></i>
       </div>
       <div class="btn next">
         <i class="iconfont icon-icon-right-copy"></i>
       </div>
       <div class="btn history" @click="showHistory">
         <i class="iconfont icon-icon"></i>
       </div>
       <div class="btn up" @click="pathUp">
         <i class="iconfont icon-jiantoushang"></i>
       </div>
    </div>
    <div class="pathInput">
      <div class="ico">
        <i class="iconfont icon-wenjianjia1"></i>
      </div>
      <div class="pathList">
        <PathListItem
          v-for="(pathItem, pathKey) in pathData"
          :key="pathKey"
          :pathIndex="pathKey"
          :itemData="pathItem"
          v-on:changeCurPath="changeCurPath"
        />
      </div>
    </div>
  </div>
</template>

<script>

  import { mapState, mapActions } from 'vuex'
  import PathListItem from './PathListItem'
  export default {
    name: 'check-file',
    props: {
    },
    components: {
      PathListItem
    },
    methods: {
      ...mapActions('CheckFileState',['changePath']),
      changeCurPath (index) {
        let curPath = this.curPath.split('/').splice(0,index).join("/");
        this.changePath(curPath)
      },
      pathUp () {
        if(this.curPath == ""){
          return
        }
        let pathData = this.curPath.split('/');
        pathData.pop();
        let curPath = pathData.join('/')
        this.changePath(curPath)
      },
      showHistory () {
        console.log('显示历史记录')
      }
    },
    computed: {
      pathData () {
        let data = this.curPath.split('/');
        if(this.curPath == ""){
          data = [];
        }
        data.unshift('我的电脑')
        return data
      },
      ...mapState('CheckFileState', ['curPath'])
    }
  }
</script>

<style lang="scss">
  .checkFileToolBar{
    width: 100%;
    height: 60px;
    box-shadow: 0 0 1px rgba(0,0,0,0.2);
    position: absolute;
    top: 40px;
    left: 0;
    line-height: 40px;
    .back{
      width: 50px;
      height: 30px;
      background: #fff;
      line-height: 30px;
      margin-top: 15px;
      margin-left: 10px;
      box-shadow: 0 0 4px rgba(0,0,0,0.2);
      text-align: center;
      cursor: pointer;
      float: left;
      .link{
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
    .ctrlBtns{
      height: 30px;
      width: 120px;
      float: left;
      margin-top: 15px;
      margin-left: 10px;
      .btn{
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        float: left;
        cursor: pointer;
        transition: all .3s ease;
        .iconfont{
          transition: all .3s ease;
        }
        &:hover{
          .iconfont{
            color: #0091E7;
          }
        }
        &.up{
          &:hover{
            background: #D6F2FF;
            box-shadow: 0 0 1px #56B2FF inset;
            .iconfont{
              color: #333;
            }
          }
        }
      }
    }
    .pathInput{
      width: calc(100% - 220px);
      height: 40px;
      box-shadow: 0 0 0px 1px #ddd;
      float: left;
      margin-top: 10px;
      margin-left: 10px;
      .ico{
        width: 40px;
        height: 40px;
        float: left;
        text-align: center;
        .iconfont{
          color: #f1af4e;
          font-size: 22px;
        }
      }
      .pathList{
        float: left;
      }
    }
  }
</style>
