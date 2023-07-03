import axios from "axios";
import { Navbar, Container, Nav, Col, Badge } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

// NAV BAR
function NavbarCompo() {
  let navigate = useNavigate();
  let store = useSelector((state) => state);

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
    <Navbar bg="dark" variant="dark">
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
              navigate("#");
            }}
          >
            Prices
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("#");
            }}
          >
            About
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto me-3">
          {result.isLoading && "Loading..."}
          {result.error && "Error"}
          {result.data && (
            // <span style={{ color: "white" }}>Hej, {result.data.name}</span>
            <span style={{ color: "white" }}>Hej</span>
          )}
        </Nav>
        <Nav style={{ color: "white" }}>
          <FontAwesomeIcon
            icon={faUser}
            className="me-3 fs-5 nav-bar-emoji"
            onClick={() => {}}
          />
          <FontAwesomeIcon
            icon={faHeadset}
            className="me-3 fs-5 nav-bar-emoji"
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="cart-icon me-3 fs-5 nav-bar-emoji"
            onClick={() => {
              navigate("/cart");
            }}
          />
          <Badge bg="danger" className="cart-badge-num">
            {store.cart.length}
          </Badge>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavbarCompo;
