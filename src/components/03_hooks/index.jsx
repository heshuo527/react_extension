import React from 'react'
// import ReactDom from 'react-dom/client'

//类式组件
export default class Hooks extends React.Component {

    state = {
        count: 0
    }

    myRef = React.createRef()


    show = () => {
        alert(this.myRef.current.value)
        console.log(this.myRef.current.value );
    }

    add = () => {
        this.setState( state => ({count:state.count + 1}))
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
    }

  render() {
    return (
      <div>
          <input type="text" ref={this.myRef}/>
          <h1>当前求和为: {this.state.count}</h1>
          <button onClick={this.add}>点我加一</button>
          <button onClick={this.show}>点我提示数据</button>
      </div>
    )
  }
}

//函数式组件
/* function Hooks() {

    const [count, setState] = React.useState(0)

    function add(){
        setState(count + 1)
    }

    React.useEffect(() => {
        let time = setInterval(() => {
            setState(count => count + 1)
        }, 500)
        return () => {
            console.log('###');
            clearInterval(time)
        }
    }, [])


    function unMount () {
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }

    return(
        <div>
            <h1>当前求和为: {count}</h1>
            <button onClick={add}>+1</button>
            <button onClick={unMount}>点我卸载组件</button>
        </div>
    )
}

export default Hooks */
