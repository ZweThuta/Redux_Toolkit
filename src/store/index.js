import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, isShow: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    increaseby5(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.isShow = !state.isShow;
    },
    rest(state) {
      state.counter = 0;
    },
  },
});
const initialAuthState = { isLogin: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
