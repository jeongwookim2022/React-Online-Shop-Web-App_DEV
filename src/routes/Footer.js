// function Footer() {
//   return (
//     <div className="footer">
//       <div>Footer</div>
//     </div>
//   );
// }

// export default Footer;
import { Navbar, Container, Nav, Col, Badge } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";

// NAV BAR
function Footer() {
  let navigate = useNavigate();
  let store = useSelector((state) => state);

  let result = useQuery("hej");

  return (
    <Navbar bg="dark" variant="dark" className="footer">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="footer-text">
            <div>
              <div className="fs-2 mt-2">
                <span style={{ color: "Green" }}>KIM</span>{" "}
                <span style={{ color: "sandybrown" }}>JeongWoo</span>
              </div>
              <div className="">+46 70 491 4875</div>
            </div>
            <div className="my-info ms-4 mt-3 mb-2">
              Open: 00:00-24:00
              <br />
              Location: Åkersberga, Sweden
              <br />
              <span className="fs-5">Call me Anytime</span>
            </div>
          </div>
        </Navbar.Brand>
        <Nav style={{ color: "white" }}>
          <a
            href="https://github.com/jeongwookim2022/React-Online-Shop-Web-App_DEV"
            target="_blank"
            className="link-sns"
          >
            {/* <div className="contact-me">Contact</div> */}
            <FontAwesomeIcon
              icon={faGithub}
              className="footer-icon me-3 fs-1 nav-bar-emoji"
            />
          </a>
          <a
            href="https://www.instagram.com/a_cup_of_hot_chocolate/"
            target="_blank"
            className="link-sns"
          >
            {/* <div className="contact-me ">Me</div> */}
            <FontAwesomeIcon
              icon={faInstagram}
              className="footer-icon me-3 fs-1 nav-bar-emoji"
            />
          </a>
          <a
            href="https://www.facebook.com/AndrewJeongwooKim97/"
            target="_blank"
            className="link-sns"
          >
            {/* <div className="contact-me me-4">!!!</div> */}
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="footer-icon me-3 fs-1 nav-bar-emoji"
            />
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Footer;
