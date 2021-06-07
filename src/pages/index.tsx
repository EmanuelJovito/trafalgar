import { Conteiner, Content } from '../styles/index'

import { Header } from "../components/Header";

export default function Home() {
  return (
    <Conteiner>
      <Header />

      <Content>
        <div>
          <h1>Virtual healthcare for you</h1>
          <p>Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone</p>
          <button>Consult today</button>
        </div>

        <img src="trafalgar-header illustration 1.svg" alt="" />
      </Content>
    </Conteiner>
  )
}
