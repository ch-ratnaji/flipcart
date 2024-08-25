import { Link } from "react-router-dom";

import classes from "./MobilesList.module.css";
import { currencyFormatter } from "../util/formatting";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../store/cartSlice";
import { fetchMobileList } from "../store/cart-actions.js";
import { useEffect } from "react";

function MobilesList({ mobiles }) {
  // const mobiles = useLoaderData();
  const dispatch = useDispatch();
  const mobilesList = useSelector((state) => state.cart.mobiles);

  useEffect(() => {
    dispatch(fetchMobileList());
  }, [dispatch]);

  useEffect(() => {
    console.log(mobilesList);
  }, [mobilesList]);

  return (
    <div className={classes.mobiles}>
      <h1>All Mobiles</h1>
      <ul className={classes.list}>
        {mobiles.map((mobile) => (
          <li key={mobile.id} className={classes.item}>
            <Link to={`/mobiles/${mobile.id}`}>
              <img
                src={`http://localhost:3000/${mobile.image}`}
                alt={mobile.name}
              />
              <div className={classes.content}>
                <h2>{mobile.name}</h2>
                <h3>{currencyFormatter.format(mobile.price)}</h3>
                <p>{mobile.description}</p>
                <button
                  onClick={() => dispatch(cartActions.addItem(mobile.id))}
                >
                  Add to Cart
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobilesList;
