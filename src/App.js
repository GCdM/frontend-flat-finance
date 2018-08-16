import React from 'react'

import './App.css'
import NavBarContainer from './containers/NavBarContainer'
import MainContentContainer from './containers/MainContentContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBarContainer/>
        <MainContentContainer/>
      </div>
    )
  }
}

export default App;
