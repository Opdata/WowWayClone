import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: fixed;
  width: 290px;
  height: 100%;
  display: flex;
  padding-right: 10px;
  transform: translateX(${(props) => (props.state ? "0px" : "-280px")});
  transition: transform 0.6s;
  z-index: 3;
`;

const MenuDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.MenuBackground};
  z-index: 4;
`;

const Menu = ({ state, setState }) => {
  // console.log(state);
  return (
    <Box
      state={state}
      onMouseEnter={() => {
        setState(true);
      }}
      onMouseLeave={() => {
        setState(false);
      }}
    >
      <MenuDiv></MenuDiv>
    </Box>
  );
};

export default Menu;
