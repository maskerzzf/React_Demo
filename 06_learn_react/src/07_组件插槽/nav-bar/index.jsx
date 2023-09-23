import React, { Component } from 'react'
import '../nav-bar/style.css'
export class NavBar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {children} = this.props
    return (
      <div className='nav-bar'>
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}

export default NavBar
