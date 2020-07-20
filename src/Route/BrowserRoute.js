import React from "react";
import { Route, Switch } from "react-router-dom";
import Content from "../Components/Contents/Contents";
import Empty from "../Components/Contents/Empty";

const BrowserRoute = ({
  width,
  cardWidth,
  cardHeight,
  cardCount,
  tag,
  setTag,
  setClick,
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
        />
      </Route>
      <Route exact path="/blog" component={Empty} />
      <Route exact path="/contact-us" component={Empty} />
    </Switch>
  );
};

export default BrowserRoute;
