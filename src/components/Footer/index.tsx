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
          <p>About</p>
          <p>Testimonials</p>
          <p>Find a doctor</p>
          <p>Apps</p>
        </div>
        <div className='region'>
          <h1>Region</h1>
          <p>Indonesia</p>
          <p>Singapore</p>
          <p>Hongkong</p>
          <p>Canada</p>
        </div>
        <div className='help'>
          <h1>Help</h1>
          <p>Help center</p>
          <p>Contact support</p>
          <p>Instructions</p>
          <p>How it works</p>
        </div>
      </div>
    </Content>
  )
}