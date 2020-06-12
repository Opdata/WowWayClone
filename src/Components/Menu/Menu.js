import React from "react";
import styled from "styled-components";

const Box = styled.div`
  /* display: ${(props) => props.state === false && "none"}; // 이런식으로 */
  width: 220px;
  height: 100%

  /* left: -270px; */
  position: fixed;
  padding: 20px 30px;
  /* font-family: "Releway", sans-serif; */
  color: ${(props) => props.theme.HeaderBackground};
  /* transform: ${(props) => props.state === true && "translate(270px)"}; */
  @media only screen and(min-width: 1024) {
  }
  background-color: ${(props) => props.theme.MenuBackground};
`;

const BoxInner = styled.div`
  /* background-color: green; */
`;

const TitleBox = styled.div`
  padding-top: 20px;
  font-weight: 800;
  font-size: 38px;
`;

const TitleDiv = styled.div`
  /*  */
`;

const SubTitleDiv = styled.div`
  /*  */
  margin: 28px 0px;
  font-size: 12px;
`;

const MenuContentBox = styled.div`
  /*  */
`;

const ContentDiv = styled.div`
  /*  */
  /* width: 230px; */
  height: 30px;
  padding-top: 9px;
  /* padding-left: 30px; */
  font-size: 12px;
  font-weight: 800;
  border-top: 1px solid ${(props) => props.theme.MenuLine};
  cursor: pointer;
  :first-child {
    border-top: none;
  }
`;

const Footer = styled.div`
  height: 61px;
  position: absolute;
  display: flex;
  align-items: center;
  padding-top: 8px;
  border-top: 1px solid ${(props) => props.theme.MenuLine};
  bottom: 0px;
  font-size: 12px;
`;

const CloseButton = styled.div`
  /*  */
  width: 35px;
  height: 35px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: -17px;

  background-color: ${(props) => props.theme.MenuBackground};
  transform: rotate(45deg);
`;

const CloseText = styled.div`
  position: absolute;
  display: flex;
  bottom: 10px;
  right: 14px;
  font-size: 17px;
  transform: rotate(-45deg);
`;

const Menu = ({ setState }) => {
  return (
    <Box
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
      // onMouseOver={() => console.log("확인")}
    >
      <BoxInner>
        <TitleBox>
          <TitleDiv>WowWay</TitleDiv>
        </TitleBox>
        <SubTitleDiv>
          The great reboot of an unique and incredibly interactive theme
        </SubTitleDiv>
        <MenuContentBox>
          <ContentDiv>PORTPOLIO</ContentDiv>
          <ContentDiv>GALLERY</ContentDiv>
          <ContentDiv>ABOUT US</ContentDiv>
          <ContentDiv>FEATURES</ContentDiv>
          <ContentDiv>OUR BLOG</ContentDiv>
          <ContentDiv>CONTACT US</ContentDiv>
        </MenuContentBox>
        <Footer>WowWay © All rights reserved.</Footer>
      </BoxInner>
      <CloseButton>
        <CloseText>X</CloseText>
      </CloseButton>
    </Box>
  );
};

export default Menu;
