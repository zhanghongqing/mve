<template>
  <div class="toolListItem">
    <router-link :to="itemData.path" >
      <div class="container">
        <i class="iconfont" :class="[itemData.icon]"></i>
        <div class="title">{{itemData.title}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>

  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'tool-list-item',
    props: {
      itemData: Object
    }
  }
</script>

<style lang="scss">
  .toolListItem{
    float: left;
    margin-top: 20px;
    margin-left: 20px;
    :hover{
      .container{
        background: rgba(0,0,0,0.2);
      }
    }
    .container{
      width: 100px;
      height: 100px;
      text-align: center;
      position: relative;
      .iconfont{
        font-size: 40px;
        color: #333;
        line-height: 80px;
      }
      .title{
        width: 100%;
        height: 30px;
        position: absolute;
        left: 0;
        bottom: 0;
        line-height: 30px;
        color: #333;
      }
    }
  }
</style>
