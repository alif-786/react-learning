import React from 'react'

const Button = (props) => {
  return (
    <button className={`outline-1 shadow-md rounded-md bg-${props.color}-600 px-4 py-2`}>{props.title}</button>
  )
}

export default Button