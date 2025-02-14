import { Pencil, Trash2 } from "lucide-react";
import type { Oeuvre } from "../../../types/Types";
import "./TableArtwork.css";
import { useState } from "react";
import { api } from "../../../services/api";

function TableArtwork({ artworks }: { artworks: Oeuvre[] }) {
  const [artworkList, setArtworkList] = useState(artworks);

  const handleDelete = (id: number) => {
    setArtworkList((prevArtworks) =>
      prevArtworks.map((artwork) =>
        artwork.id === id
          ? { ...artwork, title: "", author: "", image: "", year: 0 }
          : artwork,
      ),
    );
    const response = api.post("/api/admin", artworkList);
    return response;
  };

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
        {artworkList.map((artwork) => (
          <tr key={artwork.id}>
            <td>{artwork.title}</td>
            <td>{artwork.author || "Unknown"}</td>
            <td>
              {artwork.image ? (
                <img
                  src={`${import.meta.env.VITE_API_URL}/uploads/${artwork.image}`}
                  className="img-fluid"
                  alt={artwork.title}
                />
              ) : (
                ""
              )}
            </td>
            <td>{artwork.year}</td>
            <td className="actions">
              <button type="button" className="edit">
                <Pencil size={24} />
              </button>
              <button
                type="button"
                className="delete"
                onClick={() => handleDelete(artwork.id)}
              >
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
