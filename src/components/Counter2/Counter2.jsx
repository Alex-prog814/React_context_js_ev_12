import React, { useContext } from 'react';
import { counterContext } from '../../counterContext';

const Counter2 = () => {
    const { counter2, increment10, decrement10 } = useContext(counterContext);

  return (
    <div>
        <button onClick={increment10}>+10</button>
        <h2>Counter: {counter2}</h2>
        <button onClick={decrement10}>-10</button>
    </div>
  )
}

export default Counter2