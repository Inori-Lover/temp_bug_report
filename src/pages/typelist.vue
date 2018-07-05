<template lang='wxml'>
  <view id="container">
    <!-- 顶部搜索 -->
    <view class="weui-search-bar">
      <view class="weui-search-bar__form">
        <view class="weui-search-bar__box">
          <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
          <input type="text" class="weui-search-bar__input" placeholder="搜索" value="{{inputVal}}" focus="{{inputShowed}}" bindinput="inputTyping" />
          <view class="weui-icon-clear" wx:if="{{inputVal.length > 0}}" @tap="clearInput">
            <icon type="clear" size="14"></icon>
          </view>
        </view>
        <label class="weui-search-bar__label" hidden="{{inputShowed}}" @tap="showInput">
          <icon class="weui-icon-search" type="search" size="14"></icon>
          <view class="weui-search-bar__text">搜索{{contentTopID}}</view>
        </label>
      </view>
      <view class="weui-search-bar__cancel-btn" hidden="{{!inputShowed}}" @tap="hideInput">取消</view>
    </view>
  <button class="btn" type="primary" loading="{{false}}" disabled="{{false}}" @tap="contentScrollHandler">
    点击
  </button>
    <view class="weui-flex main_container" style="height: {{navHeight}}px">
      <!-- 左边导航栏 -->
      <scroll-view class="left_nav" scroll-y @scroll="navScrollHandler" scroll-with-animation>
        <repeat for="{{nav}}" index="index" item="item" key="item.id">
          <view class="nav_item {{contentTopID === index ? 'active' : ''}}" id="nav_item_{{item.id}}">{{item.name}}{{contentTopID}}</view>
        </repeat>
      </scroll-view>
      <!-- 右边内容栏 -->
      <scroll-view class="right_content" scroll-y @scroll="contentScrollHandler" scroll-with-animation>
        <repeat for="{{content}}" index="index" item="item" key="item.id">
          <view class="content_item_title" id="nav_item_title_{{item.id}}">{{item.name}}</view>
          <repeat for="{{item.child}}" index="_index" item="_item" key="_item.id">
            <view class="content_item" id="nav_item_{{_item.id}}">{{_item.name}} - {{_item.content}}</view>
          </repeat>
        </repeat>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import _debounce from 'lodash/debounce'

  export default class TypeList extends wepy.page {
    paddingData = async function () {
      /**
       * 生成测试填充数据
       */
      this.nav = [...Array(30).keys()].map((item, index) => {
        index += 1
        return {
          id: index,
          name: `测试${index}`
        }
      })
      this.content = [...Array(30).keys()].map((item, index) => {
        index += 1
        return {
          id: index,
          name: `测试${index}`,
          content: `测试内容`,
          child: [
            {
              id: 0,
              name: `测试0`,
              content: `测试内容-${index}-0`
            },
            {
              id: 1,
              name: `测试1`,
              content: `测试内容-${index}-1`
            }
          ]
        }
      })
    }

    getSystemInfo = function () {
      return new Promise((resolve, reject) => {
        wepy.getSystemInfo({
          success: (res) => {
            resolve(res)
          },
          fail: (err) => {
            reject(err)
          }
        })
      })
    }

    _contentScrollHandler = evt => {
      console.log(evt.target)
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      this.contentTopID = arr[Math.round(Math.random() * 10)]
      this.$apply()
    }

    config = {
      navigationBarTitleText: '测试商城分类展示'
    }

    data = {
      order: ['red', 'yellow', 'blue', 'green', 'red'],
      nav: null,
      content: null,
      placeHeight: null,
      navHeight: 300,
      contentTitleList: null,
      contentTopID: null,
      navItemID: null
    }

    onLoad () {
      this.paddingData()
    }

    async onShow () {
      // const systemInfo = await this.getSystemInfo()
      // const topEleQuery = wepy.createSelectorQuery()
      // const contentTitleQuery = wepy.createSelectorQuery()

      // this.navHeight = systemInfo.windowHeight

      // topEleQuery.select('.weui-search-bar').boundingClientRect()
      // contentTitleQuery.selectAll('.content_item_title').boundingClientRect()

      // new Promise((resolve, reject) => {
      //   topEleQuery.exec((res) => {
      //     Array.from(res).forEach((item) => {
      //       this.navHeight -= item.height
      //     })
      //     this.placeHeight = systemInfo.windowHeight - this.navHeight
      //     this.$apply()
      //     resolve(res)
      //   })
      // }).then(res => {
      //   return new Promise((resolve, reject) => {
      //     contentTitleQuery.exec((res) => {
      //       this.contentTitleList = Array.from(res[0]).map(item => item.top)
      //       this.$apply()
      //       resolve(res)
      //     })
      //   })
      // }, err => {
      //   console.log(err)
      // })

      // this.$apply()
    }

    methods = {
      navScrollHandler (evt) {
        /**
         * evt.target.offsetLeft = evt.currentTarget.offsetLeft 发生滚动元素与屏幕左边缘的距离
         * evt.target.offsetTop = evt.currentTarget.offsetTop 发生滚动元素与上边缘的距离
         *
         * evt.detail.deltaX 本次（单次）滚动距离
         * evt.detail.deltaY 本次（单次）滚动距离
         * evt.detail.scrollHeight 滚动高度
         * evt.detail.scrollWidth 滚动宽度
         * evt.detail.scrollLeft 滚动距离（左
         * evt.detail.scrollTop 滚动距离（顶
         */
        console.log(+new Date(), evt.detail.scrollTop, evt.target.offsetTop)
        // if (!this.contentTitleList || !this.contentTitleList.length) {
        //   return
        // }
        // const contentTitleList = Array.from(this.contentTitleList)
        // let notFound = true
        // contentTitleList.forEach((item, index, array) => {
        //   if (notFound && evt.detail.scrollTop > item) {
        //     this.scrollTopID = index
        //     notFound = false
        //   }
        // })
        // this.$apply()
      },

      contentScrollHandler: _debounce(function (evt) {
        this._contentScrollHandler(evt)
      }, 600)
    }
  }
</script>

<style lang="stylus">
  // 涉及到需要对page设置样式时不能选择scoped
  page,
  #container {
    height 100%
  }
  .main_container {
    height 100%
  }
  .left_nav {
    width 5rem
    height 100%

    .nav_item {
      line-height 2rem
      word-break keep-all
      white-space pre
      &.active {
        background-color #aaa
        color #ffffff
      }
    }
  }
  .right_content {
    width 15rem
    height 100%

    .content_item {
      line-height 4rem;
    }
  }
</style>
