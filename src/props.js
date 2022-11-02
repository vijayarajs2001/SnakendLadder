import React from "react";
import PlayerProp from "./PlayerProp";
import "./props.css";
const Props = ({ cellId, value, icon }) => {
  let arr = [];
  let players = 3;
  for (let i = 1; i <= players; i++) {
    arr.push(`Player${i}`);
  }
  return (
    <div id={cellId} className="division">
      {arr.map((n) => (
        <PlayerProp /*player={n}*/
         />
      ))}
      {value} <span>{icon}</span>{" "}
    </div>
  );
};

export default Props;
