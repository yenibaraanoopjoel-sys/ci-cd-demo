const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Demo Running 🚀");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));