import React, { useState } from "react";
import "./Grid.css";
// let playerArray = [];
let participantsDetails = []
// let numberOfPlayer = 2
let coins = ["😃", "💗"]
let k = 0;

const snakeandladder = [
  {
    snakes: {
      snakesfrom: [37, 65, 70, 81],
      snakesto: [18, 36, 54, 77],
    },
    ladders: {
      ladderfrom: [9, 25, 41, 74],
      laddersto: [30, 44, 62, 95],
    },
  },
];

// for (let i = 1; i <= numberOfPlayer; i++) {
//   participantsDetails.push({ [`PlayerId`]: i })
//   participantsDetails[i - 1]["PlayerValue"] = 0
//   playerArray.push(`player ${i}`)
// }
// console.log(participantsDetails, 'participants array object')
// console.log(playerArray, "player list array")


const Grid2 = () => {
  const [playerName, setPlayerName] = useState("player1");
  if (playerName === "player1") {
    setPlayerName("player2");

  }
  else{
    setPlayerName("player1")
  }

  const [position, setPosition] = useState(1);
  participantsDetails[k].PlayerValue = position;
  let arr = [];
  for (let i = 100; i >= 1; i -= 10) {
    if (i % 20 === 0) {
      for (let j = i; j > i - 10; j--) {
        arr.push(j);
      }
    } else {
      for (let j = i - 9; j <= i; j++) {
        arr.push(j);
      }
    }
  }

  function randomGen() {
    return Math.ceil(Math.random() * 6);
  }
  function onbtnClick() {
    participantsDetails[k].PlayerValue += randomGen();
    if (participantsDetails[k].PlayerValue < 100) {
      if (snakeandladder[0].snakes.snakesfrom.includes(participantsDetails[k].PlayerValue)) {
        setPosition(
          snakeandladder[0].snakes.snakesto[
            snakeandladder[0].snakes.snakesfrom.indexOf(participantsDetails[k].PlayerValue)
          ]
        );
        console.log(`Snake bite at ${participantsDetails[k].PlayerValue}`);
      } else if (snakeandladder[0].ladders.ladderfrom.includes(participantsDetails[k].PlayerValue)) {
        setPosition(
          snakeandladder[0].ladders.laddersto[
            snakeandladder[0].ladders.ladderfrom.indexOf(participantsDetails[k].PlayerValue)
          ]
        );
        console.log(`Ladder up at ${participantsDetails[k].PlayerValue}`);
      } else {
        setPosition(participantsDetails[k].PlayerValue1);
        console.log("set here ");
      }
    } else if (participantsDetails[k].PlayerValue > 100) {
      setPosition(position - randomGen());
    } else {
      alert(`The winner is ${playerName}`);
    }
    k++
    console.log(participantsDetails[k].PlayerValue, "current PL1");
    console.log(position, "current position");
    console.log(randomGen(), "random");
  }

  function Showgrid(props) {
    return (
      <div>
        <h1>{props.tovalues}</h1>
        <h1>{props.icon}</h1>
      </div>
    );
  }
  function Ref(e) {
    if (snakeandladder[0].snakes.snakesfrom.includes(e)) {
      return "🐍";
    } else if (snakeandladder[0].ladders.ladderfrom.includes(e)) {
      return "✨";
    } else {
      return " ";
    }
  }

  return (
    <div>
      <div className="gridclass">
        {arr.map((elem) => (
          <div>
            <div className="mainclassundergrid" id={elem.toString()}>
              <Showgrid tovalues={elem} icon={Ref(elem)} />
              <p style={{ fontSize: "40px" }}>
                {position === elem ? coins[k] : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={onbtnClick}>Click here</button>
    </div>
  );
};

export default Grid2;
