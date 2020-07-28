import React from "react";
import styled from "styled-components";
import button from "../../Assets/buttons.png";
import { FaGithub, FaStickyNote } from "react-icons/fa";
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
  background-size: cover;
  background-repeat: no-repeat;
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
  margin-bottom: 18px;
  font-weight: 700;
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
  min-height: 400px;
  color: ${(props) => props.theme.ModalText};
  margin-right: 21px;
`;

const Category = styled.div`
  font-size: 11px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid ${(props) => props.theme.MenuLine};
  border-bottom: 1px solid ${(props) => props.theme.MenuLine};
`;

const ExplainBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 1.5;
  margin: 18px 0;
`;

const OutLinkBox = styled.a`
  /*  */
  display: flex;
  font-size: 13px;
  margin: 25px 0;
  color: ${(props) => props.theme.HeaderBackground};
  text-decoration: none;
  cursor: pointer;
`;

const IconBox = styled.div`
  display: flex;
  height: fit-content;
  margin-bottom: 25px;
`;

const Icon = styled.a`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.IconColor};
  opacity: 0.5;

  :hover {
    transition: 0.3s linear;
    color: ${(props) => props.theme.MenuFocusBackground};
    opacity: 1;
  }
`;

const Modal = ({ width, height, click, setClick, modaldata }) => {
  const ClickEvent = () => {
    const root = document.querySelector("#root");
    root.classList.remove("noScroll");
    setClick(false);
  };

  return (
    <>
      {modaldata !== false && (
        <>
          <Wrapper width={width} height={height} click={click}>
            <ModalBox>
              <ImgBox url={modaldata.Modalimg} />
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
                      <Category>{modaldata.SubText.toUpperCase()}</Category>
                      <ExplainBox>
                        {modaldata.Explain.split("\n").map((line, index) => {
                          if (line === "") {
                            return <br key={index} />;
                          }
                          return <span key={index}>{line}</span>;
                        })}
                      </ExplainBox>
                      {modaldata.Tech !== undefined && (
                        <ExplainBox>
                          {modaldata.Tech.split("\n").map((line, index) => {
                            return <span key={index}>{line}</span>;
                          })}
                        </ExplainBox>
                      )}
                      {modaldata.Link !== "" && (
                        <OutLinkBox href={modaldata.Link}>링크</OutLinkBox>
                      )}
                      <IconBox>
                        {modaldata.Github !== "" && (
                          <Icon href={modaldata.Github}>
                            <FaGithub
                              style={{
                                width: "20px",
                                height: "20px",
                                paddingRight: "5px",
                              }}
                            />
                          </Icon>
                        )}
                        {modaldata.Notion !== "" && (
                          <Icon href={modaldata.Notion}>
                            <FaStickyNote
                              style={{
                                width: "20px",
                                height: "20px",
                                paddingRight: "5px",
                              }}
                            />
                          </Icon>
                        )}
                      </IconBox>
                    </ExPlainDiv>
                  </CategoryExPlainDiv>
                </TextDiv>
              </TextBox>
            </ModalBox>
          </Wrapper>
          {click && <Footer />}
        </>
      )}
    </>
  );
};

export default Modal;
