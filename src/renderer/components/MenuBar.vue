<template>
  <div id="menuBar">
    <ul class="menuList">
      <li v-for="(menuItem, index) in MenuState.menuList" class="menuItem" v-bind:class="{active: index == MenuState.currentMenuIndex }" @click="changeCurrentMenu(index)">
        <router-link :to="menuItem.path" >
          <div class="container">
            <i class="iconfont" :class="[menuItem.icon]"></i>
            <span class="title">{{menuItem.title}}</span>
          </div>
        </router-link>
        <div class="meunItemBg"></div>
      </li>
    </ul>
  </div>
</template>

<script>

  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'menu-bar',
    data () {
      return {

      }
    },
    computed: {
      ...mapState({
        MenuState: 'Menu'
      })
    },
    components: {

    },
    methods: {
      ...mapActions('Menu',['changeCurrentMenu']),
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  $menuBarHeight: 80px;
  #menuBar{
    width: 100%;
    height: $menuBarHeight;
    background: #f1f1f1;
    position: absolute;
    bottom: 0;
    left: 0;
    font-family: '微软雅黑';
    box-shadow: 0 0 2px rgba(0,0,0,0.2);
    .menuList{
      width: 100%;
      height: 100%;
      .menuItem{
        width: 160px;
        height: 100%;
        text-align: center;
        float: left;
        position: relative;
        .container{
          width: 100%;
          height: 100%;
          position: absolute;
          line-height: $menuBarHeight;
          top: 0;
          left: 0;
          z-index: 2;
          .title{
            font-size: 16px;
            font-weight: normal;
            color: #333;
            vertical-align: middle;
            margin-left: 6px;
          }
          .iconfont{
            font-size: 24px;
            vertical-align: middle;
          }
        }
        .meunItemBg{
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 1;
          background: #ddd;
          border-radius: 80px 80px 0 0;
          opacity: 0;
          transition: all .3s ease;
        }
      }
      .active{
        .container{
          .title{
            color: #1EB306;
          }
          .iconfont{
            color: #1EB306;
          }
        }
      }
      :hover{
        .container{
          .title{
            color: #1EB306;
          }
          .iconfont{
            color: #1EB306;
          }
        }
        .meunItemBg{
          opacity: 1;
          border-radius: 0px 0px 0 0;
        }
      }
    }
  }
</style>
