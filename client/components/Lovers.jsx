import React from 'react'

import data from '../../data'

const activities = data.lovers.activity
const food = data.lovers.food
const place = data.lovers.where

const Lovers = () => {
  return (
    <div>
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
  )
}

export default Lovers
