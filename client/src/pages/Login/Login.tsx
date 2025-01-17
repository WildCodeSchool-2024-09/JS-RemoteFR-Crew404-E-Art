import Button from "../../components/Button/Button";
import "./Login.css";

function Login() {
  return (
    <section className="login">
      <h1 className="login_title">Login</h1>
      <form className="login_form">
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
            className="login_input"
          />
        </div>
        <br />

        <Button name="login" />
      </form>
    </section>
  );
}

export default Login;
