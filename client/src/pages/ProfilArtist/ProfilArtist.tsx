import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./ProfilArtist.css";

function ProfilArtist() {
  return (
    <section className="profil">
      <h1 className="profilartist_title">Profil</h1>
      <form className="profil_form">
        <div>
          <label className="label_profil" htmlFor="name">
            Name
          </label>
          <br />
          <input type="text" id="name" name="name" className="profil_input" />
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
            className="profil_input"
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
            <Link to={"/artwork-page"}>
              <Button name="Add artwork" type="button" />
            </Link>
          </div>
          <div className="profil_button_update">
            <Button name="Update profil" type="button" />
          </div>
        </div>
      </form>
    </section>
  );
}

export default ProfilArtist;
