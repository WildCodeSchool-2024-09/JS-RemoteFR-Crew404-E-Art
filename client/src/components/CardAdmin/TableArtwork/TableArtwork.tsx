import { Pencil, Trash2 } from "lucide-react";
import type { Oeuvre } from "../../../types/Types";
import "./TableArtwork.css";

function TableArtwork({ artworks }: { artworks: Oeuvre[] }) {
  return (
    <table className="artworks-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Image</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {artworks.map((artwork) => (
          <tr key={artwork.id}>
            <td>{artwork.title}</td>
            <td>{artwork.author || "Unknown"}</td>
            <td>
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${artwork.image}`}
                className="img-fluid"
                alt={artwork.title}
              />
            </td>
            <td>{artwork.year}</td>
            <td className="actions">
              <button type="button" className="edit">
                <Pencil size={24} />
              </button>
              <button type="button" className="delete">
                <Trash2 size={24} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableArtwork;
