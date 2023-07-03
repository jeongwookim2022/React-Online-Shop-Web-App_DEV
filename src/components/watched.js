import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const WatchedgDiv = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 61.2%;
  right: -45px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  margin-top: 10px;
  z-index: 5;
`;
const ItemDiv = styled.div`
  position: relative;
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
    <WatchedgDiv id="WatchedgDiv">
      {watched.length != 0 ? (
        <Button variant="warning" className="watched-box">
          <span className="watched-text">Watched</span>
          <Badge bg="danger" className="watched-num ms-1">
            {watched.length}
          </Badge>
        </Button>
      ) : null}
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="x-mark"
        onClick={() => {
          document.getElementById("WatchedgDiv").style.display = "none";
          watched = [];
          localStorage.setItem("watched", JSON.stringify(watched));
        }}
      />

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
          onError={(e) => {
            e.target.src =
              "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg";
          }}
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
