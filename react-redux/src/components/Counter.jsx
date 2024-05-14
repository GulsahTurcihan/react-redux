import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const {increase, increment, decerement, toggleCounter} = counterActions;

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decerement());
  };

  const increaseFiveHandler = () => {
    dispatch(increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      <b> {showCounter && counter} </b> <br />
      <button onClick={incrementHandler}>Increase</button>
      <button onClick={increaseFiveHandler}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrease</button>
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
