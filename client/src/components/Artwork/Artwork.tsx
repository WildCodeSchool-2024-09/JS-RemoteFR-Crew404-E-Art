import { ChevronLeft } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Artwork.css";

type Artwork = {
  img: string;
  title: string;
  author: string;
  dimension: string;
  description: string;
  year: number;
  medium: string;
};

function Artwork() {
  const { artwork } = useLoaderData() as { artwork: Artwork };
  return (
    <div className="my_art">
      <Link to="/" className="my_button">
        <ChevronLeft />
        Back to Gallery
      </Link>
      <section className="artwork">
        <img src={artwork.img} alt={`${artwork.title}-${artwork.author}`} />

        <div className="info">
          <div>
            <h2>{artwork.title}</h2>
            <h3>Artist</h3>
            <p>{artwork.author}</p>
            <h3>Dimension</h3>
            <p>{artwork.dimension}</p>
            <h3>Description</h3>
            <p>{artwork.description}</p>
          </div>
          <div className="year_medium">
            <h3>Year</h3>
            <p>{artwork.year}</p>
            <h3>Medium</h3>
            <p>{artwork.medium}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Artwork;
