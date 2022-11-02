import React, { useState } from "react";
// import arr from "./Grid";
import { randomFunction } from "./Random";
let playerArray = []
let participantsDetails = []
let numberOfPlayer = 2
let k = 0
// let tempDiceOutput = 0
let value = 0
let count = 0
let arr1 = []

for (let i = 1; i <= numberOfPlayer; i++) {
  participantsDetails.push({ [`PlayerId`]: i })
  participantsDetails[i - 1]["PlayerValue"] = 0
  playerArray.push(`player ${i}`)
}
console.log(participantsDetails, 'participants array object')
console.log(playerArray, "player list array")

export const AlternateDice = () => {
  const [player, setPlayer] = useState(playerArray[k]);
  const [playerPosition, setPlayerposition] = useState()
  function startfunction() {
      if (player === playerArray[k]) {
        setPlayer(playerArray[k + 1])
        diceCount()
      }
      else {
        setPlayer(playerArray[k])
        diceCount()
      }
    
    console.log(playerArray[playerArray.length - 1])

  }
  function diceCount() {
    if (k === numberOfPlayer) {
      k = 0
    }
    revertingFunction()
    value = randomFunction();
    participantsDetails[k].PlayerValue += value;
    setPlayerposition(participantsDetails[k].PlayerValue)
    arr1.push(participantsDetails[k].PlayerValue)
    if (participantsDetails[k].PlayerValue < 100) {
      k++
      snakesndladderFunction()
    }

    else if (participantsDetails[k].PlayerValue > 100) {
      k++
      participantsDetails[k - 1].PlayerValue = participantsDetails[k - 1].PlayerValue - value;
      snakesndladderFunction()
    }

    else {
      k++
      PositioningFunction()
    }
    console.log(k, "new")
  }

  let coins = ["😃", "💗", "🧑", "👩‍🦰"]
  let snakesFrom = [37, 65, 70, 81]
  let snakesTo = [18, 36, 54, 77]
  let ladderFrom = [9, 25, 41, 74]
  let ladderTo = [30, 44, 62, 95]

  function snakesndladderFunction() {
    if (snakesFrom.includes(participantsDetails[k - 1].PlayerValue)) {
      let s = snakesFrom.indexOf(participantsDetails[k - 1].PlayerValue)
      participantsDetails[k - 1].PlayerValue = snakesTo[s]
      setPlayerposition(participantsDetails[k - 1].PlayerValue)
      arr1[arr1.length - 1] = snakesTo[s]
    }
    else if (ladderFrom.includes(participantsDetails[k - 1].PlayerValue)) {
      let l = ladderFrom.indexOf(participantsDetails[k - 1].PlayerValue)
      participantsDetails[k - 1].PlayerValue = ladderTo[l]
      setPlayerposition(participantsDetails[k - 1].PlayerValue)
      arr1[arr1.length - 1] = ladderTo[l]
    }
    else {
      PositioningFunction()
    }
  }

  function PositioningFunction() {
    if (k !== 0) {
      if ((participantsDetails[0].PlayerValue) === (participantsDetails[1].PlayerValue)) {
      }
      else {
      }
    }
    else {
    }
  }

  function revertingFunction() {
    if ((count > 1)) {
      if ((arr1[arr1.length - 1] < 100) && (arr1[arr1.length - 2] < 100)) {
        let a = arr1[(arr1.length - 2)]
        document.getElementById(`${a}`).innerText = `${a}`
      } else if ((arr1[arr1.length - 1] > 100) || (arr1[arr1.length - 2] > 100)) {
        let a = arr1[(arr1.length - 2)]
        document.getElementById(`${a}`).innerText = `${a}`
        count = 1
      } else if ((arr1[arr1.length - 1] > 100) && (arr1[arr1.length - 2] > 100)) {
        count = 0
      }
    }
    count++
  }

  return (
    <div>
      <h1><div className="hi"></div></h1>
      <div id="hi">
        <button onClick={startfunction}><h2>DICE</h2></button>
        <h1 id="diceop"></h1>
        <h1 id="p0"></h1>
        <h1 id="p1"></h1>
        <h1 id="p2"></h1>
        <h1 id="p3"></h1>
      </div>
    </div>
  );
};

export default AlternateDice;