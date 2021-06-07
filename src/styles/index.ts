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

export const OurServices = styled.div`
  width: 55%;

  margin-top: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 5rem;
    border-bottom: 1px solid black;
    margin-top: 1.5rem;
  }

  p {
    margin-top: 1.5rem;
    text-align: center;
    color: rgba(125, 121, 135, 1);
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  margin-top: 4rem;
  
  div {
    width: 21rem;
    height: 22rem;

    padding: 2rem;

    background: rgba(255, 255, 255, 1);

    display: flex;
    flex-direction: column;
    justify-content: center;

    border: 1px solid black;
    border-radius: 20px;

    img {
      width: 4rem;
    }

    h1 {
      margin-top: 3rem;
      font-size: 1.5rem;
    }

    p {
      margin-top: 1rem;
      line-height: 28px;
    }
  }
`