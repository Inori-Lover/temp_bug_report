<template>
    <view>
      <button @tap="PageB1"> PageB1 </button>
      <button @tap="PageB2"> PageB2 </button>
      <text>--------------------------</text>
      <button @tap="PageBFix1"> PageBFix1 </button>
      <button @tap="PageBFix2"> PageBFix2 </button>
    </view>
</template>

<script>
import wepy from 'wepy'

export default class Web extends wepy.page {
  data = {
    v: '0.0.1'
  }
  methods = {
    PageB1 () {
      this.$navigate('./pageB', {from: 1})
    },
    PageB2 () {
      this.$navigate('./pageB', {from: 2})
    },
    PageBFix1 () {
      this.$navigate('./pageBFix', {from: 1})
    },
    PageBFix2 () {
      this.$navigate('./pageBFix', {from: 2})
    }
  }
}
</script>
