<template>
  <div class="checkFileFooter">
    <div class="fileCount">
      {{fileCount}}个项目
    </div>
    <div class="fileShowTypeCtrl">
      <div class="btn">
        <i class="iconfont icon-liebiao"></i>
      </div>
      <div class="btn">
        <i class="iconfont icon-suolvetu"></i>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'check-file-footer',
    props: {
    },
    components: {

    },
    computed: {
      ...mapState('CheckFileState',['fileCount'])
    }
  }
</script>

<style lang="scss">
  .checkFileFooter{
    width: 100%;
    height: 30px;
    box-shadow: 0 0 1px rgba(0,0,0,0.2);
    position: absolute;
    bottom: 0px;
    left: 0;
    line-height: 30px;
    .fileCount{
      float: left;
      line-height: 30px;
      text-indent: 10px;
      color: #3E3E45;
    }
    .fileShowTypeCtrl{
      width: 60px;
      float: right;
      .btn{
        width: 30px;
        height: 30px;
        float: left;
        text-align: center;
        .iconfont{
          color: #666;
        }
        &:hover{
          background: #e5f3fb;
          box-shadow: 0 0 0 1px #70c0e7 inset;
        }
      }
    }
  }
</style>
