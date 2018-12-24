import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

class Index extends Component {

  constructor () {
    super()

    this.state = {
      waterfall: [
        {
          did: '1'
        } , {
          did: '2'
        }
      ],
    }

    this.TaroRefNodeInStatic = null
    this.TaroRefNodeInMap = null
    this.MyRefNode = null
  }

  config = { }

  componentDidMount = () => {
    this.TaroRefNodeInMap.fields({ size: true }, res => {
      console.groupCollapsed('这里永远是null')
      console.log(res)
      console.groupEnd()
    }).exec()

    this.MyRefNode.fields({ size: true }, res => {
      console.groupCollapsed('这里可以打印')
      console.log(res)
      console.groupEnd()
    }).exec()

    this.TaroRefNodeInStatic.fields({ size: true }, res => {
      console.groupCollapsed('这里也可以打印的样子')
      console.log(res)
      console.groupEnd()
    }).exec()
  }

  getRefInMap = node => {
    if(this.TaroRefNodeInMap) {
      return
    }

    this.TaroRefNodeInMap = node

    const refID = node._selector

    this.MyRefNode = Taro.createSelectorQuery().select(`#${refID}`)
  }

  getRefInStatic = node => {
    this.TaroRefNodeInStatic = node
  }


  render () {
    return (
      <View>
        {
          this.state.waterfall
          .map((val, index) => {
            return (
              <View key={val.did}
                ref={this.getRefInMap}
                className='sample'
              >{index}</View>
            )
          })
        }

        <View key={val.did}
          ref={this.getRefInStatic}
          className='sample'
        >这里好像没问题</View>
      </View>
    )
  }
}

export default Index
