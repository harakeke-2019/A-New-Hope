import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className = 'welcome'>
      <div className="home">
    Big Day Out-ify
      </div>
      <div className = 'enter'>
        <Link to = '/BDO'>Get Started</Link></div>

    </div>
  )
}

export default Home
