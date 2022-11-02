import React, { useState } from 'react'


const Refd = () => {
    const [vijay,setVijay] = useState(0)
    function somefunc(){
        setVijay(Math.round(Math.random()*98765))
        document.body.style.backgroundColor='#'+vijay
    }
  return (
    <div>
        <div>
            <button onClick={somefunc}>click here</button>
            <h1>{vijay}</h1>
        </div>
    </div>
  )
}

export default Refd