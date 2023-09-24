import React, { Component } from 'react'
import ThemeContext from './theme-context'
export class HomeProduct extends Component {
  render() {
    console.log(this.context)
    //const {color} = this.context
    return (
      <div>HomeProduct :</div>
    )
  }
}
HomeProduct.contextType = ThemeContext
export default HomeProduct