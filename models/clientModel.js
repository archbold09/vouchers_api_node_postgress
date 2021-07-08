const { connectDB } = require('../config/db/postgress');

class ClientModel {
  async listClients() {
    try {
      const result = await connectDB.query(
        `
          SELECT *
          FROM clients
        `
      );
      return result.rows;
    } catch (error) {
      return [];
    }
  }

  async get(data) {
    try {
      const result = await connectDB.query(
        `
          SELECT *
          FROM clients
          WHERE id = $1 
        `,
        [data.id]
      );
      return result.rows;
    } catch (error) {
      return [];
    }
  }

  async add(data) {
    try {
      const result = await connectDB.query(
        `
        INSERT INTO clients  (
            "name",
            "lastname",
            "number_document",
            "state"
          ) 
          VALUES ($1,$2,$3,$4)
        `,
        [data.name, data.lastname, data.documentNumber, data.state]
      );

      return result;
    } catch (error) {
      return error;
    }
  }

  async edit(data) {
    try {
      const response = await connectDB.query(
        `
        UPDATE clients
        SET
        name = $2,
        "lastname" = $3,
        "number_document"= $4,
        state = $5
        WHERE id = $1 

        `,
        [data.id, data.name, data.lastname, data.documentNumber, data.state]
      );

      return response;
    } catch (error) {
      return error;
    }
  }

  async delete(data) {
    try {
      const result = await connectDB.query(
        `UPDATE clients
        SET
        "state" = $2
        WHERE id = $1
        `,
        [data.id, data.state]
      );
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = ClientModel;
