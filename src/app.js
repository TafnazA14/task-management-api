const express = require("express");
const cors = require("cors");
const rateLimiter = require("./middleware/rateLimiter");
const errorHandler = require("./middleware/errorHandler");
const routes = require("./routes/v1/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use("/api/v1", routes);

app.use(errorHandler);

module.exports = app;