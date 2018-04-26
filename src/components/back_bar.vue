<style lang="stylus" scoped>
  // max 750rpx || 20rem
  .flex_line {
    padding-left .5rem
    padding-right @padding-left
    border-bottom 1px solid #eee
  }
  .back_btn {
    width 1rem
    height @width
    margin .1rem
    vertical-align -15%
  }
</style>

<template>
  <view class="flex_line">
    <span><image class="back_btn" mode="aspectFit" src="../res/back.png" @tap='handleBackBtnClick'></image></span>
    <span>　共{{itemList.length}}件产品</span>
    <span style="float: right;" @tap='toggleEditing' wx:if="{{editing}}">完成</span>
    <span style="float: right;" @tap='toggleEditing' wx:if="{{editing}}">删除</span>
    <span style="float: right;" @tap='toggleEditing' wx:else>编辑</span>
  </view>
</template>
<script>
  import wepy from 'wepy'

  export default class BackBar extends wepy.component {
    props = {
      // 只允许在tabbar内的链接
      backUri: {
        type: String,
        default: 'pages/index'
      },
      editing: {
        type: Boolean,
        default: true,
        twoWay: true
      },
      debug: {
        type: Boolean,
        default: false
      },
      itemList: {
        type: Array,
        default: [],
        twoWay: true
      }
    }

    methods = {
      handleBackBtnClick () {
        if (this.debug) {
          console.group(`显示页面数据`)
          console.log(this.backUri)
          console.log(this.itemList.length)
          console.groupEnd()
        }
        if (this.backUri.length > 0) return
        wepy.switchTab({
          url: '/pages/index',
          success: () => {},
          fail: () => {},
          complete: () => {}
        })
      },
      toggleEditing () {
        if (this.debug) console.log(`正在由${this.editing}变为${!this.editing}`)
        this.editing = !this.editing
      }
    }

    onLoad () {
      // console.log(this['backUri'])
    }
  }
</script>
