import React, { useState } from "react";
import styled from "styled-components";
import ElementWidth from "../../Hooks/ElementSizeHooks";
import Header from "./Header";
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

const ContentDiv = styled.div`
  /* row col */
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transform: translate(
    ${(props) => ((props.number % props.cardcount) - props.re) * props.width}px,
    ${(props) =>
      (parseInt(props.number / props.cardcount) - props.quo) *
      props.width *
      0.75}px
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

const Content = ({ state }) => {
  const [tag, setTag] = useState(0);
  const [a, setA] = useState(false);
  // const [arraysort, arraysetSort] = useState(false);
  const Width = ElementWidth();
  let CardCount; // 2115부터 6개  1695 부터 5개 1275 부터 4개 980부터 태블릿
  //855 부터 3개 // 435부터 2개

  let ContentRow;
  let RowNumber = 0;
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

  const sort = () => {
    const emptyArray = [];
    // if (result.length === 0) {
    //   console.log("진입");
    //   result = Data.concat();
    // } else {
    //   console.log("진입1");
    //   CopyArray = Data.concat();
    //   CopyArray.map((data, index) => {
    //     if (data.tag === tag) {
    //       emptyArray.push(CopyArray.splice(index, 1)[0]);
    //     }
    //   });
    //   result = emptyArray.concat(CopyArray);
    //   console.log(result);
    // }
    CopyArray = Data.concat();
    CopyArray.map((data, index) => {
      if (data.tag === tag) {
        emptyArray.push(CopyArray.splice(index, 1)[0]);
      }
    });
    result = emptyArray.concat(CopyArray);
    console.log(result);
  };

  sort();
  return (
    <Box state={state} width={Width}>
      <Header tag={tag} setTag={setTag} />
      <ContentBox row={parseInt(ContentRow)} cardheight={CardHeight}>
        {Width !== undefined &&
          result.map((data, index) => {
            let Number = 0;
            let quotient = 0;
            let remainder = 0;

            if (index !== data.id) {
              // Number = index - data.id;
              // console.log("같지않을떄 index, data.id : ", index, data.id);
              // quotient = parseInt(Number / CardCount); // 몫
              // remainder = parseInt(Number % CardCount); // 나머지
              // if ((data.id % CardCount) + remainder >= 4) {
              //   quotient += 1;
              // }
              // if (index < data.id && data.id % CardCount === 0) {
              //   quotient -= 1;
              //   remainder = parseInt(data.id / CardCount);
              // }
              // console.log("차이, 몫, 나머지 :", Number, quotient, remainder);
              console.log("같지않을떄 index, data.id : ", index, data.id);
              const indexQuo = parseInt(index / CardCount);
              const indexRe = index % CardCount;
              console.log("index 몫 나머지", indexQuo, indexRe);
              const dataQuo = parseInt(data.id / CardCount);
              const dataRe = data.id % CardCount;
              console.log("data 몫, 나머지", dataQuo, dataRe);
              if (index > data.id) {
                //
                Number = index;
                quotient = indexQuo - dataQuo;
                remainder = indexRe - dataRe;
              } else if (index < data.id) {
                //
                Number = data.id;
                quotient = dataQuo - indexQuo;
                remainder = dataRe - indexRe;
              }
              console.log(
                "조건 후 Number 몫 나머지",
                Number,
                quotient,
                remainder
              );
            } else {
              // console.log(index, data.id);
              // console.log("같을떄");
            }

            return (
              <ContentDiv
                key={index}
                width={CardWidth}
                height={CardHeight}
                cardcount={CardCount}
                quo={quotient}
                re={remainder}
                number={Number}
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
