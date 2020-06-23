import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  /* row col */
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transform: translate(
    ${(props) => (props.sortIndex % props.cardCount) * props.width}px,
    ${(props) => parseInt(props.sortIndex / props.cardCount) * props.height}px
  );

  transition-property: transform;
  transition-duration: 0.6s;

  cursor: pointer;

  :hover {
    z-index: 5;
    .imgbox {
      transform: translateY(-70px);
      transition-property: transform;
      transition-duration: 0.6s;
    }
    .textbox {
      transform: translateY(70px);
      opacity: 1;
      transition-property: opacity, transform;
      transition-duration: 0.6s;
    }
  }
`;

const ImgBox = styled.div`
  /*  */
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
`;

const TextBox = styled.div`
  /*  */
  position: absolute;
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 141px;
  background-color: black;
`;

const TextDiv = styled.div`
  /*  */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.fontsize}px;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

const Card = ({ width, height, cardCount, sortIndex, data }) => {
  return (
    <ContentDiv
      width={width}
      height={height}
      sortIndex={sortIndex}
      cardCount={cardCount}
    >
      <ImgBox className={"imgbox"} color={data.img}>
        {data.id}
      </ImgBox>
      <TextBox className={"textbox"}>
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
