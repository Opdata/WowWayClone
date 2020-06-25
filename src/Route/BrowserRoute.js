import React from "react";
import {
  BrowserRouter as Router,
  HashRouter as Hash,
  Route,
  Switch,
} from "react-router-dom";
import Content from "../Components/Contents/Contents";
import empty from "../Components/Contents/empty";

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
        {/* <Route exact path="/">
          <Content
            width={width}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            cardCount={cardCount}
            tag={tag}
          /> 
          </Route>
          */}
        <Route
          exact
          path="/"
          Component={Content({
            width,
            cardWidth,
            cardHeight,
            cardCount,
            tag,
            setTag,
          })}
        />
      </Switch>
    </Router>
  );
};

export default BrowserRoute;

/* <Route
          exact
          path="/"
          Component={Content({
            width,
            cardWidth,
            cardHeight,
            cardCount,
            tag,
            setTag,
          })}
        /> */
/* <Hash basename={"/#"}>
          <Route exact path="/port"></Route>
          <Route exact path="/print"></Route>
          <Route exact path="/web-design" />
          <div>design</div>
        </Hash>
        <Route exact path="/blog" Component={empty} /> // 이상없음
        <Route exact path="/contact-us" Component={empty} /> // 이상없음 */
/*          <Content
            width={width}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            cardCount={cardCount}
            tag={tag}
          /> */

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Content from "../Components/Contents/Contents";
// import empty from "../Components/Contents/empty";

// const BrowserRoute = ({
//   width,
//   cardWidth,
//   cardHeight,
//   cardCount,
//   tag,
//   setTag,
// }) => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <Content
//             width={width}
//             cardwidth={cardWidth}
//             cardheight={cardHeight}
//             cardcount={cardCount}
//             tag={5}
//           />
//         </Route>
//         <Route exact path="/blog" Component={empty} />
//         <Route exact path="/contact-us" Component={empty} />
//       </Switch>
//     </Router>
//   );
// };

// export default BrowserRoute;
