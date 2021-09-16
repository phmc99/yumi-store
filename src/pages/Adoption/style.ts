import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  max-height: 1260px;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin:5%;
  background-color: var(--white);
  font-family: "Suez one", serif;
  text-align: center;

  h1 {
    color: var(--dark-blue);
    margin-top: 1rem;
    text-transform: uppercase;
  }
  h3 {
    color: var(--red);
    text-transform: uppercase;
  }
  p {
    padding: 1rem;
    margin-top: 1rem;
    color: var(--white);
    font-size: 1.2rem;
    text-align: left;
  }
  .ong{
    margin-top: 2rem;
    width:200px;
    padding: 1%;
    background-color: white;
    border-radius: 100%;
}

.centered-cart{
    background-color: var(--dark-blue);
}
  .contact {
    text-align: center;
    background-color: var(--blue);
    border-radius:15px;

    a{
        color: var(--white);
        text-decoration: none;
    }
}
.btn-info{
    margin-top: 1rem;
    background-color: var(--dark-blue);
    padding: 2%;
    width: 250px;
    height: 40px;
    border-radius: 14px;
    cursor: pointer;

    &:hover{
        background-color: var(--red);
        transition: ease-out 1s;
    }
}


  @media (min-width: 800px) {
    background-color: var(--white);
    margin: 2%;

    h1 {
      color: var(--yellow);
    }

    .centered-cart{
     width: 100vw;
     display: flex;
     justfy-content: space-around;

     .ong{
         margin:4rem 3rem 5rem 7rem;
         width: 300px;
         height: 300px;
     }
     .description{
         margin-top:2rem;
         width:500px;
     }
     .contact{

        margin: 2rem 0 0 3rem;
        max-height: 800px;
        width: 300px;
      }
    }
  }
  @media (min-width: 1000px) {
    .centered-cart {
      max-height: 100vh;
      .ong {
        margin: 4rem 3rem 5rem 8rem;
        width: 200px;
        height: 200px;
      }
      .contact {
        margin: 2rem 0 0 3rem;
        max-height: 300px;
        width: 300px;
     }
    .btn-info{
        padding: 0;
     }
    }
    
}
@media (min-width: 1000px){
    .centered-cart{
        max-heigtht: 100vh;
        .ong{
            margin:4rem 3rem 5rem 10rem;
            width: 200px;
            height: 200px;
        }
        .contact{
            margin: 2rem 0 0 3rem;
            max-height: 300px;
            width: 300px;
         }
        }
}
`
export const MainContainer2 = styled.div`
max-width: 100vw;
max-height: 1280px;
display:flex;
flex-direction: column;
align-items: center;
margin:5%;

background-color: var(--white);
font-family: "Suez one", serif;
text-align: center;

p{
 padding: 1rem;
 margin-top: 1rem;
 color: seashell;
 font-size:1.2rem;
 text-align: left;
}
.ong-2{
    margin-top: 2rem;
    width:200px;
    padding: 1%;
    background-color: white;
    border-radius: 100%;
}

.centered-cart-2{
    background-color: var(--dark-salmon);
}
.contact-2{
    text-align: center;
    background-color: var(--red);
    border-radius:15px;

    a{
        color: var(--white);
        text-decoration: none;
    }
}
.btn-info-2{
    margin-top: 1rem;
    background-color: var(--dark-salmon);
    padding: 2%;
    width: 250px;
    height: 40px;
    border: solid 2px var(--white);
    border-radius: 14px;
    cursor: pointer;

    &:hover{
        background-color: var(--dark-blue);
        transition: ease-out 1s;
    }
}

@media (min-width: 800px){
    background-color: var(--white);
    margin: 2%;

    h1{
    color: var(--yellow);
    }

    .centered-cart-2{
     width: 100vw;
     display: flex;
     justfy-content: space-around;

     .ong-2{
         margin:4rem 3rem 5rem 7rem;
         width: 300px;
         height: 300px;
         background-color: white;
     }
     .description-2{
         margin-top:2rem;
         width:500px;
     }
     .contact-2{
        margin: 2rem 0 0 3rem;
        max- height: 800px;
        width: 300px;
     }
    .btn-info-2{
        padding: 0;
     }
    }
    
}
@media (min-width: 1000px){
    .centered-cart-2{
        max-heigtht: 100vh;
        .ong-2{
            margin:4rem 3rem 5rem 10rem;
            width: 200px;
            height: 200px;
        }
        .contact-2{
            margin: 2rem 0 0 3rem;
            max-height: 300px;
            width: 300px;
         }
        }
}
`
