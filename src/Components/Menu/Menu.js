import React, { useState } from "react";
import styled from "styled-components";
import button from "../../Assets/buttons.png";
import MenuInfo from "./MenuInfo";

const Box = styled.div`
  position: fixed;
  width: 290px;
  height: 100%;
  display: flex;
  padding-right: 15px;
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

const CloseBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  top: 20px;
  right: 0px;
  padding-top: 10px;
  padding-left: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.MenuBackground};
  transform: rotate(45deg);
  z-index: 4;
`;

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  transform: rotate(-45deg);
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: ${(props) => (props.state === false ? -130 : -105)}px;
`;

const Menu = ({ state, setState, tag, setTag, click, setClick }) => {
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
            click={click}
            setClick={setClick}
          ></MenuInfo>
          <MenuInfo
            text={"OUR BLOG"}
            setFocus={setFocus}
            click={click}
            focus={focus === 8 ? true : false}
            setClick={click === true && setClick}
          ></MenuInfo>
          <MenuInfo
            text={"CONTACT US"}
            setFocus={setFocus}
            click={click}
            focus={focus === 9 ? true : false}
            setClick={click === true && setClick}
          ></MenuInfo>
        </TitleMenuDiv>
        <Footer>
          <FooterTextBox>WowWay © All rights reserved.</FooterTextBox>
        </Footer>
      </MenuDiv>
      <CloseBox onClick={() => setState(!state)}>
        <CloseButton url={button} state={state} />
      </CloseBox>
    </Box>
  );
};

export default Menu;
