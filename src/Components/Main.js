import React, { useState } from "react";
import styled from "styled-components";
// import { InnerWidth } from "../Hooks/SizeHooks";
import Menu from "./Menu/Menu";
import Content from "./Contents/Contents";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  /* width: 100%; */
  height: fit-content;
  overflow: hidden;
`;

const Main = () => {
  const [state, setState] = useState(false);
  // const width = InnerWidth();

  return (
    <Wrapper>
      <Menu state={state} setState={setState} />
      <Content state={state} setState={setState} />
    </Wrapper>
  );
};

export default Main;
