import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <h1>{props.name}</h1>
        <h4>{props.specialization}</h4>
        <h5>{props.gender}</h5>
        <button>View Details</button>
    </div>
  )
}

export default Card
