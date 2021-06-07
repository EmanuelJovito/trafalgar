import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 5rem;

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
        }

        margin-right: 2rem;
      }
    }
  }
`
