import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { api } from "../../services/api";
import { failureToast, infoToast, successToast } from "../../services/toasts";
import "./Profil.css";
import { useAuth } from "../../context/AuthContext";

function Profil() {
  const { user } = useAuth();
  const [request, setRequest] = useState<{ user_id: number } | null>(null);
  const [updateUser, setUpdateUser] = useState({
    name: user?.name,
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await api.get("/api/request");

        // Je vais rechercher dans min tableau de requêtes
        // Si mon user_id est égal à l'id de l'utilisateur connecté

        const userRequest = response.data.find(
          (req: { user_id: number }) => req.user_id === user?.id,
        );

        setRequest(userRequest);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRequest();
  }, [user?.id]);

  const verifyPassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      failureToast("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateUser((prevUser) => {
      if (!prevUser) return prevUser;
      return { ...prevUser, [name]: value };
    });
  };

  const hadleSendRequest = async () => {
    try {
      await api.post("/api/request");
      successToast("La requête a été envoyée avec succès");
    } catch (error) {
      console.error(error);
      infoToast("Tu l'as déjà envoyée, patiente un peu");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submitter = (e.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement;

    if (submitter.classList.contains("invitation-btn")) {
      // Logique pour "Invitation request"
      await hadleSendRequest();
    } else if (submitter.classList.contains("update-btn")) {
      // Logique pour "Update profil"
      const { password, confirm_password } = updateUser;
      if (password && !verifyPassword(password, confirm_password)) return;
      successToast("Profil mis à jour avec succès");
    }
  };

  return (
    <section className="profil">
      <h1 className="profil_title">Profil</h1>
      <form className="profil_form" onSubmit={handleSubmit}>
        <div>
          <label className="label_profil" htmlFor="name">
            Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={updateUser.name}
            onChange={handleChange}
            checked
            className="profil_input"
          />
        </div>
        <br />
        <div>
          <label className="label_profil" htmlFor="email">
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={user?.email}
            className="profil_input"
            disabled
          />
        </div>
        <br />
        <div className="password_container">
          <div>
            <label className="label_password" htmlFor="password">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="************"
              className="password_input"
              value={updateUser.password}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label className="label_profil" htmlFor="confirm_password">
              Confirm Password
            </label>
            <br />
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="************"
              className="password_input"
              value={updateUser.confirm_password}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="profil_button">
          <span>I'm an artist</span>
          {
            // Si l'utilisateur a déjà envoyé une requête
            request ? (
              <span className="request_sent">
                <Button
                  name="The request has been sent: ⏳"
                  type="button"
                  ownStyle="invitation-btn"
                />
              </span>
            ) : (
              <div>
                <Button
                  name="Invitation request"
                  type="submit"
                  ownStyle="invitation-btn"
                />
              </div>
            )
          }

          <div className="profil_button_update">
            <Button name="Update profil" type="submit" ownStyle="update-btn" />
          </div>
        </div>
      </form>
    </section>
  );
}

export default Profil;
