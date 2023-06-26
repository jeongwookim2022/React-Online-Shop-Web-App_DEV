import axios from "axios";
import ShoesCompo from "../components/shoes";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

//MAIN
function MainPage(props) {
  let [btnCount, setBtnCount] = useState(1);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(btnCount);
  }, [btnCount]);

  return (
    <>
      <div>
        <div className="main-bg" />
        <div className="container">
          {/* LOADING COMPONENT */}
          {loading == true ? <Loading /> : null}
          <div className="products-group row">
            <ShoesCompo shoes={props.shoes} setShoes={props.setShoes} />
          </div>
        </div>
      </div>
      {btnCount !== 3 ? (
        <button
          className="btn-more-items"
          onClick={() => {
            setLoading(true);

            setBtnCount(++btnCount);
            axios
              .get(`https://codingapple1.github.io/shop/data${btnCount}.json`)
              .then((data) => {
                props.setShoes([...props.shoes, ...data.data]);

                setLoading(false);
              })
              .catch(() => {
                setLoading(false);

                alert("Data Loading failed.");
              });
          }}
        >
          More Items
        </button>
      ) : (
        <NoItems />
      )}
    </>
  );
}

function NoItems() {
  return (
    <div className="no-items">
      <p>No Items...</p>
    </div>
  );
}

export default MainPage;
