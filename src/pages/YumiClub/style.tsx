import styled from "styled-components";

export const ContainerPage = styled.div`
max-width: 100vw;
height: 1420px;
display:flex;
flex-direction: column;
align-items: center;
margin:10%;
background-color: var(--light-purple);
font-family: "Suez-one", serif;
text-align: center;

h1{
    color: var(--white);
    text-transform: uppercase;
}
h2{
    color: var(--purple);
    text-transform: uppercase; 
}
h4{
    margin-top: 1rem;
    color: var(--white);
    text-transform: uppercase;
    border-bottom: 2px solid var(--white);
}
.announcement{
    display:flex;
    flex-direction:column;
    padding: 0% 10%;
    margin: 0;
    max-width: 70vw;
    max-height: 50vh;
    background-color: var(--purple);

    h2{
        margin-top: 1rem;
        color: var(--white);
        text-transform: uppercase;
        width: 182px 
    }
    span{
        margin:-1rem;
        padding:0;
        color: var(--white);
        font-size:40px;
        font-weight:bold;
    }
    
}
.gift{
    margin-top: -3rem;
    width:100%;
}
.circular-promo{
    position: relative;
    margin-top: 2rem;
    left: 8pc;
    width: 110px;
    height:110px;
    background-color: var(--purple);
    color: var(--white);
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 100%;

    p{
        position: relative;
        font-size: 15px;
        top:1.9pc;
    }
}
p{
    margin-top: 0.8rem;
    color: var(--white);
    font-size: 12px;
    font-family: "Suez one", serif;
    font-weight:600; 
}

@media (min-width: 1000px) {
  width:70vw;
  height: 100vh;
  margin:0;
  flex-direction:row;
  align-items: flex-start;
  flex-wrap: wrap;

 h1{
    font-size:45px;
    width:100vw;
 }
 h2{
    font-size:35px;
    margin-top: -2rem;
    width:100vw;
 }
 .announcement{
    display:flex;
    padding: 0%;
    margin: 0;
    margin-left: 2%;
    width: 20vw;
    max-height: 40vh;

    h2{
        margin-top: 0;
        text-align: center;
        margin-left: 15%;
        font-size:28px;
    }
    span{
        margin:-1rem;
        padding:0;  
    }
   }
   .gift{
    margin-top: -5rem;
    width: 85%;
    margin-left: 1.78rem;
   }
   .circular-promo{
     bottom: 2pc;
     left:13pc;
     margin-top:0;
   }
 }

}
`
export const Containersub = styled.div`

.econ{
    display:flex;
    flex-wrap: wrap;
    margin: 0;
    width: 80vw;
    background-color: var(--purple);
    color: var(--white);
    
    p{
        font-size: 22px;
        font-family: "Suez one", serif;
        font-weight:600;
    }

    .icons{
        width: 70px;
        height: 70px;
     }

    .econ-sub{
        width: 40vw;
    }

    span{
        font-size: 15px;
        font-family: "Suez one", serif;
        font-weight:600;
     }
 }  
 @media (min-width: 1000px) {
    .econ{
       margin-left: 3%;
       margin-top: -8rem;
       width: 41.5vw;
       height: 30vh;

       .econ-sub{
        margin: 2%;
        width:100px;
       }
       span{
        font-size: 12px;
       }
    }
   p{
       margin: 0 0 0 3.8rem;
   }
 }
`
export const YumiClubSub = styled.div`
display: flex;
flex-direction: column;
margin:10%;
background-color: var(--white);
border: solid 1px var(--black);
width: 80vw;
height: 70vh;

.logo{
    margin: 5rem 1.5rem 2rem 1.5rem;
    width: 80%;
}
p{
    font-family: "Mulish", sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    margin: 2%;
}
    button {
        width: 200px;
        height: 40px;
        font-family: "Suez One", sans-serif;
        border-radius: 13px;
        background-color: var(--purple);
        color: var(--white);
        font-size: 15px;
        text-transform: uppercase;
        margin: 1rem ;
      }

      @media (min-width: 1000px) {
        margin: 2%;
        width: 20vw;
        height: 95vh;
      
        .logo{
            margin: 6rem 1rem 6rem 1.5rem;
        }
        p{
            margin-top:3rem;
        }
        button{
            margin: 4rem 0rem 0 2rem;
        }

      }
`
export const MainContainer = styled.div`

@media (min-width: 1000px) {
display: flex;
margin: 2%;
}
`