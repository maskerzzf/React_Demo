import React from 'react'
import HelloWorld from './HelloWorld'
class App extends React.Component{
    constructor(){
        super()
        this.state={
            isShow:true
        }
    }
    changeShow(){
        const newState = this.state.isShow
        this.setState({
            isShow:!newState
        })
    }

    render(){
        const {isShow} = this.state
        return (<div>App
            <button onClick={()=>{
                this.changeShow()        
            }}>切换</button>
            {isShow&&<HelloWorld/>}
        </div>)
    }
}
export default App