const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const router = express.Router();
const jwt = require("jsonwebtoken");

app.use(cors());

const auth = (req, res, next) => {
  const authorization = req.headers.authorization;
};

app.use("/api", auth, router);

router.get("/get-cpf", (req, res) => {
  res.send("meu cpf!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
