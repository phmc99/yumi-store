import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Image } from "./styles";

//Images
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";
import Banner3 from "../../assets/banner4.png";
import Banner4 from "../../assets/banner3.png";
import { Link } from "react-router-dom";

const CarouselBanner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 450 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 0,
      slidesToSlide: 0,
    },
  };

  return (
    <>
      <Image />
      <Carousel
        renderArrowsWhenDisabled={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        focusOnSelect={true}
      >
        <Container>
          <Link to="/products/brand/royalcannin">
            <img src={Banner1} alt="Ração" />
          </Link>
        </Container>
        <Container>
          <Link to="/products/brand/ibasaebeeps">
            <img src={Banner2} alt="SPA" />
          </Link>
        </Container>
        <Container>
          <Link to="/yumiclub">
            <img src={Banner3} alt="Club" />
          </Link>
        </Container>
        <Container>
          <Link to="/products/promotion/inverno">
            <img src={Banner4} alt="Inverno" />
          </Link>
        </Container>
      </Carousel>
    </>
  );
};

export default CarouselBanner;
