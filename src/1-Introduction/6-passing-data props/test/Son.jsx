import React from 'react'

export default function Son(props) {
  return (
      <div >
      <p>{props.surname}</p>
      <p>{props.age}</p>
      <p>{props.nation}</p>
      <p>{props.city}</p>
      <p>{props.children}</p>
      </div>
  )
}
