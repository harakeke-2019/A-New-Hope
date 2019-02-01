import React from 'react'
import {Link} from 'react-router-dom'

const Lovers = () => {
  return (
    <div className="content">
      <div className = 'lists'>
        <h1>This is the Lovers page</h1>
        <li className = 'list'>LOCATION: Today you should get it ON in the room.</li>
        <li className = 'list'>EAT AND DRINK: A plate of fresh bluff oysters with a squirt of lemon.</li>
        <li className = 'list'>ACTIVITY: bow chicka wow wow!!!.</li>
        <br></br>
      </div>
      <div className = 'btn'><Link to = '/Sent'>Send</Link></div>

    </div>
  )
}

export default Lovers
