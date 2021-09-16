import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardProds from "../../components/CardProds";

import CarouselBanner from "../../components/Carousel";
import Footer from "../../components/Footer";
import { MenuSearch } from "../../components/MenuSearch";
import ScrollButton from "../../components/ScrollButton";
import { useProducts } from "../../providers/Products";

import { IProducts } from "../../types";
import { Container, Products } from "../CategoryPage/styles";

const SpeciesPage = () => {
  const [filterProducts, setFilterProducts] = useState<IProducts[]>([]);
  const { specie } = useParams<{ specie: string }>();
  const { products } = useProducts();

  useEffect(() => {
    let filteredProducts = products.filter((item) => item.specie === specie);
    setFilterProducts(filteredProducts);
  }, [products, specie]);

  return (
    <>
      <MenuSearch />
      <CarouselBanner />
      <Container>
        {specie === "cachorro" ? <h1>Cachorros</h1> : <h1>Gatos</h1>}

        <p>Aqui você encontra os melhores produtos para o seu pet!</p>
        <p>Da melhor qualidade com o menor preço!</p>

        <Products>
          {filterProducts.map((item) => (
            <li key={item._id}>
              <CardProds prod={item} />
            </li>
          ))}
        </Products>
        <ScrollButton />
      </Container>
      <Footer />
    </>
  );
};

export default SpeciesPage;
