import styled from 'styled-components'

export const Conteiner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  width: 71%;

  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;

  div {
    width: 30rem;

    h1 {
      font-size: 3rem;
    }

    p {
      font-weight: 300;
      font-size: 1.3rem;

      margin-top: 1.5rem;

      color: rgba(125, 121, 135, 1);
    }

    button {
      margin-top: 3rem;

      width: 12.5rem;
      height: 3.5rem;

      background: rgba(69, 143, 246, 1);

      color: rgba(255, 255, 255, 1);
      font-weight: 700;

      border: none;
      border-radius: 55px;
    }
  }

  img {
    width: 35rem;
  }
`