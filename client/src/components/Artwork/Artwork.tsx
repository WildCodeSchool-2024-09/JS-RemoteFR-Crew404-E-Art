import "./Artwork.css";

type ArtworkProps = {
  img: string;
  title: string;
  author: string;
  dimension: number;
  description: string;
  year: number;
  medium: string;
};

function Artwork({
  img,
  title,
  author,
  dimension,
  description,
  year,
  medium,
}: ArtworkProps) {
  return (
    <div className="my_art">
      <div>
        <button className="my_button" type="button">
          {" "}
          &#10096; Back to Gallery{" "}
        </button>{" "}
      </div>

      <section className="artwork">
        <div className="overlay">
          <img src={img} alt={`${title}-${author}`} />
        </div>
        <div className="info">
          <div>
            <h2>{title}</h2>
            <h3>Artist</h3>
            <p>{author}</p>
            <h3>Dimension</h3>
            <p>{dimension}</p>
            <h3>Description</h3>
            <p>{description}</p>
          </div>
          <div className="year_medium">
            <h3>Year</h3>
            <p>{year}</p>
            <h3>Medium</h3>
            <p>{medium}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Artwork;
