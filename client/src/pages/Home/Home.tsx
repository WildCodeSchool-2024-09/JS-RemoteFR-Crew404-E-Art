import Thumbnail from "../../components/Thumbnail/Thumbnail";
import "./Home.css";

const fakeArtworks = [
  {
    id: 1,
    img: "https://picsum.photos/300?random=1",
    title: "Artwork 1",
    author: "Artist 1",
    year: 2021,
  },
  {
    id: 2,
    img: "https://picsum.photos/1200?random=2",
    title: "Artwork 2",
    author: "Artist 1",
    year: 2024,
  },
  {
    id: 3,
    img: "https://picsum.photos/780?random=3",
    title: "Artwork 3",
    author: "Artist 2",
    year: 2023,
  },
  {
    id: 4,
    img: "https://picsum.photos/300?random=4",
    title: "Artwork 1",
    author: "Artist 1",
    year: 2021,
  },
  {
    id: 5,
    img: "https://picsum.photos/1200?random=5",
    title: "Artwork 2",
    author: "Artist 1",
    year: 2024,
  },
  {
    id: 6,
    img: "https://picsum.photos/780?random=6",
    title: "Artwork 3",
    author: "Artist 2",
    year: 2023,
  },
];
function Home() {
  return (
    <section>
      <div className="container">
        {fakeArtworks.map((artwork) => (
          <Thumbnail
            key={artwork.id}
            img={artwork.img}
            title={artwork.title}
            author={artwork.author}
            year={artwork.year}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
