import React from "react";
import styled from "styled-components";
import Plus from "../../Assets/plus.png";

const ContentDiv = styled.div`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transform: translate(
    ${(props) => (props.sortIndex % props.cardCount) * props.width}px,
    ${(props) => parseInt(props.sortIndex / props.cardCount) * props.height}px
  );
  opacity: ${(props) =>
    props.tag === 6 ? 0.7 : props.dataTag === props.tag ? 0.7 : 0.1};
  transition: opacity 0.4s, transform 0.5s;
  ${(props) =>
    props.tag === 6
      ? `
    cursor: pointer;
    :hover {
    z-index: 1;
    opacity: 1;
    .imgbox {
      transform: translateY(-70px);
      transition: transform 0.6s;
    }
    .textbox {
      transform: translateY(70px);
      opacity: 1;
      height: 141px;
      transition: height 0.4s, opacity 0.4s, transform 0.4s;
    }
    .plusbutton {
      opacity: 1;
    }
  }`
      : props.dataTag === props.tag
      ? `
  cursor: pointer;
      :hover {
    z-index: 1;
    opacity: 1;
    .imgbox {
      transform: translateY(-70px);
      transition: transform 0.6s;
    }
    .textbox {
      transform: translateY(70px);
      opacity: 1;
      height: 141px;
      transition: height 0.4s, opacity 0.4s, transform 0.4s;
    }
    .plusbutton {
      opacity: 1;
    }
  }
  `
      : null}
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const PlusButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.HeaderBackground};
  width: 32px;
  height: 32px;
  left: 50%;
  top: -16px;
  font-size: 20px;
  margin-left: -14px;
  border-radius: 50%;
  opacity: 0;
  background-image: url(${(props) => props.url});
  background-color: ${(props) => props.theme.HeaderBackground};
`;

const TextBox = styled.div`
  position: absolute;
  width: 100%;
  height: 0px;
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  left: 0px;
  bottom: 0px;
  font-family: Arial, sans-serif;
  background-color: black;
`;

const TextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.fontsize}px;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

const Card = ({
  width,
  height,
  cardCount,
  sortIndex,
  data,
  tag,
  setClick,
  setModalData,
}) => {
  const ClickEvent = (
    img,
    Text,
    SubText,
    { img: Modalimg, Explain, Tech, Link, Github, Notion }
  ) => {
    const root = document.querySelector("#root");
    root.classList.add("noScroll");
    setClick(true);
    setModalData({
      img,
      Text,
      SubText,
      Modalimg,
      Explain,
      Tech,
      Link,
      Github,
      Notion,
    });
  };

  return (
    <ContentDiv
      width={width}
      height={height}
      sortIndex={sortIndex}
      cardCount={cardCount}
      tag={tag}
      dataTag={data.tag}
      onClick={() => ClickEvent(data.img, data.Text, data.SubText, data.Modal)}
    >
      <ImgBox className={"imgbox"} url={data.img}></ImgBox>
      <TextBox className={"textbox"}>
        <PlusButton className={"plusbutton"} url={Plus}></PlusButton>
        <TextDiv
          style={{ padding: 5 }}
          fontsize={18}
          color={"white"}
          weight={700}
        >
          {data.Text}
        </TextDiv>
        <TextDiv fontsize={12} color={"#737373"} weight={400}>
          {data.SubText}
        </TextDiv>
      </TextBox>
    </ContentDiv>
  );
};

export default Card;
