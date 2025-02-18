import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role_id: number;
};

class UserRepository {
  // read all users and roles
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT role.name as role, user.* FROM user JOIN role ON user.role_id = role.id",
    );
    return rows as User[];
  }

  // read a user by id
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE id = ?",
      [id],
    );
    return rows[0] as User;
  }

  async requestSend(id: number) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO artist_request (user_id) VALUES (?)",
      [id],
    );
    return result;
  }

  async requestAccept(id: number) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE user SET role_id = 3 WHERE id = ?",
      [id],
    );
    return result;
  }

  async requestBrowseAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM artist_request",
    );
    return rows;
  }

  async deleteRequest(id: string) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM artist_request WHERE user_id = ?",
      [id],
    );
    return result;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from user where id = ?",
      [id],
    );

    return result;
  }

  async update(user: User, role_id: number) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE user SET role_id = ? WHERE id = ?",
      [role_id, user.id],
    );
    return result.affectedRows;
  }
}
export default new UserRepository();
