import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 70px;
  /* margin-left: 10px; */
  background-color: ${(props) => props.theme.HeaderBackground};
`;

const Header = () => {
  return <Box>{/*  */}</Box>;
};

export default Header;
