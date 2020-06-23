import React from "react";
import styled from "styled-components";

const MainMenu = styled.div`
  display: flex;
  height: 31px;
  font-size: 12px;
  font-weight: 800;
  padding-top: 9px;
  color: ${(props) => props.theme.HeaderBackground};
`;

const MenuInfo = ({ text }) => {
  return (
    <MainMenu>{text}</MainMenu>
    // (text === "PORTPOLIO" && return (<div>afsdf</div>))
  );
};

export default MenuInfo;
