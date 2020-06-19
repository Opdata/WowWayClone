import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 70px;
  /* margin-left: 10px; */
  background-color: green;
`;

const Header = ({ state, setState }) => {
  return <Box onClick={() => setState(!state)}>{/*  */}</Box>;
};

export default Header;
