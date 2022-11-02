import React, { useState } from 'react'
import FinalApp from './FinalApp'
let numberOfPlayers = 0
export default function FinalUserInput() {
    const [numOfPlayers, setNumOfPlayer] = useState();
    const [startGame, setStartGame] = useState();
    function inputFunction() {
        if (numOfPlayers <= 6) {
            numberOfPlayers = Number(numOfPlayers)
        } else {
            setNumOfPlayer("Enter maximum 6 players")
        }
        setStartGame(true)
        // return numberOfPlayers

    }
    return (
        <div>
            <input type="number" onChange={(e) => { setNumOfPlayer(e.target.value) }} click Here />
            <button onClick={inputFunction} > Submit </button>
            {startGame ? <FinalApp /> : null}
        </div>
    )
}
export {numberOfPlayers};