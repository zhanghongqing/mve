<template>
  <div class="detailListItem"
    @dblclick="changeState"
    @click.stop="changeActiveIndex(itemIndex)"
    :class="{active: itemIndex == activeIndex}"
  >
    <div class="item folder" v-if="fileData.isDirectory">
      <div class="left">
        <i class="iconfont icon-wenjianjia"></i>
      </div>
      <div class="right">
        {{fileData.name}}
      </div>
    </div>
    <div class="item file" v-if="!fileData.isDirectory">
      <div class="left">
        <i class="iconfont icon-wenjian"></i>
      </div>
      <div class="right">
        <div class="name">{{fileData.name}}</div>
        <div class="type">{{fileType}}</div>
        <div class="size">{{size|formatSize}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'file-detail-list-item',
    data () {
      return {
      }
    },
    props: {
      fileData: Object,
      itemIndex: Number
    },
    methods: {
      ...mapActions('CheckFileState',['changePath','changeActiveIndex']),
      // changeActive (itemIndex) {

      //   changeActiveIndex(itemIndex)
      // },
      changeState () {
        if(this.fileData.isDirectory){
          let curPath = this.fileData.path
          this.changePath(curPath) 
        }else{
          alert('不是文件夹')
          console.log(this.fileData)
        }
      },
      getPostfix (filename) {
        let index1=filename.lastIndexOf(".");  
        let index2=filename.length; 
        return filename.substring(index1 + 1,index2);//后缀名 
      }
    },
    computed: {
      ...mapState('CheckFileState',['activeIndex']),
      size () {
        if(this.fileData.infos != null){
          return this.fileData.infos.size
        }else{
          return 0
        }
      },
      fileType () {
        if(!this.fileData.isDirectory){
          return this.getPostfix(this.fileData.name).toUpperCase() + " 文件 "
        }else{
          return ""
        }
      }
    },
    filters: {
      formatSize (limit) {
        var size = "";
        if( limit < 0.1 * 1024 ){ //如果小于0.1KB转化成B
            size = limit.toFixed(2) + "B";
        }else if(limit < 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB
            size = (limit / 1024).toFixed(2) + "KB";
        }else if(limit < 0.1 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB
            size = (limit / (1024 * 1024)).toFixed(2) + "MB";
        }else{ //其他转化成GB
            size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
        }
        
        var sizestr = size + "";
        var len = sizestr.indexOf("\.");
        var dec = sizestr.substr(len + 1, 2);
        if(dec == "00"){//当小数点后为00时 去掉小数部分  
            return sizestr.substring(0,len) + sizestr.substr(len + 3,2);  
        }
        return sizestr;  
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  .detailListItem{
    width: 250px;
    height: 60px;
    float: left;
    margin-right: 6px;
    margin-bottom: 6px;
    &:hover{
      background: #D8EAF9;
      box-shadow: 0 0 0 1px #99d1ff;
      cursor: default;
    }
    &.active{
      background: #D8EAF9;
      box-shadow: 0 0 0 1px #99d1ff;
    }
    .item{
      .left{
        float: left;
        width: 60px;
        height: 60px;
        line-height: 54px;
        text-align: center;
        .iconfont{
          font-size: 40px;
          &.icon-wenjianjia{
            color: #F1AF4E;
          }
        }
      }
      .right{
        width: 190px;
        height: 60px;
        float: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &.folder{
        .right{
          line-height: 56px;
        }
      }
      &.file{
        .right{
          line-height: 20px;
          .name{
            color: #333;
          }
          .type{
            color: #777;
          }
          .size{
            color: #777;
          }
        }
      }

    }
  }
</style>
