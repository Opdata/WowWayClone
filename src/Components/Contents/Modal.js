import React from "react";
import styled from "styled-components";
import button from "../../Assets/buttons.png";
import Footer from "./Footer";

const Wrapper = styled.div`
  display: flex;
  width: ${(props) => props.width - 10}px;
  height: ${(props) => props.height - 140}px;
  align-items: center;
  justify-content: center;
  transform: translateX(${(props) => (props.click ? "0" : "80%")});
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
  height: 500px;
  background-image: url(${(props) => props.url});
`;

const TextBox = styled.div`
  width: 270px;
  height: 470px;
  padding: 0 0 30px 30px;
  background-color: ${(props) => props.theme.ModalBackground};
`;

const CloseBox = styled.div`
  display: flex;
  height: 30px;
  justify-content: flex-end;
`;

const Button = styled.div`
  display: flex;
  width: 20px;
  height: 25px;
  align-items: center;
  padding-top: 5px;
  padding-left: 10px;
  background-color: ${(props) => props.theme.MenuFocusBackground};
  cursor: pointer;
`;

const ButtonImage = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 440px;
`;

const TitleBox = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.HeaderBackground};
  margin-bottom: 15px;
`;

const CategoryExPlainDiv = styled.div`
  margin-right: 6px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.ModalBackground};
  }
  ::-webkit-scrollbar-thumb {
    height: 100px;
    background-color: ${(props) => props.theme.ModalBackground};
    border-radius: 10px;
  }
  :hover {
    ::-webkit-scrollbar {
      background-color: ${(props) => props.theme.ModalScrollBackground};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.MenuFocusBackground};
    }
  }
`;

const ExPlainDiv = styled.div`
  min-height: 1200px;
  color: ${(props) => props.theme.ModalText};
  margin-right: 21px;
`;

const Category = styled.div`
  font-size: 11px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid ${(props) => props.theme.ModalText};
  border-bottom: 1px solid ${(props) => props.theme.ModalText};
`;

const ExplainBox = styled.div`
  font-size: 13px;
  line-height: 1.5;
  margin: 18px 0;
`;

const OutLinkBox = styled.div`
  /*  */
  font-size: 13px;
  margin: 18px 0;
`;

const SocialButton = styled.div`
  /*  */
`;

const Modal = ({ width, height, click, setClick, modaldata }) => {
  const ClickEvent = () => {
    const root = document.querySelector("#root");
    root.classList.remove("noScroll");
    setClick(false);
  };
  return (
    <>
      <Wrapper width={width} height={height} click={click}>
        <ModalBox>
          <ImgBox url={modaldata.img} />
          <TextBox>
            <CloseBox>
              <Button onClick={() => ClickEvent()}>
                <ButtonImage url={button} />
              </Button>
            </CloseBox>
            <TextDiv>
              <TitleBox>{modaldata.Text}</TitleBox>
              <CategoryExPlainDiv>
                <ExPlainDiv>
                  <Category>{modaldata.SubText}</Category>
                  <ExplainBox>{modaldata.Explain}</ExplainBox>
                  <OutLinkBox>{modaldata.Link}</OutLinkBox>
                </ExPlainDiv>
              </CategoryExPlainDiv>
            </TextDiv>
          </TextBox>
        </ModalBox>
      </Wrapper>
      {click && <Footer />}
    </>
  );
};

export default Modal;
