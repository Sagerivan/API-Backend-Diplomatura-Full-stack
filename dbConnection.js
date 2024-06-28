import mysql2 from "mysql2/promise";
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "salon_eventos",
};
export const db = await mysql2.createConnection(dbConfig);
