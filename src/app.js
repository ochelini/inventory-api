const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.get("/inventory", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Laptop",
      quantity: 25,
    },
    {
      id: 2,
      name: "Keyboard",
      quantity: 100,
    },
  ]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
