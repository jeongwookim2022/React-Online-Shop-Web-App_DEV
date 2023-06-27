import { useEffect, useState } from "react";
import Loading from "../components/loading";
import ShoesCompo from "../components/shoes";
import axios from "axios";

function ProductsAll(props) {
  let [loading, setLoading] = useState(true);
  let [shoesAll, setShoesAll] = useState([...props.shoes, ...props.restShoes]);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      {/* LOADING COMPONENT */}
      {loading == true ? <Loading /> : null}

      <div>
        <div className="main-bg" />
        <div className="container">
          <div className="products-group row">
            <ShoesCompo shoes={shoesAll} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsAll;
