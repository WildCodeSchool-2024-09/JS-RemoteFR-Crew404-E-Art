import { Check, Pencil, Trash2, X } from "lucide-react";
import type { Oeuvre } from "../../../types/Types";
import "./TableArtwork.css";
import { useState } from "react";
import { api } from "../../../services/api";
import { failureToast, successToast } from "../../../services/toasts";

function TableArtwork({ artworks }: { artworks: Oeuvre[] }) {
  const [artworksAdmin, setArtworksAdmin] = useState<Oeuvre[]>(artworks);
  const [editingArtworkId, setEditingArtworkId] = useState<number | null>(null);
  const [editedArtwork, setEditedArtwork] = useState<Oeuvre | null>(null);

  // Supprimer une œuvre
  const handleDelete = async (id: number) => {
    try {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        await api.delete(`/api/admin/${id}?q=oeuvres`);

        setArtworksAdmin((prevArtworks) =>
          prevArtworks.filter((artwork) => artwork.id !== id),
        );
        successToast("L'œuvre a bien été supprimée.");
      }
    } catch (error) {
      failureToast("Oups, une erreur est survenue.");
      console.error(error);
    }
  };

  // Activer le mode édition
  const handleEditClick = (artwork: Oeuvre) => {
    setEditingArtworkId(artwork.id);
    setEditedArtwork({ ...artwork });
  };

  // Annuler l'édition
  const handleCancelEdit = () => {
    setEditingArtworkId(null);
    setEditedArtwork(null);
  };

  // Mettre à jour les valeurs du formulaire en temps réel
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedArtwork) {
      setEditedArtwork({
        ...editedArtwork,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Sauvegarder les modifications
  const handleSaveEdit = async () => {
    if (!editedArtwork) return;

    try {
      await api.put(`/api/admin/oeuvre/${editedArtwork.id}`, editedArtwork);

      setArtworksAdmin((prevArtworks) =>
        prevArtworks.map((artwork) =>
          artwork.id === editedArtwork.id ? editedArtwork : artwork,
        ),
      );

      successToast("Modification enregistrée !");
      setEditingArtworkId(null);
      setEditedArtwork(null);
    } catch (error) {
      failureToast("Oups, une erreur est survenue.");
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
            <td>
              {editingArtworkId === artwork.id ? (
                <input
                  type="text"
                  name="title"
                  value={editedArtwork?.title || ""}
                  onChange={handleInputChange}
                />
              ) : (
                artwork.title
              )}
            </td>
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
            <td>
              {editingArtworkId === artwork.id ? (
                <input
                  type="number"
                  name="year"
                  value={editedArtwork?.year || ""}
                  onChange={handleInputChange}
                />
              ) : (
                artwork.year
              )}
            </td>
            <td className="actions">
              {editingArtworkId === artwork.id ? (
                <>
                  <button
                    type="button"
                    className="save"
                    onClick={handleSaveEdit}
                  >
                    <Check size={24} />
                  </button>
                  <button
                    type="button"
                    className="cancel"
                    onClick={handleCancelEdit}
                  >
                    <X size={24} />
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="edit"
                    onClick={() => handleEditClick(artwork)}
                  >
                    <Pencil size={24} />
                  </button>
                  <button
                    type="button"
                    className="delete"
                    onClick={() => handleDelete(artwork.id)}
                  >
                    <Trash2 size={24} />
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableArtwork;
