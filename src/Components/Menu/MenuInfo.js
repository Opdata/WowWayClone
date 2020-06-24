import React from "react";
import styled from "styled-components";
import Data from "../Contents/data";

const MainMenu = styled.div`
  width: 211px;
  height: 40px;
  padding-left: 30px;
  margin-left: -30px;
  font-family: Arial, sans-serif;
  cursor: pointer;
`;

const SubMenu = styled.div`
  width: 196px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 800;
  color: ${(props) => props.theme.HeaderBackground};
  padding-left: 30px;
  margin-left: -15px;
`;

const MenuBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 800;
  padding-left: ${(props) => (props.Sub ? 15 : 7)}%;
  color: ${(props) => props.theme.HeaderBackground};
  border-bottom: 1px solid ${(props) => props.theme.MenuLine};
`;

const LengthBox = styled.div`
  font-size: 8px;
  padding: 2px;
`;

const MenuInfo = ({ text }) => {
  const Print = Data.filter((x) => x.tag === 0).length;
  const WebDesign = Data.filter((x) => x.tag === 1).length;
  const Motion = Data.filter((x) => x.tag === 2).length;
  const Logotype = Data.filter((x) => x.tag === 3).length;
  const WordPress = Data.filter((x) => x.tag === 4).length;

  return (
    <>
      <MainMenu>
        <MenuBox>{text}</MenuBox>
      </MainMenu>
      {text === "PORTPOLIO" && (
        <>
          <MainMenu>
            <MenuBox Sub>
              All<LengthBox>({Data.length})</LengthBox>
            </MenuBox>
          </MainMenu>
          <MainMenu>
            <MenuBox Sub>
              All<LengthBox>({Data.length})</LengthBox>
            </MenuBox>
          </MainMenu>
          <MainMenu>
            <MenuBox Sub>
              All<LengthBox>({Data.length})</LengthBox>
            </MenuBox>
          </MainMenu>
          <MainMenu>
            <MenuBox Sub>
              All<LengthBox>({Data.length})</LengthBox>
            </MenuBox>
          </MainMenu>
          <MainMenu>
            <MenuBox Sub>
              All<LengthBox>({Data.length})</LengthBox>
            </MenuBox>
          </MainMenu>
        </>
      )}
    </>
  );
};

export default MenuInfo;
