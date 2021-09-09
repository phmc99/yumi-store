import { Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import {Products}  from "../pages/Products/Index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </Switch>
  );
};

export default Routes;
