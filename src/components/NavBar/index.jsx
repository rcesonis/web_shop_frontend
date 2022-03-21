import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/details/1">Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
