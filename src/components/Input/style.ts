import styled from "styled-components";

interface ContentInputProps {
  error: boolean;
}

export const Container = styled.div`
  width: 100%;
  text-align: left;
`;

export const ContentInput = styled.div<ContentInputProps>`
  border: 1px solid;
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;
  background: var(--white);
  border-radius: 10px;
  border-color: ${(props) => (props.error ? "var(--red)" : "var(--gray)")};

  input {
    background: transparent;
    font-size: 1rem;
    flex: 1;
    padding: 0.8rem;
    border: 2px solid transparent;
    color: var(--gray);
    border-bottom-right-radius: 10px;
  }
  svg {
    color: ${(props) => (props.error ? "var(--red)" : "var(--black)")};
    margin-left: 10px;
  }
`;
