import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const Wrapper = styled.div`
  display: flex;
  width: ${(props) => props.width - 10}px;
  height: ${(props) => props.height - 140}px;
  align-items: center;
  justify-content: center;
  transform: translateX(${(props) => (props.click ? "0%" : "80%")});
  transition: transform 0.4s;
  transition-delay: 0.5s;
`;

const ModalBox = styled.div`
  display: flex;
  width: 1050px;
  height: 500px;
`;

const ImgBox = styled.div`
  width: 750px;
  height: 100%;
  background-color: green;
`;

const TextBox = styled.div`
  width: 300px;
  padding: 30px 0 30px 30px;
  background-color: ${(props) => props.theme.ModalBackground};
`;

const TitleBox = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.HeaderBackground};
`;

const TextSubBox = styled.div`
  /*  */
  color: ${(props) => props.theme.ModalText};
`;

const Category = styled.div`
  /*  */
  font-size: 11px;
`;

const ExplainBox = styled.div`
  /*  */
  font-size: 13px;
`;

const OutLinkBox = styled.div`
  /*  */
  font-size: 13px;
`;

const CloseButton = styled.div`
  /*  */
`;

const SocialButton = styled.div`
  /*  */
`;

const Modal = ({ width, height, click, setClick }) => {
  return (
    <>
      <Wrapper width={width} height={height} click={click}>
        <ModalBox>
          <ImgBox />
          <TextBox>
            <TitleBox>제목</TitleBox>
            <TextSubBox>
              <Category>카테고리</Category>
              <ExplainBox>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </ExplainBox>
              <OutLinkBox>주소</OutLinkBox>
            </TextSubBox>
            <CloseButton onClick={() => setClick(false)}>닫기</CloseButton>
          </TextBox>
        </ModalBox>
      </Wrapper>
      {click && <Footer />}
    </>
  );
};

export default Modal;
