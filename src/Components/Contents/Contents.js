import React from "react";
import data from "./data";
import Card from "./Card";

const Content = ({ width, cardWidth, cardHeight, cardCount, tag, setTag }) => {
  let result = []; // 다시로드됨
  let CopyArray;

  const Sort = () => {
    const emptyArray = [];
    if (tag === 5) {
      result = result.concat(data);
    } else {
      CopyArray = data.concat();
      CopyArray.map((data, index) => {
        data.tag === tag && emptyArray.push(CopyArray.splice(index, 1)[0]);
        return 0;
      });
      result = [];
      result = emptyArray.concat(CopyArray);
    }
    return result;
  };

  const sortResult = Sort();

  return (
    <>
      {width !== undefined &&
        data.map((data, index) => {
          const sortIndex = sortResult.findIndex((x) => x.id === data.id);
          return (
            <Card
              key={index}
              width={cardWidth}
              height={cardHeight}
              cardCount={cardCount}
              sortIndex={sortIndex}
              data={data}
            />
          );
        })}
    </>
  );
};

export default Content;
