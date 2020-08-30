import React, { useState } from "react";
import CardStatistics from "./CardStatistics";
import Progress from "./Progress";
import Source from "./Source";
import Footer from "./Footer";
import { Body, CardBody, MainBody, Heading, HeaderIcons } from "./style";
import Toggle from "../assets/img/toggle.svg";
import Moon from "../assets/img/moon.svg";
import Bright from "../assets/img/bright.svg";

const Card = () => {
  let [count, setCount] = useState(0);
  let [theme, setTheme] = useState(false);

  const toggleState = () => {
    if (count === 2) {
      setCount((count = 0));
      console.log(count);
    } else {
      setCount(count + 1);
    }
  };

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <Body>
      <CardBody className={`${theme && "darkTheme"} `}>
        <MainBody>
          <Heading>
            <p>POS FAILURE RATE</p>
            <HeaderIcons>
              <img src={Toggle} alt="toggle" onClick={toggleState} />
              <img src={theme ? Bright : Moon} alt="theme" onClick={toggleTheme} />
            </HeaderIcons>
          </Heading>
          <CardStatistics count={count} theme={theme} />
          <Progress count={count} theme={theme} />
          <Source count={count} />
        </MainBody>
        <Footer count={count} theme={theme} />
      </CardBody>
    </Body>
  );
};

export default Card;
