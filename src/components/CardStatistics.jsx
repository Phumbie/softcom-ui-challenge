import React from "react";
import { CardStats, Range } from "./style";
import ArrowDown from "../assets/img/green.svg";
import ArrowUp from "../assets/img/arrow-up.svg";

const CardStatistics = ({ count, theme }) => (
  <CardStats>
    <div>
      {count === 0 ? <h1>60%</h1> : <h1>12%</h1>}

      <img src={count > 0 ? ArrowDown : ArrowUp} alt="arrow up" />
      <small className={`${count > 0 ? "green-percent" : "red-percent"}`}>{`${count > 0 ? "14%" : "8%"}`}</small>
    </div>
    {count > 0 ? (
      <div>
        <Range className={`'slider' ${theme && "darkTheme"}`} type="range" name="" id="myinput"></Range>
      </div>
    ) : null}
  </CardStats>
);

export default CardStatistics;
