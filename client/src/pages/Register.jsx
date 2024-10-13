import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export const Register = () => {
  const navigate = useNavigate();
  //state
  const [input, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  //handling the input value
  const handleInput = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  //handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const { data } = await axios.post("/api/v1/user/register", {
        username: input.username,
        email: input.email,
        password: input.password,
      });
      console.log(data);
      if (data.sucess) {
        toast.success("User Register Successfully");
        navigate("/login");
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
            <h1 className="main-heading mb-3">REGISTER</h1>
            <br />

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  value={input.username}
                  placeholder="name"
                  required
                  autoComplete="off"
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  autoComplete="off"
                  value={input.email}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  autoComplete="off"
                  value={input.password}
                  onChange={handleInput}
                />
              </div>
              <br />
              <button type="submit" className="submit">
                Submit
              </button>
              <br />
              <button onClick={() => navigate("/login")} className="submitb">
                Already Registered? Please Login
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};
