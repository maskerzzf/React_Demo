import React, { Component } from 'react'
import Footer from './child_components/Footer'
import Header from './child_components/Header'
import Main from './child_components/Main'

export class App extends Component {
  
  render() {
    
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
}

export default App