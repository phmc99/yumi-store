import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardProds from "../../components/CardProds";

import CarouselBanner from "../../components/Carousel";
import api from "../../services";

import { IProducts } from "../../types";
import { Container, BrandImages, Products } from "../CategoryPage/styles";

const BrandPage = () => {
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
        {id === "royalcannin" ? (
          <>
            <h1>Royal Canin</h1>
            <BrandImages>
              <img
                src="https://coroapremiada.com.br/_nuxt/img/676de13.png"
                alt="Royal Canin"
              />
              <p>
                Só aqui você encontra os melhores produtos da Royal Canin com os
                melhores preços!
              </p>{" "}
            </BrandImages>
          </>
        ) : null}

        {id === "ibasaebeeps" ? (
          <>
            <h1>Ibasa & Beeps</h1>
            <BrandImages>
              <div className="brands">
                <img
                  src="https://cdn.dooca.store/597/files/ibasa-logo-vermelho.svg?v=1594674870&webp=0"
                  alt="Ibasa"
                />
                <img
                  src="https://lh3.googleusercontent.com/proxy/_koREhJIOoPDt_GoOXGoKWeBVDWMiSBZTG9NaqNKrRsxsu_Wy3PJ35lvPisQk2AveloeRBRLMZx3Mq-B5teFbfwqdDmXTVzhJDQEj0orCSXtW_zjvZtd2D_E2Q"
                  alt="Beeps"
                />
              </div>
              <p>
                Só aqui você encontra os melhores produtos da Ibasa e da Beeps
                com os melhores preços!
              </p>
            </BrandImages>{" "}
          </>
        ) : null}

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

export default BrandPage;
