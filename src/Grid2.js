import React, { useState } from "react";
import "./Grid.css";
// playerArray
const Grid2 = () => {

    const [playerName, setPlayerName] = useState("player1");
    

  const [position, setPosition] = useState(1);
  const [position2, setPosition2] = useState(1);
  
  let numofPl = 4
  let playersArray =[]
  let emptObj ={}

  for(let j =1;j<=numofPl;j++){
    emptObj['name'] = 'Player ' +j.toString()
    emptObj['playerPos'] = 1
    playersArray.push(emptObj)
    emptObj={}
  }
  const [multipl,setMultipl] = useState(playersArray)

  let pl1 = position;
  
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
  
  function onbtnClick() {
    let Positionpl = position
    if (playerName === "player1") {
      setPlayerName("player2");
  
    }
    else{
      setPlayerName("player1")
    }
    
    function randomGen() {
      return Math.ceil(Math.random() * 6);
    }
    pl1 += randomGen();
    if (pl1 < 100) {
      if (snakeandladder[0].snakes.snakesfrom.includes(pl1)) {
        setPosition(
          snakeandladder[0].snakes.snakesto[
            snakeandladder[0].snakes.snakesfrom.indexOf(pl1)
          ]
        );
        console.log(`Snake bite at ${pl1}`);
      } else if (snakeandladder[0].ladders.ladderfrom.includes(pl1)) {
        setPosition(
          snakeandladder[0].ladders.laddersto[
            snakeandladder[0].ladders.ladderfrom.indexOf(pl1)
          ]
        
        );
        console.log(`Ladder up at ${pl1}`);
        Positionpl = position
      } else {
        setPosition(pl1);
        console.log("set here ");
      }
    }
    else if(pl1>100){
        pl1 = position
        setPosition(Positionpl)
    }
    else {
      setPosition(100)
        alert("iop")
    }
    console.log(pl1, "current PL1");
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
                {position.toString() === elem.toString() ? "🧑" : ""}
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
