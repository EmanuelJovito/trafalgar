import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 7rem;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;

  img {
    width: 10rem;
  }

  nav {
    ul {
      display: flex;
      flex-direction: row;
      list-style: none;

      
      li {
        :first-child {
          font-weight: 700;
          color: #1F1534;
        }

        margin-right: 2rem;
        color: gray;
      }
    }
  }
`
