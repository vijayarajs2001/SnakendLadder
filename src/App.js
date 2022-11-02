import React from "react";
// import {gridFunction} from "./Grid";
import "./snakenladder.css";
// import "./AlternateDice";
import AlternateDice from "./AlternateDice";
import arr from "./Grid";
import Props from "./props";
// function TileContentFunction(props) {
//   return (
//     <h3>
//       {props.playerName} {props.object}{" "}
//     </h3>
//   );
// }
// function BoardFunction() {
//   for (let i = 100; i > 0; i--) {
//     let a=`<div id="${i}">${i}</div>`
//     document.querySelector(".board").innerHTML= a
//   }
  
// }

function App() {
  return (
    <div className="main">
      <div className="game">
      <button><h1>START</h1></button>
      <AlternateDice />
        {/* <h1 id="p1"></h1>
        <h1 id="p2"></h1> */}
        {/* <button onClick={BoardFunction}>START</button> */}
        <div className="board">
          {arr.map(n=><Props cellId={n.id} value={n.id} key={n.id} icon={n.icon}/>)}
        </div>
      </div>
    </div> 
  );
}

export default App;
