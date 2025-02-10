import { Crown, Pencil, Send, ThumbsUp, Trash2, X } from "lucide-react";
import "./TableUser.css";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

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
      setRequest(request.filter((req) => req.user_id !== id));
    } catch (error) {
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
        {users.map((user) => (
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
              ) : user.role_id === 3 ? (
                <div className="artist tooltip">
                  <ThumbsUp size={24} />
                  <span className="tooltiptext">Artist</span>
                </div>
              ) : (
                <div className="user tooltip">
                  <X size={24} />
                  <span className="tooltiptext">User</span>
                </div>
              )}
            </td>
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

export default TableUser;
