import React from 'react'
import {Link} from 'react-router-dom'

const Lovers = () => {
  return (
    <div>
      <h1>This is the Lovers page</h1>
      <li className = 'list'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit deleniti incidunt nobis repudiandae quo, corrupti eligendi cupiditate ab asperiores? Quisquam maiores nobis culpa cumque explicabo, asperiores repellat sequi officia.</li>
      <li className = 'list'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit deleniti incidunt nobis repudiandae quo, corrupti eligendi cupiditate ab asperiores? Quisquam maiores nobis culpa cumque explicabo, asperiores repellat sequi officia.</li>
      <li className = 'list'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit deleniti incidunt nobis repudiandae quo, corrupti eligendi cupiditate ab asperiores? Quisquam maiores nobis culpa cumque explicabo, asperiores repellat sequi officia.</li>
      <br></br>
      <Link to = '/Sent'>Send</Link>

    </div>
  )
}

export default Lovers
