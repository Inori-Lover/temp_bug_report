<style src='../node_modules/weui-wxss/dist/style/weui.wxss'></style>

<script>
  import wepy from 'wepy'
  import 'wepy-async-function'

  export default class extends wepy.app {
    config = {
      pages: [
        // 排列第一的会显示
        'pages/typelist',
        'pages/shop_car',
        'pages/index',
        'pages/order_detail',
        'pages/person_index',
        'pages/shop_detail',

        'index/index',
        'message/index'
      ],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        // list长度为2~5
        list: [{
          pagePath: 'pages/index',
          text: '首页',
          iconPath: 'res/home.png',
          selectedIconPath: 'res/home2.png'
        }, {
          pagePath: 'pages/typelist',
          text: '分类',
          iconPath: 'res/book.png',
          selectedIconPath: 'res/book2.png'
        }, {
          pagePath: 'index/index',
          text: '分享',
          iconPath: 'res/shopcity.png',
          selectedIconPath: 'res/shopcity2.png'
        }, {
          pagePath: 'pages/shop_car',
          text: '购物车',
          iconPath: 'res/shopcar.png',
          selectedIconPath: 'res/shopcar2.png'
        }, {
          pagePath: 'pages/person_index',
          text: '会员中心',
          iconPath: 'res/person.png',
          selectedIconPath: 'res/person2.png'
        }]
      }
    }

    globalData = {
      userInfo: null
    }

    constructor () {
      super()
      this.use('requestfix')
    }

    // 小程序生命周期
    /**
     * @desc 首次打开小程序
     */
    onLaunch () {
      this.testAsync()
      console.log('onLaunch')
    }
    /**
     * @desc 初始化完成或后台进入前台
     */
    onShow () {
      console.log('onShow')
    }
    /**
     * @desc 前台进入后台
     */
    onHide () {
      console.log('onHide')
    }
    /**
     * @desc 程序监听到未处理的Error
     */
    onError () {
      console.log('onError')
    }
    /**
     * @desc 404处理
     */
    onPageNotFound () {
      console.log('onPageNotFound')
    }

    sleep (s) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('promise resolved')
        }, s * 1000)
      })
    }

    async testAsync () {
      const data = await this.sleep(3)
      console.log(data)
    }

    getUserInfo(cb) {
      const that = this
      wepy.getUserInfo({
        success (res) {
          that.globalData.userInfo = res.userInfo
          cb && cb(res.userInfo)
        }
      })
    }
  }
</script>
