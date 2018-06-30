<template>
  <view>hello world</view>
</template>

<script>
import wepy from 'wepy'

export default class TypeList extends wepy.page {
  config = {
    navigationBarTitleText: '测试商城分类展示'
  }

  data = {
    order: ['red', 'yellow', 'blue', 'green', 'red']
  }
}
</script>
