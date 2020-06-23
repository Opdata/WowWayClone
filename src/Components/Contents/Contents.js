import React, { useState } from "react";
import styled from "styled-components";
import ElementWidth from "../../Hooks/ElementSizeHooks";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import Data from "./data";

const Box = styled.div`
  /*  */
  width: ${(props) => props.width - 10}px;
  min-height: 1000px;
  margin-left: 10px;
  background-color: grey;
  transform: ${(props) => props.state === true && "translateX(280px)"};
  transition-property: transform;
  transition-duration: 0.6s;
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) =>
    props.row && props.cardheight && props.row * props.cardheight}px;
  background-color: grey;
`;

const Content = ({ state }) => {
  const [tag, setTag] = useState(4);
  const Width = ElementWidth();
  let CardCount; // 2115부터 6개  1695 부터 5개 1275 부터 4개 980부터 태블릿
  //855 부터 3개 // 435부터 2개

  let ContentRow;
  let CardWidth;
  let CardHeight;
  let result = []; // 다시로드됨
  let CopyArray;

  if (Width !== undefined) {
    if (Width >= 2132) {
      CardCount = 6;
    } else if (Width >= 1712) {
      CardCount = 5;
    } else if (Width >= 1292) {
      CardCount = 4;
    } else if (Width >= 872) {
      CardCount = 3;
    } else if (Width > 452) {
      CardCount = 2;
    } else {
      CardCount = 1;
    }

    CardWidth = (Width - 10) / CardCount;
    CardHeight = CardWidth * 0.75;

    if (Data.length % CardCount === 0) {
      ContentRow = Data.length / CardCount;
    } else {
      ContentRow = Data.length / CardCount + 1;
    }
  }

  const Sort = () => {
    const emptyArray = [];
    if (tag === 4) {
      result = result.concat(Data);
    } else {
      CopyArray = Data.concat();
      CopyArray.map((data, index) => {
        if (data.tag === tag) {
          emptyArray.push(CopyArray.splice(index, 1)[0]);
        }
      });
      result = [];
      result = emptyArray.concat(CopyArray);
    }
    return result;
  };

  const SortResult = Sort();

  return (
    <Box state={state} width={Width}>
      <Header tag={tag} setTag={setTag} sort={Sort} />
      <ContentBox row={parseInt(ContentRow)} cardheight={CardHeight}>
        {Width !== undefined &&
          Data.map((data, index) => {
            const sortIndex = SortResult.findIndex((x) => x.id === data.id);
            return (
              <Card
                key={index}
                width={CardWidth}
                height={CardHeight}
                cardCount={CardCount}
                sortIndex={sortIndex}
                data={data}
              />
            );
          })}
      </ContentBox>
      <Footer />
    </Box>
  );
};

export default Content;

// transition 작동 원리
// 옮기는 작업 어떻게 해야할지

/* {Data.map((data, index) => {
  const ColNumber = index % CardCount; // 나머지
  if (ColNumber === 0 && index >= CardCount) {
    RowNumber++;
  }

  return (
    <ContentDiv
      key={index}
      width={CardWidth}
      height={CardHeight}
      y={RowNumber}
      x={String(ColNumber)}
    >
      <ImgBox className={"imgbox"} color={data.img} />
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
})} */
