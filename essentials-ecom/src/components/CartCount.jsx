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
        case "addAmount":
          return { cont: state.count + action.payload };
        default:
          throw new Error();
      }
    }

export default function CartCount() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className=" w-36 h-50 p-2 m-5"><div>Count: {state.count}</div>
    <button className="button bg-customBlue mt-5 w-full" onClick={() => dispatch({ type: 'decrement' })}>-</button>
    <button className="button bg-customBlue mt-5 w-full" onClick={() => dispatch({ type: 'increment' })}>+</button>
    <button className="button bg-customBlue mt-5 w-full" onClick={() => dispatch({ type: 'addAmount', payload: 10 })}>
      Add 10
    </button>
    <button className="button bg-customBlue mt-5 w-full" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
  </div>
);
}