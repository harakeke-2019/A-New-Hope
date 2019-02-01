import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Friends from './Friends'
import Family from './Family'
import Lovers from './Lovers'
import Sent from './Sent'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <div className = 'app'>
        <div className = 'routesContainer'>
          <Route exact path = '/' component = {Home} />
          <Route path = '/BDO' component = {Nav} />
          <Route exact path = '/BDO/Friends' component = {Friends} />
          <Route exact path = '/BDO/Family' component = {Family} />
          <Route exact path = '/BDO/Lovers' component = {Lovers} />
          <Route exact path = '/Sent' component = {Sent} />
        </div>
      </div>
    </Router>
  )
}

export default App
