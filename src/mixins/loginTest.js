import wepy from 'wepy'

export default class TestMixin extends wepy.mixin {
  onLoad (res) {
    console.groupCollapsed(`${new Date()} 检测用户登陆`)
    /**
     * 检测用户已登陆
     */
    if (!this.$parent.globalData.userInfo) {
      console.log(`跳转登陆`)
      /**
       * 链接参数
       */
      let query = []
      /**
       * 检测是否有返回指定
       */
      if (res.query && res.query.from) {
        query.push(`from=${res.query.from}`)
      } else {
        query.push(`from=${this.getCurrentPages()[0].route}`)
      }
      wepy.redirectTo({
        url: `login?${query.join('&')}`,
        complete: (res) => {
          console.log(res)
        }
      })
    } else {
      // 已经登陆
    }
    console.groupEnd()
  }
}
