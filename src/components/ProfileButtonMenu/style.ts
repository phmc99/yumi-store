import styled from "styled-components";

export const ModalProfile = styled.div`
  @media (max-width: 414px) {
    top: 65px;
    right: 0;
  }
    height: 300px;
    width: 220px;
    top: 0;
    right: 170px;
    position: absolute;
    background-color: white;
    border: 1px solid black;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 9999;
    padding: 10px 5px 10px 0px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p{
        font-family: Suez One;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 33px;
display: flex;
align-items: center;
text-align: center;
    }
    .first {
        margin: 0;
        line-height: 25px;
    }
    button {
        background: #8F4BC7;
opacity: 0.94;
border: 2px solid #8F4BC7;
box-sizing: border-box;
border-radius: 11px;
font-family: Suez One;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 33px;
display: flex;
align-items: center;
justify-content: center;
color: white;
width: 150px;
text-transform: uppercase;
&:hover {
    filter: brightness(0.85);
    transition: all 0.4s;
  }
    }
    .close{
        position: absolute;
        background-color: red;
        font-size: 10px;
        width: 20px;
        height: 20px;
        top: 1px;
        right: 1px;
    }
    .ou {
        color: #8F4BC7;
        font-size: 35px;
        line-height: 30px;
        margin-bottom: 10px;
        &:hover {
    filter: brightness(0.85);
    transition: all 0.4s;
  }
    }
    .aqui {
        margin-bottom: 0;
    }
`

// export