import React, { Component } from 'react'
import HomeProduct from './HomeProduct'
export class Home extends Component {
  render() {
    const {name,age} = this.props
    return (
      <div>Home: {name}--{age}
      <HomeProduct/>
      </div>
    )
  }
}

export default Home