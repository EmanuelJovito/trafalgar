import { Conteiner, Content, Grid, OurServices, Button, Leading, Download, GridImages, GridTitle } from '../styles/index'

import { Header } from "../components/Header";
import { Slider } from '../components/Slider';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <Conteiner>
      <Header />

      <img src="background.svg" alt="background" />

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

      <Button>
        Learn more
      </Button>
      
      <Leading>
        <img src="image2.svg" alt="image2" />
        <div>
          <h1>Leading healthcare providers</h1>
          <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To 
          us, it’s not just work. We take pride 
          in the solutions we deliver</p>

          <Button>
            Learn more
          </Button>
        </div>
      </Leading>

      <Download>
        <div>
          <h1>Download our mobile apps</h1>
          <p>Our dedicated patient engagement app and web portal allow you to 
          access information instantaneously (no tedeous form, long calls, 
          or administrative hassle) and securely</p>

          <Button>
            Download
            <img src="download.svg" alt="download" />
          </Button>
        </div>

        <img src="image3.svg" alt="image3" className='contentImage'/>
      </Download>

      <Slider />
      
      <GridTitle>
        <h1>Check out our latest article</h1>
        <div></div>
      </GridTitle>
      <GridImages>
        <div>
          <img src="gridImage1.png" alt="image1" />   
          <div className="textDiv">
            <h1>Disease detection, check up in the laboratory</h1>
            <p>In this case, the role of the health laboratory is very important to do
            a disease detection...</p>
            <button>
              Read more
              <img src="seta2.svg" alt="seta direita" />
            </button>
          </div>
        </div>
        <div>
          <img src="gridImage2.png" alt="image2" />
          <div className="textDiv">
            <h1>Herbal medicines that are safe for consumption</h1>
            <p>Herbal medicine is very widely used at this time because of its very good for your health...</p>
            <button>
              Read more
              <img src="seta2.svg" alt="seta direita" />
            </button>
          </div>
        </div>
        <div>
          <img src="gridImage3.png" alt="image3" />    
          <div className="textDiv">
            <h1>Natural care for healthy facial skin</h1>
            <p>A healthy lifestyle should start from now and also for your skin health.
            There are some...</p>
            <button>
              Read more
              <img src="seta2.svg" alt="seta direita" />
            </button>
          </div>
        </div>
      </GridImages>

      <Button>View all</Button>
            
      <Footer />
    </Conteiner>
  )
}
