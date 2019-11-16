const express = require("express");
const cors = require("cors");

const routes = require("./routes");

app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "ok" });
});
app.use("/", routes);

PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
