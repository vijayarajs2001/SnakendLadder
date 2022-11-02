// import React, { useState } from 'react'

// const VijayLearn = () => {
//     const [num,setNum] = useState(0)
// function fgh(){
//     setNum(num+1)
//     console.log(`This is incremented value in console ${num}`)
// }
//   return (
//     <div>
//         <button onClick={fgh}>Click here to increment</button>
//         <h1>{num}</h1>
//     </div>
//   )
// }

// export default VijayLearn





import React from 'react'
import './Make.css'
//props here
const VijayLearn = () => {
    function Dfg(props){
        return (
            <div>
                <h1>{props.value}</h1>
            </div>
        )
    }
    let ref = [1,2,3,4,5,6]
  return (
    <div>
        <div className='grid'>
            {ref.map(e => <div className='jkl'><Dfg value = {e} /></div> )}
        </div>
    </div>
  )
}

export default VijayLearn