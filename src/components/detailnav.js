import { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";

function DetailNav() {
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

      {/* {tab == 0 ? <TabContent /> : tab == 1 ? <TabContent /> : null} */}
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent({ tab }) {
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
      {[<ProductDetail />, <Reviews />][tab]}
    </div>
  );
}

function ProductDetail() {
  return <div>0</div>;
}
function Reviews() {
  return <div>1</div>;
}

export default DetailNav;
