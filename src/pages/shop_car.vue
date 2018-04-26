
<style lang="stylus" scoped>
  .test {
    color red
  }
</style>


<template>
  <backbar :backUri.sync='backUri' :itemList.sync='itemList' :editing.sync='editing' :debug='isDebuging' />
  hello world
  <view class="weui-cells" wx:if="{{editing}}" @tap='Desort'>
    <view>编辑中</view>
  </view>

  <checkbox-group @change="checkboxChange">
    <repeat for="{{itemList}}" key="index" index="index" item="item">
    <!-- 列表项 -->
      <label class="weui-cell weui-check__label">
        <checkbox class="weui-check" value="{{item.g_id}}" checked="{{item.checked}}"/>

        <view class="weui-cell__hd weui-check__hd_in-checkbox">
          <icon class="weui-icon-checkbox_circle" type="circle" size="23" wx:if="{{!item.checked}}"></icon>
          <icon class="weui-icon-checkbox_success" type="success" size="23" wx:if="{{item.checked}}"></icon>
        </view>
        <view class="weui-cell__bd">{{item.name}}</view>
      </label>
    </repeat>
  </checkbox-group>
</template>

<script>
import wepy from 'wepy'
import BackBar from '../components/back_bar'
import Counter from '../components/counter'
import _ from 'lodash'

export default class Car extends wepy.page {
  // 声明组件，分配组件id为backbar
  components = {
    backbar: BackBar,
    counter: Counter
  }
  config = {
    navigationBarTitleText: '测试商城购物车'
  }
  data = {
    isDebuging: false,
    backUri: 'pages/index',
    itemList: [
      {
        checked: false,
        count: 1,
        g_id: 20,
        imageUri: 'test.png',
        name: '进口猫屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎',
        price: 189,
        currentPrice: 188,
        doubleDiscount: [
          {
            count: 102,
            func: n => n * 0.9
          },
          {
            count: 11,
            func: n => n * 0.88
          }
        ]
      },
      {
        checked: true,
        count: 1,
        g_id: 10,
        imageUri: 'test.png',
        name: '1进口猫屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎屎',
        price: 289,
        currentPrice: 288,
        doubleDiscount: [
          {
            count: 10,
            func: n => n * 0.9
          },
          {
            count: 11,
            func: n => n * 0.88
          }
        ]
      }
    ],
    editing: false
  }
  methods = {
    checkboxChange (evt) {
      console.log(evt.detail.value)
      // evt.detail.value 是选中的value集合
      for (let i in this.itemList) {
        if (evt.detail.value.indexOf(`${this.itemList[i].g_id}`) > -1 && !this.itemList[i].checked) {
          this.itemList[i].checked = true
        } else if (evt.detail.value.indexOf(`${this.itemList[i].g_id}`) === -1 && this.itemList[i].checked) {
          this.itemList[i].checked = false
        }
      }
    },
    Desort () {
      if (this.itemList[0].index) {
        this.itemList = _.sortBy(this.itemList, [item => 1 / Number.parseInt(item.index)])
      } else if (this.itemList[0].g_id) {
        this.itemList = _.sortBy(this.itemList, [item => 1 / Number.parseInt(item.g_id)])
      }
    }
  }

  onLoad = () => {
    // 排序，统一格式
    // 先对数组本身排序
    if (this.itemList[0].index) {
      this.itemList = _.sortBy(this.itemList, ['index'])
    } else if (this.itemList[0].g_id) {
      this.itemList = _.sortBy(this.itemList, ['g_id'])
    }
    // 排序打折函数
    for (let i in this.itemList) {
      this.itemList[i].doubleDiscount = _.sortBy(this.itemList[i].doubleDiscount, ['count'])
    }
    console.log(this.itemList)
  }
}
</script>
