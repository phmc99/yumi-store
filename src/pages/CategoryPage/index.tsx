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
import { Container, Products } from "./styles";

const CategoryPage = () => {
  const [filterProducts, setFilterProducts] = useState<IProducts[]>([]);
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();

  useEffect(() => {
    let filteredProducts = products.filter(
      (item) => item.category === Number(id)
    );
    setFilterProducts(filteredProducts);
  }, [id, products]);

  return (
    <>
      <MenuSearch />
      <CarouselBanner />
      <Container>
        {id === "1" ? <h1>Beleza e Higiene</h1> : null}
        {id === "2" ? <h1>Alimentação</h1> : null}
        {id === "3" ? <h1>Acessórios</h1> : null}
        {id === "4" ? <h1>Brinquedos</h1> : null}
        {id === "5" ? <h1>Roupas</h1> : null}

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

export default CategoryPage;
