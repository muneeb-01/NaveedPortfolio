const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const dbgr = require("debug")("development:app");
require("./src/config/mongoose-connection");
const AdminRoute = require("./src/Routes/AdminRoute");

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["POST", "PUT", "PATCH", "DELETE", "GET"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/admin", AdminRoute);

const server = app.listen(PORT, () => {
  dbgr(`Listening on http://localhost:${PORT}`);
});
