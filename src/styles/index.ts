import styled from 'styled-components'

export const Conteiner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  & > img {
    position: absolute;
    top: 6rem;
    left: -3rem;
    opacity: 75%;
  } 

  @media (max-width: 547px) {
    & > img {
      width:6rem;
    }
  }
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

      :hover {
        background: rgba(69, 143, 246, 0.8)
      }
    }
  }

  img {
    width: 35rem;
  }

  @media (max-width: 1024px) {
    div {
      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1rem;
      }
    } 

    img {
      width: 25rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    div {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      text-align: center;

      h1 {
        margin-top: 3rem;
      }
    }
  }

  @media (max-width: 390px) {
    img {
      width: 20rem;
    }
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

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const Button = styled.button`
  margin-top: 4rem;
  width: 12.5rem;
  height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;

  color: #458FF6;
  font-weight: 700;

  border: 1px solid #458FF6;
  border-radius: 55px;

  img {
    margin-left: 0.5rem;
  }

  :hover {
    background: rgba(255, 255, 255, 0.5);
  }
`

export const Leading = styled.div`
  width: 71%;

  margin-top: 10rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-around;

  div {
    width: 22rem;

    display: flex;
    flex-direction: column;

    h1 {
      position: relative;
      padding-bottom: 2rem;

      &::after {
        width: 3rem;
        height: 2px;

        content: '';

        background-color: #000;

        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    p {
      margin-top: 1.5rem;
    }
  }

  img {
    width: 35rem;
  }

  @media (max-width: 1024px) {
    div {
      width: 20rem;
      
      margin-left: 2rem;

      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }

    img {
      width: 25rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  
    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-left: 0;


      text-align: center;

      h1 {
        margin-top: 3rem;

        ::after {
          left: 8.5rem;
        }
      }
    }
  }

  @media (max-width: 390px) {
    img {
      width: 20rem;
    }
  }
`

export const Download = styled.div`
  width: 71%;

  margin-top: 15rem;

  display: flex;
  align-items: center;

  justify-content: space-around;

  div {
    width: 22rem;

    display: flex;
    flex-direction: column;

    h1 {
      position: relative;
      padding-bottom: 2rem;

      &::after {
        width: 3rem;
        height: 2px;

        content: '';

        background-color: #000;

        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    p {
      margin-top: 1.5rem;
    }
  }

  @media (max-width: 1024px) {
    & > img {
      width: 25rem;
    }

    div {
      h1 {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 8rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      text-align: center;

      h1 {
        margin-top: 3rem;

        ::after {
          left: 8.5rem;
        }
      }
    }
  }

  @media (max-width: 390px) {
    & > img {
      width: 20rem;
    }
  }
`

export const GridTitle = styled.div`
  margin-top: 7rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  div {
    width: 4rem;
    height: 2px;

    margin-top: 2rem;

    background: #000;
  }
`

export const GridImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;

  margin-top: 5rem;

  & > div {
    width: 21rem;
    height: 32rem;

    background: rgba(255, 255, 255, 1);
    border-radius: 20px; 

    & > img {
      width: 100%;
      border-radius: 20px 20px 0 0;
    }

    .textDiv {
      width: 90%;

      margin-top: 1rem;
      margin-left: 2rem;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        width: 17rem;
        font-size: 1.3rem;
        line-height: 32px;
      }

      p {
        width: 17rem;
        margin-top: 0.5rem;
        margin-bottom: 3rem;
        line-height: 28px;
      }

      button {
        width: 70%;

        border: none;
        background: none;

        display: flex;
        align-items: center;

        color: rgba(64, 137, 237, 1);
        font-weight: 600;

        img {
          width: 1rem;
          margin-top: 0.2rem;
          margin-left: 1rem;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2,1fr);
    row-gap: 2rem;
    align-self: center;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
