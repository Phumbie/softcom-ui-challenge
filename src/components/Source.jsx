import React from "react";
import Info from "../assets/img/info.svg";
import { Source } from "./style";

const SourceInfo = ({ count }) => {
  if (count > 0) {
    return (
      <Source>
        <div>
          <img src={Info} alt="info" />
          <p>Source</p>
          <p className="nib">NIBBS</p>
        </div>
      </Source>
    );
  } else return null;
};

export default SourceInfo;
