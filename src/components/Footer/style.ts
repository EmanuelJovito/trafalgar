import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 27rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  margin-top: 10rem;

  background: linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%);

  & > div {
    width: 80%;
    height: 50%;

    display: flex;
    justify-content: space-around;
    flex-direction: row;

    .info {
      width: 30rem;

      display: flex;
      flex-direction: column;

      img {
        width: 10rem;
        margin-bottom: 1rem;
      }

      & > p {
        margin-bottom: 6rem;
      }

      p {
        color: rgba(255, 255, 255, 1);
      }
    }
    
    .options {
      display: flex;
      flex-direction: row;

      .company {
        display: flex;
        flex-direction: column;

        h1 {
          color: rgba(255, 255, 255, 1);
          margin-bottom: 1rem;
        }

        p {
          color: rgba(255, 255, 255, 1);
          margin-bottom: 1.5rem;

          :hover {
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }

      .region {
        display: flex;
        flex-direction: column;

        h1 {
          color: rgba(255, 255, 255, 1);
          margin-bottom: 1rem;
        }

        p {
          color: rgba(255, 255, 255, 1);
          margin-bottom: 1.5rem;

          :hover {
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }

      .help {
        display: flex;
        flex-direction: column;

        h1 {
          color: rgba(255, 255, 255, 1);
          margin-bottom: 1rem;
        }

        p {
          color: rgba(255, 255, 255, 1);
          margin-bottom: 1.5rem;

          :hover {
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }
    }
  }
  
  .bgImage {
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 60%;
  }

  @media (max-width: 1024px) {
    height: 100%;

    & > div {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;

      .info {
        width: 35rem;

        align-items: center;
        text-align: center;

        p {
          margin-bottom: 2rem;
        }
      }

      .options {
        margin-top: 2rem;
        margin-bottom: 1rem;
        align-items: center;

        .company {
          align-items: center;

          h1 {
            font-size: 1.5rem;
          }

          margin-right: 8rem;
        }

        .region {
          align-items: center;

          h1 {
            font-size: 1.5rem;
          }

          margin-right: 8rem;
        }

        .help {
          align-items: center;
          text-align: center;

          h1 {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    & > div {
      .info {
        width: 25rem;
      }

      .options {
        .company {
          margin-right: 3rem;
        }

        .region {
          margin-right: 3rem;
        }
      }
    }
  }
`