import React from 'react'
import {Link} from 'react-router-dom'
import data from '../../data'

const activities = data.lovers.activity
const food = data.lovers.food
const place = data.lovers.where

const Lovers = () => {
  return (
    <div className="content">
      <div className = 'list'>
        <ul>
          <li>
            Today your activity is: {activities[1]}
          </li>
          <li>
            You can eat: {food[1]}
          </li>
          <li>
            at the best place in the world : {place[0]}
          </li>
        </ul>
      </div>
      <Link to = '/Sent'>Send</Link>
    </div>
  )
}

export default Lovers
