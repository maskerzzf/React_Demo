import React, { Component } from 'react'
import eventBus from './event-bus'
export class HomeBanner extends Component {
    constructor(){
        super()
        
    }
    prevClick(){
        console.log("prevClick")
        eventBus.emit('bannerPrev',10,'zzf')
    }
    nextClick(){
        console.log("nextClick")
        eventBus.emit('bannerNext')
    }
    render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={()=>{ this.prevClick()}}>上一个</button>
        <button onClick={()=>{this.nextClick()}}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner