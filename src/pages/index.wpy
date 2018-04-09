<style lang="stylus">

  main-color = #E64340

  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }
  // 搜索键
  .weui-search-bar__cancel-btn {
    color main-color
  }
  // 搜索下拉
  .searchbar-result {
    position: absolute;
    margin-top: 0;
    // searchbar 的默认高度是48px 减去边框1px
    top: 47px;
    left: 0;
    right: 0;
    z-index: 10;
  }

  // 轮播图
  swiper-item {
    text-align: center;
  }

  // 菜单图标
  .fixed_image {
    // 一个屏幕宽度为750rpx或者等长20rem
    // css原生var及calc
    // 括号为stylus预处理
    // 一行4个图标
    --linePerItem: (20 / 4)rem;
    width: calc(var(--linePerItem) + 1px);
    flex-basis: calc(var(--linePerItem) + 1px);
    margin-right: -1px;
    flex-grow: 0;
    flex-shrink: 0;
    // border: 1px solid gray
    padding: 0.5rem;
    box-sizing: border-box;
    text-align: center;
  }

  .fixed_img {
    width: 75rpx;
    height: 75rpx;
    border-radius: 50%;
  }

  .fixed_img_addon {
    width: calc(var(--linePerItem) - 1rem);
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    white-space: pre;
  }

  .fixed_image:last-child {
    width: var(--linePerItem);
    flex-basis: var(--linePerItem);
  }

  del {
    text-decoration: line-through;
  }

  // 双列推荐
  .weui-flex-two {
    flex-wrap wrap
    justify-content space-between
    .weui-grid__icon {
      width 240rpx
      height 240rpx
    }
    .weui-flex__item {
      --marginTop 5rpx
      margin-top var(--marginTop)
      flex-basis calc(50% - var(--marginTop) )
      height 400rpx
      flex-shrink 0
      flex-grow 0
      padding-top 1rem
      padding-left 1rem
      padding-right @padding-left
      box-sizing border-box
      border 1px solid #eee
      position relative
      .shop_price {
        color main-color
      }
      del {
        color gray
        font-size smaller
      }
      .weui-badge {
        background-color main-color
        top: @padding-top - .4rem
        left: @padding-left + .4rem
      }
    }
  }
</style>

<template>
  <view class="container">
    <view class="page">
        <view class="page__bd">
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
                        <view class="weui-search-bar__text">搜索</view>
                    </label>
                </view>
                <view class="weui-search-bar__cancel-btn" hidden="{{!inputShowed}}" @tap="hideInput">取消</view>
            </view>
            <!-- 顶部 -->
            <view class="weui-cells searchbar-result" wx:if="{{inputVal.length > 0}}">
                <navigator url="#" class="weui-cell">
                    <view class="weui-cell__bd">
                        <view>正在加载</view>
                    </view>
                </navigator>
            </view>
        </view>

        <swiper indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
          <block wx:for="{{imgUrls}}">
            <swiper-item>
              <image src="{{item}}" class="slide-image" width="355" height="150"/>
            </swiper-item>
          </block>
        </swiper>

        <!-- 导航 -->
          <view class="weui-flex">
            <view class="weui-flex__item fixed_image">
              <image class="fixed_img" mode="aspectFill" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1522634277&di=77b89e240b9ef42872b515b8ad8cabe9&src=http://img5.xiazaizhijia.com/walls/20160708/1440x900_2f172c09d079701.jpg"></image>
              <view class="fixed_img_addon">weui1</view>
            </view>
            <view class="weui-flex__item fixed_image">
              <image class="fixed_img" mode="aspectFill" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1522634277&di=77b89e240b9ef42872b515b8ad8cabe9&src=http://img5.xiazaizhijia.com/walls/20160708/1440x900_2f172c09d079701.jpg"></image>
              <view class="fixed_img_addon">weui2</view>
            </view>
            <view class="weui-flex__item fixed_image">
              <image class="fixed_img" mode="aspectFill" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1522634277&di=77b89e240b9ef42872b515b8ad8cabe9&src=http://img5.xiazaizhijia.com/walls/20160708/1440x900_2f172c09d079701.jpg"></image>
              <view class="fixed_img_addon">weui3</view>
            </view>
            <view class="weui-flex__item fixed_image" @tap="showtabbar">
              <image class="fixed_img" mode="aspectFill" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1522634277&di=77b89e240b9ef42872b515b8ad8cabe9&src=http://img5.xiazaizhijia.com/walls/20160708/1440x900_2f172c09d079701.jpg"></image>
              <view class="fixed_img_addon">weui4444444444444444</view>
            </view>
        </view>
        <view style='height:10rpx;'></view>
        <!-- 九宫格推荐 -->
        <!-- <view class="weui-grids">
            <block wx:for-items="{{grids}}" wx:key="{{index}}">
                <navigator url="" class="weui-grid" hover-class="weui-grid_active">
                  <image class="weui-grid__icon" mode="aspectFill" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1522634277&di=77b89e240b9ef42872b515b8ad8cabe9&src=http://img5.xiazaizhijia.com/walls/20160708/1440x900_2f172c09d079701.jpg" />
                  <view class="weui-grid__label">Grid</view>
                  <view class="weui-grid__label">￥ 27.000<del>￥ 127.000</del></view>
                </navigator>
            </block>
        </view> -->
        <!-- 双列推荐 -->
        <view class="weui-flex weui-flex-two">
          <block wx:for-items="{{grids}}" wx:key="{{index}}">
                <navigator url="" class="weui-flex__item" hover-class="weui-grid_active">
                  <image class="weui-grid__icon" mode="aspectFill" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1522634277&di=77b89e240b9ef42872b515b8ad8cabe9&src=http://img5.xiazaizhijia.com/walls/20160708/1440x900_2f172c09d079701.jpg" />
                  <view class="weui-badge" style="position: absolute;">{{grids[index].tag}}</view>
                  <view class="weui-grid__label">{{grids[index].title}}</view>
                  <view class="weui-grid__label shop_price">￥{{grids[index].price}}<del>￥{{grids[index].current_price}}</del></view>
                </navigator>
            </block>
        </view>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import Panel from '@/components/panel' // alias example

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: '测试商城首页'
  };
  components = {
    panel: Panel
  };

  data = {
    // swiper
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // 搜索栏
    inputShowed: false,
    inputVal: '',

    // 九宫格推荐
    grids: [
      {
        title: '玻尿酸1',
        price: '201.00',
        current_price: '100.00',
        tag: '新品抢购'
      },
      {
        title: '玻尿酸2',
        price: '202.00',
        current_price: '100.00',
        tag: '新品抢购'
      },
      {
        title: '玻尿酸3',
        price: '203.00',
        current_price: '100.00',
        tag: '新品抢购'
      }
    ]
  }

  methods = {
    showInput() {
      this.inputShowed = true
    },
    hideInput() {
      this.inputVal = ''
      this.inputShowed = false
    },
    clearInput() {
      this.inputVal = ''
    },
    inputTyping(e) {
      this.inputVal = e.detail.value
    },
    showtabbar(e) {
      console.log(1)
      wepy.setTabBarBadge({
        index: 0,
        text: '1'
      })
    }
  }

  onLoad() {
    let self = this
    console.log(self)
  }
}
</script>
