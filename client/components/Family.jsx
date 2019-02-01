import React from 'react'
import {Link} from 'react-router-dom'
import themeData from '../../data'

const themes = Object.keys(themeData)

const Family = () => {
  return (
    <div className="content">
      <h1>This is the Family page</h1>
      <div className = 'list'>
        <ul>
          {themes.map((theme, themekey) => {
            const list = <li key = {themekey}>{theme}</li>
            return list
          })}
        </ul>
      </div>
      <Link to = '/Sent'>Send</Link>

    </div>
  )
}

export default Family
