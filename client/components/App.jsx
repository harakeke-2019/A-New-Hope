import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Friends from './Friends'
import Family from './Family'
import Lovers from './Lovers'

const App = () => {
  return (
    <Router>
      <div className = 'app'>
        <div className = 'routesContainer'>
          <Route exact path = '/BDO/Friends' component = {Friends} />
          <Route exact path = '/BDO/Family' component = {Family} />
          <Route exact path = '/BDO/Couple' component = {Lovers} />
        </div>
      </div>
    </Router>
  )
}

export default App
