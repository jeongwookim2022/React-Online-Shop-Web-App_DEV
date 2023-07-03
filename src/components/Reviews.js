import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRates } from "../store/rateGroup";
import Comments from "./Comments";
import { setCommentShowTrue } from "../store";

function Reviews(props) {
  let tempArr = [1, 2, 3, 4, 5];
  let rates = useSelector((state) => state.rates);
  let dispatch = useDispatch();

  let [rate, setRate] = useState(0);
  let [showRate, setShowRate] = useState(false);

  let commentShow = useSelector((state) => state.commentShow);

  useEffect(() => {
    setShowRate(true);
  }, [rate]);

  return (
    <>
      <div>
        {tempArr.map((num, i) => {
          return (
            <FontAwesomeIcon
              key={num}
              icon={faStar}
              className="review-star"
              id={`star-${num}`}
              onMouseEnter={(e) => {
                enterTest(e);
              }}
              onMouseLeave={(e) => {
                leaveTest(e);
              }}
              //
              onClick={(e) => {
                let temp = e.target.parentElement.id[5];
                temp != 0 && temp != undefined
                  ? setRate(parseInt(e.target.parentElement.id[5]))
                  : null;

                temp != NaN ? dispatch(addRates(temp)) : null;

                dispatch(setCommentShowTrue());
              }}
              //
            />
          );
        })}
      </div>
      {/* MAKE COMMENTS */}
      {commentShow ? <Comments shoeId={props.shoeId} /> : null}
    </>
  );
}
function enterTest(e) {
  for (let i = 1; i <= parseInt(e.target.id[5]); i++) {
    document.getElementById(`star-${i}`).style.color = "gold";
  }
}
function leaveTest(e) {
  for (let i = parseInt(e.target.id[5]); i > 0; i--) {
    document.getElementById(`star-${i}`).style.color = "gray";
  }
}
export default Reviews;
