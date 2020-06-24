import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuInfo from "./MenuInfo";
const Box = styled.div`
  position: fixed;
  width: 290px;
  height: 100%;
  display: flex;
  padding-right: 10px;
  color: ${(props) => props.theme.HeaderBackground};
  font-family: Arial, sans-serif;
  transform: translateX(${(props) => (props.state ? "0px" : "-280px")});
  transition: transform 0.6s;
  z-index: 3;
`;

const MenuDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.MenuBackground};
  z-index: 4;
  padding: 20px 30px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  /* width: 100%; */
  height: 54px;
  font-size: 35px;
  font-weight: 600;
  color: ${(props) => props.theme.HeaderBackground};
`;

const SubTitleBox = styled.div`
  display: flex;
  height: fit-content;
  font-size: 12px;
  line-height: 20px;
  margin: 28px 0;
  color: ${(props) => props.theme.HeaderBackground};
`;

const Footer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  font-size: 12px;
  top: 26%;
  border-top: 1px solid ${(props) => props.theme.MenuLine};
`;

const Menu = ({ state, setState, setTag }) => {
  return (
    <Box
      state={state}
      onMouseEnter={() => {
        setState(true);
      }}
    >
      <MenuDiv>
        <TitleBox>WowWay</TitleBox>
        <SubTitleBox>
          The great reboot of an unique and incredibly interactive theme
        </SubTitleBox>
        <MenuInfo text={"PORTPOLIO"} setTag={setTag}></MenuInfo>
        <MenuInfo text={"OUR BLOG"}></MenuInfo>
        <MenuInfo text={"CONTACT US"}></MenuInfo>
        <Footer>WowWay © All rights reserved.</Footer>
      </MenuDiv>
    </Box>
  );
};

export default Menu;
