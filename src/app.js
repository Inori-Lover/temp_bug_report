import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'

import Index from './pages/index'

class App extends Component {

  config = {
    pages: [
      'pages/posts/index',
    ],
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
