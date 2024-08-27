// import { currencyFormatter } from "../util/formatting.js";

// export default function CartItem({
//   name,
//   quantity,
//   price,
//   onIncrease,
//   onDecrease,
// }) {
//   return (
//     <li className="cart-item">
//       <p>
//         {name} - {quantity} x {currencyFormatter.format(price)}
//       </p>
//       <p className="cart-item-actions">
//         <button onClick={onDecrease}>-</button>
//         <span>{quantity}</span>
//         <button onClick={onIncrease}>+</button>
//       </p>
//     </li>
//   );
// }

import { currencyFormatter } from "../util/formatting.js";
import RemoveItemModal from "./RemoveItemModal.jsx";

import { useState } from "react";

const DeleteIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="top" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g
        id="System"
        transform="translate(-576.000000, -192.000000)"
        fill-rule="nonzero"
      >
        <g id="delete_2_line" transform="translate(576.000000, 192.000000)">
          <path
            d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
            id="MingCute"
            fill-rule="nonzero"
          ></path>
          <path
            d="M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z"
            id="bottom"
            fill="#09244B"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

const DecreaseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12L18 12"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const IncreaseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12H20M12 4V20"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default function CartItem({
  img,
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
  onDelete,
}) {
  const [openModal, setOpenModal] = useState(false);

  function onDeleteHandler() {
    setOpenModal(true);
    console.log("delete button was clicked");
  }

  return (
    <>
      {openModal && (
        <RemoveItemModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onDelete={onDelete}
        />
      )}
      <li className="cart-item">
        <img src={`http://localhost:3000/${img}`} alt="img" />
        <p>
          {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <p className="cart-item-actions">
          {quantity === 1 ? (
            <button onClick={onDecrease}>
              <DeleteIcon />
            </button>
          ) : (
            <button onClick={onDecrease}>
              <DecreaseIcon />
            </button>
          )}
          <span>{quantity}</span>
          <button onClick={onIncrease}>
            <IncreaseIcon />
          </button>
        </p>
        <div className="delete-item">
          <button onClick={onDeleteHandler}>Remove item</button>
        </div>
      </li>
    </>
  );
}
