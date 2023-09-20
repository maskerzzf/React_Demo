import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class AddCounter extends Component {
    constructor(props){
        super(props)
    }
    static propTypes={
        addClick:PropTypes.func
    }
    add(num){
        this.props.addClick(num)
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.add(3)}}>+3</button>
                <button onClick={()=>{this.add(5)}}>+5</button>
                <button onClick={()=>{this.add(10)}}>+10</button>
            </div>
        )
    }
}

export default AddCounter