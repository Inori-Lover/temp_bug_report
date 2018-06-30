<template>
  <view>hello world</view>
</template>

<script>
import wepy from 'wepy'
import _ from 'lodash'

export default class Car extends wepy.page {
  config = {
    navigationBarTitleText: '测试商城购物车'
  }
  data = {
    isDebuging: false,
    backUri: 'pages/index'
  }
}
</script>
