import React, { Component } from 'react'

export class MainBanner extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {banners,title} = this.props
    return (
      <div>
        <div>{title}</div>
        <ul>
          {
            banners.map((item,index)=>{
              return (<li key={index}>{item}</li>)
            })
          }
        </ul>
      </div>
      
    )
  }
}

export default MainBanner