import { Link } from "react-router-dom";
import CardProds from "../../components/CardProds";

import CarouselBanner from "../../components/Carousel";
import Footer from "../../components/Footer";
import { Titulo } from "../../components/InfoClient/styles";
import { MenuSearch } from "../../components/MenuSearch";
import { useFavoriteContext } from "../../providers/Favorites";

import { Container, Products } from "../CategoryPage/styles";

const Favorites = () => {
  const { favoritesProducts } = useFavoriteContext();

  return (
    <>
      <MenuSearch />
      <Container>
        {favoritesProducts.length !== 0 ? (
          <>
            <CarouselBanner />
            <h1>Meus produtos favoritos</h1>

            <Products>
              {favoritesProducts.map((item) => (
                <li key={item._id}>
                  <CardProds prod={item} favorite={true} />
                </li>
              ))}
            </Products>
            <Footer />
          </>
        ) : (
          <>
            <Titulo>Você não adicionou nada aos favoritos</Titulo>
            <Link to="/">Voltar as compras</Link>
          </>
        )}
      </Container>
    </>
  );
};

export default Favorites;
