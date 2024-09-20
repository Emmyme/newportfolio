const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let db
;(async () => {
  db = await sqlite.open({
    driver: sqlite3.Database,
    filename: 'messages.sqlite'
  })

  await db.run('PRAGMA foreign_keys = ON')
})()

app.post('/send_message', async (request, response) => {

  let email = request.body.email;
  let message = request.body.message;

  const sql = `INSERT INTO messages (email, message) VALUES (?, ?)`;
  db.run(sql, [email, message]);
  response.status(201).send()
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Ready!');
});