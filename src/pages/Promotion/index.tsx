import CardProds from "../../components/CardProds";

import CarouselBanner from "../../components/Carousel";
import Footer from "../../components/Footer";
import { MenuSearch } from "../../components/MenuSearch";
import { useProducts } from "../../providers/Products";

import { Container, Products } from "../CategoryPage/styles";

const Promotion = () => {
  const { products } = useProducts();

  const productsMeias = products.filter(({ name }) => name.includes("Meia"));

  const productsColete = products.filter(({ name }) => name.includes("Colete"));

  const productsCamiseta = products.filter(({ name }) =>
    name.includes("Camiseta")
  );

  return (
    <>
      <MenuSearch />
      <CarouselBanner />
      <Container>
        <h1>Saldão de Inverno</h1>
        <Products>
          {productsCamiseta.map((item) => (
            <li key={item._id}>
              <CardProds prod={item} />
            </li>
          ))}
          {productsColete.map((item) => (
            <li key={item._id}>
              <CardProds prod={item} />
            </li>
          ))}
          {productsMeias.map((item) => (
            <li key={item._id}>
              <CardProds prod={item} />
            </li>
          ))}
        </Products>
      </Container>
      <Footer />
    </>
  );
};

export default Promotion;
