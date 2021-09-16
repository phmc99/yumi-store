import { useParams } from "react-router-dom";
import CardProds from "../../components/CardProds";

import CarouselBanner from "../../components/Carousel";
import Footer from "../../components/Footer";
import { MenuSearch } from "../../components/MenuSearch";
import ScrollButton from "../../components/ScrollButton";
import { useProducts } from "../../providers/Products";

import { Container, BrandImages, Products } from "../CategoryPage/styles";

const BrandPage = () => {
  const { products } = useProducts();

  const { id } = useParams<{ id: string }>();

  const productsBrandRoyal = products.filter(({ name }) =>
    name.includes("Royal Canin")
  );

  const productsBrandIbasa = products.filter(({ name }) =>
    name.includes("Ibasa")
  );

  const productsBrandBeeps = products.filter(({ name }) =>
    name.includes("Beeps")
  );

  return (
    <>
      <MenuSearch />
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

            <Products>
              {productsBrandRoyal.map((item) => (
                <li key={item._id}>
                  <CardProds prod={item} />
                </li>
              ))}
            </Products>
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
                  src="https://lh3.googleusercontent.com/proxy/RIT2e34S9F3HRh8B0KVcdp0FB8AGn3i9imRAA-k0ecAF7-mGcUS4Sy8YrpTFqrWcOkalmNvpd0aooP5RwVFaBcoAvICpyKKVv7eg-VwJGvk2VPcg2ZkT3jMBeA"
                  alt="Beeps"
                />
              </div>
              <p>
                Só aqui você encontra os melhores produtos da Ibasa e da Beeps
                com os melhores preços!
              </p>
            </BrandImages>{" "}
            <Products>
              {productsBrandIbasa.map((item) => (
                <li key={item._id}>
                  <CardProds prod={item} />
                </li>
              ))}
              {productsBrandBeeps.map((item) => (
                <li key={item._id}>
                  <CardProds prod={item} />
                </li>
              ))}
            </Products>
          </>
        ) : null}
        <ScrollButton />
      </Container>
      <Footer />
    </>
  );
};

export default BrandPage;
