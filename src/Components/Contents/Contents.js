import React from "react";
import styled from "styled-components";
import {
  FaTwitter,
  FaFacebookSquare,
  FaDribbble,
  FaVimeoV,
  FaLinkedinIn,
  FaBehance,
  FaRss,
} from "react-icons/fa";

const Box = styled.div`
  position: absolute;
  left: ${(props) => (props.state === true ? 0 : "280px")};
  width: ${(props) => props.Width + "px"};
  height: 810px;

  transform: ${(props) => props.state === true && "translate(270px)"};

  @media only screen and (min-width: 1024) {
  }
  background-color: green;
`;

const Header = styled.div`
  width: 100%;
  height: 28px;
  padding: 21px 30px 21px 40px;
  background-color: black;
  @media only screen and (min-width: 1024) {
  }
`;

const HeaderDiv = styled.div`
  /*  */
  width: 100%;
  height: 100%;
  display: flex;
  /* height: 50px; */

  background-color: white;
`;

const HeaderIconDiv = styled.div`
  width: 196px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;
  background-color: yellow;

  color: ${(props) => props.theme.IconColor};
`;

const HeaderButton = styled.div`
  width: 18px;
  height: 18px;
`;

const SearchBOx = styled.div`
  width: 220px;
  height: 100%;
`;

const GridBox = styled.div`
  /*  */
  width: 744px;
  height: 670px;
  @media only screen and (min-width: 1024) {
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 70px;
  @media only screen and (min-width: 1024) {
  }

  background-color: red;
`;

const FooterDIv = styled.div`
  width: 100%;
  height: 28px;
  padding: 21px 30px 21px 40px;

  background-color: grey;
`;

const Contents = ({ Width, state }) => {
  // console.log(Width);
  return (
    <Box Width={Width} state={state}>
      <Header>
        <HeaderDiv>
          <HeaderIconDiv>
            <HeaderButton>
              <FaTwitter />
            </HeaderButton>
            <HeaderButton>
              <FaFacebookSquare />
            </HeaderButton>
            <HeaderButton>
              <FaDribbble />
            </HeaderButton>
            <HeaderButton>
              <FaVimeoV />
            </HeaderButton>
            <HeaderButton>
              <FaLinkedinIn />
            </HeaderButton>
            <HeaderButton>
              <FaBehance />
            </HeaderButton>
            <HeaderButton>
              <FaRss />
            </HeaderButton>
          </HeaderIconDiv>
        </HeaderDiv>
      </Header>
      <GridBox>{/*  */}</GridBox>
      <Footer>
        <FooterDIv>{/*  */}</FooterDIv>
      </Footer>
    </Box>
  );
};

export default Contents;
