import React, { useState } from 'react'
import Propss from './Propss';
import './Gridmain.css'
// import emptyArray from './GameData';

let winner = ""
// import ladder from './assets/Rope_Ladder_PNG_Image__Wood_Rope_Ladder_Decoration_Illustration__Wood__Wood_Ladder_Illustration__Creative_Rope_Ladder_Illustration_PNG_Image_For_Free_Download-removebg-preview (1).png'
const App = () => {


    const [playerturn, setPlayerturn] = useState("player1")
    const [playeroneposition, setPlayeroneposition] = useState(1)
    // const [playertwoposition, setPlayertwoposition] = useState(1)
    const [finalwinner, setFinalwinner] = useState('visible')


    let emptyArray = []
    for (let i = 100; i >= 1; i -= 10) {
        if (i % 20 === 0) {
            for (let j = i; j > (i - 10); j--) {
                if ((j === 4) || (j === 8) || (j === 21) || (j === 55) || (j === 78)) {
                    emptyArray.push({ id: `${j}`, ladder: "🧬" })
                }
                else if ((j === 31) || (j === 48) || (j === 63) || (j === 88) || (j === 96)) {
                    emptyArray.push({ id: `${j}`, snake: "🐍" })
                }
                else {
                    emptyArray.push({ id: `${j}`, snake: 'no', ladder: 'no' })
                }
            }
        }
        else {
            for (let j = (i - 9); j <= i; j++) {
                if ((j === 4) || (j === 8) || (j === 21) || (j === 55) || (j === 78)) {
                    emptyArray.push({ id: `${j}`, ladder: "🧬" })
                }
                else if ((j === 31) || (j === 48) || (j === 63) || (j === 88) || (j === 96)) {
                    emptyArray.push({ id: `${j}`, snake: "🐍" })
                }
                else {
                    emptyArray.push({ id: `${j}`, snake: 'no', ladder: 'no' })
                }

            }
        }
    }
    console.log(emptyArray)
    let fromLadder = [4, 8, 21, 55, 78]
    let toLadder = [24, 32, 50, 71, 97]
    let fromSnake = [31, 48, 63, 88, 96]
    let toSnake = [15, 36, 20, 6, 10]


    function playerchoose() {
        let randomValue = (Math.floor(Math.random() * 6) + 1)
        if (playerturn === "player1") {

            if ((playeroneposition + randomValue) <= 100) {
                setPlayeroneposition(playeroneposition + randomValue)
                // console.log("a", playeroneposition + randomValue)
                if (fromLadder.includes(playeroneposition + randomValue)) {
                    setPlayeroneposition(toLadder[fromLadder.indexOf(playeroneposition + randomValue)])
                    // console.log("bvalue", toLadder[fromLadder.indexOf(playeroneposition + randomValue)])
                }
                else if (fromSnake.includes(playeroneposition + randomValue)) {
                    setPlayeroneposition(toSnake[fromSnake.indexOf(playeroneposition + randomValue)])
                    // console.log("cvalue", toSnake[fromSnake.indexOf(playeroneposition + randomValue)])
                }
                else if ((playeroneposition + randomValue) === 100) {
                    winner += "Player 1 is the winner"
                    // console.log("player1 is the winner")
                    setFinalwinner('invisible')
                }
                else {
                    setPlayeroneposition(playeroneposition + randomValue)
                    // console.log("dvalue", playeroneposition + randomValue)
                }

            }


            // setPlayerturn("player2")

        }
        // else {
        //     setPlayerturn("player1")

        //     if ((playertwoposition + randomValue) <= 100) {
        //         setPlayertwoposition(playertwoposition + randomValue)
        //         // console.log("a2", playertwoposition + randomValue)
        //         if (fromLadder.includes(playertwoposition + randomValue)) {
        //             setPlayertwoposition(toLadder[fromLadder.indexOf(playertwoposition + randomValue)])
        //             // console.log("b2value", toLadder[fromLadder.indexOf(playertwoposition + randomValue)])
        //         }
        //         else if (fromSnake.includes(playertwoposition + randomValue)) {
        //             setPlayertwoposition(toSnake[fromSnake.indexOf(playertwoposition + randomValue)])
        //             // console.log("c2value", toSnake[fromSnake.indexOf(playertwoposition + randomValue)])
        //         }
        //         else if ((playertwoposition + randomValue) === 100) {
        //             winner += 'Player 2 is the winner'
        //             // console.log("player2 is the winner")
        //             setFinalwinner('invisible')
        //         }
        //         else {
        //             setPlayertwoposition(playertwoposition + randomValue)
        //             // console.log("d2value", playertwoposition + randomValue)
        //         }
        //     }

        // }
    }
    function restart() {
        window.location.reload(false)
    }

    return (
        <div>
            <div classname="ladderchange">
                {/* <img src={ladder} alt="" id='ladderss1'/> */}
            </div>


            <div>
                <div className='main' img="https://www.theappguruz.com/app/uploads/2018/07/b_oxBcejHXCYiElUNiFisnCRRyZYB0TUhVZyIbiPOqq0HLXddLSXia4vhyhM1spPGco=w720-h310.jpg">
                    <header><div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqYLXg93xNJ7yt69J26BfqY8lYQd4UzjvzQ&usqp=CAU" alt="" className='image' />
                    </div>
                        <h1 className='heading'>🎲SNAKE LADDER GAME🐍</h1>
                        <div>
                            <h4>{winner}</h4>
                            <button onClick={playerchoose} id="display" className={finalwinner}>START</button>
                        </div>
                        <br />
                        <button className="playeroneid">Player One Position🔷: {playeroneposition}</button>
                        <br />
                        {/* <button className="playertwoid" >Player Two Position💠 : {playertwoposition}</button> */}
                        <button onClick={restart} className="restart">Restart</button>

                    </header>
                    <div className='grid'>{emptyArray.map(no => <div className=" gridtable" id={no}>
                        <Propss
                            celldata={no.id}
                            snake={no.snake === "🐍" ? no.snake : " "}
                            ladder={no.ladder === "🧬" ? no.ladder : " "}
                            playerone1position={`${playeroneposition}` === no.id ? "🔷" : " "}
                            // playertwo2position={`${playertwoposition}` === no.id ? "💠" : " "}
                        /></div>)}
                    </div>
                </div>

            </div>

        </div>
    )

}
export default App;


