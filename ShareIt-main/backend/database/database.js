const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    const db_string = process.env.DB_STRING;
    mongoose
      .connect(db_string)
      .then(() => {
        console.log("[*] Connection to DB successful");
      })
      .catch((err) => {
        console.error("[!] Error connecting to DB: ", err);
      });
  }
}

module.exports = new Database();
