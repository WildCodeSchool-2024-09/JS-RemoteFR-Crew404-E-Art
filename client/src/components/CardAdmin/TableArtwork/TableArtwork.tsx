import { Pencil, Trash2 } from "lucide-react";
import type { Oeuvre } from "../../../types/Types";
import "./TableArtwork.css";
import { useState } from "react";
import { api } from "../../../services/api";
import { failureToast, successToast } from "../../../services/toasts";

function TableArtwork({ artworks }: { artworks: Oeuvre[] }) {
  // Je copie le state de mon tableau d'oeuvres
  const [artworksAdmin, setArtworksAdmin] = useState<Oeuvre[]>(artworks);
  const handleDelete = async (id: number) => {
    try {
      // J'utilise ma route API pour delete mon oeuvre
      api.delete(`/api/admin/${id}?q=oeuvres`);

      /**
       * Ensuite, grâce à la méthode filter, je crée un nouveau tableau
       * sans mon oeuvre supprimée.
       */
      const newArtworks: Oeuvre[] = artworksAdmin.filter(
        (artwork: Oeuvre) => artwork.id !== id,
      );

      // Je mets à jour mon state avec mon nouveau tableau
      setArtworksAdmin(newArtworks);
      successToast("L'oeuvre est bien supprimé");
    } catch (error) {
      failureToast("Oups, une erreur est survenu");
      console.error(error);
    }
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
        {artworksAdmin.map((artwork) => (
          <tr key={artwork.id}>
            <td>{artwork.title}</td>
            <td>{artwork.author || "Unknown"}</td>
            <td>
              {artwork.image ? (
                <img
                  src={`${
                    import.meta.env.VITE_API_URL
                  }/uploads/${artwork.image}`}
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
