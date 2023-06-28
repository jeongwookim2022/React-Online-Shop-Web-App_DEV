import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const WatchedgDiv = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 40%;
  right: -45px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  margin-top: 10px;
`;
const ItemDiv = styled.div`
  padding: 0;
  color: black;
  border: 2px solid black;
  background-color: white;
`;
const StyledSpan = styled.span`
  padding: 5px;
  padding-right: 8px;
  padding-right: 8px;
`;
const StyledP = styled.p`
  margin: 2px;
`;

function Watched(props) {
  let watched = JSON.parse(localStorage.getItem("watched"));
  parseInt(watched);
  return (
    <WatchedgDiv>
      {watched.length != 0 ? <h4>You've seen..</h4> : null}

      {watched.map((shoeId, i) => {
        return (
          <WatchedShoeList
            shoeId={shoeId}
            shoes={props.shoes}
            restShoes={props.restShoes}
          />
        );
      })}
    </WatchedgDiv>
  );
}

function WatchedShoeList(props) {
  let navigate = useNavigate();

  return (
    <Link
      to={`/detail/${props.shoeId}`}
      className="watched-container item-div-border"
      style={{ textDecoration: "none" }}
    >
      <ItemDiv className="container item-div">
        <img
          onClick={() => {
            navigate(`/detail/${props.shoeId}`);
          }}
          src={`https://codingapple1.github.io/shop/shoes${
            props.shoeId + 1
          }.jpg`}
          width="75px"
        />
        {props.shoeId < 3 ? (
          <StyledP>{props.shoes[props.shoeId].title}</StyledP>
        ) : (
          <StyledP>{props.restShoes[props.shoeId - 3].title}</StyledP>
        )}
      </ItemDiv>
    </Link>
  );
}

export default Watched;
