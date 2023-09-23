import React, { Component } from 'react'
import NavBar from './nav-bar'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <button>按钮</button>
          <div>标题</div>
          <i>文本</i>
        </NavBar>
      </div>
    )
  }
}

export default App