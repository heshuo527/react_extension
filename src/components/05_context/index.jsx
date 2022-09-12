import React, { Component } from 'react'
import './index.css'

//创建context对象
const myContext = React.createContext()
//类式就用第一个Provider  函数时组件就用第二个Consumer
const {Provider, Consumer} = myContext

export default class A extends Component {

    state = {
        useName: '吴彦祖',
        age: '30'
    }

  render() {
      const {useName, age} = this.state
      console.log('A组件', useName);
    return (
      <div className='a'>
          <h3>我是A组件</h3>
          <h4>我的用户名:{useName}</h4>
          <h4>我的年龄是：{age}</h4>
          <Provider value={{useName, age}}>
              <B/>
          </Provider>
      </div>
    )
  }
}
class B extends Component {
  render() {
    return (
      <div className='b'>
          <h3>我是B组件</h3>
          <h4>我从A组件接收到的用户名:</h4>
          <C/>
      </div>
    )
  } 
}

/*类式组件
 class C extends Component {

    static contextType = myContext

  render() {

      const {useName, age} = this.context
      console.log(useName)

    return (
      <div className='c'>
          <h3>我是C组件</h3>
          <h4>我从A组件接收到的用户名:{useName}</h4>
          <h4>年龄是:{age}</h4>
      </div>
    )
  }
} */

//函数式组件
function C() {
    return(
        <div className='c'>
            <h3>我是函数式c组件</h3>
            <h4>我接收到的参数是：
                <Consumer>
                    {value => `${value.useName} ${value.age}`}
                </Consumer>
            </h4>
        </div>
    )
}
