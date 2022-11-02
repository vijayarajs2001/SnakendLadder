import React, { useState } from "react";
import { randomFunction } from "./Random";
import Propss from "./Propss";
import numberOfPlayers from "./FinalUserInput";
import "./Finalcss.css"
let winner = ""
let participantsDetails = []
let playerArray = []
// let numberOfPlayers = 6
let diceOutput = 0
let k = 0
let count = -1
let ref = {}
let emptobj = {}
let coins = ["😃", "💗", "🧑", "👩‍🦰", "🤦‍♀️", "🌹"]

for (let i = 1; i <= numberOfPlayers; i++) {
  participantsDetails.push({ [`PlayerId`]: `Player ${i}` })
  participantsDetails[i - 1]["PlayerValue"] = 0
  participantsDetails[i - 1]["icon"] = coins[i - 1]
  playerArray.push(`player ${i}`)
  ref[`Player ${i}`] = 0
}
export const FinalApp = () => {
  console.log("LKJDLKJDKLJDLKJD", playerArray)
  console.log("LKJDLKJDKLJDLKJD", participantsDetails)

  function turnCondition() {
    if (k === numberOfPlayers) {
      console.log("conditional if", k)
      k = 0
    }
  }
  if (count === numberOfPlayers) {
    count = 0
  }

  turnCondition()

  const [playerturn, setPlayerturn] = useState('Player 1');
  const [playerPosition, setPlayerposition] = useState(participantsDetails[1].PlayerValue);
  const [lop, setLop] = useState(ref)
  const [finalwinner, setFinalwinner] = useState('visible');
  // setPlayerposition(playerPosition =>({
  //   ...playerPosition
  // }))

  // const [random, setRandom] = useState(0)

  let snakesFrom = [37, 65, 70, 81];
  let snakesTo = [18, 36, 54, 77];
  let ladderFrom = [9, 25, 41, 74];
  let ladderTo = [30, 44, 62, 95];

  let arr = []
  for (let i = 100; i >= 1; i -= 10) {
    if (i % 20 === 0) {
      for (let j = i; j > (i - 10); j--) {
        obstaclesfunction(j)
      }
    }

    else {
      for (let j = (i - 9); j <= i; j++) {
        obstaclesfunction(j)
      }
    }
  }

  function obstaclesfunction(x) {

    if (ladderFrom.includes(x)) {
      arr.push({ id: x, ladder: '🐱‍🏍' })
    }
    else if (snakesFrom.includes(x)) {
      arr.push({ id: x, snake: '🐍' })
    }
    else {
      arr.push({ id: x, ladder: 'empt', snake: 'empt' })
    }
  }

  function turnFunction() {
    // console.log(playerturn)
    if (playerturn === participantsDetails[k].PlayerId) {
      positioningFunction()
      if (k < numberOfPlayers - 1) {
        setPlayerturn(participantsDetails[k + 1].PlayerId)
      } else {
        turnCondition()
        setPlayerturn(participantsDetails[k].PlayerId)
      }
    }

    else {
      if (k > numberOfPlayers - 1) {
        turnCondition()
        setPlayerturn(participantsDetails[k].PlayerId)
      } else {
        setPlayerturn(participantsDetails[k + 1].PlayerId)
      }
      positioningFunction()
    }
    console.log(participantsDetails)
    k++
    count++
  }

  function positioningFunction() {
    emptobj = ref
    let tempplayerposition = participantsDetails[k].PlayerValue
    diceOutput = randomFunction()
    participantsDetails[k].PlayerValue += diceOutput
    // let empObj = { PlayerValue: diceOutput }
    // setPlayerposition(playerPosition => ({ ...playerPosition,...ref}))
    setPlayerposition(participantsDetails[k].PlayerValue)

    if (participantsDetails[k].PlayerValue < 100) {

      if (ladderFrom.includes(participantsDetails[k].PlayerValue)) {
        participantsDetails[k].PlayerValue = (ladderTo[ladderFrom.indexOf(participantsDetails[k].PlayerValue)]);
        setPlayerposition(participantsDetails[k].PlayerValue);
      }
      else if (snakesFrom.includes(participantsDetails[k].PlayerValue)) {
        participantsDetails[k].PlayerValue = (snakesTo[snakesFrom.indexOf(participantsDetails[k].PlayerValue)]);
        setPlayerposition(participantsDetails[k].PlayerValue);
      }

      else {
        setPlayerposition(participantsDetails[k].PlayerValue);
      }

    }

    else if (participantsDetails[k].PlayerValue === 100) {
      alert(`${participantsDetails[k].PlayerId} is winner`)
      setFinalwinner('invisible')
      setPlayerposition(tempplayerposition)
    }

    else {
      console.log("hi")
      participantsDetails[k].PlayerValue = tempplayerposition
      setPlayerposition(tempplayerposition)
    }
    // setRandom(randomFunction())
    console.log(playerPosition, 'klklk')
    ref[participantsDetails[k].PlayerId] = Number(participantsDetails[k].PlayerValue)
    console.log(ref, "need")
    setLop(lop => ({ ...lop, ...emptobj }))
  }

  // let duplicateCheck = []
  // function remDup(arrjkl) {
  //   let ref = []
  //   for (let h of arrjkl) {
  //     if (!(ref.includes(h))) {
  //       ref.push(h)
  //     }
  //   }
  //   return ref
  // }
  // function EMojiProp(props) {
  //   <div>{props.elem}</div>
  // }
  // let countert = -1
  // let gh = ""
  // let erf = []
  // let playerssvalue = []
  // let emojiarray = []
  function playerpositionprops(x) {
    let emotarray = []
    if (count >= 0) {
      // for (let i = 0; i < numberOfPlayers; i++) {
      for (let j in lop) {
        if (x.toString() === lop[j].toString()) {
          // if (playerssvalue.includes(participantsDetails[i].PlayerValue)) {
          //   return [emojiarray[playerssvalue.indexOf(participantsDetails[i].PlayerValue)]]
          // }
          // else {
          emotarray.push(<h3>{j}</h3>)
          // }
          // emojiarray.push[coins[i]]
          // erf.push(<div><p>{coins[i]}</p></div>)
          // console.log(erf, 'ghjk')
          // return (coins[i])
        }

        // let ref = React.createElement('div',{},coins[i])
        // return ref
        // let refcount =0
        // for(let g of participantsDetails){

        //   if(g.PlayerValue===x){
        //     if(fghj.includes(g.PlayerValue)){
        //       refcount++
        //     }
        //     fghj.push(g.PlayerValue)
        //   }
      }
      // let coinstr = ["😃", "💗", "🧑", "👩‍🦰", "🤦‍♀️", "🌹"]
      // console.log("CURRENT COUNTERT",count)
      // gh+=" "
      // return fghj.map(e => <div><EMojiProp elem={e} />{gh+counter}</div>)   
      // // return fghj
      return emotarray
    }
  }

  function restartFunction() {
    window.location.reload(false)
  }

  return (
    <div>
      <div className="obstacles"></div>
      <div>
        <div className="main">
          <header><div><img src="link" alt="" className="image" /></div>
            <h1 className="title">Snake n Ladder</h1>
            <div>
              <h4>{winner}</h4>
              <button onClick={turnFunction} id="display" className={finalwinner}>DICE</button>
            </div>
            <br />
            <h4 className="playerpositionid">NEXT-TURN : {playerturn}</h4>
            <h4 className="playerpositionid"> Player Position : {playerPosition}</h4>
            <h4 className="diceOutputid"> Dice Output : {diceOutput} </h4>
            <button onClick={restartFunction} className="restart" > RESTART</button>
          </header>
          <div className="gameboard">
            <div className="tileGrid">{arr.map(empt => <div className="table" id={empt.toString()}>
              {/* {playerpositionprops(empt.id).map(em => <EMojiProp elem ={em} />)} */}
              {/* {playerpositionprops(empt.id,coins[count])} */}
              <Propss
                key={empt}
                celldata={empt.id}
                playerPosition={playerpositionprops(empt.id)}
                snake={empt.snake === "🐍" ? empt.snake : " "}
                ladder={empt.ladder === "🐱‍🏍" ? empt.ladder : " "}
                

              />
            </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}



export default FinalApp;













// `${participantsDetails[k].PlayerValue}` === (empt.id).toString() ? coins[k] : " "