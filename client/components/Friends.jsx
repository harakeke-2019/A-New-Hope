import React from 'react'
import {Link} from 'react-router-dom'

const Friend = () => {
  return (
    <div className="content">
      <h1>This your day with the homies</h1>
      <div className = 'lists'>
        <li className = 'list'> LOCATION: The park.</li>
        <li className = 'list'>EAT AND DRINK: bangers on the barbeque in some fresh thick white bread, sorry vegans!, some fresh raro on the rocks.</li>
        <li className = 'list'>
        ACTIVITY: Touch football, bring some running shoes and sunscreen.</li>
        <br></br>
      </div>
      <div className = 'btn'><Link to = '/Sent'>Send</Link></div>

    </div>
  )
}

export default Friend
