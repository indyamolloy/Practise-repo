import React, { useState } from "react";

//function typing
//toggleTodo: ( ) => void
//toggleTodoWithArgs: (index: number, name: string) => number

type Props = {
  startingCount: number;
};

function Counter({ startingCount }: Props) {
  const [count, setCount] = useState<number>(startingCount);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={increment}>-</button>
      <p>{count}</p>
      <button onClick={decrement}>+</button>
    </div>
  );
}

export default Counter;
