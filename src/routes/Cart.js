import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { moreShoes, lessShoes, removeCart } from "../store";

function Cart() {
  let store = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <h6>{store.users.name}'s Cart</h6>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>Quantities</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {store.cart.map((shoe, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={`https://codingapple1.github.io/shop/shoes${
                      shoe.id + 1
                    }.jpg`}
                    width="50px"
                  />
                  {shoe.title}
                </td>
                <td>{shoe.count}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="me-2"
                    onClick={() => dispatch(moreShoes(shoe.id))}
                  >
                    +
                  </Button>
                  <Button
                    variant="secondary"
                    className="me-3"
                    onClick={() =>
                      shoe.count > 0 && shoe.count != 0
                        ? dispatch(lessShoes(shoe.id))
                        : null
                    }
                  >
                    ㅡ
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeCart(shoe.id))}
                  >
                    X
                  </Button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
