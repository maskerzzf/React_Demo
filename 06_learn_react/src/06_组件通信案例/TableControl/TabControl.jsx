import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
export class TableControl extends Component {
    constructor(props) {
        super(props)
        this.state={
            currentIndex:0
        }
    }
    static propTypes = {
        titles:PropTypes.array,
        selectTitle:PropTypes.func
    }
    chooseTitle(title,index){
        this.props.selectTitle(title)
        this.setState({
            currentIndex:index
        })
    }
    render() {
        const {currentIndex} = this.state
        const {titles} = this.props
        return (
            <div className='tab-control'>
                {
                    titles.map((title,index)=>{
                        return (
                            <div key={index} onClick={()=>{this.chooseTitle(title,index)}} className={`item ${index === currentIndex?'active':'' }` }>
                                <span className={index === currentIndex?'text':'' }>{title}</span> 
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default TableControl