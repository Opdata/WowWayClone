import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: fixed;
  width: 290px;
  height: 100%;
  display: flex;
  padding-right: 10px;
  transform: translateX(${(props) => (props.state ? "0px" : "-280px")});
  transition: transform 0.8s;
  z-index: 1;
`;

const MenuDiv = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 2;
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
