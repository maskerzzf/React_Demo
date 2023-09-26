import React, { Component } from 'react'
import HomeBanner from './HomeBanner'
import Home from './Home'
import eventBus from './event-bus'
export class App extends Component {
  constructor(){
    super()
    this.state={
        name:'',
        age:''
    }
  }  
  componentDidMount(){
    // eventBus.on('bannerPrev',(age,name)=>{
    //     console.log("event",name,age)
    //     this.setState({
    //         name,
    //         age
    //     })
    // })
    eventBus.on('bannerPrev',this.bannerPrevClick,this)
  } 
  componentWillUnmount(){
    eventBus.off('bannerPrev',this.bannerPrevClick,this)
  }
  bannerPrevClick(age,name){
    console.log("event",name,age)
    this.setState({
        name,age
    })
  } 
  render() {
    const {name,age} = this.state
    return (
      <div>
         {name},{age}
        <Home></Home>
      </div>
    )
  }
}

export default App
