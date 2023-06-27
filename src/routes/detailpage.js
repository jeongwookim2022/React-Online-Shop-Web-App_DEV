import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailNav from "../components/detailnav";
import Loading from "../components/loading";
import { addCart } from "../store";
import { useDispatch, useSelector } from "react-redux";

function DetailPage(props) {
  let { id } = useParams();
  let correctShoe = [...props.shoes, ...props.restShoes].find((shoe) => {
    return shoe.id == id;
  });
  let [discount, setDiscount] = useState(true);
  let [inputVal, setInputVal] = useState("");
  let [loading, setLoading] = useState(true);
  let [fade, setFade] = useState("");

  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  console.log(cart);

  useEffect(() => {
    setFade("end");
  }, []);

  /////////////////////////////////////////////////////////////////////////////
  //When Compo is MOUNTed or UPDATEed
  // - After Rendering is all done.
  useEffect(() => {
    let discountTimer = setTimeout(() => {
      setDiscount(false);
    }, 2000);
    // LOADING
    setLoading(false);

    // When Compo is UNMOUNTed.
    // Before useEffect is activated.
    // ex) Timer, Server request
    return () => {
      // Clear the timer Above.
      clearTimeout(discountTimer);
    };
  }, []); // Dependency: with-> useEffect Operates once when Compo is Mounted.
  //                     without-> useEffect Operates every time when Compo is Re-rendered.
  ///////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////INPUT/////////////////////
  useEffect(() => {
    if (isNaN(inputVal) == true) {
      alert("Type numbers only for quantities.");
    }
  }, [inputVal]);
  ////////////////////////////////////////////////////

  return (
    <>
      {/* LOADING */}
      {loading == true ? <Loading /> : null}
      <div className={`container start ${fade}`}>
        {/* DISCOUNT */}
        {discount == true ? <Discount /> : null}
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                correctShoe.id + 1
              }.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-lg-5 pt-md-0">{correctShoe.title}</h4>
            <p>{correctShoe.content}</p>
            <p>￦{correctShoe.price}</p>
            <p>
              <input
                type="text"
                placeholder="Type numbers only"
                onChange={(e) => {
                  setInputVal(e.target.value);
                }}
              />
            </p>
            {/* <button className="btn btn-danger me-3">Buy</button> */}
            <button
              className="btn btn-danger"
              onClick={() => {
                correctShoe.count = 1;
                dispatch(addCart(correctShoe));
                console.log(correctShoe);
                console.log(cart);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <DetailNav />
      </div>
    </>
  );
}

function Discount() {
  return <div className="alert alert-warning">Discount for 2 Seconds!</div>;
}

export default DetailPage;
