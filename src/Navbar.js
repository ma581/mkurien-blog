import { Container, Navbar, Nav } from "react-bootstrap";

export function NavBar(props) {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="home">MK</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
