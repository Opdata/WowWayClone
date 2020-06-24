import React from "react";
import styled from "styled-components";
import Data from "../Contents/data";

const MainMenu = styled.div`
  display: flex;
  width: 215px;
  height: 40px;
  padding-left: 30px;
  margin-left: -30px;
  font-family: Arial, sans-serif;
  cursor: pointer;
  /* background-color: ${(props) => props.theme.MenuFocusBackground}; */
`;

const MenuBox = styled.div`
  width: 245px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 800;
  padding-left: ${(props) => (props.Sub ? 15 : 0)}px;
  color: ${(props) => props.theme.HeaderBackground};
  border-bottom: 1px solid ${(props) => props.theme.MenuLine};
`;

const ArrowBox = styled.div`
  position: absolute;
  right: 25px;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  /* border-left: 30px solid ${(props) => props.theme.MenuFocusBackground}; */
`;

const LengthBox = styled.div`
  font-size: 8px;
  padding: 2px;
`;

const MenuInfo = ({ text, setFocus, setTag }) => {
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
          <MainMenu
            onClick={() => {
              // setFocus(1);
              setTag(5);
            }}
          >
            <MenuBox Sub>
              All<LengthBox>({Data.length})</LengthBox>
              <ArrowBox />
            </MenuBox>
          </MainMenu>

          <MainMenu
            onClick={() => {
              // setFocus(1);
              setTag(0);
            }}
          >
            <MenuBox Sub>
              Print<LengthBox>({Print})</LengthBox>
              <ArrowBox />
            </MenuBox>
          </MainMenu>
          <MainMenu
            onClick={() => {
              // setFocus(1);
              setTag(1);
            }}
          >
            <MenuBox Sub>
              Web Design<LengthBox>({WebDesign})</LengthBox>
              <ArrowBox />
            </MenuBox>
          </MainMenu>
          <MainMenu
            onClick={() => {
              // setFocus(1);
              setTag(2);
            }}
          >
            <MenuBox Sub>
              Motion<LengthBox>({Motion})</LengthBox>
              <ArrowBox />
            </MenuBox>
          </MainMenu>
          <MainMenu
            onClick={() => {
              // setFocus(1);
              setTag(3);
            }}
          >
            <MenuBox Sub>
              Logotype<LengthBox>({Logotype})</LengthBox>
              <ArrowBox />
            </MenuBox>
          </MainMenu>
          <MainMenu
            onClick={() => {
              // setFocus(1);
              setTag(4);
            }}
          >
            <MenuBox Sub>
              WordPress<LengthBox>({WordPress})</LengthBox>
              <ArrowBox />
            </MenuBox>
          </MainMenu>
        </>
      )}
    </>
  );
};

export default MenuInfo;
