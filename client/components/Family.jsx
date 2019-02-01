import React from 'react'

import data from '../../data'

const activities = data.friend.activity
const food = data.Friend.food
const place = data.Friend.where

const Family = () => {
  return (
    <div>
      <h1>Family</h1>
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

export default Family
