import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    <Router>
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
        <Route exact path="/blog">
          <Empty />
        </Route>
        <Route exact path="/contact-us">
          <Empty />
        </Route>
      </Switch>
    </Router>
  );
};

export default BrowserRoute;
