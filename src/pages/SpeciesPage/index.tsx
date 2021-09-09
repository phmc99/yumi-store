import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import CarouselBanner from "../../components/Carousel";
import api from "../../services";

import { IProducts } from "../../types";
import { Container } from "../CategoryPage/styles";

const SpeciesPage = () => {
  const [products, setProducts] = useState([] as IProducts[]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getProducts = async () => {
      await api
        .get(`/products?species=${id}`)
        .then((response) => setProducts(response.data));
    };
    getProducts();
  }, [id]);

  return (
    <>
      <CarouselBanner />
      <Container>
        {id === "1" ? <h1>Cachorros</h1> : <h1>Gatos</h1>}

        <p>Aqui você encontra os melhores produtos para o seu pet!</p>
        <p>Da melhor qualidade com o menor preço!</p>

        <ul>
          {products.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default SpeciesPage;
