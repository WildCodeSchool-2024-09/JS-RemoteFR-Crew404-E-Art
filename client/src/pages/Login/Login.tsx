import axios from "axios";
import { useState } from "react";
import Button from "../../components/Button/Button";
import "./Login.css";

function Login() {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setlogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/login`,
      login,
    );

    return response.data;
  };

  return (
    <section className="login">
      <h1 className="login_title">Login</h1>
      <form onSubmit={handleSubmit} className="login_form">
        <div>
          <label className="label_login" htmlFor="email">
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@gmail.com"
            required
            onChange={handleChange}
            className="login_input"
          />
        </div>
        <br />
        <div>
          <label className="label_login" htmlFor="password">
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            required
            onChange={handleChange}
            className="login_input"
          />
        </div>
        <br />

        <Button name="login" type="submit" />
      </form>
    </section>
  );
}

export default Login;
