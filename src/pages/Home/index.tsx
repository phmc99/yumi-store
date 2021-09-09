import { Link } from "react-router-dom";
import CarouselBanner from "../../components/Carousel";
import { Images, HoverText, Details, Category } from "./styles";

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
import { MenuSearch } from "../../components/MenuSearch";

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 900, min: 450 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <MenuSearch/>
      <CarouselBanner />
      <Images>
        <Link to="/products/species/1">
          <HoverText>
            <img src={Dogs} alt="Cachorros" />
            <div className="text">
              <h3>Cachorros</h3>
            </div>
          </HoverText>
        </Link>

        <Link to="/products/species/2">
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
          draggable={true}
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
          focusOnSelect={true}
          centerMode={true}
        >
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <Link to="/products/category/5">
            <p>+</p>
          </Link>
        </Carousel>
      </Category>
      <Category>
        <Link to="/products/category/4">
          <h1>Brinquedos</h1>
        </Link>
        <Carousel
          renderArrowsWhenDisabled={true}
          swipeable={true}
          draggable={true}
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
          focusOnSelect={true}
          centerMode={true}
        >
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <Link to="/products/category/4">
            <p>+</p>
          </Link>
        </Carousel>
      </Category>
    </>
  );
};

export default Home;
