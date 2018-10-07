import React, { Component } from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import 'react-typist/dist/Typist.css'
import './app.css'

class App extends Component {
  render () {
    return (
      <Router>        
        <div>
          <div className="content">
            <Routes />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
