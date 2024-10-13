import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";

export const Headers = () => {
  //global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state

  const [value, setValue] = useState();

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <h1>My Blog App</h1>
          </div>

          {isLogin && (
            <div
              className="blogs"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <button>
                <NavLink to="/blogs">Blogs</NavLink>
              </button>
              <button>
                <NavLink to="/my-blogs">My Blogs</NavLink>
              </button>
              <button>
                <NavLink to="/create-blog">Create Blog</NavLink>
              </button>
            </div>
          )}

          <nav>
            <ul>
              {!isLogin && (
                <>
                  <button>
                    <NavLink to="/login">LOGIN</NavLink>
                  </button>
                  <button>
                    <NavLink to="/register">REGISTER</NavLink>
                  </button>
                </>
              )}
            </ul>

            {isLogin && (
              <div className="log">
                <button onClick={handleLogout}>
                  <NavLink to="/logout">LOGOUT</NavLink>
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
