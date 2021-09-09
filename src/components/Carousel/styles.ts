import styled from "styled-components";

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
