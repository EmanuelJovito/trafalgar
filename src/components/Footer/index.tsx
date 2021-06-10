import { Content } from "./style";

export function Footer() {
  return (
    <Content>
      <img src="element.svg" alt="element" className="bgImage"/>
      <div>
        <div className='info'>
          <img src="logoWhite.svg" alt="logo" />
          <p>Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone</p>
          <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
        <div className='company'>
          <h1>Company</h1>
          <a>About</a>
          <a>Testimonials</a>
          <a>Find a doctor</a>
          <a>Apps</a>
        </div>
        <div className='region'>
          <h1>Region</h1>
          <a>Indonesia</a>
          <a>Singapore</a>
          <a>Hongkong</a>
          <a>Canada</a>
        </div>
        <div className='help'>
          <h1>Help</h1>
          <a>Help center</a>
          <a>Contact support</a>
          <a>Instructions</a>
          <a>How it works</a>
        </div>
      </div>
    </Content>
  )
}