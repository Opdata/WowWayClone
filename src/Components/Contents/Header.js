import React from "react";
import styled from "styled-components";
import Data from "../Contents/data";

const Box = styled.div`
  width: 100%;
  height: 70px;
  /* margin-left: 10px; */
  background-color: ${(props) => props.theme.HeaderBackground};
`;

const Header = ({ sort }) => {
  return <Box onClick={() => sort()}>{/*  */}</Box>;
};

export default Header;
