<style lang="stylus" scoped>
.header {
  text-align: center
  height: 65vh

  image {
    width: 5rem
    height: @width
    margin-top: @width
    border-radius: 50%
  }
}

.btns {
  padding: 0 2rem
}
</style>


<template lang="wxml">
  <view id="container" @tap="tapHandle" >
    <view class="header">
      <image src="{{userInfo.avatarUrl ? userInfo.avatarUrl : '../res/person.png'}}" />
      <view style="line-height: 3">{{userInfo.nickName ? userInfo.nickName : '请登陆'}}</view>
    </view>
  </view>
  <view class="btns">
    <button class="btn" type="primary" plain open-type="getUserInfo" @getuserinfo="getUserInfo">
      登陆
    </button>
  </view>
</template>

<script>
import wepy from 'wepy'

export default class Login extends wepy.page {
  config = {
    navigationBarTitleText: '登陆页面',
    userInfo: null
  }

  data = {
    test: true,
    userInfo: null
  }

  methods = {
    tapHandle: function(evt) {
      console.log(evt)
      console.log(this.$parent.data)
      console.log(this.$parent.globalData)
    }
  }

  onLoad = function(opt) {
    console.log(opt)
    if (opt.from) {
      this.from = opt.from
    }
    if (this.$parent.globalData.userInfo) {
      console.log('用户信息迟了一步')
      this.userInfo = this.$parent.globalData.userInfo
      opt.from &&
        wepy.redirectTo({
          url: `/${opt.from}?from=${this.getCurrentPages()[0].route}`,
          fail: err => {
            if (/a\stabbar\spage/.test(err.errMsg)) {
              wepy.switchTab({
                url: `/${opt.from}`,
                success: res => {
                  console.log(res)
                }
              })
            }
          },
          success: res => {
            console.log(res)
          }
        })
    }
  }

  getUserInfo(evt) {
    const res = evt.detail
    this.$parent.globalData.userInfo = res.userInfo
    this.userInfo = res.userInfo
    this.$apply()
    this.from
      ? wepy.redirectTo({
        url: `/${this.from}?from=${this.getCurrentPages()[0].route}`,
        fail: err => {
          if (/a\stabbar\spage/.test(err.errMsg)) {
            wepy.switchTab({
              url: `/${this.from}`,
              success: res => {
                console.log(res)
              }
            })
          }
        },
        success: res => {
          console.log(res)
        }
      })
      : wepy.redirectTo({
        url: `index`,
        fail: err => {
          if (/a\stabbar\spage/.test(err.errMsg)) {
            wepy.switchTab({
              url: `index`,
              success: res => {
                console.log(res)
              }
            })
          }
        },
        success: res => {
          console.log(res)
        }
      })
  }
}
</script>
