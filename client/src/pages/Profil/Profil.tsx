import Button from "../../components/Button/Button";
import "./Profil.css";

function Profil() {
  return (
    <section className="profil">
      <h1 className="profil_title">Profil</h1>
      <form className="profil_form">
        <div>
          <label className="label_profil" htmlFor="name">
            Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value="joy"
            checked
            className="profil_input"
          />
        </div>
        <br />
        <div>
          <label className="label_profil" htmlFor="email">
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value="luke@yahoo.com"
            className="profil_input"
            disabled
          />
        </div>
        <br />
        <div className="password_container">
          <div>
            <label className="label_password" htmlFor="password">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="************"
              className="password_input"
            />
          </div>
          <br />
          <div>
            <label className="label_profil" htmlFor="confirm_password">
              Confirm Password
            </label>
            <br />
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="************"
              className="password_input"
            />
          </div>
        </div>
        <br />
        <div className="profil_button">
          <span>I'm an artist</span>
          <div>
            <Button name="Invitation request" type="button" />
          </div>
          <div className="profil_button_update">
            <Button name="Update profil" type="button" />
          </div>
        </div>
      </form>
    </section>
  );
}

export default Profil;
