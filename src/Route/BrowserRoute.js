import React from "react";
import { Route, Switch } from "react-router-dom";
import Content from "../Components/Contents/Contents";

const BrowserRoute = ({
  width,
  cardWidth,
  cardHeight,
  cardCount,
  tag,
  setTag,
  setClick,
  setModalData,
}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Content
          width={width}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          cardCount={cardCount}
          tag={tag}
          setTag={setTag}
          setClick={setClick}
          setModalData={setModalData}
        />
      </Route>
    </Switch>
  );
};

export default BrowserRoute;
