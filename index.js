const express = require("express");

const databaseConnection = require("./db");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

databaseConnection();

app.use("/api/v1", require("./routes"));

app.use((req, res) => {
  res.status(404).json({
    sucess: "false",
    message: "api not found",
  });
});

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
