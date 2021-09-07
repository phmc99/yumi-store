import styled from "styled-components";

export const StyledFormButton = styled.button`
  background-color: var(--purple);
  color: var(--white);
  padding: 5px;
  font-size: 1.2rem;
  border-radius: 10px;
  width: 140px;
  font-family: "Suez One", serif;
  margin-top: 10px;

  &:hover {
    filter: brightness(0.85);
    transition: all 0.4s;
  }

  @media (min-width: 768px) {
    width: 180px;
    padding: 7px;
  }
`;
