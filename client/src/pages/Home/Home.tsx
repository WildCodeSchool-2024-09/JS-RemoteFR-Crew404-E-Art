import Thumbnail from "../../components/Thumbnail/Thumbnail";
import "./Home.css";
import { Link } from "react-router-dom";
import fakeArtworks from "../../services/fakeArtworks";

function Home() {
  return (
    <section>
      <div className="container">
        {fakeArtworks.map((artwork) => (
          <Link
            key={artwork.id}
            to={`/artwork-page/${artwork.id}`}
            className="thumbnail-link"
          >
            <Thumbnail
              img={artwork.img}
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
