import React from "react";
import { Dates, Footer } from "./style";

const Bottom = ({ count, theme }) =>
  count > 1 ? (
    <Footer>
      <Dates className={`date ${theme && "darkTheme"} `}>
        <h5>Daily</h5>
      </Dates>
      <Dates className={`date ${theme && "darkTheme"} `}>
        <h5>Monthly</h5>
      </Dates>
      <Dates className={` ${theme && "darkTheme"} `}>
        <h5>Yearly</h5>
      </Dates>
    </Footer>
  ) : null;

export default Bottom;
