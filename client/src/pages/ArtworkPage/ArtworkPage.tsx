import Artwork from "../../components/Artwork/Artwork";

const sampleArtwork = [
  {
    id: 1,
    img: "https://picsum.photos/300?random=1",
    author: "Artist ",
    title: "Artwork ",
    dimension: 23 * 25,
    description: "une belle photo",
    year: 2021,
    medium: "water with sand",
  },
];

function ArtworkPage() {
  return (
    <section>
      <div className="container">
        {sampleArtwork.map((artwork) => (
          <Artwork
            key={artwork.id}
            img={artwork.img}
            author={artwork.author}
            title={artwork.title}
            dimension={artwork.dimension}
            description={artwork.description}
            year={artwork.year}
            medium={artwork.medium}
          />
        ))}
      </div>
    </section>
  );
}

export default ArtworkPage;
