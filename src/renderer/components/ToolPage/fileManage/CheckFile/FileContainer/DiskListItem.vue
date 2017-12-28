<template>
  <div class="diskListItem"
    :class="{ active: itemIndex == activeIndex }"
    @dblclick="changePath(fileData.Name)"
    @click.stop="changeActiveIndex(itemIndex)"
  >
    <div class="left">
      <i class="iconfont icon-yingpan"></i>
    </div>
    <div class="right">
      <div class="name">{{fileData.VolumeName}} ({{fileData.Name}})</div>
      <div class="progress">
        <div class="box">
          <div class="con" :style="{ width: sizePercent + '%' }"></div>
        </div>
      </div>
      <div class="sizeInfo">{{fileData.FreeSpace|formatSize}} 可用 , 共 {{fileData.Size|formatSize}}</div>
    </div>
  </div>
</template>

<script>

  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'file-disk-list-item',
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
      changeIndex () {
        console.log(this.itemIndex)
      }
    },
    computed: {
      ...mapState('CheckFileState',['activeIndex']),
      sizePercent () {
        return (((this.fileData.Size - this.fileData.FreeSpace)/this.fileData.Size)*100).toFixed(2)
      }
    },
    filters: {
      formatSize (limit) {
        var size = "";
        if( limit < 0.1 * 1024 ){ //如果小于0.1KB转化成B
            size = limit.toFixed(2) + " B";
        }else if(limit < 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB
            size = (limit / 1024).toFixed(2) + " KB";
        }else if(limit < 0.1 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB
            size = (limit / (1024 * 1024)).toFixed(2) + " MB";
        }else{ //其他转化成GB
            size = (limit / (1024 * 1024 * 1024)).toFixed(2) + " GB";
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
  .diskListItem{
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
    .left{
      float: left;
      width: 60px;
      height: 60px;
      line-height: 54px;
      text-align: center;
      .iconfont{
        font-size: 40px;
        color: #8E8B94;
      }
    }
    .right{
      width: 190px;
      height: 60px;
      float: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 20px;
      .sizeInfo{
        color: #999;
      }
      .progress{
        width: 100%;
        height: 20px;
        .box{
          width: 96%;
          height: 14px;
          box-shadow: 0 0 0 1px #bcbcbc;
          margin-left: 1px;
          position: relative;
          top: 3px;
          background: #e6e6e6;
          .con{
            width: 10%;
            height: 100%;
            background: #26a0da;
          }
        }
      }
    }
  }
</style>
