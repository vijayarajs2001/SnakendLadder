

import React from 'react'

const Propss = ( {celldata,snake,ladder, playerPosition, playertwo2position,winner}) => {
  return (
    <div>
        <h1>{celldata}</h1>
        <h1>{snake}</h1>
        <h1>{ladder}</h1>
        <h1>{winner}</h1>
        <p>{playerPosition}</p>
    </div>
  )
} 

export default Propss;