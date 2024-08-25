import { useParams } from "react-router-dom";

// import MobileList from "../components/MobileList"; // Import MobileList component
import { useSelector, useDispatch } from "react-redux"; // Import useSelector to access the Redux store
import { currencyFormatter } from "../util/formatting"; // Import currencyFormatter if it's defined in utils
import { cartActions } from "../store/cartSlice";

function MobileDetailPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const mobileId = params.mobileId; // Assuming the route parameter is named mobileId
  const mobile = useSelector((state) =>
    state.mobiles.find((mobile) => mobile.id === mobileId)
  ); // Find the mobile item from the Redux store

  if (!mobile) {
    return <p>Mobile not found</p>;
  }

  return (
    <>
      <img src={`http://localhost:3000/${mobile.image}`} alt={mobile.name} />
      <div>
        <h2>{mobile.name}</h2>
        <h3>{currencyFormatter.format(mobile.price)}</h3>
        <p>{mobile.description}</p>
        <button onClick={() => dispatch(cartActions.addItem(mobile.id))}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default MobileDetailPage;
