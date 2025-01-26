import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Oeuvre = {
  id: number;
  image: string;
  title: string;
  dimension: string;
  description: string;
  year: number;
  medium: string;
  user_id: number;
};

class oeuvreRepository {
  // The C of CRUD - Create operation

  async create(oeuvre: Omit<Oeuvre, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into oeuvre (image, title, dimension, description, year, medium, user_id) values (?, ?, ?,?,?,?,2)",
      [
        oeuvre.image,
        oeuvre.title,
        oeuvre.dimension,
        oeuvre.description,
        oeuvre.year,
        oeuvre.medium,
        oeuvre.user_id,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(image: string) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from oeuvre where image = ?",
      [image],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Oeuvre;
  }
}

export default new oeuvreRepository();
