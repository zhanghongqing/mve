<template>
  <div id="contentContainer">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'content-container',
    components: {

    }
  }
</script>

<style lang="scss">
  #contentContainer{
    width: 100%;
    height: calc(100% - 120px);
    background: rgba(255,255,255,0.4);
    position: absolute;
    top: 40px;
    left: 0;
  }
</style>
