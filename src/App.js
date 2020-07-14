import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import GlobalStyle from "./Styles/GlobalStyles";
import ElementWidth from "./Hooks/ElementSizeHooks";
import Menu from "./Components/Menu/Menu";
import Header from "./Components/Contents/Header";
import data from "./Components/Contents/data";
import Footer from "./Components/Contents/Footer";
import BrowserRoute from "./Route/BrowserRoute";
import { BrowserRouter } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  overflow: hidden;
`;

const Box = styled.div`
  width: ${(props) => props.width - 10}px;
  min-height: 1000px;
  margin-left: 10px;
  transform: ${(props) => props.state === true && "translateX(280px)"};
  transition-property: transform;
  transition-duration: 0.6s;
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 860px;
  height: ${(props) =>
    props.row && props.cardheight && props.row * props.cardheight}px;
  background-color: ${(props) => props.theme.ContentBoxBackground};
`;

const OpacityBackground = styled.div`
  z-index: 2;
  display: flex;
  width: ${(props) => props.width - 10}px;
  height: 0%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ); 
  ${(props) =>
    props.click &&
    `
  height: 100%;
  transition: linear height 0.4s`}

  /*
  성능 고려한 다른 방법(전체 화면에서 translate)
  transform: translateY(-120%);
   background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ); 

  ${(props) =>
    props.click &&
    `  transform: translateY(0%);
  transition: linear transform 0.1s;`}
  */
`;

const App = () => {
  const [tag, setTag] = useState(5);
  const [state, setState] = useState(false);
  const [click, setClick] = useState(false);
  const Width = ElementWidth();

  let CardCount; // 2115부터 6개  1695 부터 5개 1275 부터 4개 980부터 태블릿
  //855 부터 3개 // 435부터 2개

  let ContentRow;
  let CardWidth;
  let CardHeight;

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

    if (data.length % CardCount === 0) {
      ContentRow = data.length / CardCount;
    } else {
      ContentRow = data.length / CardCount + 1;
    }
  }

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Menu state={state} setState={setState} tag={tag} setTag={setTag} />
          <Box
            state={state}
            width={Width}
            onMouseEnter={() => {
              setState(false);
            }}
          >
            <Header />
            <ContentBox row={parseInt(ContentRow)} cardheight={CardHeight}>
              <OpacityBackground width={Width} click={click} />
              {Width !== undefined && (
                <BrowserRoute
                  width={Width}
                  cardWidth={CardWidth}
                  cardHeight={CardHeight}
                  cardCount={CardCount}
                  tag={tag}
                  setTag={setTag}
                  setClick={setClick}
                />
              )}
            </ContentBox>
            <Footer />
          </Box>
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
