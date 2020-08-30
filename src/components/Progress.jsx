import React from "react";
import { ProgressBar, ProgressBody } from "./style";

const Progress = ({ count, theme }) => {
  if (count === 0) {
    return (
      <ProgressBody className={`${theme && "darkTheme"} `}>
        <ProgressBar />
      </ProgressBody>
    );
  } else {
    return null;
  }
};

export default Progress;
