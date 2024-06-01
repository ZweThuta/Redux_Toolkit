import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShow = useSelector((state) => state.counter.isShow);
  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease());
  };
  const increaseby5Handler = () => {
    dispatch(counterActions.increaseby5(5));
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };

  const resetHandler = () => {
    dispatch(counterActions.rest());
  };
  return (
    <>
      <section>
        <h3>Redux Counter</h3>
        {isShow && <h1>{counter}</h1>}
        <hr />
        <div className="btn-ctr">
          <button onClick={increaseHandler}>Increase</button>
          <button onClick={increaseby5Handler}>Increase By 5</button>
          <button onClick={decreaseHandler}>Decrease</button>
          <button onClick={toggleHandler}>Toggle</button>
          <button onClick={resetHandler}>Reset</button>
        </div>
      </section>
    </>
  );
};

export default Counter;
