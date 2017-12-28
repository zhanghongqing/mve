<template>
  <div class="pathListItem">
    <div class="pathName"
      @click="changePath"
    >
      {{itemData}}
    </div>
    <div class="pathControl">
      <i class="iconfont icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>

  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'path-list-item',
    data () {
      return {
      }
    },
    props: {
      itemData: String,
      pathIndex: Number
    },
    methods: {
      changePath () {
        this.$emit('changeCurPath', this.pathIndex)
      }
    },
    computed: {
    },
    filters: {
    },
    mounted () {
    }
  }
</script>

<style lang="scss">

  .pathListItem{
    float: left;
    line-height: 28px;
    color: #333;
    margin-top: 6px;
    .pathName{
      float: left;
      padding: 0 8px;
    }
    .pathControl{
      float: left;
      padding: 0 2px;
    }
    &:hover{
      background: #e5f3ff;
      box-shadow: 0 0 0 1px #cce8ff inset;
      .pathName{
        border-right: 1px solid #cce8ff;
      }
    }
  }
</style>
