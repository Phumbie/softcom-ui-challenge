import styled from "styled-components";
const Colors = {
  Grey: "#7E7E7E",
  Purple: "#4F63FF",
  Red: "#FF005C",
  Green: "#35BB63",
  DarkMode: "#27292D",
};

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100wh;
  background-color: black;
  color: white;
  padding: 0 1rem;
`;

export const CardBody = styled.div`
  border-radius: 5px;
  background-color: white;
  color: ${Colors.Grey};
  box-shadow: 0px 5px 20px rgba(210, 216, 236, 0.3);
  width: 30rem;
  max-height: 20rem;
  -webkit-transition: max-height 500ms ease-out;
  transition: all 0.3s linear;
  will-change: opacity, max-height;

  &.darkTheme {
    background-color: ${Colors.DarkMode};
  }
`;
export const MainBody = styled.div`
  padding: 0.8rem;
`;

export const Heading = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .p {
    color: ${Colors.Grey};
  }
  .whitePos {
    color: white;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  width: 5rem;
  justify-content: space-around;
  align-items: center;
  img {
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
  }
`;

export const CardStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${Colors.Purple};
    margin: 0;
    height: 100%;
    font-size: 2.3rem;
  }
  div {
    width: 50%;
  }
  div:first-of-type {
    display: flex;
    align-items: flex-end;
    // color: ${Colors.Red};
  }
  div small {
    margin-left: 0.5rem;
    margin-bottom: 0.3rem;
    font-size: 1rem;
  }
  div > img {
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
  }
  div .red-percent {
    color: ${Colors.Red};
  }

  div .green-percent {
    color: ${Colors.Green};
  }
  div .slider {
    -webkit-appearance: none;
  }
`;

export const SmallRed = styled.div`
  color: ${Colors.Red};
`;

export const Range = styled.input`
  width: 100%;
  background-color: white;
  -webkit-appearance: none;
  transition: all 0.3s linear;
  &::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: white;
    margin-top: -4px;
    box-shadow: 0px 0px 21px 1px rgba(53, 187, 99, 0.73);
    cursor: pointer;
    border: 4px solid ${Colors.Green};
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: white;
    margin-top: -4px;
    box-shadow: 0px 0px 21px 1px rgba(53, 187, 99, 0.73);
    cursor: pointer;
    border: 4px solid ${Colors.Green};
  }
  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background: #ccc;
  }
  &::-moz-range-track {
    background: #ccc;
  }

  &::-webkit-fill-lower {
    background: #777;
    border-radius: 10px;
  }

  &::-moz-range-progress {
    background-color: ${Colors.Green};
  }

  &.darkTheme {
    background-color: ${Colors.DarkMode};
  }
  &.darkTheme::-moz-range-track {
    background: #383b40;
  }
  &.darkTheme::-webkit-slider-runnable-track {
    background: #383b40;
  }
`;

export const ProgressBody = styled.div`
  width: 100%;
  height: 0.3rem;
  background-color: #f2f2f2;
  border-radius: 5px;
  margin-top: 2.5rem;

  &.darkTheme {
    background-color: #383b40;
  }
`;

export const ProgressBar = styled.div`
  width: 70%;
  height: 100%;
  border-radius: 5px;
  background-color: ${Colors.Red};
`;

export const Source = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 2.5rem;

  div {
    display: flex;
    align-items: center;
  }

  div p {
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }

  div .nib {
    font-weight: bold;
  }

  div img {
    height: 1rem;
  }
`;

export const Footer = styled.div`
  border-top: 0.2px solid #9ba1b5;
  display: flex;
  justify-content: space-around;

  div:first-of-type {
    border-bottom-left-radius: 5px;
  }
  div {
    width: 33.3%;
    text-align: center;
  }

  .date {
    border-right: 0.2px solid #9ba1b5;
  }

  div:first-of-type &.darkTheme {
    background-color: #383b40;
  }
`;

export const Dates = styled.div`
  cursor: pointer;
  transition: all 0.3s ease-in;

  :hover {
    background-color: #f2f2f2;
  }

  &.darkTheme:hover {
    background-color: #383b40;
    color: white;
  }
`;
