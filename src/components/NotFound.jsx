import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()
    
  return (
    <div>
      <div>
        <h1>404 | page not found</h1>
        <button onClick={()=> navigate('/')}>Go to homepage</button>
      </div>
    </div>
  )
}

export default NotFound
