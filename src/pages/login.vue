<style lang="stylus" scoped>
  .header {
    text-align center
    line-height 12rem

    image {
      width 5rem
      height @width
      border-radius 50%
    }
  }
</style>


<template lang="wxml">
  <view id="container" @tap="tapHandle" >
    <view class="header">
      <image src="../res/person.png" />
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'

export default class Login extends wepy.page {
  config = {
    navigationBarTitleText: '登陆页面'
  }

  data = {
    test: true,
    userInfo: null
  }

  methods = {
    tapHandle: function (evt) {
      console.log(evt)
      console.log(this.$parent.data)
      console.log(this.$parent.globalData)
    }
  }
}
</script>
