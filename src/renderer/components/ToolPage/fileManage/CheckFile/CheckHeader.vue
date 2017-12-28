<template>
  <div class="checkFileHeader">
    <div class="title">文件查看</div>
    <div class="curPath">///////</div>
  </div>
</template>

<script>

  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'check-file',
    props: {
    },
    components: {

    },
    computed: {
    }
  }
</script>

<style lang="scss">
  .checkFileHeader{
    width: 100%;
    height: 40px;
    background: #eee;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 40px;
    .title{
      float: left;
      margin-left: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #444;
      text-shadow: 0 2px 1px rgba(0,0,0,0.6);
    }
    .curPath{
      float: left;
      margin-left: 20px;
    }
  }
</style>
