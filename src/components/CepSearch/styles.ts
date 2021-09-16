import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  border: 2px solid #8f4bc7;
  border-radius: 12px;
  margin: 10px;
`;

export const Input = styled.input`
  border: 1px solid #8f4bc7;
  border-radius: 5px;
  width: 40%;
  margin: 0.75rem;
  height: 40px;
  padding: 0.7rem;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 10px;

  .newAdress {
    width: 50%;
    height: 40px;
    border-radius: 5px;
    background-color: #8f4bc7;
    border: 0;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 auto;
  }
`;
export const Info = styled.h4`
  display: flex;
  font-weight: bold;
  border: 1px solid #8f4bc7;
  width: 100%;
  height: 40px;
  margin: 5px auto;
  padding: 0.4rem;
  align-items: center;
  border-radius: 7px;
  font-size: 1rem;
`;

export const InputForm = styled.input`
  width: 100%;
  margin: 5px auto;
  border: 1px solid #8f4bc7;
  height: 40px;
  border-radius: 7px;
  padding: 0.4rem;
  font-weight: bold;
  font-size: 1rem;
`;

export const ButtonSearch = styled.button`
  max-width: 180px;
  width: 50%;
  height: 40px;
  border-radius: 5px;
  background-color: #8f4bc7;
  border: 0;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
`;
