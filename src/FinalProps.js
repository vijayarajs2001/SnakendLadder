import React from 'react'

const FinalProps = ({ celldata, snake, ladder, playerPosition, winner }) => {
    return (
        <div>
            <span>{celldata}</span>
            <div>
                <span>{snake}</span>
                <span>{ladder}</span>
                <span>{playerPosition}</span>
                <span>{winner}</span>
            </div>
        </div>
    )
}

export default FinalProps;