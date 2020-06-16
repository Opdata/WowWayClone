import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Data from "./data";
const Box = styled.div`
  /*  */
  width: 100%;
  height: 100%;
  margin-left: 10px;

  transform: ${(props) => props.state === true && "translateX(280px)"};
  transition: transform 0.8s;
  /* z-index: 3; */
`;

const ContentBox = styled.div`
  /* height: fit-content; */
  height: 800px;
  background-color: grey;
`;

const Content = ({ state }) => {
  return (
    <Box state={state}>
      <Header />
      <ContentBox>adfsadf</ContentBox>
      <Footer />
    </Box>
  );
};

export default Content;
