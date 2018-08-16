import React from 'react'

import './App.css'
import NavBarContainer from './containers/NavBarContainer'
import MainContentContainer from './containers/MainContentContainer'

const testUser = {
  "id": 2,
  "username": "Gabriel",
  "household_id": 1,
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBarContainer/>
        <MainContentContainer user={testUser}/>
      </div>
    )
  }
}

export default App;
