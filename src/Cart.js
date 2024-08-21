// Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "./ProductSlice";
import "./cart.css";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

export function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleBuy = () => {
    alert("Order  successfully! ");
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.Price * item.quantity, 0);
  };

  return (
    <div>
      <div className="d-flex justify-content-center carts">
        <h1 className="mt-5">FOOD CART</h1>
      </div>
      <div className="cartdiv">
        {cart.length === 0 ? (
          <p className=" d-flex justify-content-center mt-5">
            Your cart is empty
          </p>
        ) : (
          <>
            <ListGroup as="ol" numbered>
              {cart.map((item) => (
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start ms-5 mt-5 mb-5"
                  key={item.id}
                >
                  <div className="ms-5 me-auto">
                    <div className="fw-bold">
                      {item.name}{" "}
                      <Badge bg="primary" pill>
                        {item.quantity}
                      </Badge>
                    </div>
                    <span>&#8377;</span>
                    {item.Price}
                    <span >
                    <img className="ms-3" src={item.FoodImage} alt="" />
                  </span>
                  </div>
                 
                  <input className="ml-1 mt-3"
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(
                        item.id,
                        parseInt(e.target.value, 10)
                      )
                    }
                  />
                  <button className="buybtn mt-3 btn btn-success" onClick={handleBuy}>Buy</button>
                  <button className="rmvbtn mt-3 btn btn-danger" onClick={() => handleRemove(item.id)}>Remove</button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <h5>Total Price: ₹{calculateTotalPrice()}</h5>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
