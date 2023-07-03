import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";
import { addComment, toShowLater } from "../store";

function Comments(props) {
  let rates = useSelector((state) => state.rates);
  let latestRate = rates[rates.length - 1];
  let normalStar = 5 - latestRate;
  let tempArr = Array.from({ length: latestRate }, () => 0);
  let tempArrNoramlStar = Array.from({ length: normalStar }, () => 0);
  let [commentDone, setCommentDone] = useState(false);
  let commentGroup = useSelector((state) => state.commentGroup);

  let dispatch = useDispatch();

  console.log(latestRate);

  return (
    <>
      <div className="write-review">
        {tempArr.map((temp, i) => {
          return <FontAwesomeIcon icon={faStar} className="colored-star" />;
        })}
        {normalStar !== 0
          ? tempArrNoramlStar.map((temp, i) => {
              return <FontAwesomeIcon icon={faStar} className="comment-star" />;
            })
          : null}
        <form>
          <textarea name="opinion" cols="30" rows="5" className="text-area" />
          <br />
          <input
            type="submit"
            onClick={(e) => {
              console.log(rates);
              e.preventDefault();
              let comment2go = $(".text-area").val();
              let commentInfo = [props.shoeId, comment2go];
              dispatch(addComment(commentInfo));

              setCommentDone(true);
              $(".write-review").html("");
            }}
          />
        </form>
      </div>
      <div>
        {commentDone
          ? rates.map((r, i) => {
              return (
                <div className="reviews-stars mt-3">
                  {/* STARS WITH COMMENTS */}
                  {tempArr.map((temp, i) => {
                    return (
                      <FontAwesomeIcon icon={faStar} className="colored-star" />
                    );
                  })}
                  {normalStar !== 0
                    ? tempArrNoramlStar.map((temp, i) => {
                        return (
                          <FontAwesomeIcon
                            icon={faStar}
                            className="comment-star"
                          />
                        );
                      })
                    : null}
                  {/* COMMENTS */}
                  {commentDone ? <EveryComments shoeId={props.shoeId} /> : null}
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default Comments;

function EveryComments(props) {
  let commentGroup = useSelector((state) => state.commentGroup);
  console.log("test", commentGroup);

  return (
    <span>
      {commentGroup[0][props.shoeId]
        ? commentGroup[0][props.shoeId].map((comment, i) => {
            return <span>{comment}</span>;
          })
        : null}
    </span>
  );
}
