import React, { Component } from 'react'
import ThemeContext from './theme-context'
export class HomeProduct extends Component {
  render() {
    console.log(this.context.color)
    //const {color} = this.context
    return (
      <div>HomeProduct :{this.context.color}</div>
    )
  }
}
HomeProduct.contextType = ThemeContext
export default HomeProduct