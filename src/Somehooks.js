import React, { useState } from 'react'



// const [vijay,setVijay] = useState(0)



const Somehooks = () => {
    const [vijay,setVijay] = useState(0)
    function ref(){
    setVijay(vijay+1)
    console.log(vijay)
}

  return (
    <div>
        <div>
            <h1>fdgdfg</h1>
            <button className='vijayButton' onClick={ref}></button>
        </div>
    </div>
    
  )
}

export default Somehooks