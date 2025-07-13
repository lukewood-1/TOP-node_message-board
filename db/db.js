import { Pool } from "pg";

const db = new Pool({
  connectionString: `postgres://${process.env.NAME}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.PATH}`
});

export default db