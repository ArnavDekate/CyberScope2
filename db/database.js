// db/database.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function saveAlerts(alerts) {
  const client = await pool.connect();
  try {
    for (let alert of alerts) {
      await client.query(
        `INSERT INTO alerts (title, date, link) VALUES ($1, $2, $3)
         ON CONFLICT (title) DO NOTHING`,
        [alert.title, alert.date, alert.link]
      );
    }
  } finally {
    client.release();
  }
}

module.exports = saveAlerts;
