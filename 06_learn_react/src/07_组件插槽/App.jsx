import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBar2 from './nav-bar2'
export class App extends Component {
  render() {
    return (
      <div>
        {/* 使用children 实现插槽 */}
        <NavBar>
          <button>按钮</button>
          <div>标题</div>
          <i>文本</i>
        </NavBar>
        <NavBar2 
          leftSlot={<button>按钮</button>}
          centerSlot={<div>标题</div>}
          rightSlot={<i>文本</i>}
        />
      </div>
    )
  }
}

export default App