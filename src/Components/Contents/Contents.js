import React, { useRef, useState } from "react";
import styled from "styled-components";
import ElementWidth from "../../Hooks/ElementSizeHooks";
import Header from "./Header";
import Footer from "./Footer";
import Data from "./data";

const Box = styled.div`
  /*  */
  width: 100%;
  height: 100%;
  /* padding-right: -10px; */

  transform: ${(props) => props.state === true && "translateX(280px)"};
  transition: transform 0.8s;
  /* z-index: 3; */
`;

const ContentBox = styled.div`
  display: flex;
  margin-left: 10px;
  width: ${(props) => props.width - 10}px;
  height: ${(props) => (props.width - 10) * 0.75}px;
  background-color: grey;
`;

const ContentDiv = styled.div`
  /* row col */
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  /* top: ${(props) => props.row * props.height + 70}px; */
  /* left: ${(props) => props.col * props.width}px; */
  transform: translateX(${(props) => props.col * props.width}px);
  /* background-color: red; */
  /* border: 1px solid black; */
`;

const ImgBox = styled.div`
  /*  */
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
`;

const TextBox = styled.div`
  /*  */
`;

const TextDiv = styled.div`
  /*  */
`;

const Content = ({ state, setState }) => {
  const ref = useRef(null);
  const Width = ElementWidth(ref);
  const ColCount = 4;
  let RowNumber = 0;
  let ColWidth;
  let ColHeight;

  if (ref.current !== null) {
    // console.log(ref.current);
    ColWidth = Width / ColCount;
    ColHeight = ColWidth * 0.75;
  }

  return (
    <Box ref={ref} state={state}>
      <Header state={state} setState={setState} />

      {ref && ColWidth && ColHeight && (
        <ContentBox width={Width}>
          {Data.map((data, index) => {
            if (index < 4) {
              const ColNumber = index % ColCount; // 나머지
              if (ColNumber === 0 && index >= ColCount) {
                RowNumber++;
              }
              // console.log(RowNumber);
              // console.log(ColNumber);
              // console.log(
              //   "좌표 x,y : ",
              //   ColNumber * ColWidth,
              //   RowNumber * ColHeight
              // );
              /*
              return (
                <ContentDiv
                  key={index}
                  width={ColWidth}
                  height={ColHeight}
                  row={RowNumber}
                  col={ColNumber}
                >
                  <ImgBox color={data.img} />
                  {/* <TextBox>
              <TextDiv>{data.id}</TextDiv>
            </TextBox> }
                </ContentDiv>
              );
              */
            }
          })}
        </ContentBox>
      )}
      <Footer />
    </Box>
  );
};

export default Content;
