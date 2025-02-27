import React from 'react'

const Films = (props) => {
  return (
      <div>Films
      <li>Title is { props.title }</li>    
      <li>Description is { props.description }</li>    
      <li>Release is { props.release }</li>    
      
    </div>
  )
}
export default  Films