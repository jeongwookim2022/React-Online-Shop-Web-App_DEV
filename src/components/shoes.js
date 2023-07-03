import { Link, useNavigate } from "react-router-dom";

// SHOES
function ShoesCompo(props) {
  // Set Item function with ID

  function setItemId(shoeID) {
    let watched = JSON.parse(localStorage.getItem("watched"));
    watched.push(shoeID);
    watched = [...new Set(watched)];
    localStorage.setItem("watched", JSON.stringify(watched));
    console.log(watched);
  }

  return props.shoes.map((shoe, i) => {
    return (
      <div className="product col-md-4">
        <Link to={`/detail/${shoe.id}`}>
          <img
            onClick={() => {
              setItemId(shoe.id);
            }}
            src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`}
            width="80%"
            onError={(e) => {
              e.target.src =
                "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg";
            }}
          />
        </Link>
        <h4>{shoe.title}</h4>
        <p>￦{shoe.price}</p>
      </div>
    );
  });
}

export default ShoesCompo;
