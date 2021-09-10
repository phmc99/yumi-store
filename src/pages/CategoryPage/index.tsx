import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardProds from "../../components/CardProds";

import CarouselBanner from "../../components/Carousel";
import api from "../../services";

import { IProducts } from "../../types";
import { Container, Products } from "./styles";

const CategoryPage = () => {
  const [products, setProducts] = useState([] as IProducts[]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getProducts = async () => {
      await api
        .get(`/products?category=${id}`)
        .then((response) => setProducts(response.data));
    };
    getProducts();
  }, [id]);

  return (
    <>
      <CarouselBanner />
      <Container>
        {id === "1" ? <h1>Beleza e Higiene</h1> : null}
        {id === "2" ? <h1>Alimentação</h1> : null}
        {id === "3" ? <h1>Acessórios</h1> : null}
        {id === "4" ? <h1>Brinquedos</h1> : null}
        {id === "5" ? <h1>Roupas</h1> : null}

        <Products>
          {products.map((item) => (
            <li key={item.id}>
              <CardProds prod={item} />
            </li>
          ))}
        </Products>
      </Container>
    </>
  );
};

export default CategoryPage;
