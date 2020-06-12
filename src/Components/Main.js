import React, { useState } from "react";
import styled from "styled-components";
import { InnerWidth } from "../Hooks/SizeHooks";
import Menu from "../Components/Menu/Menu";
import Contents from "../Components/Contents/Contents";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: ${(props) => props.Width + 281 + "px"};
  height: 100%;
  left: -270px;

  transform: ${(props) => props.state === true && "translate(270px)"};

  @media only screen and (min-width: 1024) {
  }
  /* background-color: yellow; */
`;

const Main = () => {
  const [state, setState] = useState(false);
  const Width = InnerWidth();

  // console.log(state);
  return (
    <Wrapper Width={Width} state={state}>
      <Menu setState={setState} />
      <Contents Width={Width} state={state} />
    </Wrapper>
  );
};

export default Main;
