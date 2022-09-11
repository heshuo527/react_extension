import React, { Component } from 'react'

export default class Deom extends Component {

  state = {
    count: 0
  }

  addCount = () => {
    //对象式的setState
    // const {count} = this.state
    //setState可以接收一个可选择的参数回调
   /*  this.setState({
      count: count + 1
    }, () => {
      console.log(this.state.count);
    }) */
    //函数式的setState
    this.setState((state) => ({count: state.count + 1}))
  }

  render() {
    return (
      <div>
        <h1>当前求和为: {this.state.count}</h1>
        <button onClick={this.addCount}>点我+1</button>
      </div>
    )
  }
}
