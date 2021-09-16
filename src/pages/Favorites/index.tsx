import { Link } from "react-router-dom";
import CardProds from "../../components/CardProds";
import CarouselBanner from "../../components/Carousel";

import Footer from "../../components/Footer";
import { Titulo } from "../../components/InfoClient/styles";
import { MenuSearch } from "../../components/MenuSearch";
import ScrollButton from "../../components/ScrollButton";
import { useFavoriteContext } from "../../providers/Favorites";

import { Container, Products } from "../CategoryPage/styles";

const Favorites = () => {
  const { favoritesProducts } = useFavoriteContext();

  return (
    <>
      <MenuSearch />
      {favoritesProducts.length !== 0 ? (
        <>
          <CarouselBanner />
          <Container>
            <h1>Meus produtos favoritos</h1>

            <Products>
              {favoritesProducts.map((item) => (
                <li key={item._id}>
                  <CardProds prod={item} favorite={true} />
                </li>
              ))}
            </Products>
          </Container>
          <Footer />
        </>
      ) : (
        <Container>
          <Titulo>Você não adicionou nada aos favoritos</Titulo>
          <Link to="/">Voltar as compras</Link>
        </Container>
      )}
      <ScrollButton />
    </>
  );
};

export default Favorites;
