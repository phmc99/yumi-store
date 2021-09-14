import styled from "styled-components";

export const MainContainer = styled.div`
max-width: 100vw;
max-height: 1200px;
display:flex;
flex-direction: column;
align-items: center;
margin:5%;
background-color: var(--yellow);
font-family: "Suez one", serif;
text-align: center;

h1{
    color: var(--white);
    margin-top: 2rem;
    text-transform: uppercase;
}
h3{
    color: var(--red);
    text-transform: uppercase;
}
p{
 padding: 1rem;
 margin-top: 1rem;
 color: var(--white);
 font-size:1.2rem;
 text-align: left;
}
.contact{
    text-align: center;
    background-color: var(--red);
    border-radius:15px;
}

@media (min-width: 800px){
    background-color: var(--white);
    margin: 2%;

    h1{
    color: var(--yellow);
    }

    .centered-cart{
     width: 100vw;
     display: flex;
     justfy-content: space-between;
     background-color: var(--yellow);

     .ong{
         margin:4rem 3rem 5rem 5rem;
         width: 300px;
         height: 300px;
     }
     .description{
         margin-top:2rem;
         width:500px;
     }
     .contact{
        margin: 2rem 0 0 3rem;
        max- height: 800px;
        width: 300px;
     }
    }
    
}
@media (min-width: 1000px){
    .centered-cart{
        max-heigtht: 100vh;
        .ong{
            margin:4rem 3rem 5rem 8rem;
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