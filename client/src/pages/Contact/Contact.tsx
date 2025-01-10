import { useState } from "react";

import "./Contact.css";
import Button from "../../components/Button/Button";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    }, 2000);
  };

  return (
    <section>
      <h1>Contact me !</h1>
      {isSubmitted ? (
        <p>Merci ! Votre message a été envoyé.</p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
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
      )}
    </section>
  );
}

export default Contact;
