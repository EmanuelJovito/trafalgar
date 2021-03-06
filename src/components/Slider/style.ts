import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 70rem;
  height: 26.5rem;

  margin-top: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%);
  border-radius: 24px;

  & > h1{
    color: rgba(255, 255, 255, 1);
    position: relative;

    padding-bottom: 2rem;

    &:first-child {
      &::after {
        width: 4rem;
        height: 2px;

        content: '';

        background-color: rgba(255, 255, 255, 1);

        position: absolute;
        bottom: 0;
        left: 12.5rem;
        right: 0;
      }
    }
  }

  & > div {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 4rem;

    img {
      border: 5px solid rgba(255, 255, 255, 1);
      border-radius: 50%;
    }

    .Profile {
      width: 50rem;

      display: flex;
      align-items: flex-start;
      flex-direction: column;

      margin-left: 1rem;

      h1 {
        font-size: 1.3rem;
        color: rgba(255, 255, 255, 1)
      }

      p {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.85);
      }
    }

    p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.1rem;
      line-height: 30px;
    }
  }

  @media (max-width: 1024px) {
    width: 60rem;
  }

  @media (max-width: 902px) {
    width: 85%;

    & > div {
      .Profile {
        width: 45rem;

        h1 {
          font-size: 1.1rem;
        }
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    & > div {
      margin-top: 2rem;
      flex-direction: column;
      text-align: center;

      img {
        width: 5rem;
        margin-bottom: 1rem;
      }

      .Profile {
        width: 100%;
        margin-left: 0;

        align-items: center;
      }

      p {
        margin-top: 0.5rem;
      }
    }
  }

  @media (max-width: 563px) {
    & > h1 {
      font-size: 1.5rem;

      &:first-child {
        &::after {
          left: 8.9rem;
        }
      }
    }
  }

  @media (max-width: 418px) {
    & > h1 {
      padding: 1rem;
      &:first-child {
        &::after {
          left: 9.9rem;
        }
      }
    }

    & > div {
      margin-top: 1rem;
    }
  }
  

  @media (max-width: 390px) {
    & > h1 {
      text-align: center;
      &:first-child{
        &::after {
        left: 9.7rem;
      }
      }
    }

    & > div {
      img {
        display: none;
      }
    }
  }
`

export const Pagination = styled.div`
  width: 20rem;

  margin-top: 2rem;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding-top: 0.25rem;

    border: none;

    background: none;

    img {
      width: 1.75rem;
    }
  }

  div {
    width: 0.6rem;
    height: 0.6rem;

    background: rgba(91, 155, 243, 1);

    border-radius: 100%;
  }
`