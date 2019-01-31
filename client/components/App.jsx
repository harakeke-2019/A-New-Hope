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
        <div className = 'routesContainer'>
          <Route exact path = '/' component = {Home} />
          <Route path = '/BDO' component = {Nav} />
          <Route exact path = '/BDO/Friend' component = {Friend} />
          <Route exact path = '/BDO/Family' component = {Family} />
          <Route exact path = '/BDO/Couple' component = {Couple} />
          <Route exact path = '/Sent' component = {Sent} />

        </div>
      </div>
    </Router>
  )
}

export default App
