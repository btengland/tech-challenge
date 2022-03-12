require("dotenv").config();
const express = require("express");
const massive = require("massive");
const path = require("path");

const app = express();
const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;
const paragraph = require("./controllers/paragraphController");
const title = require("./controllers/titleController");

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((db) => {
  app.set("db", db);
  console.log("Connected to db");
});

title.post("/api/title/", apt.addTitle);
title.get("/api/title/", apt.getTitle);

paragraph.post("/api/paragraph/", apt.addParagraph);
paragraph.get("/api/paragraph/", apt.getParagraph);

app.use(express.static(`${__dirname}/../build`));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(SERVER_PORT, () => console.log(`Connected on Port ${SERVER_PORT}`));
