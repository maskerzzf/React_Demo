import React, { Component } from 'react'
import AddCounter from './AddCounter'
export class App extends Component {
    constructor() {
        super()
        this.state = {
            counter: 100
        }
    }
    changeCounter(num) {
        const newCounter = this.state.counter
        this.setState({
            counter: newCounter + num
        })
    }
    render() {
        let { counter } = this.state
        return (
            <div>当前计数：{counter}
                <AddCounter addClick={(num) => {
                    console.log('addClick: ' + num)
                    this.changeCounter(num)
                }} />
            </div>

        )
    }
}

export default App