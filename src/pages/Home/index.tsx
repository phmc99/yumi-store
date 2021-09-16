import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CarouselBanner from "../../components/Carousel";
import { Images, HoverText, Details, Category, More } from "./styles";
import { IProducts } from "../../types";
import { AiOutlinePlus } from "react-icons/ai";
import Footer from "../../components/Footer";
import { MenuSearch } from "../../components/MenuSearch";
import { useProducts } from "../../providers/Products";

//Carrossel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//Images
import Dogs from "../../assets/cachorros.png";
import Cats from "../../assets/gatos.png";
import Food from "../../assets/alimentacao.png";
import Beauty from "../../assets/beleza.png";
import Delivery from "../../assets/entrega.png";
import Buy from "../../assets/compra.png";
import ONG from "../../assets/ong.png";
import Return from "../../assets/troca.png";
import CardProds from "../../components/CardProds";

const Home = () => {
  const { products } = useProducts();

  const [filterToys, setFilterToys] = useState<IProducts[]>([]);
  const [filterClothes, setFilterClothes] = useState<IProducts[]>([]);

  useEffect(() => {
    let filteredToys = products.filter((item) => item.category === 4);
    let filteredClothes = products.filter((item) => item.category === 5);
    setFilterToys(filteredToys);
    setFilterClothes(filteredClothes);
  }, [products]);

  const responsive = {
    desktopL: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1000 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1000, min: 730 },
      items: 3,
    },
    medium: {
      breakpoint: { max: 730, min: 470 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 470, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <MenuSearch />
      <CarouselBanner />
      <Images>
        <Link to="/products/species/cachorro">
          <HoverText>
            <img src={Dogs} alt="Cachorros" />
            <div className="text">
              <h3>Cachorros</h3>
            </div>
          </HoverText>
        </Link>

        <Link to="/products/species/gato">
          <HoverText>
            <img src={Cats} alt="Gatos" />
            <div className="text">
              <h3>Gatos</h3>
            </div>
          </HoverText>
        </Link>

        <Link to="/products/category/2">
          <HoverText>
            <img src={Food} alt="Comida" />
            <div className="text">
              <h3>Comida</h3>
            </div>
          </HoverText>
        </Link>

        <Link to="/products/category/1">
          <HoverText>
            <img src={Beauty} alt="Beleza e Higiene" />
            <div className="text">
              <h3>Beleza e Higiene</h3>
            </div>
          </HoverText>
        </Link>
      </Images>
      <Details>
        <div className="info">
          <img src={Delivery} alt="Entrega rápida" />
          <h3>Entrega rápida em todo o Brasil</h3>
        </div>
        <div className="info">
          <img src={Buy} alt="Compra segura" />
          <h3>Compra segura</h3>
        </div>
        <div className="info">
          <img src={ONG} alt="Apoio a ONGs" />
          <h3>Apoiamos ONGs e abrigos de adoção</h3>
        </div>
        <div className="info">
          <img src={Return} alt="Troca grátis" />
          <h3>A primeira troca é grátis!</h3>
        </div>
      </Details>
      <Category>
        <Link to="/products/category/5">
          <h1>Roupas</h1>
        </Link>
        <Carousel
          renderArrowsWhenDisabled={true}
          swipeable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {filterClothes.map((item) => (
            <li key={item._id}>
              <CardProds prod={item} />
            </li>
          ))}
          <More>
            <Link to="/products/category/5">
              <AiOutlinePlus/>
            </Link>
          </More>
        </Carousel>
      </Category>

      <Category>
        <Link to="/products/category/4">
          <h1>Brinquedos</h1>
        </Link>
        <Carousel
          renderArrowsWhenDisabled={true}
          swipeable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {filterToys.map((item) => (
            <li key={item._id}>
              <CardProds prod={item} />
            </li>
          ))}
          <More>
            <Link to="/products/category/4">
              <AiOutlinePlus />
            </Link>
          </More>
        </Carousel>
      </Category>
      <Footer />
    </>
  );
};

export default Home;
