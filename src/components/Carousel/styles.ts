import styled from "styled-components";
import Background from "../../assets/background2.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

export const Image = styled.div`
  @media (min-width: 1200px) {
    height: 264.75px;
    width: 100%;
    background-image: url(${Background});
    background-size: contain;
    position: absolute;
    filter: blur(2px);
    opacity: 0.8;
  }
`;
