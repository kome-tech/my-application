import React, { useState } from "react";

const Counter = (props) => {
  const [state, setState] = useState(props);
  const name = state.name;
  const price = state.price;

  return (
    <>
      <div>
        {name} is {price}.
      </div>
      <div>
        <button onClick={() => setState({ ...state, price: price + 1 })}>
          +1
        </button>
        <button onClick={() => setState({ ...state, price: price - 1 })}>
          -1
        </button>
      </div>
      <div>
        <button onClick={() => setState(props)}>reset</button>
      </div>
      <div>
        <input
          value={name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </div>
    </>
  );
};

Counter.defaultProps = {
  name: "",
  price: 1000,
};

export default Counter;
