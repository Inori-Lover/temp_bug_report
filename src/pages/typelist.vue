<template>
  <view>
    <view class="section">
      <view class="section__title">vertical scroll</view>
      <scroll-view scroll-y style="height: 200px;" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" scroll-into-view="{{toView}}" scroll-top="{{scrollTop}}">
        <view id="green" class="scroll-view-item bc_green"></view>
        <view id="red"  class="scroll-view-item bc_red"></view>
        <view id="yellow" class="scroll-view-item bc_yellow"></view>
        <view id="blue" class="scroll-view-item bc_blue"></view>
      </scroll-view>

      <view class="btn-area">
        <button size="mini" bindtap="tap">click me to scroll into view </button>
        <button size="mini" bindtap="tapMove">click me to scroll</button>
      </view>
    </view>
  </view>
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

  // 小程序页面生命周期
  // > 显示A页面
  //   - onLoad()-->onShow()-->onReady()
  // > A navigateTo B
  //   - A: onHide()
  //   - B: onLoad()-->onShow()-->onReady()
  // > B wx.navigateBack() A
  //   - B: onUnload()
  //   - A: onShow()
  // > 退出A
  //   - A: onUnload()
  /**
   * @desc 小程序注册完成后，加载页面
   */
  onLoad () {
    console.log('onLoad')
  }
  /**
   * @desc 页面载入或后台进入到前台
   */
  onShow () {
    console.log('onShow')
  }
  /**
   * @desc 首次显示页面
   */
  onReady () {
    console.log('onReady')
  }
  /**
   * @desc 小程序后台运行或跳转到其他页面
   */
  onHide () {
    console.log('onHide')
  }
  /**
   * @desc 重定向方法wx.redirectTo(OBJECT)或关闭当前页返回上一页wx.navigateBack()
   */
  onUnload () {
    console.log('onUnload')
  }
  /**
   * @desc 页面滚动
   */
  onPageScroll (scrollTop) {
    console.group(`${new Date()} scrollTop`)
    console.log(scrollTop)
    console.log('onPageScroll')
    console.groupEnd()
  }
  /**
   * @desc 页面下拉刷新
   */
  onPullDownRefresh () {
    console.log('onPullDownRefresh')
  }
  /**
   * @desc 页面滚动底部
   */
  onReachBottom () {
    console.log('onReachBottom')
  }
  /**
   * @desc 页面分享时
   * @return {Object} 包含title、path
   */
  onShareAppMessage () {
    console.log('onShareAppMessage')
  }
  /**
   * @desc 当时Tab页面时tabitem点击触发
   */
  onTabItemTap () {
    console.log('onTabItemTap')
  }
}
</script>
