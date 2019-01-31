import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Friend from './Friend'
import Family from './Family'
import Couple from './Couple'
import Sent from './Sent'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <div className = 'app'>
        <h1>React development has begun!</h1>
        <div className = 'routesContainer'>
          <Route path = '/' component = {Home} />
          <Route path = '/BDO' component = {Nav} />
          <Route path = '/BDO/Friend' component = {Friend} />
          <Route path = '/BDO/Family' component = {Family} />
          <Route path = '/BDO/Couple' component = {Couple} />
          <Route path = '/BDO/Sent' component = {Sent} />

        </div>
      </div>
    </Router>
  )
}

export default App
