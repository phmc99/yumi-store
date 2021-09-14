import styled from "styled-components";

export const ContainerProd = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--white);

    img{
        margin 6%;
        width: 150px
    }
`
export const CardDivisor = styled.div`
    padding: 4%;
    margin: 5%;
    width: 200px;
    border: solid 1px var(--gray);
`
export const ContainerPrice= styled.div`
   text-align: left;
   font-size: 17px;
   padding: 3%;

   h3{
    font-size: 15px;
    font-family: "Mulish", serif;
    margin: 4% 0 10% 0;
   }
   .club-price{
    font-weight: bold;
    color: var(--black);
}
  .club-logo{
      font-family: "Merienda", cursive;
      color: black;
  }
  .logo-tar{
    color: var(--purple);
  }
   
`
export const AddButton = styled.button`
  background-color: var(--purple);
  color: var(--white);
  padding: 5px;
  border-radius: 10px;
  width: 170px;
  font-family: "Suez One", serif;
  margin-top: 10px;

  &:hover {
    filter: brightness(0.85);
    transition: all 0.4s;
  }
`;
