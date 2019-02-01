import React from 'react'
import {Link} from 'react-router-dom'

const Friend = () => {
  return (
    <div className="content">
      <h1>This is the friend page</h1>
      <div className = 'lists'>
        <li className = 'list'> LOCATION: The park.</li>
        <li className = 'list'>EAT AND DRINK: bangers on the barbeque in some fresh thick white bread, sorry vegans!, some fresh raro on the rocks.</li>
        <li className = 'list'>
        .</li>
        <br></br>
      </div>
      <Link to = '/Sent'>Send</Link>

    </div>
  )
}

export default Friend
