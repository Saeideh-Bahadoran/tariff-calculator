const express = require("express");
const PORT = 5005;
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);
module.exports = app;
