import type { Oeuvre, User } from "../../types/Types";
import TableArtwork from "./TableArtwork/TableArtwork";
import TableUser from "./TableUser/TableUser";
import "./CardAdmin.css";
function CardAdmin({
  title,
  item,
  data,
}: {
  title: string;
  item: string;
  data: Oeuvre[] | User[];
}) {
  return (
    <section className="card-admin">
      <h1>{title}</h1>
      {item === "user" ? (
        <TableUser users={data as User[]} />
      ) : (
        <TableArtwork artworks={data as Oeuvre[]} />
      )}
    </section>
  );
}

export default CardAdmin;
