import React from "react";
import { HashRouter as Hash, Route, Switch } from "react-router-dom";
import Content from "../Components/Contents/Contents";

const HashRoute = ({
  width,
  cardWidth,
  cardHeight,
  cardCount,
  tag,
  setTag,
}) => {
  return (
    <Hash>
      <Switch>
        <Route exact path="/print">
          {setTag(0)}
          <Content
            width={width}
            cardwidth={cardWidth}
            cardheight={cardHeight}
            cardcount={cardCount}
            tag={tag}
          />
        </Route>
      </Switch>
    </Hash>
  );
};

export default HashRoute;
