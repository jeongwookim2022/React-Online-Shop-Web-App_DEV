import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// NAV BAR
// NAV BAR
function NavbarCompo() {
  let navigate = useNavigate();

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">ShoeTockholm</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Link to="/">Home</Link> */}
          <Nav.Link
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
          <Nav.Link href="#pricing">Prices</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarCompo;
