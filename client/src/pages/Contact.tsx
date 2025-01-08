import { useState } from "react";

import "./Contact.css";

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
    <div>
      <section>
        <h1>Contact me !</h1>
        {isSubmitted ? (
          <p>Merci ! Votre message a été envoyé.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className="contact_form" htmlFor="name">
              {" "}
              Votre nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              required
            />

            <label className="contact_form" htmlFor="email">
              {" "}
              Votre email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              required
            />

            <label className="contact_form" htmlFor="message">
              {" "}
              Votre message
            </label>
            <textarea
              name="message"
              id="message"
              rows={7}
              placeholder="Votre message"
              required
            />

            <button className="envoyer" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}

export default Contact;
