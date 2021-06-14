import styled from "styled-components";

export const Button = styled.button`
  width: 3em;
  height: 3rem;

  position: relative;
  bottom: -10rem;

  background: #fff;

  border: none;
  border-radius: 5px;

  @media (max-width: 375px) {
    width: 2rem;
    height: 2rem;

    bottom: -11rem;
  }
`