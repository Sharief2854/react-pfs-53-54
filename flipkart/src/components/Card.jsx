import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className='card'>
        <h1>{props.name}</h1>
        <h4>{props.specialization}</h4>
        <h5>{props.gender}</h5>
        <Link to={`viewDetails/${props.id}`}>
            <button>View Details</button>
        </Link>
    </div>
  )
}

export default Card
