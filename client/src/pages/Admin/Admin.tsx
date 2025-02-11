import { useLoaderData } from "react-router-dom";
import CardAdmin from "../../components/CardAdmin/CardAdmin";
import type { Oeuvre, User } from "../../types/Types";
import "./Admin.css";

function Admin() {
  const adminInfo = useLoaderData() as { oeuvres: Oeuvre[]; users: User[] };

  return (
    <section>
      <h1 className="admin-title">Admin Dashboard</h1>
      <CardAdmin title="Artworks" item="artwork" data={adminInfo.oeuvres} />
      <CardAdmin title="Users" item="user" data={adminInfo.users} />
    </section>
  );
}

export default Admin;
