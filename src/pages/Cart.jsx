import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
// import { fetchMobileList } from '../store/cart-actions';
import { currencyFormatter } from "../util/formatting";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const dispatch = useDispatch();
  // const mobilesList = useSelector((state) => state.cart.mobiles);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const cartTotal = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    navigate("..");
  }

  return (
    <>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            img={item.image}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => dispatch(cartActions.addItem(item.id))}
            onDecrease={() => dispatch(cartActions.removeItem(item.id))}
            onDelete={() => dispatch(cartActions.deleteItem(item.id))}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <button onClick={handleCloseCart}>Close</button>
      </p>
    </>
  );
}

export default CartPage;
