import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import 'semantic-ui-css/semantic.min.css'
import './app.css'

const App = () => (
  <Router>
    <div>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
