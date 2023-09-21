import React, { Component } from 'react'
import TabControl from './TableControl/TabControl'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            titles: ['热门', '流行', '精选'],
            title:''
        }
    }
    selectTitle(title){
        const newTitle = title
        this.setState({
            title:newTitle
        })
    }
    render() {
        const {titles,title} = this.state
        return (
            <div>
                <TabControl titles={titles} selectTitle={(title)=>{this.selectTitle(title)}}></TabControl>
                {title}
            </div>
        )
    }
}

export default App