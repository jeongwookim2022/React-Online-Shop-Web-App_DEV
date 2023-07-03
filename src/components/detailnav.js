import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import ReactPlayer from "react-player";
import Reviews from "./Reviews";
import { useSelector, useDispatch } from "react-redux";

function DetailNav(props) {
  let [tab, setTab] = useState(0);

  return (
    <div>
      <Nav
        id="nav"
        fill
        variant="tabs"
        defaultActiveKey="link-0"
        style={{ marginTop: "25px" }}
      >
        <Nav.Item
          id="item"
          onClick={() => {
            setTab(0);
          }}
        >
          <Nav.Link id="link" eventKey="link-0" style={{ color: "black" }}>
            Product Detail
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            setTab(1);
          }}
        >
          <Nav.Link eventKey="link-1" style={{ color: "black" }}>
            Reviews
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} shoeId={props.shoeId} />
    </div>
  );
}

function TabContent({ tab, shoeId }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    let fadeTime = setTimeout(() => {
      setFade("end");
    }, 10);

    return () => {
      clearTimeout(fadeTime);
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {[<ProductDetail />, <Reviews shoeId={shoeId} />][tab]}
    </div>
  );
}

function ProductDetail() {
  return (
    <>
      <ReactPlayer
        url="https://youtu.be/-SBsT032jVI"
        playing={true}
        muted={true}
        controls
        width="100%"
        height="70vh"
        className="mb-5 p-2"
      />
    </>
  );
}

export default DetailNav;
