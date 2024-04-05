const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const sequelizeConfig = require("./database/sequelize.config");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(routes);

sequelizeConfig.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected.");
    app.listen(3001, () => {
      console.log("Server is running!");
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
