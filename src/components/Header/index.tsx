import { Container } from "./style";

export function Header() {
  return (
    <Container>
      <img src="logo.svg" alt="logo" />

      <nav>
        <ul>
          <li><a>Home</a></li>
          <li><a>Find a doctor</a></li>
          <li><a>Apps</a></li>
          <li><a>Testimonials</a></li>
          <li><a>Testimonials</a></li>
        </ul>
      </nav>
    </Container>
  )
}