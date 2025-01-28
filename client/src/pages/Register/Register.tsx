import axios from "axios";
import { useState } from "react";
import Button from "../../components/Button/Button";
import "./Register.css";

function Register() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/register`,
      register,
    );
    return response.data;
  };

  return (
    <section className="register">
      <h1 className="register_title">Register</h1>
      <form onSubmit={handleSubmit} className="register_form">
        <div>
          <label className="label_register" htmlFor="name">
            Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="joy"
            required
            onChange={handleChange}
            className="register_input"
          />
        </div>
        <br />
        <div>
          <label className="label_register" htmlFor="email">
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="mike@yahoo.com"
            required
            onChange={handleChange}
            className="register_input"
          />
        </div>
        <br />
        <div>
          <label className="label_register" htmlFor="password">
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="************"
            required
            onChange={handleChange}
            className="register_input"
          />
        </div>
        <br />
        <div>
          <label className="label_register" htmlFor="confirm_password">
            Confirm Password
          </label>
          <br />
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="************"
            required
            onChange={handleChange}
            className="register_input"
          />
        </div>
        <br />

        <Button name="register" type="submit" />
      </form>
    </section>
  );
}

export default Register;
