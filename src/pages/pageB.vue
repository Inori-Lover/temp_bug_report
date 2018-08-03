<style lang="less">
</style>

<template>
  <view class="ad">
    <view class="weui-loadmore middle_loading" hidden="{{!loading}}">
      <view class="weui-loading"></view>
      <view class="weui-loadmore__tips">正在加载</view>
    </view>
    <view class="page" hidden="{{loading}}">
      <view class="page__hd">
        <view class="page__title">我的成绩单</view>
        <view class="page__desc">{{name}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  import wepy from 'wepy'

  export default class Index extends wepy.page {
    config = {
      navigationBarTitleText: ''
    }
    components = {
    }
    mixins = []

    data = {
      name: 0,
      loading: true
    }
    computed = {
    }

    methods = {
    }

    events = {
    }

    onLoad(options) {
      this.loading = true
      var that = this
      // console.log(options, that.__wxWebviewId__)
      setTimeout(function () {
        // console.log(options, that.__wxWebviewId__)
        that.$root.$wxpage.setData({ loading: false, name: options.from }, function() {})
      }, 2000)
    }
  }
</script>
