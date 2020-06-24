import { Route, Switch } from "react-router-dom";
import Main from "../Components/Main";

const Route = () => {
  <Switch>
    <Route exact path="/" Component={Main} />
    <Route exact path="/blog" Component={Main} />
    <Route exact path="/contact-us" Component={Main} />
  </Switch>;
};

export default Route;
