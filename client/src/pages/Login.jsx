import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import axios from "axios";
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  //handling thw input value
  const handleInput = (event) => {
    console.log(event);
    let name = event.target.name;
    let value = event.target.value;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("api/v1/user/login", {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        dispatch(authActions.login());
        toast.success("User login Successfully");
        navigate("/blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <main>
        <div>
          <div className="registration">
            <h1 className="main-heading mb-3">LOGIN</h1>
            <br />

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  id="email"
                  required
                  autoComplete="off"
                  value={inputs.email}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  id="password"
                  required
                  autoComplete="off"
                  value={inputs.password}
                  onChange={handleInput}
                />
              </div>
              <br />
              <button type="submit" className="submit">
                Submit
              </button>
              <br />
              <button onClick={() => navigate("/register")} className="submitb">
                Not a user? Please Register
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};
