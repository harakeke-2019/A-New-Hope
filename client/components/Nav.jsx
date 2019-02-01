import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className = 'nav'>
      <div className ="title">
      Big Day Out-ify
      </div>
      <div className = 'menu'>
        <button className = 'friend'><Link to = '/BDO/Friends'>Friend</Link></button>
        <button className = 'romantic'><Link to = '/BDO/Family'>Family</Link></button>
        <button className = 'rainy'><Link to = '/BDO/Lovers'>Couple</Link></button>
      </div>
    </div>
  )
}

export default Nav
