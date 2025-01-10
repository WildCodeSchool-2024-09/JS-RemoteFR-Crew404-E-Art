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
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ali baba"
            required
          />
        </div>

        <div>
          <label className="contact_form" htmlFor="email">
            Votre email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ali@yahoo.com"
            required
          />
        </div>

        <div>
          <label className="contact_form" htmlFor="message...">
            Votre message
          </label>
          <textarea
            name="message"
            id="message"
            rows={7}
            placeholder="Votre message"
            required
          />
        </div>

        <Button name="Envoyer" />
      </form>
    </section>
  );
}

export default Contact;
