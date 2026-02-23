const express = require("express");
const cors = require("cors"); // 4.5k (gzipped: 1.9k)

const app = express();

app.use(cors());

app.get("/api/products/:id", (req, res) => {
  const product = {
    id: req.params.id,
    title: `procust title ${req.params.id}`,
    description: `products description ${req.params.id}`
  };
  res.send(product);
});

app.listen("3000", () => {
  console.log("Server listening to port 3000");
});

// node node-main.js