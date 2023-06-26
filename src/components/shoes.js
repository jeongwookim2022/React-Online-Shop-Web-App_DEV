import { Link, useNavigate } from "react-router-dom";

// SHOES
function ShoesCompo(props) {
  let navigate = useNavigate();

  return props.shoes.map((shoe, i) => {
    return (
      <div className="product col-md-4">
        <Link to={`/detail/${shoe.id}`}>
          <img
            src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`}
            width="80%"
          />
        </Link>
        <h4>{shoe.title}</h4>
        <p>￦{shoe.price}</p>
      </div>
    );
  });
}

export default ShoesCompo;
