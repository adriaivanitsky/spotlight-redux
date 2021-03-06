import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, double, reset } from './counterSlice';

const Counter = () => {
  // The function below is called a selector and allows us to select a value
  // the state.
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>

      <button
        aria-label="double value"
        onClick={() => {
          dispatch(double());
        }}
      >
        *
      </button>

      <button
        aria-label="reset"
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
