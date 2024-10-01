import { useReducer } from 'react';

const initialState = { count: 0};

    function reducer(state, action) {
      switch (action.type) {
        case "increment":
          return {count: state.count + 1 };
        case "decrement":
          return { count: state.count - 1 };
        case "reset":
          return { count: 0 };
        default:
          throw new Error();
      }
    }

export default function CartCount() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className=" w-36 h-50 p-2 m-5 flex items-center border-black">
    <button className="button bg-white border-black w-full" onClick={() => dispatch({ type: 'decrement' })}>-</button>
    <div className="bg-white border-black w-16 p-2">{state.count}</div>
    <button className="button bg-white border-black w-full" onClick={() => dispatch({ type: 'increment' })}>+</button>
    <button className="button bg-customBlue ms-5 w-full" onClick={() => dispatch({ type: 'reset' })}>Remove</button>
  </div>
);
}