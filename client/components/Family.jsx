import React from 'react'
import {Link} from 'react-router-dom'
import themeData from '../../data'

const themes = Object.keys(themeData)

const Family = () => {
  return (
    <div className="content">
      <h1>This is the Family page</h1>
      <li className = 'list'> LOCATION: The beach.</li>
      <li className = 'list'>EAT AND DRINK: take a chillibin thats Aotearoaean for the Ozzie version of an eski. Make sure you have lots of water, chicken from last night in some fresh buns from the supermarket and some Ice cream to make it Rachel Hunter summer. </li>
      <li className = 'list'>
        ACTIVITY: Swimming, take a big towel, sunscreen and stay between the flags.</li>

      <div className = 'btn'><Link to = '/Sent'>Send</Link></div>

    </div>
  )
}

export default Family
