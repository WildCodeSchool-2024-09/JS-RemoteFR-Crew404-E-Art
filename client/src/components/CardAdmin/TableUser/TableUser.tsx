import { Crown, Send, ThumbsUp, Trash2, UserMinus, X } from "lucide-react";
import "./TableUser.css";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { failureToast, successToast } from "../../../services/toasts";

type User = {
  id: number;
  name: string;
  email: string;
  isArtist: boolean;
  created_at: string;
  role_id: number;
};

function TableUser({ users }: { users: User[] }) {
  const [request, setRequest] = useState<{ user_id: number }[]>([]);
  const [usersList, setUsersList] = useState(users);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await api.get("/api/request");
        setRequest(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRequest();
  }, []);

  const handleAcceptRequest = async (id: number) => {
    try {
      await api.put(`/api/request/${id}`);

      // Supprime la requête de la liste
      setRequest(request.filter((req) => req.user_id !== id));

      // Met à jour le rôle de l'utilisateur dans usersList
      setUsersList((prevUsers) =>
        prevUsers.map(
          (user) => (user.id === id ? { ...user, role_id: 3 } : user), // 3 = Artist
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
        await api.delete(`/api/request/${id}?q=users`);
        const arrayWithoutUserId = usersList.filter((user) => user.id !== id);
        setUsersList(arrayWithoutUserId);
        successToast("Utilisateur bien supprimé !");
      } else {
        alert("Action annulée.");
      }
    } catch (error) {
      failureToast("Oups, une erreur est survenue");
      console.error(error);
    }
  };

  const handleDowngradeRole = async (id: number) => {
    try {
      if (
        confirm("Êtes-vous sûr de vouloir modifier le role de l'utilisateur ?")
      ) {
        await api.put(`/api/admin/${id}`);
        successToast("Le role bien modifier !");
        // Met à jour le rôle de l'utilisateur dans usersList
        setUsersList((prevUsers) =>
          prevUsers.map(
            (user) => (user.id === id ? { ...user, role_id: 2 } : user), // 2 = User
          ),
        );
      } else {
        alert("Action annulée.");
      }
    } catch (error) {
      failureToast("Oups, une erreur est survenue");
      console.error(error);
    }
  };

  return (
    <table className="users-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Created At</th>
          <th>Is Artist</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {usersList.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{new Date(user.created_at).toLocaleDateString()}</td>
            <td>
              {/* Vérifie d'abord s'il y a une requête */}
              {request.some((req) => req.user_id === user.id) ? (
                <button
                  type="button"
                  className="request tooltip"
                  onClick={() => handleAcceptRequest(user.id)}
                >
                  <Send size={24} />
                  <span className="tooltiptext">Request</span>
                </button>
              ) : user.role_id === 1 ? (
                <div className="admin tooltip">
                  <Crown size={24} />
                  <span className="tooltiptext">Admin</span>
                </div>
              ) : user.role_id === 2 ? (
                <div className="user tooltip">
                  <X size={24} />
                  <span className="tooltiptext">User</span>
                </div>
              ) : (
                <div className="artist tooltip">
                  <ThumbsUp size={24} />
                  <span className="tooltiptext">Artist</span>
                </div>
              )}
            </td>
            <td className="actions">
              <button
                type="button"
                className="edit"
                onClick={() => handleDowngradeRole(user.id)}
              >
                <UserMinus size={24} />
              </button>
              <button
                type="button"
                className="delete"
                onClick={() => handleDelete(user.id)}
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

export default TableUser;
