import axios from "axios";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

// NAV BAR
// NAV BAR
function NavbarCompo() {
  let navigate = useNavigate();

  // GET user data from server Using REACT-QUERY
  // - it automatically refetches data
  // - good for real time data
  // - can paste & copy BECAUSE it doesn't request twice if it's the same request.
  let result = useQuery(
    "hej",
    () =>
      axios.get("https://codingapple1.github.io/userdata.json").then((data) => {
        return data.data;
      }),
    { staleTime: 2000 }
  );

  // -> possible outcomes
  // result.data
  // result.isLoading
  // result.error

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          ShoeTockholm
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* <Link to="/">Home</Link> */}
          <Nav.Link
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Prices
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          {result.isLoading && "Loading..."}
          {result.error && "Error"}
          {result.data && `Hej, ${result.data.name}`}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarCompo;
