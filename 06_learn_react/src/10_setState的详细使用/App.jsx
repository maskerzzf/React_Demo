import React, { Component } from 'react'

export class App extends Component {
    constructor(){
        super()
        this.state={
            counter:1,
            msg:"hi"
        }
    }
    changeText(){
        //1.setState是异步的
        // this.setState({
        //     msg:'你好'
        // })
        this.setState((state,props)=>{
            console.log(state,props)
            return {
                msg:'zzf'
            }
        },()=>{
            console.log("---",this.state)
        })
        console.log(this.state)
    }
    increment(){
        this.setState({

        })
    }
  render() {
    const {msg,counter} = this.state
    return (
      <div>
        <h2>msg:{msg}</h2>
        <h2>counter:{counter}</h2>
        <button onClick={()=>{
            this.changeText()
        }}>按钮1</button>
        <button onClick={()=>{
            this.increment()
        }}>
            按钮2
        </button>
      </div>
    )
  }
}

export default App