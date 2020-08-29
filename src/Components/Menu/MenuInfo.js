import React from "react";
import styled from "styled-components";
import Data from "../Contents/data";
import { Link } from "react-router-dom";
import { ScrollControlRemove } from "../../helper/ScrollControl";
const MainMenu = styled(Link)`
  display: flex;
  width: 220px;
  height: 40px;
  padding-left: 30px;
  margin-left: -30px;
  font-family: Arial, sans-serif;
  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.subfocus === "true" && props.theme.MenuFocusBackground};

  :hover {
    transition-duration: 0.4s;
    background-color: ${(props) =>
      props.focus !== "true"
        ? props.subfocus !== "true" && props.theme.MenuHoverBackground
        : null};
    .Arrow {
      transition-delay: 0.095s;
      border-left: ${(props) =>
        props.focus !== "true"
          ? props.subfocus !== "true" &&
            `30px solid ${props.theme.MenuHoverBackground}`
          : null};
    }
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
  border-left: ${(props) =>
    props.subfocus === "true" &&
    `30px solid ${props.theme.MenuFocusBackground}`};
`;

const LengthBox = styled.div`
  font-size: 8px;
  padding: 2px;
`;

const MenuInfo = ({
  text,
  tag,
  setTag,
  focus,
  setFocus,
  click,
  setClick,
  setModalData,
}) => {
  const ReactTag = Data.filter((x) => x.tag === 0).length;
  const Print = Data.filter((x) => x.tag === 1).length;
  const WebDesign = Data.filter((x) => x.tag === 2).length;
  const Motion = Data.filter((x) => x.tag === 3).length;
  const Logotype = Data.filter((x) => x.tag === 4).length;
  const WordPress = Data.filter((x) => x.tag === 5).length;

  return (
    <>
      <MainMenu
        to={
          text === "PORTPOLIO"
            ? "/"
            : text === "OUR BLOG"
            ? "#"
            : text === "CONTACT US" && "#"
        }
        onClick={() => (
          text === "PORTPOLIO"
            ? click === true && setClick(false)
            : (setModalData(false), setClick(true)),
          setFocus(
            text === "PORTPOLIO"
              ? 1
              : text === "OUR BLOG"
              ? 2
              : text === "CONTACT US" && 3
          ),
          text === "PORTPOLIO" && focus === true && setTag(6),
          ScrollControlRemove()
        )}
        focus={focus.toString()}
      >
        <MenuBox>{text}</MenuBox>
        <ArrowBox className={"Arrow"} focus={focus} />
      </MainMenu>
      {text === "PORTPOLIO" && focus === true && (
        <>
          <MainMenu
            to={"#"}
            onClick={() => {
              setClick(false);
              setTag(6);
              ScrollControlRemove();
            }}
            subfocus={tag === 6 ? "true" : "false"}
          >
            <MenuBox Sub>
              All<LengthBox>({Data.length})</LengthBox>
              <ArrowBox
                className={"Arrow"}
                subfocus={tag === 6 ? "true" : "false"}
              />
            </MenuBox>
          </MainMenu>
          <MainMenu
            to={"#"}
            onClick={() => {
              setClick(false);
              setTag(0);
              ScrollControlRemove();
            }}
            subfocus={tag === 0 ? "true" : "false"}
          >
            <MenuBox Sub>
              React<LengthBox>({ReactTag})</LengthBox>
              <ArrowBox
                className={"Arrow"}
                subfocus={tag === 0 ? "true" : "false"}
              />
            </MenuBox>
          </MainMenu>
          <MainMenu
            to={"#"}
            onClick={() => {
              setClick(false);
              setTag(1);
              ScrollControlRemove();
            }}
            subfocus={tag === 1 ? "true" : "false"}
          >
            <MenuBox Sub>
              Print<LengthBox>({Print})</LengthBox>
              <ArrowBox
                className={"Arrow"}
                subfocus={tag === 1 ? "true" : "false"}
              />
            </MenuBox>
          </MainMenu>
          <MainMenu
            to={"#"}
            onClick={() => {
              setClick(false);
              setTag(2);
              ScrollControlRemove();
            }}
            subfocus={tag === 2 ? "true" : "false"}
          >
            <MenuBox Sub>
              Web Design<LengthBox>({WebDesign})</LengthBox>
              <ArrowBox
                className={"Arrow"}
                subfocus={tag === 2 ? "true" : "false"}
              />
            </MenuBox>
          </MainMenu>
          <MainMenu
            to={"#"}
            onClick={() => {
              setClick(false);
              setTag(3);
              ScrollControlRemove();
            }}
            subfocus={tag === 3 ? "true" : "false"}
          >
            <MenuBox Sub>
              Motion<LengthBox>({Motion})</LengthBox>
              <ArrowBox
                className={"Arrow"}
                subfocus={tag === 3 ? "true" : "false"}
              />
            </MenuBox>
          </MainMenu>
          <MainMenu
            to={"#"}
            onClick={() => {
              setClick(false);
              setTag(4);
              ScrollControlRemove();
            }}
            subfocus={tag === 4 ? "true" : "false"}
          >
            <MenuBox Sub>
              Logotype<LengthBox>({Logotype})</LengthBox>
              <ArrowBox
                className={"Arrow"}
                subfocus={tag === 4 ? "true" : "false"}
              />
            </MenuBox>
          </MainMenu>
          <MainMenu
            to={"#"}
            onClick={() => {
              setClick(false);
              setTag(5);
              ScrollControlRemove();
            }}
            subfocus={tag === 5 ? "true" : "false"}
          >
            <MenuBox Sub>
              WordPress<LengthBox>({WordPress})</LengthBox>
              <ArrowBox
                className={"Arrow"}
                subfocus={tag === 5 ? "true" : "false"}
              />
            </MenuBox>
          </MainMenu>
        </>
      )}
    </>
  );
};

export default MenuInfo;
