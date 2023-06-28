import axios from "axios";
import ShoesCompo from "../components/shoes";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import Watched from "../components/watched";

//MAIN
function MainPage(props) {
  let [btnCount, setBtnCount] = useState(1);
  let [loading, setLoading] = useState(false);
  let [tempShoes, setTempShoes] = useState([...props.shoes]);

  return (
    <>
      {/* WATCHED */}
      <Watched shoes={props.shoes} restShoes={props.restShoes} />
      <div>
        <div className="main-bg" />
        <div className="container">
          {/* LOADING COMPONENT */}
          {loading == true ? <Loading /> : null}
          <div className="products-group row">
            <ShoesCompo shoes={tempShoes} />
          </div>
        </div>
      </div>
      {btnCount < 3 ? (
        <button
          className="btn-more-items"
          onClick={() => {
            setLoading(true);

            setBtnCount(++btnCount);
            axios
              .get(`https://codingapple1.github.io/shop/data${btnCount}.json`)
              .then((data) => {
                setTempShoes([...tempShoes, ...data.data]);

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
