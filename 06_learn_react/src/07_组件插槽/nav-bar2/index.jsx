import React, { Component } from 'react'

export class NavBar2 extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {leftSlot,rightSlot,centerSlot} = this.props
    return (
      <div>
        <div className="leftSlot">{leftSlot}</div>
        <div className="centerSlot">{centerSlot}</div>
        <div className="rightSlot">{rightSlot}</div>
      </div>
    )
  }
}

export default NavBar2