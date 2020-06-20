import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.HeaderBackground};
`;

const Footer = () => {
  return <Box></Box>;
};

export default Footer;
