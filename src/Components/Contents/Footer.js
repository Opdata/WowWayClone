import React from "react";
import styled from "styled-components";
import { FaGithub, FaRegStickyNote } from "react-icons/fa";
const Box = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding-left: 30px;
  background-color: ${(props) => props.theme.HeaderBackground};
`;

const IconSearchBox = styled.div`
  display: flex;
  width: 300px;
  height: fit-content;
`;

const Icon = styled.a`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.IconColor};
  opacity: 0.5;

  :hover {
    transition: 0.3s linear;
    color: ${(props) => props.theme.MenuHoverBackground};
    opacity: 1;
  }
`;

const ContactBox = styled.p`
  display: flex;
  padding-top: 4px;
  font-size: 13px;
  color: ${(props) => props.theme.IconColor};
  font-family: Arial, sans-serif;
`;

const Footer = () => {
  return (
    <Box>
      <IconSearchBox>
        <Icon href={"https://github.com/Opdata"}>
          <FaGithub
            style={{ width: "18px", height: "18px", paddingRight: "10px" }}
          />
        </Icon>
        <Icon
          href={
            "https://www.notion.so/pb0364/Study-Record-9b7b4bc6e56c4ccd9eec1910578bfc7b"
          }
        >
          <FaRegStickyNote
            style={{ width: "18px", height: "18px", paddingRight: "10px" }}
          />
        </Icon>
        <ContactBox>Contact : pb03641@gmail.com</ContactBox>
      </IconSearchBox>
    </Box>
  );
};

export default Footer;
