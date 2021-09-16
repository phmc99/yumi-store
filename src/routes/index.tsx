import { Route, Switch } from "react-router-dom";

//Páginas
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { FilteredProducts } from "../pages/FilteredProducts";
import { NotFoundFilteredProducts } from "../pages/NotFoundProducts";
import SpeciesPage from "../pages/SpeciesPage";
import CategoryPage from "../pages/CategoryPage";
import BrandPage from "../pages/BrandPage";
import CartPage from "../pages/CartPage";
import Favorites from "../pages/Favorites";
import Error from "../pages/Error";
import Product from "../pages/Product/Index";
import InfoPage from "../pages/InfoPage";
import Adoption from "../pages/Adoption";
import Checkout from "../pages/CheckOut";
import { YumiClub } from "../pages/YumiClub";
import AboutUs from "../pages/AboutUs";
import Promotion from "../pages/Promotion";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/register">
        <RegisterPage />
      </Route>

      <Route path="/login">
        <LoginPage />
      </Route>

      <Route exact path="/products/:id">
        <Product />
      </Route>

      <Route exact path="/products/filtered/:name">
        <FilteredProducts />
      </Route>

      <Route exact path="/not-found">
        <NotFoundFilteredProducts />
      </Route>

      <Route path="/products/species/:specie">
        <SpeciesPage />
      </Route>

      <Route path="/products/category/:id">
        <CategoryPage />
      </Route>

      <Route path="/products/brand/:id">
        <BrandPage />
      </Route>

      <Route path="/cart">
        <CartPage />
      </Route>

      <Route path="/checkout/:id">
        <Checkout />
      </Route>

      <Route path="/favorite">
        <Favorites />
      </Route>

      <Route path="/info">
        <InfoPage />
      </Route>

      <Route path="/adote">
        <Adoption />
      </Route>

      <Route path="/yumiclub">
        <YumiClub />
      </Route>

      <Route path="/aboutus">
        <AboutUs />
      </Route>

      <Route path="/adoption">
        <Adoption />
      </Route>

      <Route path="/products/promotion/inverno">
        <Promotion />
      </Route>

      <Route>
        <Error />
      </Route>
    </Switch>
  );
};

export default Routes;
