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
  
  .bgImage {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`