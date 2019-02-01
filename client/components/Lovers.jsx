import React from 'react'
import {Link} from 'react-router-dom'
import data from '../../data'

const activities = data.lovers.activity
const food = data.lovers.food
const place = data.lovers.where

const Lovers = () => {
  return (
    <div className="content">
      <div className = 'lists'>
        <h1>Lovers</h1>
        <ul>
          {activities.map(activity => {
            return (
              <li key={activity}>
                {activity}
              </li>
            )
          })}
        </ul>
        <ul>
          {food.map(food => {
            return (
              <li key={food}>
                {food}
              </li>
            )
          })}
        </ul>
        <ul>
          {place.map(where => {
            return (
              <li key={where}>
                {where}
              </li>
            )
          })}
        </ul>
      </div>
      <Link to = '/Sent'>Send</Link>
    </div>
  )
}

export default Lovers
