const { connectDB } = require('../config/db/postgress');

class VoucherModel {
  async listVouchers() {
    try {
      const result = await connectDB.query(
        `
          SELECT *
          FROM vouchers
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
          FROM vouchers
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
        INSERT INTO vouchers  (
            "code_voucher" ,
            "discount_percent" ,
            "initDate" ,
            "endDate",
            "state"
          ) 
          VALUES ($1,$2,$3,$4,$5)
        `,
        [data.codeVoucher, data.discountPercent, data.initDate, data.endDate, data.state]
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
        UPDATE vouchers
        SET
        discount_percent = $2,
        "initDate" = $3,
        "endDate"= $4,
        state = $5
        WHERE id = $1 

        `,
        [data.id, data.discountPercent, data.initDate, data.endDate, data.state]
      );

      return response;
    } catch (error) {
      return error;
    }
  }

  async delete(data) {
    try {
      const result = await connectDB.query(
        `UPDATE vouchers
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

module.exports = VoucherModel;
