import React from 'react'

const Gsd = () => {
    function OnbtnClick(elem){
        let ref = elem.currentTarget.id
        ref.id()
    }
  return (
    <div>
        <div>
            <button id='ghjk' onClick={OnbtnClick}>Click Here</button>
        </div>
    </div>
  )
}

export default Gsd