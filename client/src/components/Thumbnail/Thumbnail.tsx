import "./Thumbnail.css";

type ThumbnailProps = {
  img: string;
  title: string;
  author: string;
  year: number;
};

function Thumbnail({ img, title, author, year }: ThumbnailProps) {
  return (
    <section className="thumbnail">
      <div className="overlay">
        <img src={img} alt={`${title}-${author}`} />
      </div>
      <div className="info-thumbnail">
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{year}</p>
      </div>
    </section>
  );
}

export default Thumbnail;
