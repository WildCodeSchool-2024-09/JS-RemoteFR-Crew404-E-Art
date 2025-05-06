import { Link, useLoaderData } from "react-router-dom";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import "./Home.css";

type Artwork = {
  id: number;
  image: string;
  title: string;
  author: string;
  year: number;
};

function Home() {
  const artworks = useLoaderData() as Artwork[];
  return (
    <section>
      <div className="container">
        {artworks.map((artwork: Artwork) => (
          <Link
            key={artwork.id}
            to={`/artwork-page/${artwork.id}`}
            className="thumbnail-link"
          >
            <Thumbnail
              img={artwork.image}
              title={artwork.title}
              author={artwork.author}
              year={artwork.year}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
