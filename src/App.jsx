import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";

const App = () => {
  const isLogin = useSelector((state)=> state.auth.isLogin)
  return (
    <>
      <NavBar />
      {!isLogin && <Welcome />}
      {isLogin && <Counter />}
    </>
  );
};

export default App;
