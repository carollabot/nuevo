import React from 'react'
import "./Button.css";

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} className='btn'>{props.text}</button>
    </div>

  )
}

export default Button