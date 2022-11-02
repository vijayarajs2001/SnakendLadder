import React, { useState } from 'react'

const VijayneveruseState = () => {
    const u = useState(1)
    function iop(){
        console.log(u)
    }

  return (
    <div>
        <div>
            <button onClick={iop}>click here</button>
        </div>
    </div>
  )
}

export default VijayneveruseState