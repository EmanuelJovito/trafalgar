import { Conteiner, Content, Grid, OurServices } from '../styles/index'

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

      <OurServices>
        <h1>Our services</h1>
        <div></div>
        <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment
        with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
      </OurServices>

      <Grid>
        <div>
          <img src="lupa.svg" alt="busca" />
          <h1>Search doctor</h1>
          <p>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
        </div>
        <div>
          <img src="remedio.svg" alt="farmacia" />
          <h1>Online pharmacy</h1>
          <p>Buy  your medicines with our mobile application with a simple delivery system</p>
        </div>
        <div>
          <img src="tablet.svg" alt="tablet" />
          <h1>Consultation</h1>
          <p>Free consultation with our trusted doctors and get the best recomendations</p>
        </div>
        <div>
          <img src="info.svg" alt="informação" />
          <h1>Details info</h1>
          <p>Free consultation with our trusted doctors and get the best recomendations</p>
        </div>
        <div>
          <img src="kit.svg" alt="emergencia" />
          <h1>Emergency care</h1>
          <p>You can get 24/7 urgent care for yourself or your children and your lovely family</p>
        </div>
        <div>
          <img src="tabela.svg" alt="tabela" />
          <h1>Tracking</h1>
          <p>Track and save your medical history and health data </p>
        </div>
      </Grid>
    </Conteiner>
  )
}
