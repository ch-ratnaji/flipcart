import axios from "axios";
import { cartActions } from "./cartSlice";

// export const fetchMobileList = () => {
//   return async (dispatch) => {
//     const response = await axios.get("http://localhost:3000/mobiles");
//     const mobileList = response.data;

//     dispatch(cartActions.mobilesList(mobileList));
//   };
// };

export const fetchMobileList = () => {
  return async (dispatch) => {
    const fetchMobiles = async () => {
      const response = await axios.get("http://localhost:3000/mobiles");
      const mobileList = response.data;
      return mobileList;
    };
    const mobileList = await fetchMobiles();

    dispatch(cartActions.mobilesList(mobileList));
  };
};
