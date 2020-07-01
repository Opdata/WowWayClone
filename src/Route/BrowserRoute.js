import React from "react";
import { Route, Switch } from "react-router-dom";
import Content from "../Components/Contents/Contents";
import Empty from "../Components/Contents/empty";

const BrowserRoute = ({
  width,
  cardWidth,
  cardHeight,
  cardCount,
  tag,
  setTag,
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
        />
      </Route>
      <Route exact path="/blog" component={Empty} />
      <Route exact path="/contact-us" component={Empty} />
    </Switch>
  );
};

export default BrowserRoute;
