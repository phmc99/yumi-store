import CardProds from "../../components/CardProds";

import CarouselBanner from "../../components/Carousel";
import { MenuSearch } from "../../components/MenuSearch";
import { useFavoriteContext } from "../../providers/Favorites";

import { Container, Products } from "../CategoryPage/styles";

const Favorites = () => {
  const { favoritesProducts } = useFavoriteContext();

  return (
    <>
      <MenuSearch />
      <CarouselBanner />
      <Container>
        <h1>Meus produtos favoritos</h1>

        <Products>
          {favoritesProducts.map((item) => (
            <li key={item.id}>
              <CardProds prod={item} favorite={true} />
            </li>
          ))}
        </Products>
      </Container>
    </>
  );
};

export default Favorites;
