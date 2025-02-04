import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { api } from "../../services/api";
import { failureToast, successToast } from "../../services/toasts";
import "./Register.css";

function Register() {
  const nav = useNavigate();
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validatePassword = (pwd: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(pwd);
  };

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
      setIsValid(validatePassword(value));
    }
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await api.post("/api/register", register);
      successToast("Inscription réussie");
      nav("/login");
    } catch (error) {
      failureToast("Oups, une erreur est survenue");
    }
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
            value={password}
            onChange={handleChange}
            className="register_input"
          />
          <p style={{ color: isValid ? "green" : "red" }}>
            {isValid
              ? "Mot de passe sécurisé"
              : "(8 caractères, 1 majuscule, 1 chiffre et 1 caractère spécial)"}
          </p>
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
