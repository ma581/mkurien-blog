import { Container, Navbar, Nav } from "react-bootstrap";
import m from "./images/m.png";
import k from "./images/k.png";

export function NavBar(props) {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="home">
          <img src={m} alt="M" className="brand"></img>
          <img src={k} alt="K" className="brand"></img>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
