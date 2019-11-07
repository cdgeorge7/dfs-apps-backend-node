const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.json({ msg: "ok" });
});

PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
