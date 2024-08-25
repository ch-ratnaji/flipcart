import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useSelector } from "react-redux";

function MainNavigation() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  );

  return (
    <>
      <div className={classes.heading}>
        <div className={classes.heading1}>
          <div className={classes.side}></div>
          <div className={classes.contentContainer}>
            <div className={classes.home1}>
              <div className={classes.b2}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                >
                  Home
                </NavLink>
              </div>
            </div>
            <div className={classes.inputContent}>
              <form
                className={classes.headerFormSearch}
                action="/search"
                method="GET"
              >
                <div className={classes.searchContainer}>
                  <div className={classes.searchTextBox}></div>
                  <button className={classes.btn} type="submit">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 17 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#2874F1" fillRule="evenodd">
                        <path
                          className={classes.pth}
                          d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                        ></path>
                        <path
                          className={classes.pth}
                          d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className={classes.content}>
              <div className={classes.r1}>Ratnaji</div>
            </div>
            <div className={classes.content}>
              <div className={classes.r1}>Become a Seller</div>
            </div>
            <div className={classes.content}>
              <div className={classes.r1}>
                <div className={classes.r2}>
                  <NavLink to="/cart" className={classes.cartLink}>
                    <svg
                      className={classes.cartSvg}
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                        fill="#fff"
                      ></path>
                    </svg>
                    <div className={classes.cartQuantity}>1</div>
                    <span>{totalQuantity}</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.side}></div>
        </div>
        <div className={classes.heading2}></div>
      </div>
      <div className={classes.mainNav}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mobiles"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Mobiles
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MainNavigation;
