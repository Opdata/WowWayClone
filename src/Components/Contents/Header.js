import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 70px;
  /* margin-left: 10px; */
  background-color: ${(props) => props.theme.HeaderBackground};
`;

const Header = ({ tag, setTag }) => {
  return <Box onClick={() => setTag(tag - 1)}>{/*  */}</Box>;
};

export default Header;
