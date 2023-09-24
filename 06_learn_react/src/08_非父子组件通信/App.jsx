import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './theme-context'
export class App extends Component {
  constructor() {
    super()
    this.state = {
      info: {
        name: 'aaa',
        age: 12
      }
    }
  }
  render() {
    const { info } = this.state
    return (
      <div>
        <Home name='zzf' age='10' />
        <ThemeContext.Provider value={{color:'skyblue'}}>
          {/* <Home {...info} /> */}
          <Home/>
        </ThemeContext.Provider>

      </div>
    )
  }
}

export default App