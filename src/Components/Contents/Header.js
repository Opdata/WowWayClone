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
import { Link } from "react-router-dom";

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding-left: 30px;
  background-color: ${(props) => props.theme.HeaderBackground};
`;

const IconSearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  height: fit-content;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const Icon = styled(Link)`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.IconColor};
  opacity: 0.5;

  :hover {
    transition: 0.3s linear;
    color: ${(props) => props.theme.MenuHoverBackground};
    opacity: 1;
  }
`;
/*
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 209px;
  border: 1px solid ${(props) => props.theme.IconColor};
  background-color: #f6f6f6;
  padding: 0px 2px 0 7px;
  opacity: 0.5;
`;

const Input = styled.input`
  width: 180px;
  background: none;
  border: none;
  font-size: 11px;
  outline: none;
`;
*/
const Header = () => {
  /*
Search Enter Key Evnet Function
  const handleKeyDown = (e) => {
    if (e === "Enter") {
      window.href;
    }
  };
  */
  return (
    <Box>
      <IconSearchBox>
        <IconBox>
          <Icon to={"#"}>
            <FaTwitter />
          </Icon>
          <Icon to={"#"}>
            <FaFacebookSquare />
          </Icon>
          <Icon to={"#"}>
            <FaDribbble />
          </Icon>
          <Icon to={"#"}>
            <FaVimeoV />
          </Icon>
          <Icon to={"#"}>
            <FaLinkedinIn />
          </Icon>
          <Icon to={"#"}>
            <FaBehance />
          </Icon>
          <Icon to={"#"}>
            <FaRss />
          </Icon>
        </IconBox>
        {/*
        <SearchBox>
          <FaSearch style={({ width: 15 }, { height: 15 })} />
          <Input placeholder={"Type and hit Enter"} onKeyDown={}/>
        </SearchBox>
        */}
      </IconSearchBox>
    </Box>
  );
};

export default Header;
