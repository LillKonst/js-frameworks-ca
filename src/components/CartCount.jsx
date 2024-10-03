// import { useReducer, useEffect } from 'react';

// // const initialState = { count: 0};

//     function reducer(state, action) {
//       switch (action.type) {
//         case "increment":
//           return {count: state.count + 1 };
//         case "decrement":
//           return { count: state.count > 1 ? state.count - 1 : 0 };
//         case "reset":
//           return { count: 0 };
//         default:
//           throw new Error();
//       }
//     }

// export default function CartCount({ initialCount, onQuantityChange }) {
//   const [state, dispatch] = useReducer(reducer, { count: initialCount });
  
//   useEffect(() => {
//     onQuantityChange(state.count);
//   }, [state.count, onQuantityChange]);

//   return (
//     <div className=" w-36 h-50 p-2 m-5 flex items-center border-black">
//     <button className="button bg-white border-black w-full" onClick={() => dispatch({ type: 'decrement' })}>-</button>
//     <div className="bg-white border-black w-16 p-2">{state.count}</div>
//     <button className="button bg-white border-black w-full" onClick={() => dispatch({ type: 'increment' })}>+</button>
//     <button className="button bg-customBlue ms-5 w-full" onClick={() => dispatch({ type: 'reset' })}>Remove</button>
//   </div>
// );
// }


import { useCart } from '../context/CartContext';
import PropTypes from 'prop-types';

export default function CartCount({ productId, initialCount }) {
  const { incrementQuantity, decrementQuantity, removeProduct } = useCart();

  return (
    <div className="w-36 h-50 p-2 m-5 flex items-center border-black">
      <button
        className="button bg-white border-black w-full"
        onClick={() => decrementQuantity(productId)}
      >
        -
      </button>
      <div className="bg-white border-black w-16 p-2">{initialCount}</div>
      <button
        className="button bg-white border-black w-full"
        onClick={() => incrementQuantity(productId)}
      >
        +
      </button>
      <button
        className="button bg-customBlue ms-5 w-full"
        onClick={() => removeProduct(productId)}
      >
        Remove
      </button>
    </div>
  );
}

CartCount.propTypes = {
  productId: PropTypes.string.isRequired,
  initialCount: PropTypes.number.isRequired,
};
