import picture from "../../assets/images/picture.jpg";
import "./About.css";

function About() {
  return (
    <div>
      <section className="about_page">
        <div>
          <img src={picture} alt="my_picture" className="about_image" />
        </div>
        <div>
          <h1>Description</h1>
          <p className="about_paragraph">
            Je me nomme Frank Sena Agbolosu. Je suis en pleine reconversion
            profetionnelle dans le developpement web à la Wild Code School.
            L'idée de l'application E-art est née lors de mon troisième projet
            au bootcamp de la dite école. J'ai pour objectif d'avoir une galérie
            d'art en ligne qui sera accessible partout dans le monde et à
            n'importe quel moment.{" "}
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
