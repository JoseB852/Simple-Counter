import React from 'react'

export const Counter = (props) => {

  return (
    <div className='bigCounter'>
     
      <div className="numeros">{props.segundos}</div>
     
    
       
    </div>
  )
}

export default Counter