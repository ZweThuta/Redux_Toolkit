import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
const Welcome = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  };
  return (
    <div className="log-bg">
      <button onClick={loginHandler} className="wel-btn">
        Login to Redux Counter
      </button>
    </div>
  );
};

export default Welcome;
