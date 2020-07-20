import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const Wrapper = styled.div`
  position: absolute;
  width: ${(props) => props.width - 10}px;
  height: ${(props) => props.height - 140}px;
  z-index: 2;
`;
const OpacityBackground = styled.div`

  display:flex;
  align-items:center;
  justify-content:center;
  width: 100%;
  height: ${(props) => (props.click ? 100 : 0)}%;
  background-color: rgba(255,255,255,0.5);
  transition: linear height 2s;
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

const Modal = ({ width, height, click }) => {
  return (
    <>
      {height !== undefined && (
        <Wrapper width={width} height={height}>
          <OpacityBackground width={width} height={height} click={click}>
            <div>테스트</div>
          </OpacityBackground>
          <Footer />
        </Wrapper>
      )}
    </>
  );
};

export default Modal;
