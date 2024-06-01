import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
const NavBar = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const logouthandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <nav>
      <h1>Redux</h1>

      {isLogin && (
        <ul>
          <li>Recoders</li>
          <li>Profile</li>
          <li>
            <button onClick={logouthandler} className="logout-btn">
              logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
