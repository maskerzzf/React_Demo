import React from "react";
class HelloWorld extends React.Component {
    //1.实例化
    constructor() {
        super()
        console.log('构造方法执行')
        this.state = {
            msg: 'hi'
        }
    }
    changeText(event){
        console.log('文本更新')
        this.setState({
            msg:'hello'
        })
    }
    //2.组件被渲染
    render() {
        console.log('render执行')
        const { msg } = this.state
        return (
        <div>
            hello,world
            <div>{msg}</div>
            <button onClick={(e)=>{
                this.changeText(e)
            }} >按钮</button>
        </div>)
    }
    //3.组件被挂载
    componentDidMount() {
        console.log('已经被挂载')
    }
    //4.组件已经更新
    componentDidUpdate(props,state,position){
        console.log(props,state,position)
        console.log('组件已经更新')
    }
    componentWillUnmount(){
        console.log('组件被卸载')
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate')
        return {
            position:100
        }
    }
}
export default HelloWorld