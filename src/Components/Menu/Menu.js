import React, { useState } from "react";
import styled from "styled-components";
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

const TitleMenuDiv = styled.div``;
const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  width: 100%;
  height: 69px;
  font-size: 12px;
  border-top: 1px solid ${(props) => props.theme.MenuLine};
`;

const FooterTextBox = styled.div`
  padding-top: 20px;
`;

const Menu = ({ state, setState, tag, setTag }) => {
  const [focus, setFocus] = useState(1);

  return (
    <Box
      state={state}
      onMouseEnter={() => {
        setState(true);
      }}
    >
      <MenuDiv>
        <TitleMenuDiv>
          <TitleBox>WowWay</TitleBox>
          <SubTitleBox>
            The great reboot of an unique and incredibly interactive theme
          </SubTitleBox>
          <MenuInfo
            text={"PORTPOLIO"}
            setFocus={setFocus}
            focus={focus === 1 ? true : false}
            tag={focus === 1 ? tag : false}
            setTag={focus === 1 && setTag}
          ></MenuInfo>
          <MenuInfo
            text={"OUR BLOG"}
            setFocus={setFocus}
            focus={focus === 8 ? true : false}
          ></MenuInfo>
          <MenuInfo
            text={"CONTACT US"}
            setFocus={setFocus}
            focus={focus === 9 ? true : false}
          ></MenuInfo>
        </TitleMenuDiv>
        <Footer>
          <FooterTextBox>WowWay © All rights reserved.</FooterTextBox>
        </Footer>
      </MenuDiv>
    </Box>
  );
};

export default Menu;
