import React from "react"
class Hello extends React.Component{
    constructor(){
        super()
        this.state={
            msg:"hi,react"
        }
    }

    render(){
        const {msg} = this.state
        return (
            <div>{msg}</div>
        )
    }
}
export default Hello