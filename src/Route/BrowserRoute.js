import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Content from "../Components/Contents/Contents";

const BrowserRoute = ({ width, cardWidth, cardHeight, cardCount }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Content
            width={width}
            cardwidth={cardWidth}
            cardheight={cardHeight}
            cardcount={cardCount}
          />
        </Route>
        {/* <Route exact path="/blog" Component={Main} /> */}
        {/* <Route exact path="/contact-us" Component={Main} /> */}
      </Switch>
    </Router>
  );
};

export default BrowserRoute;
