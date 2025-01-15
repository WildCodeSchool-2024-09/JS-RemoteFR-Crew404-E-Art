import Button from "../../components/Button/Button";
import "./Contact.css";

function Contact() {
  return (
    <section>
      <h1>Contact me !</h1>

      <form className="form">
        <div>
          <label className="contact_form" htmlFor="name">
            Votre nom
          </label>{" "}
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ali baba"
            required
          />
        </div>{" "}
        <br />
        <div>
          <label className="contact_form" htmlFor="email">
            Votre email
          </label>{" "}
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ali@yahoo.com"
            required
          />
        </div>{" "}
        <br />
        <div>
          <label className="contact_form" htmlFor="message...">
            Votre message
          </label>{" "}
          <br />
          <textarea
            name="message"
            id="message"
            rows={7}
            placeholder="Votre message"
            required
          />
        </div>
        <div className="contact_button">
          {" "}
          <Button name="Envoyer" />{" "}
        </div>
      </form>
    </section>
  );
}

export default Contact;
