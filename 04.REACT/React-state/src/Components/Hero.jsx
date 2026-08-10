import { useState } from "react";

const Hero = () => {
  let initialValue = 0;
  const [number, setNumber] = useState(initialValue);

  // number = 0;
  // setNumber(value)

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  const reset = () => {
    setNumber(initialValue);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>INCREMENT</button> {"  "}
      <button onClick={decrement}>DECREMENT</button> {"  "}
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default Hero;
