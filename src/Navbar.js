import { Container, Navbar, Nav } from "react-bootstrap";

export function NavBar(props) {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="home">MK</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/articles">Articles</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
