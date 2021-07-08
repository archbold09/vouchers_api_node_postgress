const { Pool } = require('pg');

//Crear DB
const createDB = async (connectDB, dbSchema, configDB) => {
  let passdb = [dbSchema.passDB];
  let namedb = [dbSchema.nameDB];
  let userdb = [dbSchema.userDB];
  try {
    await connectDB.query(`CREATE DATABASE ${namedb[0]}`);

    await connectDB.query(
      `
        CREATE USER ${userdb[0]} WITH PASSWORD '${passdb[0]}';
        GRANT ALL PRIVILEGES ON DATABASE ${namedb[0]} to ${userdb[0]};
      `
    );

    configDB.database = namedb[0];
    const createSchema = new Pool(configDB);

    await createSchema.query(
      `
  
        -- ----------------------------
        -- User rol
        -- ----------------------------
        ALTER ROLE ${userdb[0]} WITH SUPERUSER;


        -- ----------------------------
        -- Create table Cupones
        -- ----------------------------
        CREATE TABLE "public"."vouchers" (
            "id"  serial not null,
            "code_voucher" varchar(100),
            "discount_percent" varchar(100),
            "initDate" TIMESTAMP,
            "endDate" TIMESTAMP,
            "state" bool,
            "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMPTZ NOT NULL DEFAULT current_timestamp
          );

          -- ----------------------------
          -- Primary Key structure for table vouchers
          -- ----------------------------
          
          ALTER TABLE "public"."vouchers" ADD CONSTRAINT "vouchers_pk" PRIMARY KEY ("id");

          INSERT INTO "public"."vouchers" VALUES (99, '9999', '30', '2021-07-08','2021-09-01', 't');
          INSERT INTO "public"."vouchers" VALUES (98, '9998', '20', '2021-07-10','2021-09-01', 't');
          INSERT INTO "public"."vouchers" VALUES (100, '1000', '20', '2021-07-10','2021-09-01', 't');

          CREATE OR REPLACE FUNCTION trigger_set_timestamp()
          RETURNS TRIGGER AS $$
          BEGIN
            NEW.updated_at = NOW();
            RETURN NEW;
          END;
          $$ LANGUAGE plpgsql;

          CREATE TRIGGER set_timestamp
          BEFORE UPDATE ON vouchers
          FOR EACH ROW
          EXECUTE PROCEDURE trigger_set_timestamp();  






          -- ----------------------------
          -- Create table Clientes
          -- ----------------------------
          CREATE TABLE "public"."clients" (
              "id"  serial not null,
              "name" varchar(255),
              "lastname" varchar(255),
              "number_document" varchar(255),
              "state" bool,
              "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
              "updated_at" TIMESTAMPTZ NOT NULL DEFAULT current_timestamp
            );
  
            -- ----------------------------
            -- Primary Key structure for table clients
            -- ----------------------------
            
            ALTER TABLE "public"."clients" ADD CONSTRAINT "clients_pk" PRIMARY KEY ("id");
  
            INSERT INTO "public"."clients" VALUES (100, 'Angel', 'Archbold', '123123', 't');
            INSERT INTO "public"."clients" VALUES (99, 'Angel', 'Torres', '1231234568', 't');
  
            CREATE OR REPLACE FUNCTION trigger_set_timestamp()
            RETURNS TRIGGER AS $$
            BEGIN
              NEW.updated_at = NOW();
              RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;
  
            CREATE TRIGGER set_timestamp
            BEFORE UPDATE ON clients
            FOR EACH ROW
            EXECUTE PROCEDURE trigger_set_timestamp();  



          `
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = { createDB };
