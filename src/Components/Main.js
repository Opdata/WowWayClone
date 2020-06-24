import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import Content from "./Contents/Contents";
import Data from "../Components/Contents/data";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  /* width: 100%; */
  height: fit-content;
  overflow: hidden;
`;

const Main = () => {
  const [tag, setTag] = useState(5);
  const [state, setState] = useState(false);
  let result = []; // 다시로드됨
  let CopyArray;

  const Sort = () => {
    const emptyArray = [];
    if (tag === 5) {
      result = result.concat(Data);
    } else {
      CopyArray = Data.concat();
      CopyArray.map((data, index) => {
        data.tag === tag && emptyArray.push(CopyArray.splice(index, 1)[0]);
        return 0;
      });
      result = [];
      result = emptyArray.concat(CopyArray);
    }
    return result;
  };

  const SortResult = Sort();

  return (
    <Wrapper>
      <Menu state={state} setState={setState} setTag={setTag} />
      <Content
        state={state}
        setState={setState}
        sortResult={SortResult}
        data={Data}
      />
    </Wrapper>
  );
};

export default Main;
