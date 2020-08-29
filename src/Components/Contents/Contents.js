import React from "react";
import data from "./data";
import Card from "./Card";

const Content = ({
  width,
  cardWidth,
  cardHeight,
  cardCount,
  tag,
  setClick,
  setModalData,
}) => {
  let result = [];
  let CopyArray;

  const Sort = () => {
    if (tag === 6) {
      result = result.concat(data);
    } else {
      CopyArray = data.concat();
      result = CopyArray.filter((data) => data.tag === tag);
      result = result.concat(CopyArray.filter((data) => data.tag !== tag));
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
              tag={tag}
              setClick={setClick}
              setModalData={setModalData}
            />
          );
        })}
    </>
  );
};

export default Content;
