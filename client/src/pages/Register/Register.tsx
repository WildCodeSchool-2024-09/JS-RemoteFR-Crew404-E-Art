import Button from "../../components/Button/Button";
import "./Register.css";

function Register() {
  return (
    <div>
      <section>
        <h1 className="register_title">Register</h1>
        <form className="register_form">
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
              className="register_input"
            />
          </div>
          <br />

          <div className="register_button">
            <Button name="register" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
