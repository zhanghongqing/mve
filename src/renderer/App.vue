<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <ContentContainer></ContentContainer>
    <MenuBar></MenuBar>
  </div>
</template>

<script>
  import HeaderBar from './components/HeaderBar'
  import MenuBar from './components/MenuBar'
  import ContentContainer from './components/ContentContainer'
  import store from './store/index'

  export default {
    name: 'mve',
    store: store,
    components: {
      HeaderBar,
      MenuBar,
      ContentContainer
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  /* CSS */

  @import url('https://at.alicdn.com/t/font_505475_y79tlmajni5dn29.css');
  @import url('/static/layui/css/layui.css');
  
  #app{
    background: url('/static/imgs/bg.jpg');
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
</style>
