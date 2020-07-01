import React from "react";
import styled from "styled-components";
import Data from "../Contents/data";
import { Link } from "react-router-dom";

const MainMenu = styled.div`
  display: flex;
  width: 215px;
  height: 40px;
  padding-left: 30px;
  margin-left: -30px;
  font-family: Arial, sans-serif;
  cursor: pointer;

  :hover {
    background-color: ${(props) => (props.focus ? null : "black")};
  }
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

const MenuInfo = ({ text, setTag, focus, setFocus }) => {
  const Print = Data.filter((x) => x.tag === 0).length;
  const WebDesign = Data.filter((x) => x.tag === 1).length;
  const Motion = Data.filter((x) => x.tag === 2).length;
  const Logotype = Data.filter((x) => x.tag === 3).length;
  const WordPress = Data.filter((x) => x.tag === 4).length;

  return (
    <>
      <MainMenu focus={focus}>
        <MenuBox>
          <Link
            to={
              text === "PORTPOLIO"
                ? "/"
                : text === "OUR BLOG"
                ? "/blog"
                : text === "CONTACT US" && "/contact-us"
            }
          >
            {text}
          </Link>
        </MenuBox>
      </MainMenu>
      {text === "PORTPOLIO" && (
        <>
          <MainMenu
            to={"/#"} // 해쉬라우터 적용해야할부분
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

          <MainMenu to={"/#/print"} onClick={() => setTag(0)}>
            <MenuBox Sub>
              Print<LengthBox>({Print})</LengthBox>
              <ArrowBox />
            </MenuBox>
          </MainMenu>
          <MainMenu to={"/#/web-design"}>
            <MenuBox Sub>
              Web Design<LengthBox>({WebDesign})</LengthBox>
              <ArrowBox />
            </MenuBox>
          </MainMenu>
          <MainMenu to={"/#/motion"}>
            <MenuBox Sub>
              Motion<LengthBox>({Motion})</LengthBox>
              <ArrowBox />
            </MenuBox>
          </MainMenu>
          <MainMenu to={"/#/logotype"}>
            <MenuBox Sub>
              Logotype<LengthBox>({Logotype})</LengthBox>
              <ArrowBox />
            </MenuBox>
          </MainMenu>
          <MainMenu to={"/#/wordpress"}>
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
