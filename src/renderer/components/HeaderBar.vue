<template>
  <div id="headerBar">
    <div class="logo">
      <img src="~@/assets/z.gif">
    </div>
    <div class="name">
      zhanghq.cn
    </div>
    <div class="btns">
      <div class="btn">
        <i class="iconfont icon-guanbianniu"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header-bar',
    components: {

    }
  }
</script>

<style lang="scss">
  $HeaderBarHeight: 40px;
  #headerBar{
    width: 100%;
    height: $HeaderBarHeight;
    -webkit-app-region: drag;
    position: absolute;
    top: 0;
    left: 0;
    .logo{
      width: $HeaderBarHeight;
      height: 100%;
      float: left;
      img{
        padding: 20%;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
    }
    .name{
      float: left;
      line-height: $HeaderBarHeight;
      font-size: 20px;
    }
  }
</style>
